const GENAI_DATA = {
  chapters: [
    {
      id: 1,
      title: "Introduction to GenAI for Testing",
      subtitle: "Giới thiệu GenAI cho Kiểm thử",
      time: 100,
      weight: "~15%",
      color: "#6366F1",
      keywords: [
        { term: "AI chatbot", definition: "Ứng dụng AI dùng LLM để cung cấp giao diện hội thoại tương tác — phản hồi ngay lập tức, dùng cho tác vụ thường ngày." },
        { term: "Context window", definition: "Lượng text (tính bằng tokens) mà LLM có thể xem xét cùng lúc khi sinh phản hồi. Khi đầy, thông tin cũ bị loại bỏ." },
        { term: "Deep learning", definition: "Kỹ thuật ML dùng neural networks nhiều lớp để tự học features từ dữ liệu — không cần chọn feature thủ công như Classical ML." },
        { term: "Embedding", definition: "Biểu diễn số (vector) của tokens, mã hóa quan hệ ngữ nghĩa trong không gian đa chiều. Tokens có nghĩa tương tự có vector gần nhau." },
        { term: "Feature", definition: "Thuộc tính/đặc điểm của dữ liệu được dùng để huấn luyện ML model. Classical ML cần chọn feature thủ công; Deep Learning tự học." },
        { term: "Foundation LLM", definition: "LLM pre-trained trên dataset đa dạng, khổng lồ — đa năng nhưng cần tùy chỉnh thêm (fine-tuning hoặc instruction-tuning) cho tác vụ cụ thể." },
        { term: "Generative AI (GenAI)", definition: "Branch of AI dùng deep learning để tạo nội dung mới (text, ảnh, code, audio). Ưu điểm: dùng ngay pre-trained models không cần train lại." },
        { term: "GPT", definition: "Generative Pre-trained Transformer — kiến trúc neural network nền tảng của nhiều LLMs hiện đại (GPT-4, Claude, Gemini...)." },
        { term: "Instruction-tuned LLM", definition: "LLM đã fine-tuned để tuân theo hướng dẫn (instructions) của người dùng tốt hơn Foundation LLM. Dùng cho chatbot, trợ lý, test scripts theo template." },
        { term: "Large Language Model (LLM)", definition: "GenAI model được pre-trained trên dataset text rất lớn, có khả năng xử lý và sinh ngôn ngữ tự nhiên phức tạp." },
        { term: "Machine learning (ML)", definition: "Phân nhánh AI dựa trên dữ liệu: chuẩn bị data, chọn features thủ công, huấn luyện model để phân loại hoặc dự đoán." },
        { term: "Multimodal model", definition: "LLM có thể xử lý nhiều loại dữ liệu: text, ảnh, âm thanh, video. Vision-Language Models (VLMs) là subset xử lý text + ảnh." },
        { term: "Reasoning LLM", definition: "LLM tối ưu cho lập luận logic và multi-step problem-solving (chain-of-thought). Phù hợp cho phân tích defect trends, test prioritization phức tạp." },
        { term: "Symbolic AI", definition: "AI dựa trên quy tắc và ký hiệu (rule-based) để mô phỏng reasoning con người. Cứng nhắc, không học từ dữ liệu." },
        { term: "Tokenization", definition: "Quá trình phân tách text thành các đơn vị nhỏ gọi là token để LLM xử lý. Token có thể là ký tự, từ con, hoặc từ hoàn chỉnh." },
        { term: "Transformer", definition: "Kiến trúc neural network nền tảng của hầu hết LLMs hiện đại (GPT, BERT, T5...). Cho phép xử lý context song song hiệu quả." }
      ],
      traps: [
        { title: "Nhầm Tokenization với Embedding", correct: "Tokenization = chia text thành tokens (bước 1). Embedding = chuyển tokens thành vectors số mã hóa ngữ nghĩa (bước 2). Hai bước khác nhau, tokenization xảy ra trước." },
        { title: "Foundation LLM tốt cho mọi tác vụ", correct: "Foundation LLMs cần tùy chỉnh thêm cho tác vụ cụ thể. Instruction-tuned phù hợp cho template/format cố định. Reasoning phù hợp cho multi-step logic." },
        { title: "VLM = Multimodal LLM", correct: "Vision-Language Model (VLM) là SUBSET của Multimodal LLM. VLM chỉ xử lý text + image. Multimodal còn xử lý audio, video, và nhiều loại khác." },
        { title: "LLM có thể tự execute test scripts", correct: "LLMs generate và analyze testware, nhưng không tự chạy test suite. Test execution vẫn cần test automation framework riêng." },
        { title: "Context window lớn hơn luôn tốt hơn", correct: "Context window lớn hơn giúp duy trì ngữ cảnh tốt hơn nhưng đánh đổi bằng tài nguyên tính toán nhiều hơn. Có trade-off cần cân nhắc." }
      ],
      questions: [
        {
          id: "genai_ch1_q1",
          text: "Team test muốn dùng AI để phân tích UI screenshots và phát hiện visual defects bằng cách so sánh expected với actual. Loại model nào phù hợp nhất?",
          choices: [
            { key: "A", text: "Foundation LLM — đa năng nhất" },
            { key: "B", text: "Classical Machine Learning — dùng features thủ công" },
            { key: "C", text: "Vision-Language Model (VLM) — xử lý cả text lẫn ảnh" },
            { key: "D", text: "Symbolic AI — dùng quy tắc cố định" }
          ],
          correctAnswer: "C",
          explanation: "Vision-Language Models (VLMs) được thiết kế để xử lý cả text lẫn hình ảnh — phù hợp nhất cho so sánh UI screenshots và phát hiện visual defects."
        },
        {
          id: "genai_ch1_q2",
          text: "Tester nhận thấy rằng khi hỏi LLM cùng một câu hỏi hai lần, kết quả đôi khi khác nhau. Điều này được giải thích bởi đặc điểm nào của LLM?",
          choices: [
            { key: "A", text: "Context window quá nhỏ" },
            { key: "B", text: "Tokenization không nhất quán" },
            { key: "C", text: "Non-deterministic behavior — cơ chế lấy mẫu xác suất" },
            { key: "D", text: "Embedding không chính xác" }
          ],
          correctAnswer: "C",
          explanation: "LLMs dùng cơ chế lấy mẫu xác suất (probabilistic sampling) khi sinh text → cùng input có thể cho output khác nhau giữa các lần gọi. Đây là non-deterministic behavior."
        },
        {
          id: "genai_ch1_q3",
          text: "Phát biểu nào ĐÚNG về sự khác biệt giữa Tokenization và Embedding?",
          choices: [
            { key: "A", text: "Tokenization chuyển tokens thành high-dimensional vectors" },
            { key: "B", text: "Embedding chia text thành các đơn vị nhỏ hơn để xử lý" },
            { key: "C", text: "Tokenization tạo ra building blocks; Embedding mã hóa chúng thành vectors ngữ nghĩa" },
            { key: "D", text: "Embedding và Tokenization là cùng một quá trình" }
          ],
          correctAnswer: "C",
          explanation: "Tokenization = tạo building blocks (chia text thành tokens). Embedding = mã hóa tokens thành high-dimensional vectors thể hiện quan hệ ngữ nghĩa. Tokenization xảy ra trước, sau đó mới tạo Embeddings."
        },
        {
          id: "genai_ch1_q4",
          text: "Tester cần LLM tạo Gherkin-style test cases từ user stories theo đúng format của công ty. Loại LLM nào phù hợp nhất?",
          choices: [
            { key: "A", text: "Foundation LLM — vì được pre-trained trên dataset rộng nhất" },
            { key: "B", text: "Instruction-tuned LLM — vì tối ưu để tuân theo format/instructions" },
            { key: "C", text: "Reasoning LLM — vì cần logic phức tạp" },
            { key: "D", text: "Symbolic AI — vì dùng template cố định" }
          ],
          correctAnswer: "B",
          explanation: "Instruction-tuned LLMs excel tại các tác vụ có format cố định (Gherkin) và cần follow instructions một cách nhất quán. Foundation LLMs cần tùy chỉnh thêm; Reasoning LLMs dành cho multi-step logic."
        },
        {
          id: "genai_ch1_q5",
          text: "Deep Learning khác Classical Machine Learning ở điểm cốt lõi nào?",
          choices: [
            { key: "A", text: "Deep Learning dùng ít dữ liệu hơn để huấn luyện" },
            { key: "B", text: "Deep Learning tự học features từ dữ liệu, Classical ML cần chọn features thủ công" },
            { key: "C", text: "Deep Learning dựa trên quy tắc cứng nhắc như Symbolic AI" },
            { key: "D", text: "Deep Learning không thể xử lý ảnh hoặc âm thanh" }
          ],
          correctAnswer: "B",
          explanation: "Điểm khác biệt chính: Deep Learning tự học features từ dữ liệu (thông qua neural networks nhiều lớp). Classical ML cần con người chọn và engineer features thủ công trước khi train model."
        },
        {
          id: "genai_ch1_q6",
          text: "Vision-Language Model (VLM) và Multimodal LLM có quan hệ như thế nào?",
          choices: [
            { key: "A", text: "VLM và Multimodal LLM là cùng một loại model" },
            { key: "B", text: "VLM là subset của Multimodal LLM, chỉ xử lý text + image" },
            { key: "C", text: "Multimodal LLM là subset của VLM" },
            { key: "D", text: "VLM không thể xử lý text, chỉ xử lý ảnh" }
          ],
          correctAnswer: "B",
          explanation: "VLM ⊂ Multimodal LLM. VLM là subset chỉ tích hợp text và image. Multimodal LLMs rộng hơn, có thể xử lý thêm audio, video, và nhiều modalities khác."
        }
      ]
    },
    {
      id: 2,
      title: "Prompt Engineering for Effective Testing",
      subtitle: "Kỹ thuật Prompt cho Kiểm thử Hiệu quả",
      time: 365,
      weight: "~40%",
      color: "#8B5CF6",
      keywords: [
        { term: "Prompt", definition: "Input (text hoặc multimodal) được cung cấp cho LLM để nhận output mong muốn. Chất lượng prompt trực tiếp ảnh hưởng chất lượng output." },
        { term: "Prompt engineering", definition: "Quá trình thiết kế và tối ưu prompts để đạt output mong muốn từ LLM. Bao gồm cấu trúc, ngôn ngữ, ví dụ và tinh chỉnh iterative." },
        { term: "Zero-shot prompting", definition: "Không cung cấp ví dụ — dựa vào kiến thức pre-existing của LLM. Phù hợp cho tác vụ đơn giản mà LLM đã biết cách làm." },
        { term: "One-shot prompting", definition: "Cung cấp đúng 1 ví dụ mẫu trong prompt để hướng dẫn LLM. Giữa zero-shot và few-shot về độ hướng dẫn." },
        { term: "Few-shot prompting", definition: "Cung cấp nhiều ví dụ mẫu (2+) trong prompt. Phù hợp khi output có format cố định hoặc cần tính nhất quán cao." },
        { term: "Prompt chaining", definition: "Kỹ thuật chia tác vụ phức tạp thành chuỗi prompts liên tiếp — output bước này là input bước sau. Cho phép verify từng bước." },
        { term: "Meta prompting", definition: "Dùng LLM để tự tạo hoặc cải thiện prompt. Người dùng và AI cộng tác để tạo prompt hiệu quả hơn." },
        { term: "System prompt", definition: "Prompt định nghĩa behavior tổng thể của LLM, ẩn với người dùng cuối, cố định suốt phiên. Do developer/QA lead thiết lập." },
        { term: "User prompt", definition: "Input trực tiếp từ người dùng trong từng lượt tương tác. Hiển thị trực tiếp, thay đổi mỗi lần." },
        { term: "Natural language processing (NLP)", definition: "Kỹ thuật AI xử lý và hiểu ngôn ngữ tự nhiên của con người. Là nền tảng của LLMs." },
        { term: "Acceptance criteria", definition: "Điều kiện cần đáp ứng để user story/feature được chấp nhận. Thường là input data cho LLM khi tạo test cases." }
      ],
      traps: [
        { title: "Nhầm Few-shot với Prompt Chaining", correct: "Few-shot = cung cấp nhiều ví dụ trong MỘT prompt. Prompt Chaining = chia thành NHIỀU prompts liên tiếp, output của bước này là input bước sau. Hoàn toàn khác nhau." },
        { title: "Meta prompting = dùng AI để evaluate AI output", correct: "Meta prompting = dùng LLM để TẠO hoặc CẢI THIỆN prompt, không phải evaluate output của AI khác." },
        { title: "System prompt thay đổi mỗi tin nhắn", correct: "System prompt CỐ ĐỊNH suốt phiên/deployment. User prompt mới thay đổi mỗi lần tương tác." },
        { title: "Nhầm Input data với Constraints", correct: "Input data = dữ liệu thô đưa vào (test reports, logs, user stories). Constraints = giới hạn/ràng buộc (focus only on critical severity, max 10 test cases). Hai thành phần khác nhau." },
        { title: "Prompt dài hơn luôn tốt hơn", correct: "Không phải. Adjust prompt length and specificity là kỹ thuật tinh chỉnh — đôi khi prompt ngắn hơn, tập trung hơn lại cho kết quả tốt hơn." }
      ],
      questions: [
        {
          id: "genai_ch2_q1",
          text: "Trong prompt: 'Test reports, system monitoring logs, và performance benchmarks' — đây là thành phần nào trong cấu trúc 6 thành phần?",
          choices: [
            { key: "A", text: "Constraints — vì chỉ định giới hạn" },
            { key: "B", text: "Input data — vì là dữ liệu thô đưa vào LLM" },
            { key: "C", text: "Output format — vì định dạng kết quả" },
            { key: "D", text: "Instruction — vì hướng dẫn LLM làm gì" }
          ],
          correctAnswer: "B",
          explanation: "Test reports, logs, performance benchmarks là DỮ LIỆU THÔ đưa vào LLM để phân tích. Đây là thành phần Input data. Constraints = giới hạn (vd: chỉ tạo max 10 test cases). Output format = cấu trúc kết quả trả về."
        },
        {
          id: "genai_ch2_q2",
          text: "Trong prompt: 'Return a markdown table with columns: ID, Type, Severity, Description' — đây là thành phần nào?",
          choices: [
            { key: "A", text: "Constraints — vì chỉ định yêu cầu đặc biệt" },
            { key: "B", text: "Instruction — vì hướng dẫn LLM" },
            { key: "C", text: "Output format — vì chỉ định cấu trúc kết quả trả về" },
            { key: "D", text: "Role — vì định nghĩa góc nhìn của LLM" }
          ],
          correctAnswer: "C",
          explanation: "Chỉ định cấu trúc/hình dạng của kết quả (markdown table, JSON, Gherkin...) = Output format. Đây là thành phần thứ 6 trong cấu trúc prompt."
        },
        {
          id: "genai_ch2_q3",
          text: "Tester cần tạo 50 Gherkin test cases từ 50 user stories, mỗi cái phải theo format Given-When-Then chuẩn. Kỹ thuật prompting nào hiệu quả nhất?",
          choices: [
            { key: "A", text: "Zero-shot — LLM đã biết Gherkin rồi" },
            { key: "B", text: "Few-shot — cung cấp 3-5 ví dụ Gherkin mẫu để guide format nhất quán" },
            { key: "C", text: "Meta prompting — nhờ LLM viết prompt" },
            { key: "D", text: "Prompt chaining — chia thành nhiều bước" }
          ],
          correctAnswer: "B",
          explanation: "Few-shot prompting phù hợp nhất khi output có FORMAT CỐ ĐỊNH (Gherkin) và cần TÍNH NHẤT QUÁN giữa nhiều outputs. Cung cấp 3-5 ví dụ mẫu giúp LLM hiểu chính xác format mong muốn."
        },
        {
          id: "genai_ch2_q4",
          text: "Tester muốn: (1) phân tích requirements tìm ambiguities, (2) tạo test conditions từ requirements rõ ràng, (3) prioritize theo risk. Kỹ thuật nào phù hợp?",
          choices: [
            { key: "A", text: "Zero-shot — làm tất cả trong 1 prompt" },
            { key: "B", text: "Few-shot — cần ví dụ cho mỗi bước" },
            { key: "C", text: "Prompt chaining — chia thành 3 prompts, verify từng bước" },
            { key: "D", text: "Meta prompting — nhờ LLM tạo toàn bộ workflow" }
          ],
          correctAnswer: "C",
          explanation: "Prompt chaining phù hợp cho tác vụ PHỨC TẠP NHIỀU BƯỚC cần VALIDATE từng bước trước khi tiếp tục. Mỗi bước output được kiểm tra trước khi làm input cho bước tiếp theo."
        },
        {
          id: "genai_ch2_q5",
          text: "Tester A chưa biết cách viết prompt hiệu quả để tạo test cases từ API specs. Anh ấy nhờ LLM giúp tạo prompt phù hợp. Đây là kỹ thuật gì?",
          choices: [
            { key: "A", text: "Few-shot prompting" },
            { key: "B", text: "Zero-shot prompting" },
            { key: "C", text: "Meta prompting" },
            { key: "D", text: "Prompt chaining" }
          ],
          correctAnswer: "C",
          explanation: "Meta prompting = dùng LLM để TẠO hoặc CẢI THIỆN prompt. Phù hợp khi tester không biết cách diễn đạt prompt hiệu quả hoặc muốn tối ưu prompt hiện có."
        },
        {
          id: "genai_ch2_q6",
          text: "Phát biểu nào ĐÚNG về System Prompt và User Prompt?",
          choices: [
            { key: "A", text: "System prompt thay đổi với mỗi tin nhắn người dùng" },
            { key: "B", text: "User prompt được developer thiết lập và ẩn với người dùng" },
            { key: "C", text: "System prompt định nghĩa behavior tổng thể, cố định suốt phiên, ẩn với người dùng" },
            { key: "D", text: "Cả system prompt và user prompt đều hiển thị với người dùng" }
          ],
          correctAnswer: "C",
          explanation: "System prompt: do developer/QA lead tạo, ẩn với người dùng, cố định suốt phiên, định nghĩa behavior tổng thể (role, constraints). User prompt: do người dùng nhập, hiển thị trực tiếp, thay đổi mỗi lượt."
        },
        {
          id: "genai_ch2_q7",
          text: "Tester muốn đo lường 'có bao nhiêu % test scripts được LLM tạo ra có thể chạy thành công mà không cần chỉnh sửa'. Đây là metric nào?",
          choices: [
            { key: "A", text: "Accuracy" },
            { key: "B", text: "Precision" },
            { key: "C", text: "Recall" },
            { key: "D", text: "Execution Success Rate" }
          ],
          correctAnswer: "D",
          explanation: "Execution Success Rate = % test scripts chạy thành công (không có syntax error, runtime error). Accuracy = độ chính xác tổng thể. Precision = độ chính xác cho mục tiêu cụ thể. Recall = khả năng tìm tất cả instances."
        },
        {
          id: "genai_ch2_q8",
          text: "Sau khi dùng LLM tạo test cases cho regression testing, tester nhận thấy LLM luôn bỏ sót performance tests. Kỹ thuật tinh chỉnh nào phù hợp nhất?",
          choices: [
            { key: "A", text: "A/B testing — tạo 2 phiên bản prompt để so sánh" },
            { key: "B", text: "Iterative modification — thêm examples về performance tests vào prompt (few-shot)" },
            { key: "C", text: "Chuyển sang zero-shot để LLM tự quyết định" },
            { key: "D", text: "Giảm số lượng yêu cầu để LLM focus hơn" }
          ],
          correctAnswer: "B",
          explanation: "Khi LLM bỏ sót một loại test cụ thể, thêm ví dụ về loại đó (few-shot) là cách hiệu quả nhất. Đây là iterative prompt modification — bắt đầu từ base prompt và sửa dần dựa trên kết quả quan sát."
        }
      ]
    },
    {
      id: 3,
      title: "Managing Risks of GenAI in Testing",
      subtitle: "Quản lý Rủi ro GenAI trong Kiểm thử",
      time: 160,
      weight: "~25%",
      color: "#EC4899",
      keywords: [
        { term: "Hallucination", definition: "LLM tạo output sai về mặt thực tế hoặc bịa ra thông tin không có (không liên quan đến tác vụ). Ví dụ: tạo test cases cho API endpoint không tồn tại." },
        { term: "Reasoning error", definition: "LLM hiểu sai cấu trúc logic (cause-effect, conditional logic) dẫn đến kết luận sai. Ví dụ: đảo ngược điều kiện trong test case." },
        { term: "Bias", definition: "Thiên vị trong output LLM do training data không cân bằng — LLM favoring một số loại thông tin (vd: luôn dùng tiếng Anh, underrepresent non-functional tests)." },
        { term: "Temperature", definition: "Hyperparameter của LLM kiểm soát mức độ ngẫu nhiên trong output. Thấp → nhất quán hơn, ít sáng tạo. Cao → đa dạng hơn, unpredictable hơn." },
        { term: "Data privacy", definition: "Quyền kiểm soát cách dữ liệu cá nhân được thu thập, xử lý, lưu trữ. Gửi PII thật lên AI tool bên thứ 3 có thể vi phạm GDPR." },
        { term: "Security", definition: "Bảo vệ hệ thống khỏi unauthorized access và attacks. Trong GenAI: cần bảo vệ cả training data lẫn inference queries." },
        { term: "Vulnerability", definition: "Điểm yếu trong hệ thống có thể bị khai thác. Trong LLM-powered systems: prompt injection, data exfiltration, model inversion..." }
      ],
      traps: [
        { title: "Nhầm Hallucination với Reasoning Error", correct: "Hallucination = bịa ra thông tin không tồn tại (sai về thực tế). Reasoning Error = logic sai (thông tin có thể đúng nhưng kết luận sai, vd: đảo ngược if/then). Hai loại lỗi khác nhau." },
        { title: "Nhầm Data Exfiltration với Data Poisoning", correct: "Data Exfiltration = đánh cắp thông tin RA KHỎI LLM. Data Poisoning = thao túng dữ liệu huấn luyện để ảnh hưởng behavior của model (đầu độc nguồn)." },
        { title: "Temperature thấp loại bỏ hoàn toàn hallucination", correct: "Sai. Temperature thấp làm output nhất quán hơn (ít ngẫu nhiên) nhưng KHÔNG loại bỏ hallucinations hoàn toàn. Human review vẫn bắt buộc." },
        { title: "Human review là optional khi LLM đủ tốt", correct: "Systematic human review là BẮT BUỘC bất kể LLM tiên tiến đến đâu. LLMs vẫn có thể hallucinate và reasoning error — human oversight không thể thay thế." },
        { title: "Nhầm thứ tự ISO/IEC standards", correct: "ISO/IEC 42001:2023 = AI Management System (quản lý hệ thống AI trong tổ chức). ISO/IEC 23053:2022 = Framework cho AI systems dùng Machine Learning (kỹ thuật). EU AI Act = phân loại theo risk level. NIST AI RMF = US framework." }
      ],
      questions: [
        {
          id: "genai_ch3_q1",
          text: "LLM được yêu cầu tạo test cases cho `/users/{id}` API endpoint. LLM trả về test cases cho `/accounts/{id}` — endpoint không tồn tại. Đây là loại lỗi gì?",
          choices: [
            { key: "A", text: "Reasoning Error — vì LLM chọn sai logic" },
            { key: "B", text: "Bias — vì LLM thiên về naming convention khác" },
            { key: "C", text: "Hallucination — vì LLM bịa ra thông tin không có thật" },
            { key: "D", text: "Non-deterministic behavior — vì output khác nhau" }
          ],
          correctAnswer: "C",
          explanation: "LLM tạo test cases cho endpoint KHÔNG TỒN TẠI = hallucination. Hallucination = tạo output sai về mặt thực tế hoặc bịa ra thông tin không có. Reasoning error sẽ là logic sai trong cùng một test case, không phải bịa ra endpoint mới."
        },
        {
          id: "genai_ch3_q2",
          text: "Tester nhận thấy LLM luôn tạo test cases bằng tiếng Anh mặc dù requirements bằng tiếng Việt, và thường bỏ qua performance requirements. Đây là loại lỗi gì?",
          choices: [
            { key: "A", text: "Hallucination" },
            { key: "B", text: "Reasoning Error" },
            { key: "C", text: "Bias" },
            { key: "D", text: "Non-deterministic behavior" }
          ],
          correctAnswer: "C",
          explanation: "Bias = thiên vị có hệ thống do training data không cân bằng. LLM thiên về tiếng Anh và loại bỏ non-functional tests là biểu hiện của bias từ training data — không phải lỗi ngẫu nhiên mà là pattern nhất quán."
        },
        {
          id: "genai_ch3_q3",
          text: "Tester muốn LLM tạo output nhất quán hơn giữa các lần gọi. Kỹ thuật nào hiệu quả?",
          choices: [
            { key: "A", text: "Tăng context window" },
            { key: "B", text: "Giảm temperature" },
            { key: "C", text: "Dùng system prompt dài hơn" },
            { key: "D", text: "Tăng số lượng few-shot examples" }
          ],
          correctAnswer: "B",
          explanation: "Giảm temperature → output ít ngẫu nhiên hơn, nhất quán hơn giữa các lần gọi. Temperature cao → sáng tạo nhưng unpredictable. Lưu ý: ngay cả temperature = 0 vẫn không đảm bảo 100% reproducibility."
        },
        {
          id: "genai_ch3_q4",
          text: "Kẻ tấn công đưa đánh giá sai vào hệ thống feedback của AI tool để ảnh hưởng đến cách model học trong tương lai. Đây là attack vector nào?",
          choices: [
            { key: "A", text: "Data exfiltration" },
            { key: "B", text: "Request manipulation" },
            { key: "C", text: "Malicious code generation" },
            { key: "D", text: "Data poisoning" }
          ],
          correctAnswer: "D",
          explanation: "Data poisoning = thao túng dữ liệu HUẤN LUYỆN để ảnh hưởng behavior của model. Đưa đánh giá giả vào feedback training data = đầu độc nguồn. Data exfiltration = lấy thông tin ra. Request manipulation = tấn công qua prompt/input."
        },
        {
          id: "genai_ch3_q5",
          text: "Tester cần gửi customer data thật lên ChatGPT để tạo test data. Rủi ro quan trọng nhất cần lo ngại?",
          choices: [
            { key: "A", text: "Hallucination trong test data được tạo ra" },
            { key: "B", text: "Non-deterministic output của ChatGPT" },
            { key: "C", text: "Data privacy — thông tin nhạy cảm có thể bị lưu trữ bởi vendor" },
            { key: "D", text: "Reasoning error trong việc tạo test cases" }
          ],
          correctAnswer: "C",
          explanation: "Gửi PII (Personally Identifiable Information) lên third-party AI tool có thể vi phạm GDPR và regulations về bảo vệ dữ liệu. Cần anonymize/pseudonymize dữ liệu trước khi gửi. Đây là rủi ro data privacy nghiêm trọng nhất."
        },
        {
          id: "genai_ch3_q6",
          text: "Công ty muốn phân loại các hệ thống AI theo mức độ rủi ro (unacceptable, high, limited, minimal). Framework nào phù hợp?",
          choices: [
            { key: "A", text: "ISO/IEC 42001:2023" },
            { key: "B", text: "ISO/IEC 23053:2022" },
            { key: "C", text: "EU AI Act" },
            { key: "D", text: "NIST AI RMF" }
          ],
          correctAnswer: "C",
          explanation: "EU AI Act sử dụng RISK-BASED APPROACH để phân loại AI systems theo mức độ rủi ro (unacceptable risk, high risk, limited risk, minimal risk). ISO 42001 = AI management system. NIST AI RMF = US framework cho risk management."
        },
        {
          id: "genai_ch3_q7",
          text: "Phát biểu nào ĐÚNG về energy consumption của GenAI?",
          choices: [
            { key: "A", text: "Image generation và text generation tiêu thụ năng lượng tương đương nhau" },
            { key: "B", text: "GenAI search engines tiêu thụ ít năng lượng hơn traditional search engines" },
            { key: "C", text: "Image generation tiêu thụ nhiều năng lượng hơn text generation do computational complexity cao hơn" },
            { key: "D", text: "Cumulative effect của hàng triệu users là không đáng kể" }
          ],
          correctAnswer: "C",
          explanation: "Image generation tiêu thụ NHIỀU năng lượng hơn text generation. Ví dụ từ syllabus: tạo 1 ảnh AI = năng lượng sạc đầy 1 smartphone. Text generation chỉ bằng một phần nhỏ. Cumulative effect của hàng triệu users tạo ra CO₂ emissions đáng kể."
        }
      ]
    },
    {
      id: 4,
      title: "LLM-Powered Test Infrastructure",
      subtitle: "Hạ tầng Kiểm thử sử dụng LLM",
      time: 110,
      weight: "~12%",
      color: "#06B6D4",
      keywords: [
        { term: "RAG (Retrieval-Augmented Generation)", definition: "Kỹ thuật tăng cường LLMs bằng cách tích hợp external data sources vào quá trình sinh phản hồi. Không thay đổi model weights — truy vấn real-time data." },
        { term: "Vector database", definition: "Database lưu trữ embeddings (vectors), hỗ trợ semantic similarity search. Dùng trong RAG để tìm chunks liên quan nhất với query của người dùng." },
        { term: "LLM-powered agent", definition: "Ứng dụng GenAI chuyên biệt, được thiết kế để xử lý các tác vụ theo cách semi-autonomous hoặc autonomous với ít human intervention." },
        { term: "Fine-tuning", definition: "Tinh chỉnh một pre-trained LLM bằng cách huấn luyện thêm trên domain-specific dataset. Thay đổi model weights, không phải chỉ inject data." },
        { term: "LLMOps", definition: "Tập hợp practices, tools và processes để streamline development, deployment, maintenance của LLMs trong production. Tương tự MLOps nhưng cho LLMs." },
        { term: "Test infrastructure", definition: "Toàn bộ infrastructure hỗ trợ test activities: tools, environments, databases, integrations. LLM-powered infrastructure thêm các thành phần AI." }
      ],
      traps: [
        { title: "RAG thay đổi LLM weights", correct: "RAG KHÔNG thay đổi LLM weights. RAG truy vấn external data từ vector DB và inject vào prompt lúc inference. Fine-tuning mới thay đổi model weights." },
        { title: "Vector DB = Relational DB", correct: "Vector DB lưu embeddings và tìm kiếm theo SEMANTIC SIMILARITY. Relational DB lưu structured data và dùng SQL với exact match. Hai loại khác nhau, cùng tồn tại trong LLM infrastructure." },
        { title: "Fine-tuning ngăn chặn overfitting", correct: "Sai — Fine-tuning CÓ NGUY CƠ overfitting. Model quá chuyên biệt → kém hiệu quả với unseen data. Đây là một trong những thách thức của fine-tuning." },
        { title: "Autonomous agents không cần oversight", correct: "Agents vẫn có thể hallucinate, reasoning error, và biases như LLM thông thường. Cần automated verification hoặc human oversight định kỳ. Semi-autonomous agents phù hợp hơn cho tác vụ quan trọng." }
      ],
      questions: [
        {
          id: "genai_ch4_q1",
          text: "Trong LLM-powered test infrastructure, thành phần nào chịu trách nhiệm chuẩn bị prompt, quản lý authentication, và giao tiếp với LLM API?",
          choices: [
            { key: "A", text: "Back-end" },
            { key: "B", text: "Front-end" },
            { key: "C", text: "Vector database" },
            { key: "D", text: "Relational database" }
          ],
          correctAnswer: "A",
          explanation: "Back-end xử lý input, quản lý authentication, thực hiện data retrieval, chuẩn bị prompt hoàn chỉnh, và giao tiếp với LLM API. Front-end chỉ là giao diện người dùng."
        },
        {
          id: "genai_ch4_q2",
          text: "Team test muốn LLM có thể truy cập kho 10,000 tài liệu requirements và test cases nội bộ khi tạo test cases mới. Giải pháp nào phù hợp nhất?",
          choices: [
            { key: "A", text: "Fine-tuning LLM với 10,000 tài liệu đó" },
            { key: "B", text: "RAG — vectorize tài liệu và truy vấn khi cần" },
            { key: "C", text: "Copy toàn bộ tài liệu vào system prompt" },
            { key: "D", text: "Thay thế LLM bằng in-house model được train lại" }
          ],
          correctAnswer: "B",
          explanation: "RAG phù hợp để cung cấp DYNAMIC, REAL-TIME access đến enterprise documents. Fine-tuning (A) tốn tài nguyên và không real-time. Copy vào system prompt (C) không khả thi với 10,000 tài liệu — vượt context window. RAG không thay đổi LLM weights."
        },
        {
          id: "genai_ch4_q3",
          text: "Trong quy trình RAG, bước 'retrieval' thực hiện điều gì?",
          choices: [
            { key: "A", text: "Chia documents thành chunks nhỏ 256-512 tokens" },
            { key: "B", text: "Mã hóa query thành embedding và tìm chunks liên quan nhất theo semantic similarity" },
            { key: "C", text: "Kết hợp retrieved data với LLM knowledge để sinh phản hồi" },
            { key: "D", text: "Lưu embeddings của documents vào vector database" }
          ],
          correctAnswer: "B",
          explanation: "Retrieval = mã hóa query của user thành embedding → tìm chunks liên quan nhất trong vector DB theo semantic similarity. Bước A, D thuộc Preprocessing (giai đoạn 1). Bước C là Generation (sau retrieval)."
        },
        {
          id: "genai_ch4_q4",
          text: "Phát biểu nào SAI về Fine-tuning LLMs?",
          choices: [
            { key: "A", text: "Fine-tuning trang bị reasoning abilities chuyên biệt cho domain cụ thể" },
            { key: "B", text: "Fine-tuning equips a model by replacing its general knowledge, ensuring the absence of overfitting" },
            { key: "C", text: "Fine-tuning có thể áp dụng cho SLMs để giảm computational overhead" },
            { key: "D", text: "Fine-tuning yêu cầu high-quality, task-specific training datasets" }
          ],
          correctAnswer: "B",
          explanation: "B sai vì: (1) Fine-tuning ADAPT/bổ sung knowledge, không REPLACE general knowledge. (2) Fine-tuning CÓ NGUY CƠ overfitting, không 'đảm bảo không có overfitting'. Đây là hai sai lầm nghiêm trọng."
        },
        {
          id: "genai_ch4_q5",
          text: "Tổ chức lo ngại về data privacy, muốn kiểm soát tối đa dữ liệu test và không muốn gửi data ra bên ngoài. Cách triển khai GenAI nào phù hợp?",
          choices: [
            { key: "A", text: "AI Chatbot (ChatGPT, Gemini) — dễ dùng nhất" },
            { key: "B", text: "Test tool với GenAI capabilities từ vendor" },
            { key: "C", text: "In-house test tool với LLM on-premise" },
            { key: "D", text: "Fine-tuning trên public LLM cloud" }
          ],
          correctAnswer: "C",
          explanation: "In-house test tool với LLM on-premise cung cấp kiểm soát TỐI ĐA về data privacy và security — không có data nào rời khỏi infrastructure của tổ chức. Nhược điểm: cần expertise cao và chi phí vận hành lớn."
        }
      ]
    },
    {
      id: 5,
      title: "Deploying and Integrating GenAI",
      subtitle: "Triển khai GenAI trong Tổ chức Kiểm thử",
      time: 80,
      weight: "~8%",
      color: "#10B981",
      keywords: [
        { term: "Shadow AI", definition: "Nhân viên sử dụng AI tools chưa được tổ chức phê duyệt mà không có sự kiểm soát. Rủi ro: data privacy, compliance, intellectual property." }
      ],
      traps: [
        { title: "Shadow AI chỉ là rủi ro bảo mật", correct: "Shadow AI có 3 loại rủi ro: (1) Security & data privacy, (2) Compliance & regulatory, (3) Vague intellectual property. Không chỉ giới hạn ở bảo mật." },
        { title: "Ba giai đoạn adoption phải tuần tự", correct: "Các giai đoạn CÓ THỂ CHẠY SONG SONG cho các use cases khác nhau trong cùng tổ chức. Không bắt buộc phải hoàn thành xong giai đoạn 1 mới bắt đầu giai đoạn 2." },
        { title: "GenAI sẽ thay thế hoàn toàn testers", correct: "GenAI THAY ĐỔI focus của testers (từ routine tasks → AI oversight), nhưng KHÔNG thay thế. Testers vẫn cần guide AI và verify AI-generated testware. 'Solely' luôn là cờ đỏ trong câu hỏi thi." },
        { title: "Test Manager chỉ cần quản lý AI tools sau adoption", correct: "Sau khi áp dụng GenAI, Test Manager phải: phát triển AI-based test strategy, quản lý AI risks, và coordinate hybrid teams (người + GenAI tools). Vai trò RỘNG hơn, không chỉ là tool management." }
      ],
      questions: [
        {
          id: "genai_ch5_q1",
          text: "Tester dùng tài khoản ChatGPT cá nhân để tạo test cases từ confidential requirements mà không báo cáo với team. Đây là ví dụ về vấn đề gì?",
          choices: [
            { key: "A", text: "Hallucination — ChatGPT có thể tạo test cases sai" },
            { key: "B", text: "Shadow AI — dùng unapproved AI tool không có sự kiểm soát" },
            { key: "C", text: "Data poisoning — dữ liệu được upload lên cloud" },
            { key: "D", text: "Bias — ChatGPT có thể thiên vị trong test cases" }
          ],
          correctAnswer: "B",
          explanation: "Shadow AI = nhân viên sử dụng AI tools CHƯA ĐƯỢC PHÉP của tổ chức mà không có oversight. Rủi ro bao gồm: data privacy (confidential data trên personal account), compliance (vi phạm policy), IP (licensing không rõ)."
        },
        {
          id: "genai_ch5_q2",
          text: "Test organization đang tổ chức training về GenAI, cho phép truy cập một số LLMs, và thử nghiệm use cases ban đầu. Đây là giai đoạn nào?",
          choices: [
            { key: "A", text: "Utilization & Iteration" },
            { key: "B", text: "Discovery" },
            { key: "C", text: "Initiation & Usage Definition" },
            { key: "D", text: "Fine-tuning & Integration" }
          ],
          correctAnswer: "B",
          explanation: "Discovery = xây dựng nhận thức và năng lực: training về GenAI, cung cấp truy cập LLMs, thử nghiệm use cases ban đầu. Đây là giai đoạn 1 trong 3 giai đoạn adoption."
        },
        {
          id: "genai_ch5_q3",
          text: "Thứ tự đúng của 3 giai đoạn áp dụng GenAI trong tổ chức kiểm thử là gì?",
          choices: [
            { key: "A", text: "Discovery → Initiation & Usage Definition → Utilization & Iteration" },
            { key: "B", text: "Initiation → Discovery → Utilization" },
            { key: "C", text: "Utilization → Initiation → Discovery" },
            { key: "D", text: "Discovery → Utilization → Initiation" }
          ],
          correctAnswer: "A",
          explanation: "Ba giai đoạn theo thứ tự: (1) Discovery — nhận thức, training, thử nghiệm; (2) Initiation & Usage Definition — xác định và ưu tiên use cases thực tế; (3) Utilization & Iteration — tích hợp đầy đủ, continuous monitoring. Các giai đoạn có thể chạy song song."
        },
        {
          id: "genai_ch5_q4",
          text: "Khi chọn LLM cho test team, tiêu chí nào đảm bảo model có thể tùy chỉnh với testing knowledge domain của tổ chức?",
          choices: [
            { key: "A", text: "Recurring cost" },
            { key: "B", text: "Community and support" },
            { key: "C", text: "Fine-tuning potential" },
            { key: "D", text: "Model performance on general benchmarks" }
          ],
          correctAnswer: "C",
          explanation: "Fine-tuning potential = khả năng fine-tune với domain-specific data của tổ chức. Đây là tiêu chí quan trọng khi muốn customize model cho testing domain cụ thể."
        },
        {
          id: "genai_ch5_q5",
          text: "Phát biểu nào ĐÚNG về sự thay đổi vai trò của Tester sau khi áp dụng GenAI?",
          choices: [
            { key: "A", text: "Testers chuyển sang hướng dẫn và verify AI-generated testware thay vì tự thiết kế từ đầu" },
            { key: "B", text: "Testers sẽ không còn cần kỹ năng test design vì AI đã làm thay" },
            { key: "C", text: "Testers chủ yếu quản lý AI licenses và tools" },
            { key: "D", text: "Testers dựa hoàn toàn vào AI để đảm bảo quality" }
          ],
          correctAnswer: "A",
          explanation: "Tester = AI-assisted test specialist: tập trung vào HƯỚNG DẪN LLM (prompt engineering) và VERIFY AI-generated testware (phát hiện hallucinations, reasoning errors). 'Solely' và 'hoàn toàn' là cờ đỏ — luôn sai trong ISTQB."
        },
        {
          id: "genai_ch5_q6",
          text: "Cách tốt nhất để xây dựng GenAI skills trong test team là gì?",
          choices: [
            { key: "A", text: "Chỉ học lý thuyết về AI qua khóa học online" },
            { key: "B", text: "Để mỗi tester tự học độc lập mà không có hướng dẫn" },
            { key: "C", text: "Hands-on thực hành dần dần + peer learning + communities of practice chia sẻ nội bộ" },
            { key: "D", text: "Tích hợp tất cả AI tasks ngay lập tức cho toàn team" }
          ],
          correctAnswer: "C",
          explanation: "Chiến lược tốt nhất: Hands-on (thực hành trực tiếp), Gradual progression (từ basic → nâng cao), Peer learning + Communities of practice (chia sẻ prompt patterns, best practices nội bộ). 'Tất cả ngay lập tức' = anti-pattern, gây overwhelm."
        }
      ]
    }
  ]
};
