const ISTQB_DATA = {
  chapters: [
    {
      id: 1,
      title: "Fundamentals of Testing",
      subtitle: "Nền tảng kiểm thử",
      time: 180,
      weight: "~26%",
      color: "#0D9488",
      icon: "🏗️",
      keywords: [
        { term: "Coverage", definition: "Mức độ đã kiểm thử so với tổng thể (vd: bao nhiêu % requirements đã có test case)" },
        { term: "Debugging", definition: "Quá trình tìm nguyên nhân và sửa defect — do developer làm, khác với testing" },
        { term: "Defect (fault/bug)", definition: "Lỗi tồn tại trong work product (code, tài liệu) chưa xảy ra failure" },
        { term: "Error (mistake)", definition: "Con người mắc sai lầm dẫn đến tạo ra defect" },
        { term: "Failure", definition: "Behavior sai lệch so với kỳ vọng khi thực thi — kết quả quan sát được" },
        { term: "Quality", definition: "Mức độ đáp ứng requirements và nhu cầu người dùng" },
        { term: "Quality Assurance (QA)", definition: "Approach process-oriented, preventive — cải tiến process để tạo ra sản phẩm tốt" },
        { term: "Root cause", definition: "Nguyên nhân gốc rễ của error (vd: thiếu training, deadline quá gấp)" },
        { term: "Test analysis", definition: "\"What to test?\" — xác định test conditions từ test basis" },
        { term: "Test basis", definition: "Tài liệu làm cơ sở để derive test cases (requirements, specs, designs, code)" },
        { term: "Test case", definition: "Tập inputs, preconditions, expected results và postconditions để verify một behavior" },
        { term: "Test completion", definition: "Hoạt động kết thúc test — report, archive, lessons learned" },
        { term: "Test condition", definition: "Aspect/feature cần test (derived từ test basis)" },
        { term: "Test control", definition: "Hành động điều chỉnh test dựa trên monitoring" },
        { term: "Test data", definition: "Data cần thiết để thực thi test cases" },
        { term: "Test design", definition: "\"How to test?\" — tạo test cases từ test conditions" },
        { term: "Test execution", definition: "Chạy test và ghi nhận kết quả" },
        { term: "Test implementation", definition: "Tạo testware thực tế (scripts, data, environment)" },
        { term: "Test monitoring", definition: "Theo dõi tiến độ so với plan" },
        { term: "Test object", definition: "Work product đang được test (ứng dụng, module, document)" },
        { term: "Test objective", definition: "Mục tiêu của testing (find defects, build confidence, etc.)" },
        { term: "Test planning", definition: "Định nghĩa approach và resources cho testing" },
        { term: "Test procedure", definition: "Sequence các test cases theo thứ tự thực hiện" },
        { term: "Test process", definition: "Tập hợp các test activities có cấu trúc" },
        { term: "Test result", definition: "Kết quả sau khi chạy test (passed/failed + actual output)" },
        { term: "Testing", definition: "Tập hợp activities discover defects và evaluate quality" },
        { term: "Testware", definition: "Tất cả work products tạo ra trong quá trình testing" },
        { term: "Traceability", definition: "Khả năng liên kết test basis ↔ testware (trace từ requirement đến test case)" },
        { term: "Validation", definition: "Kiểm tra xem system có đáp ứng nhu cầu người dùng trong thực tế không" },
        { term: "Verification", definition: "Kiểm tra xem system có đáp ứng requirements đã chỉ định không" }
      ],
      traps: [
        { title: "Testing = chỉ execute test", correct: "Testing bao gồm nhiều activities (planning, analysis, design, implementation, execution, completion), không chỉ là chạy phần mềm và check kết quả." },
        { title: "Testing = QA", correct: "Testing = product-oriented, corrective; QA = process-oriented, preventive. Chúng không giống nhau." },
        { title: "Không có lỗi = phần mềm tốt", correct: "Absence-of-defects fallacy (Principle 7) — no defects không có nghĩa là meets user needs. Phần mềm vẫn có thể thất bại dù không có defects." },
        { title: "Nhầm Error / Defect / Failure", correct: "Khi tester chạy test và thấy kết quả sai → đây là Failure (behavior sai khi execution), không phải defect hay error." },
        { title: "Debugging = Testing", correct: "Debugging là separate activity — thường do developer làm sau khi tester phát hiện failure. Không phải một phần của testing process." },
        { title: "Nhầm Validation và Verification", correct: "Verification: \"Are we building the product right?\" (theo spec). Validation: \"Are we building the right product?\" (theo user needs)." }
      ],
      questions: [
        {
          id: "ch1_q1",
          text: "Nhóm dev đã fix một defect. Tester cần làm gì tiếp theo?",
          choices: [
            { key: "A", text: "Tiếp tục test features khác" },
            { key: "B", text: "Chạy lại test case đã fail (confirmation testing) và có thể thêm regression testing" },
            { key: "C", text: "Bắt đầu root cause analysis" },
            { key: "D", text: "Cập nhật test plan" }
          ],
          correctAnswer: "B",
          explanation: "Sau khi fix: confirmation testing (verify fix) → có thể regression testing (check side effects)."
        },
        {
          id: "ch1_q2",
          text: "Tester phát hiện rằng một đoạn code lớn không bao giờ được execute. Testing principle nào áp dụng khi tester đề xuất không cần test nhánh code đó?",
          choices: [
            { key: "A", text: "Tests wear out" },
            { key: "B", text: "Defects cluster together" },
            { key: "C", text: "Exhaustive testing is impossible" },
            { key: "D", text: "Testing is context dependent" }
          ],
          correctAnswer: "C",
          explanation: "Exhaustive testing impossible → dùng risk-based approach → code không execute được → risk thấp → có thể giảm test effort."
        },
        {
          id: "ch1_q3",
          text: "Công ty áp dụng practice mới: tất cả team members (dev, business, tester) đều có thể thực hiện bất kỳ testing task nào. Đây là gì?",
          choices: [
            { key: "A", text: "Independence of testing" },
            { key: "B", text: "Whole team approach" },
            { key: "C", text: "QA process" },
            { key: "D", text: "DevOps practice" }
          ],
          correctAnswer: "B",
          explanation: "Whole team approach — xuất phát từ XP: bất kỳ team member nào có đủ knowledge/skills đều có thể làm bất kỳ task nào."
        },
        {
          id: "ch1_q4",
          text: "Principle nào nói rằng \"dù testing không tìm thấy defect, không có nghĩa là phần mềm không có lỗi\"?",
          choices: [
            { key: "A", text: "Testing is context dependent" },
            { key: "B", text: "Exhaustive testing is impossible" },
            { key: "C", text: "Testing shows the presence, not the absence of defects" },
            { key: "D", text: "Absence-of-defects fallacy" }
          ],
          correctAnswer: "C",
          explanation: "Principle 1 — Testing shows presence, not absence of defects: Testing chứng minh defects tồn tại, không thể chứng minh không có defect."
        },
        {
          id: "ch1_q5",
          text: "QA team đang cải tiến quy trình review code để ngăn chặn defects từ sớm. Hoạt động này thuộc:",
          choices: [
            { key: "A", text: "Testing (dynamic)" },
            { key: "B", text: "Debugging" },
            { key: "C", text: "Quality Assurance" },
            { key: "D", text: "Test monitoring" }
          ],
          correctAnswer: "C",
          explanation: "QA = process-oriented, preventive — cải tiến process để ngăn defects. Đây là Quality Assurance, không phải Testing."
        },
        {
          id: "ch1_q6",
          text: "Nguyên tắc nào giải thích tại sao phải liên tục cập nhật và thêm test cases mới?",
          choices: [
            { key: "A", text: "Early testing saves time and money" },
            { key: "B", text: "Tests wear out (Pesticide paradox)" },
            { key: "C", text: "Defects cluster together" },
            { key: "D", text: "Testing shows presence, not absence" }
          ],
          correctAnswer: "B",
          explanation: "Tests wear out (Principle 5 — Pesticide paradox) — test lặp lại nhiều lần sẽ mất hiệu quả phát hiện lỗi mới. Cần update và thêm test mới thường xuyên."
        }
      ]
    },
    {
      id: 2,
      title: "Testing Throughout the SDLC",
      subtitle: "Testing trong vòng đời phát triển",
      time: 130,
      weight: "~17%",
      color: "#7C3AED",
      icon: "🔄",
      keywords: [
        { term: "Acceptance testing", definition: "Test level cuối — validate system đáp ứng business needs, sẵn sàng deploy" },
        { term: "Black-box testing", definition: "Test dựa trên specification — không xem internal structure" },
        { term: "Component integration testing", definition: "Test interfaces/interactions giữa các components" },
        { term: "Component testing", definition: "Test từng component riêng lẻ (unit testing)" },
        { term: "Confirmation testing", definition: "Re-test để verify defect đã được fix" },
        { term: "Functional testing", definition: "Test functions — \"system làm được gì?\"" },
        { term: "Integration testing", definition: "Test tích hợp — component integration hoặc system integration" },
        { term: "Maintenance testing", definition: "Test sau khi deploy — cho changes, upgrades, retirement" },
        { term: "Non-functional testing", definition: "Test quality attributes — \"system hoạt động như thế nào?\"" },
        { term: "Regression testing", definition: "Test để verify changes không gây ra lỗi mới ở chỗ khác" },
        { term: "Shift left", definition: "Test sớm hơn trong SDLC" },
        { term: "System integration testing", definition: "Test interfaces giữa system và external systems/services" },
        { term: "System testing", definition: "Test toàn bộ system end-to-end" },
        { term: "Test level", definition: "Nhóm activities test được tổ chức và quản lý cùng nhau" },
        { term: "Test type", definition: "Nhóm test activities liên quan đến quality characteristics cụ thể" },
        { term: "White-box testing", definition: "Test dựa trên internal structure — code, architecture, data flows" },
        { term: "ATDD", definition: "Acceptance Test-Driven Development — tests derive từ acceptance criteria, viết trước code; customers + devs + testers cùng tham gia" },
        { term: "TDD", definition: "Test-Driven Development — viết unit test trước, code sau để pass test; Red → Green → Refactor" },
        { term: "BDD", definition: "Behavior-Driven Development — dùng natural language (Given/When/Then) để describe behavior" }
      ],
      traps: [
        { title: "Nhầm test levels và test types", correct: "System testing là test level. Test types là functional, non-functional, black-box, white-box — không phải levels." },
        { title: "Nhầm System testing và System Integration testing", correct: "System testing: test entire system (behavior, capabilities). System integration testing: test interfaces giữa system và external systems/services." },
        { title: "Ai thực hiện Acceptance testing?", correct: "Lý tưởng là intended users, không phải independent testers. Mục tiêu là validation — user biết business needs nhất." },
        { title: "TDD, ATDD, BDD là test levels hay approaches?", correct: "Chúng là development approaches (test-first), không phải test levels hay test types." },
        { title: "Nhầm Confirmation và Regression", correct: "Confirmation: verify defect đã fix (targeted). Regression: verify không có side effects (broader scope)." },
        { title: "DevOps = không cần manual testing", correct: "DevOps có automation cao nhưng manual testing — đặc biệt từ user perspective — vẫn cần thiết." },
        { title: "Shift left = bỏ testing cuối dự án", correct: "Shift left = test sớm hơn nhưng không có nghĩa bỏ testing giai đoạn sau. Shift left does not mean that testing later in the SDLC should be neglected." }
      ],
      questions: [
        {
          id: "ch2_q1",
          text: "Developer A đang viết unit tests cho một module trước khi viết code. Approach nào đang được áp dụng?",
          choices: [
            { key: "A", text: "Shift left" },
            { key: "B", text: "ATDD" },
            { key: "C", text: "TDD" },
            { key: "D", text: "BDD" }
          ],
          correctAnswer: "C",
          explanation: "TDD — tests viết trước, code viết sau để pass tests. Chu kỳ: Write test → Run (fail) → Write code → Run (pass) → Refactor."
        },
        {
          id: "ch2_q2",
          text: "Team Agile sau mỗi sprint thường họp để thảo luận: \"Cái gì hoạt động tốt? Cái gì cần cải thiện?\" Đây là gì?",
          choices: [
            { key: "A", text: "Sprint review" },
            { key: "B", text: "Retrospective" },
            { key: "C", text: "Test completion" },
            { key: "D", text: "Risk review" }
          ],
          correctAnswer: "B",
          explanation: "Retrospective — cơ chế process improvement. Meeting ở cuối iteration/project/release để review những gì thành công, chưa tốt và cách cải tiến."
        },
        {
          id: "ch2_q3",
          text: "Tester đang test toàn bộ hệ thống bao gồm end-to-end workflows, performance, và security. Đây là test level nào?",
          choices: [
            { key: "A", text: "Component testing" },
            { key: "B", text: "Component integration testing" },
            { key: "C", text: "System testing" },
            { key: "D", text: "Acceptance testing" }
          ],
          correctAnswer: "C",
          explanation: "System testing — test entire system bao gồm cả non-functional (performance, security). Thường do independent test team thực hiện."
        },
        {
          id: "ch2_q4",
          text: "Sau khi release, team phát hiện platform cũ không còn được support. Họ cần migrate system sang platform mới. Loại maintenance testing nào phù hợp nhất?",
          choices: [
            { key: "A", text: "Corrective maintenance testing" },
            { key: "B", text: "Adaptive maintenance testing" },
            { key: "C", text: "Perfective maintenance testing" },
            { key: "D", text: "Regression maintenance testing" }
          ],
          correctAnswer: "B",
          explanation: "Adaptive — thích nghi với thay đổi môi trường (platform mới, OS mới). Đây là loại maintenance testing phù hợp khi migrate sang platform mới."
        },
        {
          id: "ch2_q5",
          text: "Tester đang kiểm tra behavior của API giữa two different systems của hai công ty khác nhau. Đây là test level nào?",
          choices: [
            { key: "A", text: "System testing" },
            { key: "B", text: "Component integration testing" },
            { key: "C", text: "System integration testing" },
            { key: "D", text: "Acceptance testing" }
          ],
          correctAnswer: "C",
          explanation: "System integration testing — test interfaces với external systems. Cần test environments similar to operational environment."
        },
        {
          id: "ch2_q6",
          text: "Loại test nào dựa trên việc kiểm tra \"how well\" system hoạt động thay vì \"what\" nó làm?",
          choices: [
            { key: "A", text: "Functional testing" },
            { key: "B", text: "Non-functional testing" },
            { key: "C", text: "Black-box testing" },
            { key: "D", text: "White-box testing" }
          ],
          correctAnswer: "B",
          explanation: "Non-functional testing — evaluates quality attributes (how well), không phải functions (what). Bao gồm performance, security, usability, reliability, etc."
        },
        {
          id: "ch2_q7",
          text: "Sau khi fix bug liên quan đến login, QA chạy lại các test cases cho toàn bộ registration/authentication module. Đây là gì?",
          choices: [
            { key: "A", text: "Confirmation testing" },
            { key: "B", text: "Regression testing" },
            { key: "C", text: "System integration testing" },
            { key: "D", text: "Acceptance testing" }
          ],
          correctAnswer: "B",
          explanation: "Regression testing — verify fix không gây side effects cho module rộng hơn. Scope rộng hơn confirmation testing (chỉ verify fix cụ thể)."
        },
        {
          id: "ch2_q8",
          text: "Good testing practice nào áp dụng cho tất cả SDLC models?",
          choices: [
            { key: "A", text: "Test automation phải được thiết lập trong sprint đầu tiên" },
            { key: "B", text: "Testers phải review work products khi có bản nháp" },
            { key: "C", text: "System testing phải chạy trước component testing" },
            { key: "D", text: "Acceptance testing phải do end users thực hiện" }
          ],
          correctAnswer: "B",
          explanation: "Review work products khi draft available là good practice áp dụng mọi SDLC — đây là 1 trong 4 universal good testing practices."
        }
      ]
    },
    {
      id: 3,
      title: "Static Testing",
      subtitle: "Kiểm thử tĩnh",
      time: 80,
      weight: "~11%",
      color: "#DC2626",
      icon: "📋",
      keywords: [
        { term: "Anomaly", definition: "Bất kỳ condition nào khác biệt với expectation — có thể là defect hoặc không" },
        { term: "Dynamic testing", definition: "Test thông qua execution của code" },
        { term: "Formal review", definition: "Review có quy trình cụ thể, documented output bắt buộc (inspection)" },
        { term: "Informal review", definition: "Review không có quy trình và documented output bắt buộc" },
        { term: "Inspection", definition: "Review type formal nhất — có moderator, checklist, metrics. Author KHÔNG là review leader." },
        { term: "Review", definition: "Đánh giá work product bởi một hoặc nhiều người" },
        { term: "Static analysis", definition: "Công cụ tự động đánh giá code/models mà không execute" },
        { term: "Static testing", definition: "Đánh giá work product không cần execute — bao gồm reviews + static analysis" },
        { term: "Technical review", definition: "Review bởi technical experts dưới sự dẫn dắt của moderator (không phải author)" },
        { term: "Walkthrough", definition: "Review được dẫn dắt bởi author" }
      ],
      traps: [
        { title: "Không phải mọi anomaly đều là defect", correct: "Anomaly = bất kỳ condition nào khác expectation — có thể là defect, false positive, change request, question. Cần Communication and Analysis để xác định." },
        { title: "Nhầm Walkthrough và Technical Review", correct: "Walkthrough: led by Author. Technical Review: led by Moderator (not author), có technical experts. Key differentiator: who leads." },
        { title: "Author trong Inspection", correct: "Trong Inspection, author KHÔNG là review leader. Review leader là trained leader khác. (Trong Walkthrough thì author mới là leader.)" },
        { title: "Static testing chỉ là code review", correct: "Static testing bao gồm review của bất kỳ work product nào — requirements docs, test plans, test cases, user stories, etc." },
        { title: "Static analysis = static testing", correct: "Static analysis là một phần của static testing (tool-based). Static testing còn bao gồm manual reviews." },
        { title: "Reviews luôn tốn kém hơn không review", correct: "Reviews có thể tốn kém để implement, nhưng overall project cost thấp hơn vì giảm được cost fix defects muộn." },
        { title: "Dynamic testing có thể replace static testing", correct: "Một số defect chỉ có thể tìm bằng static (unreachable code, non-executable work product defects). Hai loại bổ sung nhau, không thay thế." }
      ],
      questions: [
        {
          id: "ch3_q1",
          text: "Reviewer phát hiện một đoạn code không bao giờ được chạy. Điều này được phát hiện bằng cách nào?",
          choices: [
            { key: "A", text: "Dynamic testing" },
            { key: "B", text: "Static analysis" },
            { key: "C", text: "Acceptance testing" },
            { key: "D", text: "Regression testing" }
          ],
          correctAnswer: "B",
          explanation: "Static analysis — unreachable code được phát hiện bằng static analysis, không cần chạy code. Đây là loại defect chỉ tìm được bằng static testing."
        },
        {
          id: "ch3_q2",
          text: "Trong một review meeting, participants quyết định một anomaly không thực sự là defect mà là false positive. Activity nào đang diễn ra?",
          choices: [
            { key: "A", text: "Individual review" },
            { key: "B", text: "Planning" },
            { key: "C", text: "Communication and analysis" },
            { key: "D", text: "Fixing and reporting" }
          ],
          correctAnswer: "C",
          explanation: "Communication and analysis — phân tích và discuss anomalies để xác định status. Không phải tất cả anomalies đều là defects."
        },
        {
          id: "ch3_q3",
          text: "Author đang dẫn một session mà team cùng đọc qua requirements doc, thảo luận và ghi nhận các issues. Đây là review type nào?",
          choices: [
            { key: "A", text: "Inspection" },
            { key: "B", text: "Technical review" },
            { key: "C", text: "Walkthrough" },
            { key: "D", text: "Informal review" }
          ],
          correctAnswer: "C",
          explanation: "Walkthrough — được dẫn dắt bởi author. Author walk participants qua work product."
        },
        {
          id: "ch3_q4",
          text: "Review type nào yêu cầu participants phải prepare trước và thu thập metrics?",
          choices: [
            { key: "A", text: "Walkthrough" },
            { key: "B", text: "Informal review" },
            { key: "C", text: "Technical review" },
            { key: "D", text: "Inspection" }
          ],
          correctAnswer: "D",
          explanation: "Inspection — mandatory preparation, metrics collected, most formal. Đây là review type formal nhất với mục tiêu tìm tối đa anomalies."
        },
        {
          id: "ch3_q5",
          text: "Cái nào là ví dụ của defect dễ phát hiện bằng static testing nhưng khó phát hiện bằng dynamic testing?",
          choices: [
            { key: "A", text: "Memory leak khi xử lý 1 triệu transactions" },
            { key: "B", text: "Performance degradation dưới load cao" },
            { key: "C", text: "Buffer overflow vulnerability trong code" },
            { key: "D", text: "UI không hiển thị đúng trên mobile" }
          ],
          correctAnswer: "C",
          explanation: "Security vulnerabilities như buffer overflow — có thể detect bằng static analysis. A và B cần dynamic test với load. D cần visual inspection/dynamic test."
        },
        {
          id: "ch3_q6",
          text: "Success factor nào sau đây là QUAN TRỌNG NHẤT để đảm bảo reviewers nói thật trong review?",
          choices: [
            { key: "A", text: "Collecting metrics về số anomalies tìm được" },
            { key: "B", text: "Đảm bảo evaluation của participants không phải là objective" },
            { key: "C", text: "Sử dụng inspection (most formal review type)" },
            { key: "D", text: "Author tham gia với role là scribe" }
          ],
          correctAnswer: "B",
          explanation: "\"Evaluation of participants should never be an objective\" — tạo môi trường an toàn để nói thật. Nếu review được dùng để đánh giá performance thì reviewers sẽ sợ nói thật."
        },
        {
          id: "ch3_q7",
          text: "Ai là người phù hợp nhất để là Review Leader trong Inspection?",
          choices: [
            { key: "A", text: "Author của work product" },
            { key: "B", text: "Project Manager" },
            { key: "C", text: "Trained review leader (khác với author)" },
            { key: "D", text: "Scribe" }
          ],
          correctAnswer: "C",
          explanation: "Trong Inspection, author không được là review leader. Review leader phải là trained leader khác với author."
        }
      ]
    },
    {
      id: 4,
      title: "Test Analysis and Design",
      subtitle: "Phân tích và Thiết kế kiểm thử",
      time: 390,
      weight: "~36%",
      color: "#D97706",
      icon: "🧪",
      keywords: [
        { term: "Acceptance criteria", definition: "Conditions mà implementation phải satisfy để được stakeholders accept" },
        { term: "ATDD", definition: "Acceptance Test-Driven Development — tests derive từ acceptance criteria, viết trước code; customers, developers, testers cùng tham gia" },
        { term: "Black-box test technique", definition: "Technique dựa trên specified behavior — không biết internal structure; test cases từ documentation" },
        { term: "Boundary Value Analysis (BVA)", definition: "Test tập trung vào boundary values (min/max) của ordered partitions — nơi developer dễ mắc sai nhất" },
        { term: "Branch coverage", definition: "Percentage of branches (true/false outcomes of decisions) được exercise bởi test suite" },
        { term: "Checklist-based testing", definition: "Experience-based technique trong đó tester design, implement, execute tests để cover conditions từ checklist" },
        { term: "Coverage item", definition: "Attribute hoặc combination of attributes derived từ test condition — cần được exercised bởi test cases" },
        { term: "Decision table testing", definition: "Black-box technique dùng khi requirements chứa combinations của conditions — systematic approach để identify mọi combinations" },
        { term: "Equivalence Partitioning (EP)", definition: "Black-box technique chia data thành partitions — mọi phần tử trong cùng partition được xử lý giống nhau; chỉ cần test 1 giá trị đại diện" },
        { term: "Error guessing", definition: "Experience-based technique: anticipate errors, defects, failures dựa trên knowledge và experience của tester" },
        { term: "Experience-based test technique", definition: "Technique dựa trên knowledge và experience của tester — bổ sung cho black-box và white-box" },
        { term: "Exploratory testing", definition: "Tests được simultaneously designed, executed, và evaluated trong khi tester học về test object" },
        { term: "State transition testing", definition: "Black-box technique khi system behavior phụ thuộc vào current state và events/inputs; dùng state diagram/table" },
        { term: "Statement coverage", definition: "Percentage of executable statements được exercise bởi test suite" },
        { term: "Test technique", definition: "Procedure hỗ trợ tester trong test analysis (what to test) và test design (how to test)" },
        { term: "White-box test technique", definition: "Technique dựa trên internal structure (code, architecture) — test cases phụ thuộc implementation" },
        { term: "User story (3 C's)", definition: "Card (written), Conversation (discussed), Confirmation (acceptance criteria) — format: As a [user], I want [goal], so that [benefit]" },
        { term: "INVEST criteria", definition: "Independent, Negotiable, Valuable, Estimable, Small, Testable — tiêu chí để viết user story tốt" }
      ],
      traps: [
        { title: "Nhầm 2-value vs 3-value BVA", correct: "2-value: boundary + 1 neighbor. 3-value: boundary + 2 neighbors (cả 2 phía). 3-value mạnh hơn — detect defects mà 2-value bỏ sót." },
        { title: "EP với invalid partitions", correct: "Phải test cả valid lẫn invalid partitions (100% coverage = tất cả partitions). Không chỉ test valid partitions." },
        { title: "Branch coverage = Statement coverage", correct: "Branch 100% implies Statement 100%, nhưng Statement 100% KHÔNG implies Branch 100%. Quan hệ một chiều (subsumption)." },
        { title: "White-box detect omission defects", correct: "White-box KHÔNG phát hiện defects of omission (feature bị bỏ sót hoàn toàn). Cần black-box cho điều này." },
        { title: "Decision table — N/A vs \"—\"", correct: "\"—\": condition irrelevant (value không ảnh hưởng outcome). \"N/A\": condition infeasible cho rule đó (logically impossible)." },
        { title: "State transition — all states vs valid transitions", correct: "100% all states KHÔNG đảm bảo 100% valid transitions. 100% valid transitions TỰ ĐỘNG đảm bảo 100% all states. 100% all transitions TỰ ĐỘNG đảm bảo cả all states lẫn valid transitions." },
        { title: "Exploratory testing = no planning", correct: "Exploratory có test charter định hướng — có structure, chỉ không có predefined scripts. Không phải random testing." },
        { title: "ATDD chỉ dành cho testers", correct: "ATDD là collaborative — customers, developers, testers cùng tham gia specification workshop." }
      ],
      questions: [
        {
          id: "ch4_q1",
          text: "Website chấp nhận tuổi từ 13 đến 17 (teen) và 18 đến 99 (adult). Dùng EP, test case nào đủ để achieve 100% coverage?",
          choices: [
            { key: "A", text: "13, 18" },
            { key: "B", text: "5, 15, 50" },
            { key: "C", text: "13, 18, 100" },
            { key: "D", text: "12, 15, 18, 100" }
          ],
          correctAnswer: "D",
          explanation: "4 partitions: (x<13 invalid), (13-17 teen), (18-99 adult), (x>99 invalid). D: 12 (invalid<13), 15 (teen), 18 (adult), 100 (invalid>99) → covers tất cả 4 partitions."
        },
        {
          id: "ch4_q2",
          text: "System cho phép input từ 10 đến 20. Dùng 2-value BVA, test cases cần thiết là:",
          choices: [
            { key: "A", text: "10, 20" },
            { key: "B", text: "9, 10, 20, 21" },
            { key: "C", text: "9, 10, 11, 19, 20, 21" },
            { key: "D", text: "10, 15, 20" }
          ],
          correctAnswer: "B",
          explanation: "2-value BVA: boundary + 1 neighbor. Boundaries: 10 và 20. Boundary 10: 10 + 9. Boundary 20: 20 + 21. Test cases: {9, 10, 20, 21}."
        },
        {
          id: "ch4_q3",
          text: "Loan approval: cần Credit Score > 700 (C) AND Income > $50k (I). Bao nhiêu test cases cần để 100% Decision Table coverage?",
          choices: [
            { key: "A", text: "2" },
            { key: "B", text: "3" },
            { key: "C", text: "4" },
            { key: "D", text: "6" }
          ],
          correctAnswer: "C",
          explanation: "4 rules (2 conditions × 2 values = 4 combinations: TT, TF, FT, FF). Mỗi rule cần 1 test case → 4 test cases cho 100% Decision Table coverage."
        },
        {
          id: "ch4_q4",
          text: "State machine có 4 states và 6 valid transitions. Để đạt 100% valid transitions coverage, cần tối thiểu bao nhiêu test cases?",
          choices: [
            { key: "A", text: "4 (one per state)" },
            { key: "B", text: "6 (one per transition)" },
            { key: "C", text: "At least enough sequences to cover 6 transitions (có thể một test case cover nhiều transitions)" },
            { key: "D", text: "10 (states + transitions)" }
          ],
          correctAnswer: "C",
          explanation: "Cần cover 6 transitions, nhưng 1 test case (sequence) có thể cover nhiều transitions. Tối thiểu phụ thuộc graph structure, nhưng cần ít nhất đủ để cover 6 transitions."
        },
        {
          id: "ch4_q5",
          text: "Test suite đạt 100% branch coverage. Điều này đảm bảo điều gì?",
          choices: [
            { key: "A", text: "Mọi statement được execute ít nhất 1 lần" },
            { key: "B", text: "Mọi path trong code được test" },
            { key: "C", text: "Không còn defects trong code" },
            { key: "D", text: "100% equivalence partition coverage" }
          ],
          correctAnswer: "A",
          explanation: "Branch 100% subsumes Statement 100% — đạt 100% branch tự động đảm bảo 100% statement. Không đảm bảo all paths (B), no defects (C), hay EP coverage (D)."
        },
        {
          id: "ch4_q6",
          text: "User story viết: \"Improve the system.\" Story này vi phạm tiêu chí nào trong INVEST?",
          choices: [
            { key: "A", text: "Negotiable" },
            { key: "B", text: "Valuable" },
            { key: "C", text: "Small và Testable" },
            { key: "D", text: "Independent" }
          ],
          correctAnswer: "C",
          explanation: "\"Improve the system\" quá broad → không Small và không Testable (không biết verify thế nào). INVEST: Independent, Negotiable, Valuable, Estimable, Small, Testable."
        },
        {
          id: "ch4_q7",
          text: "Trong ATDD, ai tham gia specification workshop?",
          choices: [
            { key: "A", text: "Chỉ testers" },
            { key: "B", text: "Chỉ developers và business analysts" },
            { key: "C", text: "Customers, developers, và testers" },
            { key: "D", text: "Management và project leads" }
          ],
          correctAnswer: "C",
          explanation: "ATDD là collaborative — cả 3 perspectives: customers/business, developers, testers cùng tham gia specification workshop để analyze, discuss và viết acceptance criteria."
        }
      ]
    },
    {
      id: 5,
      title: "Managing the Test Activities",
      subtitle: "Quản lý hoạt động kiểm thử",
      time: 335,
      weight: "~29%",
      color: "#059669",
      icon: "📊",
      keywords: [
        { term: "Defect management", definition: "Process để handle defects từ discovery đến closure — log, analyze, classify, decide, close" },
        { term: "Defect report", definition: "Document ghi lại information về anomaly được tìm thấy trong testing, đủ để responsible team resolve the issue" },
        { term: "Entry criteria", definition: "Điều kiện trước khi bắt đầu một activity (preconditions). Agile equivalent: Definition of Ready" },
        { term: "Exit criteria", definition: "Điều kiện để declare một activity là completed. Agile equivalent: Definition of Done" },
        { term: "Product risk", definition: "Risk liên quan đến quality characteristics của product — ảnh hưởng quality của test object" },
        { term: "Project risk", definition: "Risk liên quan đến management và control của project — ảnh hưởng schedule, budget, scope" },
        { term: "Risk level", definition: "Risk Likelihood × Risk Impact — xác định mức độ ưu tiên của risk" },
        { term: "Risk management", definition: "Toàn bộ process: risk analysis (identification + assessment) + risk control (mitigation + monitoring)" },
        { term: "Risk-based testing", definition: "Test approach trong đó test activities được selected, prioritized, managed dựa trên risk analysis và risk control" },
        { term: "Test approach", definition: "Implementation của test strategy cho một project cụ thể — test levels, types, techniques, entry/exit criteria" },
        { term: "Test completion report", definition: "Report summarize specific test activity khi completed — đánh giá testing vs plan, lessons learned" },
        { term: "Test control", definition: "Use monitoring info → actions/guidance để achieve efficient testing (corrective actions)" },
        { term: "Test monitoring", definition: "Gather information về testing — assess progress, measure exit criteria" },
        { term: "Test plan", definition: "Document mô tả test objectives, resources và processes — means và schedule để đạt test objectives" },
        { term: "Test pyramid", definition: "Model biểu diễn rằng different tests có granularity khác nhau: nhiều unit tests ở đáy, ít E2E tests ở đỉnh" },
        { term: "Test strategy", definition: "High-level generalized description của test process cho toàn bộ organization, thường derived từ test policy" },
        { term: "Testing quadrants", definition: "Model group test levels với test types trên 2 trục: Business/Technology facing × Support team/Critique product" },
        { term: "Three-point estimation", definition: "E = (a + 4m + b) / 6, SD = (b - a) / 6 — weighted average: optimistic, most-likely, pessimistic" },
        { term: "Severity vs Priority", definition: "Severity: mức độ technical impact. Priority: urgency to fix (business priority). Có thể không tương quan." }
      ],
      traps: [
        { title: "Nhầm entry/exit criteria", correct: "Entry = điều kiện ĐỂ BẮT ĐẦU (như cửa vào). Exit = điều kiện ĐỂ KẾT THÚC (như cửa ra / Definition of Done)." },
        { title: "Three-point estimation formula sai", correct: "SAI: E = (a + m + b) / 3 (simple average). ĐÚNG: E = (a + 4m + b) / 6 (weighted — m được weight gấp 4)." },
        { title: "Project risk vs Product risk", correct: "Project risk: ảnh hưởng schedule/budget/scope của dự án. Product risk: ảnh hưởng quality của sản phẩm. Security vulnerabilities = Product risk." },
        { title: "Nhầm Q3 và Q4 trong Testing Quadrants", correct: "Q3: Business facing, critique product → Exploratory, usability, UAT. Q4: Technology facing, critique product → Smoke tests, non-functional." },
        { title: "Test Pyramid — số lượng ngược", correct: "Bottom (unit) = NHIỀU nhất, nhanh nhất; Top (E2E) = ÍT nhất, chậm nhất." },
        { title: "Risk level calculation", correct: "Risk level = likelihood × impact (phép nhân, không phải cộng)." },
        { title: "Defect report — expected vs actual", correct: "Nhớ phải có cả hai: expected results (đúng phải là gì) VÀ actual results (thực tế là gì). Thiếu một trong hai → không đủ info để reproduce." },
        { title: "Severity vs Priority", correct: "Severity: mức độ ảnh hưởng (technical impact). Priority: urgency to fix (business priority). Chúng có thể không tương quan." }
      ],
      questions: [
        {
          id: "ch5_q1",
          text: "Team nhận được build mới để test nhưng chưa có test data và môi trường chưa setup. Theo entry criteria, team nên làm gì?",
          choices: [
            { key: "A", text: "Bắt đầu test ngay và log defects về missing setup" },
            { key: "B", text: "Không bắt đầu test vì entry criteria chưa đáp ứng" },
            { key: "C", text: "Chạy smoke test để verify build quality" },
            { key: "D", text: "Báo cáo cho management và continue" }
          ],
          correctAnswer: "B",
          explanation: "Entry criteria chưa đáp ứng (test data, environment) → activity sẽ khó khăn, tốn kém, rủi ro hơn → không nên bắt đầu."
        },
        {
          id: "ch5_q2",
          text: "Expert estimates: optimistic = 4 hours, most likely = 7 hours, pessimistic = 16 hours. Estimate là bao nhiêu?",
          choices: [
            { key: "A", text: "9 hours" },
            { key: "B", text: "8 hours" },
            { key: "C", text: "7.5 hours" },
            { key: "D", text: "7 hours" }
          ],
          correctAnswer: "B",
          explanation: "E = (a + 4m + b) / 6 = (4 + 4×7 + 16) / 6 = (4 + 28 + 16) / 6 = 48 / 6 = 8 hours."
        },
        {
          id: "ch5_q3",
          text: "Team phát hiện rằng key developer vừa resign. Đây là loại risk nào?",
          choices: [
            { key: "A", text: "Product risk — security" },
            { key: "B", text: "Project risk — people issue" },
            { key: "C", text: "Product risk — reliability" },
            { key: "D", text: "Project risk — supplier issue" }
          ],
          correctAnswer: "B",
          explanation: "Mất nhân sự = people issue → project risk (ảnh hưởng ability để deliver project). Project risks = management và control issues."
        },
        {
          id: "ch5_q4",
          text: "Tester đang làm load testing và security penetration testing. Đây là Quadrant nào trong Testing Quadrants?",
          choices: [
            { key: "A", text: "Q1" },
            { key: "B", text: "Q2" },
            { key: "C", text: "Q3" },
            { key: "D", text: "Q4" }
          ],
          correctAnswer: "D",
          explanation: "Q4 = Technology facing, Critique product → Non-functional tests (performance, security) — thường automated."
        },
        {
          id: "ch5_q5",
          text: "Tester viết defect report. Field nào là QUAN TRỌNG NHẤT để developer có thể reproduce defect?",
          choices: [
            { key: "A", text: "Severity và Priority" },
            { key: "B", text: "Test object và Date" },
            { key: "C", text: "Description của failure với test steps, actual và expected results" },
            { key: "D", text: "Status và References" }
          ],
          correctAnswer: "C",
          explanation: "Description đủ để reproduce + expected vs actual — không có này, developer không biết defect là gì và làm sao reproduce."
        },
        {
          id: "ch5_q6",
          text: "Theo Test Pyramid, loại test nào nên có số lượng NHIỀU NHẤT?",
          choices: [
            { key: "A", text: "UI/End-to-end tests" },
            { key: "B", text: "Integration tests" },
            { key: "C", text: "Service tests" },
            { key: "D", text: "Unit/Component tests" }
          ],
          correctAnswer: "D",
          explanation: "Unit/Component tests — bottom of pyramid — nhiều nhất, nhanh nhất, cheapest. E2E ở đỉnh pyramid là ít nhất."
        },
        {
          id: "ch5_q7",
          text: "Khi dùng risk-based test case prioritization, test case nào được chạy TRƯỚC?",
          choices: [
            { key: "A", text: "Test cases cho features được implement mới nhất" },
            { key: "B", text: "Test cases cho features được users dùng nhiều nhất" },
            { key: "C", text: "Test cases cho areas có risk cao nhất (likelihood × impact)" },
            { key: "D", text: "Test cases ngắn nhất (fastest to execute)" }
          ],
          correctAnswer: "C",
          explanation: "Risk-based prioritization = highest risk areas first. Risk level = likelihood × impact."
        },
        {
          id: "ch5_q8",
          text: "Configuration Management hỗ trợ testing theo cách nào?",
          choices: [
            { key: "A", text: "Đảm bảo test cases được viết theo đúng format" },
            { key: "B", text: "Đảm bảo test items được uniquely identified và version controlled để maintain traceability" },
            { key: "C", text: "Tự động chạy test cases khi code thay đổi" },
            { key: "D", text: "Đảm bảo test plan được approve bởi management" }
          ],
          correctAnswer: "B",
          explanation: "CM = identify, control, track work products — duy trì traceability, cho phép revert về previous baseline để reproduce previous test results."
        }
      ]
    },
    {
      id: 6,
      title: "Test Tools",
      subtitle: "Công cụ kiểm thử",
      time: 20,
      weight: "~4%",
      color: "#4F46E5",
      icon: "🔧",
      keywords: [
        { term: "Test automation", definition: "Sử dụng tools để perform hoặc support test activities — giảm manual effort, tăng consistency và repeatability" },
        { term: "Test management tools", definition: "Tăng efficiency bằng cách facilitate management của SDLC, requirements, tests, defects, configuration (VD: JIRA, TestRail)" },
        { term: "Static testing tools", definition: "Hỗ trợ tester trong reviews và static analysis (VD: SonarQube, ESLint)" },
        { term: "Test execution tools", definition: "Facilitate automated test execution và coverage measurement (VD: Selenium, JUnit, Jest)" },
        { term: "Non-functional testing tools", definition: "Cho phép non-functional testing khó/không thể làm manual (VD: JMeter, OWASP ZAP)" },
        { term: "DevOps tools", definition: "Support DevOps delivery pipeline, CI/CD, automated build (VD: Jenkins, GitHub Actions, Docker)" }
      ],
      traps: [
        { title: "Tool = automatic success", correct: "Acquiring a test automation tool KHÔNG guarantees improved testing efficiency. Tool mới cần effort để introduce, maintain, train. Success không automatic." },
        { title: "Test automation = no manual testing needed", correct: "Manual testing vẫn cần, đặc biệt cho exploratory testing, usability, và UX. DevOps context cũng vẫn cần manual từ user perspective." },
        { title: "Nhiều automation = nhiều coverage", correct: "Coverage là objective nhưng automation không đảm bảo coverage đúng. Cần design test cases tốt trước khi automate." },
        { title: "Nhầm benefits", correct: "\"More objective assessment\" có nghĩa là automation giúp MEASURE coverage objectively, không DESIGN tests tốt hơn — đó là task của tester." }
      ],
      questions: [
        {
          id: "ch6_q1",
          text: "Benefit chính của test automation là gì khi áp dụng cho regression testing?",
          choices: [
            { key: "A", text: "Tạo ra nhiều test cases hơn manual" },
            { key: "B", text: "Giảm repetitive manual work và tiết kiệm time" },
            { key: "C", text: "Đảm bảo không có defects trong system" },
            { key: "D", text: "Thay thế hoàn toàn manual testing" }
          ],
          correctAnswer: "B",
          explanation: "Time saving bằng cách giảm repetitive manual work — đây là benefit #1 của test automation, đặc biệt quan trọng khi regression tests cần chạy nhiều lần."
        },
        {
          id: "ch6_q2",
          text: "Team quyết định automate toàn bộ regression suite. 6 tháng sau, automation framework bị abandon bởi open-source community. Đây là risk nào?",
          choices: [
            { key: "A", text: "Unrealistic expectations" },
            { key: "B", text: "Vendor dependency" },
            { key: "C", text: "Open-source abandonment risk" },
            { key: "D", text: "Platform incompatibility" }
          ],
          correctAnswer: "C",
          explanation: "Open-source software có thể bị abandon (no further updates) — đây là risk đặc thù của open-source tools."
        },
        {
          id: "ch6_q3",
          text: "Tool nào phù hợp nhất để perform load testing cho một web application?",
          choices: [
            { key: "A", text: "Static testing tool" },
            { key: "B", text: "Test management tool" },
            { key: "C", text: "Non-functional testing tool (performance)" },
            { key: "D", text: "Collaboration tool" }
          ],
          correctAnswer: "C",
          explanation: "Non-functional testing tools cho performance/load testing (VD: JMeter). Cho phép non-functional testing khó/không thể làm manual."
        },
        {
          id: "ch6_q4",
          text: "Risk nào mô tả khi tester quá phụ thuộc vào automation và không dùng critical thinking?",
          choices: [
            { key: "A", text: "Inaccurate estimation" },
            { key: "B", text: "Over-reliance on tool" },
            { key: "C", text: "Vendor dependency" },
            { key: "D", text: "Unrealistic expectations" }
          ],
          correctAnswer: "B",
          explanation: "Over-reliance — ignoring need for human critical thinking. Tools là phương tiện hỗ trợ, không phải replacement cho human critical thinking và judgment."
        },
        {
          id: "ch6_q5",
          text: "DevOps team dùng automated tests trong CI pipeline để verify mỗi commit. Đây là loại tool nào?",
          choices: [
            { key: "A", text: "Non-functional testing tools" },
            { key: "B", text: "Test management tools" },
            { key: "C", text: "DevOps tools kết hợp với test execution tools" },
            { key: "D", text: "Collaboration tools" }
          ],
          correctAnswer: "C",
          explanation: "DevOps tools (CI/CD pipeline: Jenkins, GitHub Actions) kết hợp với test execution tools (Selenium, JUnit, Jest) — support DevOps delivery pipeline và automated test execution."
        }
      ]
    }
  ]
};
