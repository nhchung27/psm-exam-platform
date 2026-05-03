# ISTQB CTFL v4.0.1 — Tổng hợp kiến thức ôn thi

> **Nguồn**: ISTQB Certified Tester Foundation Level Syllabus v4.0.1 (15.09.2024)
> **Mục đích**: Tài liệu ôn tập tổng hợp theo từng chương — giữ nguyên thuật ngữ tiếng Anh cần thiết cho kỳ thi.
> **Cách dùng**: Đọc kiến thức → kiểm tra Learning Objectives (LO) → làm flashcards/mind map.

---

## Cấu trúc bài thi

| Chương | Tên | Thời lượng | Số LO (K1/K2/K3) |
|--------|-----|------------|-------------------|
| 1 | Fundamentals of Testing | 180 phút | K1×3, K2×10 |
| 2 | Testing Throughout the SDLC | 130 phút | K1×2, K2×8 |
| 3 | Static Testing | 80 phút | K1×3, K2×3 |
| 4 | Test Analysis and Design | 390 phút | K2×8, K3×5 |
| 5 | Managing the Test Activities | 335 phút | K1×3, K2×7, K3×3 |
| 6 | Test Tools | 20 phút | K1×1, K2×1 |

**K-level** (Cognitive level):
- **K1 — Remember**: Nhớ, nhận diện thuật ngữ (*recall, identify, recognize*).
- **K2 — Understand**: Hiểu, giải thích, so sánh (*explain, compare, classify, summarize, distinguish*).
- **K3 — Apply**: Áp dụng kỹ thuật để sinh ra test case (*use, apply, prepare*).

---

# Chương 1 — Fundamentals of Testing (Kiến thức nền tảng)

## Keywords cần nhớ
`coverage, debugging, defect, error, failure, quality, quality assurance, root cause, test analysis, test basis, test case, test completion, test condition, test control, test data, test design, test execution, test implementation, test monitoring, test object, test objective, test planning, test procedure, test process, test result, testing, testware, traceability, validation, verification`

## Learning Objectives
| LO | K | Nội dung |
|----|---|----------|
| FL-1.1.1 | K1 | Xác định typical test objectives |
| FL-1.1.2 | K2 | Phân biệt testing vs debugging |
| FL-1.2.1 | K2 | Nêu ví dụ tại sao testing là cần thiết |
| FL-1.2.2 | K1 | Nhớ quan hệ giữa testing và QA |
| FL-1.2.3 | K2 | Phân biệt root cause, error, defect, failure |
| FL-1.3.1 | K2 | Giải thích 7 testing principles |
| FL-1.4.1–5 | K2 | Test activities, context, testware, traceability, roles |
| FL-1.5.1 | K2 | Generic skills cho tester |
| FL-1.5.2 | K1 | Whole team approach |
| FL-1.5.3 | K2 | Lợi ích & hạn chế của independence of testing |

---

## 1.1 What is Testing?

**Testing** = tập hợp hoạt động để **discover defects** và **evaluate quality** của work products (test objects).

Quan niệm sai phổ biến:
- Testing chỉ là chạy phần mềm → **SAI**. Bao gồm cả planning, analysis, design, implementation, execution, completion.
- Testing chỉ là verification → **SAI**. Testing bao gồm cả **verification** (đáp ứng specs) và **validation** (đáp ứng nhu cầu người dùng).

**Dynamic vs Static Testing**:
- **Dynamic**: chạy code.
- **Static**: review + static analysis, không chạy code.

### 1.1.1 Test Objectives (9 mục tiêu tiêu biểu)
1. Evaluate work products (requirements, user stories, designs, code)
2. Cause failures and find defects
3. Ensure required coverage
4. Reduce risk of inadequate quality
5. Verify specified requirements are fulfilled
6. Verify compliance (contractual, legal, regulatory)
7. Provide information for stakeholders to make decisions
8. Build confidence in quality
9. Validate completeness and expected behavior

### 1.1.2 Testing vs Debugging
| Testing | Debugging |
|---------|-----------|
| Trigger failures / find defects | Finding + fixing defects |
| Là hoạt động của tester | Thường làm bởi developer |
| Sau dynamic testing → debugging để tìm nguyên nhân | Quy trình: **Reproduce → Diagnose → Fix** |
| Sau khi fix → **confirmation testing** (lý tưởng: cùng người test ban đầu) + có thể **regression testing** | |

> **Lưu ý**: Trong static testing, defect được tìm **trực tiếp** → không cần reproduce/diagnose.

---

## 1.2 Why is Testing Necessary?

### 1.2.1 Đóng góp của testing
- Cost-effective means to detect defects.
- Đánh giá chất lượng tại nhiều pha SDLC → hỗ trợ release decision.
- Đại diện gián tiếp cho người dùng (thay thế việc có user thật trong dev).
- Đáp ứng yêu cầu hợp đồng/luật pháp/quy chuẩn.

### 1.2.2 Testing vs QA
| Testing | Quality Assurance (QA) |
|---------|------------------------|
| **Product-oriented**, corrective | **Process-oriented**, preventive |
| Là 1 dạng quality **control** | Bao quát cả dev & test process |
| Focus: đạt chất lượng | Focus: đảm bảo process tốt → sản phẩm tốt |
| Trách nhiệm của tester | Trách nhiệm của **mọi người** trên dự án |

### 1.2.3 Error / Defect / Failure / Root Cause
- **Error (mistake)**: con người gây ra → sinh ra...
- **Defect (fault, bug)**: trong work product → khi thực thi...
- **Failure**: behavior khác với mong đợi.
- **Root cause**: lý do gốc rễ (VD: thiếu training). Tìm qua **root cause analysis**.

> Không phải defect nào cũng gây failure. Failure cũng có thể do môi trường (bức xạ, điện từ).

---

## 1.3 Seven Testing Principles ⭐ (BẮT BUỘC NHỚ)

| # | Principle | Ý nghĩa |
|---|-----------|---------|
| 1 | **Testing shows the presence, not the absence of defects** | Testing không chứng minh được không có lỗi |
| 2 | **Exhaustive testing is impossible** | Dùng techniques + risk-based + prioritization |
| 3 | **Early testing saves time and money** | Shift left — cả static + dynamic |
| 4 | **Defects cluster together** | Pareto — ít components chứa phần lớn defects |
| 5 | **Tests wear out** (Pesticide paradox) | Test lặp lại sẽ mất hiệu quả → cần sửa/thêm test mới |
| 6 | **Testing is context dependent** | Không có 1 approach duy nhất |
| 7 | **Absence-of-defects fallacy** | Không defect ≠ hệ thống thành công (cần validation) |

---

## 1.4 Test Activities, Testware, Test Roles

### 1.4.1 Test Activities (7 hoạt động) — thường **iterative hoặc parallel**
1. **Test planning** — định nghĩa test objectives và approach.
2. **Test monitoring & control** — theo dõi tiến độ và điều chỉnh.
3. **Test analysis** — "**What to test?**" → xác định test conditions, coverage items.
4. **Test design** — "**How to test?**" → tạo test cases, testware, test data requirements.
5. **Test implementation** — tạo testware thực tế: test procedures, scripts, suites, data, environment.
6. **Test execution** — chạy theo schedule, so sánh kết quả actual vs expected, log.
7. **Test completion** — milestone: report, archive testware, lessons learned.

### 1.4.2 Test Process in Context — Các yếu tố ảnh hưởng
Stakeholders, team members, business domain, technical factors, project constraints, organizational factors, SDLC, tools.

### 1.4.3 Testware (work products theo từng activity)
| Activity | Work products |
|----------|---------------|
| Planning | test plan, schedule, risk register, entry/exit criteria |
| Monitoring/Control | test progress reports, control directives |
| Analysis | test conditions, defect reports |
| Design | test cases, test charters, coverage items, data requirements |
| Implementation | test procedures, scripts, suites, data, environment items (stubs, drivers, simulators) |
| Execution | test logs, defect reports |
| Completion | test completion report, action items, lessons learned |

### 1.4.4 Traceability (test basis ↔ testware)
- Test cases → requirements (phủ hết chưa?)
- Test results → risks (đánh giá residual risk).
- Hỗ trợ audit, IT governance, báo cáo dễ hiểu cho stakeholder.

### 1.4.5 Roles in Testing (2 vai trò chính)
- **Test Management role**: planning, monitoring, control, completion. Có thể là team leader, manager, hoặc chia sẻ với Agile team.
- **Testing role**: analysis, design, implementation, execution.

> 1 người có thể kiêm cả 2 vai trò.

---

## 1.5 Essential Skills & Good Practices

### 1.5.1 Generic Skills
- Testing knowledge
- Thoroughness, carefulness, curiosity, attention to detail, being methodical
- Communication skills, active listening, team player
- Analytical thinking, critical thinking, creativity
- Technical knowledge
- Domain knowledge

> Tester = người mang tin xấu → communication skill rất quan trọng để tránh bị xem là phá hoại.

### 1.5.2 Whole Team Approach
Xuất phát từ **Extreme Programming (XP)**. Mọi member chịu trách nhiệm chất lượng. Lợi ích: team dynamics, collaboration, synergy.
> Không phải lúc nào cũng phù hợp (VD: safety-critical cần high independence).

### 1.5.3 Independence of Testing
4 cấp độ:
1. No independence — author tự test
2. Some independence — peers trong cùng team
3. High independence — tester ngoài team nhưng trong tổ chức
4. Very high independence — tester ngoài tổ chức

| Benefits | Drawbacks |
|----------|-----------|
| Bias khác → tìm lỗi khác | Cô lập, giao tiếp kém |
| Verify/challenge/disprove assumptions | Developer giảm trách nhiệm chất lượng |
| | Bị xem như bottleneck |

---

# Chương 2 — Testing Throughout the SDLC

## Keywords
`acceptance testing, black-box testing, component integration testing, component testing, confirmation testing, functional testing, integration testing, maintenance testing, non-functional testing, regression testing, shift left, system integration testing, system testing, test level, test object, test type, white-box testing`

## Learning Objectives
| LO | K | Nội dung |
|----|---|----------|
| FL-2.1.1 | K2 | Tác động của SDLC lên testing |
| FL-2.1.2 | K1 | Good testing practices cho mọi SDLC |
| FL-2.1.3 | K1 | Test-first approaches (TDD, ATDD, BDD) |
| FL-2.1.4 | K2 | DevOps tác động lên testing |
| FL-2.1.5 | K2 | Shift left |
| FL-2.1.6 | K2 | Retrospectives và process improvement |
| FL-2.2.1 | K2 | Phân biệt test levels |
| FL-2.2.2 | K2 | Phân biệt test types |
| FL-2.2.3 | K2 | Confirmation vs regression testing |
| FL-2.3.1 | K2 | Tóm tắt maintenance testing và triggers |

---

## 2.1 Testing in Context of SDLC

### SDLC models
- **Sequential**: waterfall, V-model.
- **Iterative**: spiral, prototyping.
- **Incremental**: Unified Process.
- **Agile methods**: Scrum, Kanban, XP, Lean IT, FDD, DDD.
- **Test-first**: TDD, ATDD, BDD.

### 2.1.1 Impact of SDLC on testing
Tác động vào: scope/timing, level of detail, techniques/approach, automation, roles.

### 2.1.2 Good Testing Practices (áp dụng cho mọi SDLC)
- Mọi dev activity đều có testing activity tương ứng.
- Mỗi test level có mục tiêu riêng → tránh redundancy.
- Test analysis/design bắt đầu **sớm** trong SDLC (early testing principle).
- Tester review work products ngay khi có bản nháp (shift left).

### 2.1.3 Testing as a Driver (Test-first approaches)
| Approach | Đặc điểm |
|----------|----------|
| **TDD** (Test-Driven Development) | Tests viết trước → code để pass test → refactor |
| **ATDD** (Acceptance Test-Driven Development) | Derive tests từ acceptance criteria, viết trước khi code |
| **BDD** (Behavior-Driven Development) | Ngôn ngữ tự nhiên **Given/When/Then** → auto-translate thành executable tests |

### 2.1.4 DevOps and Testing
DevOps = sự phối hợp giữa dev (bao gồm testing) và operations. Quan trọng: **CI (Continuous Integration)**, **CD (Continuous Delivery)**.

**Benefits**: fast feedback, shift left, automated processes, visibility on non-functional, giảm regression risk.
**Risks**: phải thiết lập pipeline, maintain CI/CD tools, cần resource cho automation.

> Manual testing vẫn cần (đặc biệt từ góc nhìn user).

### 2.1.5 Shift Left
Test **sớm** hơn trong SDLC. Practices:
- Review specs từ góc nhìn tester
- Viết test case trước khi viết code
- CI/CD với automated component tests
- Static analysis trước dynamic testing
- Non-functional testing từ component level

> Shift left có thể **tăng effort/cost sớm** nhưng tiết kiệm về sau.

### 2.1.6 Retrospectives
Cuối project/iteration/release, thảo luận:
- Cái gì thành công → giữ lại
- Cái gì chưa tốt → cải tiến
- Cách triển khai cải tiến

**Lợi ích**: tăng effectiveness, chất lượng testware, team bonding, improve test basis, cooperation giữa dev/test.

---

## 2.2 Test Levels and Test Types

### 2.2.1 Test Levels (5 levels)
| Level | Also known as | Mô tả | Thực hiện bởi |
|-------|---------------|-------|---------------|
| **Component testing** | Unit testing | Test component cô lập, cần harnesses/frameworks | Developer |
| **Component integration testing** | Unit integration | Test interface giữa các components (bottom-up, top-down, big-bang) | Developer |
| **System testing** | — | Test toàn bộ hệ thống (functional + non-functional), end-to-end | Test team độc lập |
| **System integration testing** | — | Test interface giữa system và external systems/services | |
| **Acceptance testing** | UAT | Validation, demo readiness for deployment | End users/business |

Các dạng acceptance testing: **UAT, operational acceptance, contractual, regulatory, alpha, beta**.

Phân biệt test levels qua: test object, test objectives, test basis, defects/failures, approach/responsibilities.

### 2.2.2 Test Types (4 types trong syllabus)
| Type | Mô tả |
|------|-------|
| **Functional testing** | "What" — functional completeness/correctness/appropriateness |
| **Non-functional testing** | "How well" — ISO/IEC 25010: **performance efficiency, compatibility, usability, reliability, security, maintainability, portability, safety** |
| **Black-box testing** | Specification-based, không xem internal |
| **White-box testing** | Structure-based, dựa trên code/architecture |

> Tất cả test types áp dụng được ở mọi test level (focus khác nhau).

### 2.2.3 Confirmation vs Regression Testing
| | Confirmation | Regression |
|---|--------------|------------|
| **Mục đích** | Xác nhận defect đã được fix | Xác nhận không có hậu quả xấu từ thay đổi |
| **Làm khi nào** | Sau fix | Sau mọi thay đổi (fix, enhancement) |
| **Phạm vi** | Test bị fail trước đó + test mới cho fix | Có thể lan sang components/systems khác |
| **Automation** | | **Rất thích hợp** automate (chạy nhiều lần) |

> Trước regression nên làm **impact analysis**.

---

## 2.3 Maintenance Testing

Categories: **corrective, adaptive** (thay đổi môi trường), **perfective** (performance/maintainability).

**Scope** phụ thuộc: risk của thay đổi, kích thước hệ thống, kích thước thay đổi.

**Triggers**:
- **Modifications**: enhancements, corrective changes, hot fixes.
- **Upgrades/migrations**: chuyển platform, data conversion.
- **Retirement**: end of life → test data archiving, restore/retrieval.

---

# Chương 3 — Static Testing

## Keywords
`anomaly, dynamic testing, formal review, informal review, inspection, review, static analysis, static testing, technical review, walkthrough`

## Learning Objectives
| LO | K | Nội dung |
|----|---|----------|
| FL-3.1.1 | K1 | Work products kiểm tra được bằng static testing |
| FL-3.1.2 | K2 | Giá trị của static testing |
| FL-3.1.3 | K2 | So sánh static vs dynamic testing |
| FL-3.2.1 | K1 | Lợi ích của early & frequent feedback |
| FL-3.2.2 | K2 | Hoạt động của review process |
| FL-3.2.3 | K1 | Trách nhiệm của các vai trò chính trong review |
| FL-3.2.4 | K2 | So sánh các review types |
| FL-3.2.5 | K1 | Yếu tố thành công của review |

---

## 3.1 Static Testing Basics

Không execute phần mềm. Gồm:
- **Reviews**: manual examination
- **Static analysis**: tools (code analysis, spelling, readability)

### 3.1.1 Work Products có thể static test
Requirements docs, source code, test plans, test cases, product backlog items, test charters, contracts, models.

> Work product **không** phù hợp: khó interpret (VD: executable code bên thứ 3).

### 3.1.2 Value of Static Testing
- Tìm defects **sớm** → fulfill early testing principle.
- Tìm defects mà dynamic không phát hiện được (VD: unreachable code, design patterns sai).
- Xây dựng **shared understanding** giữa stakeholders.
- Giảm cost tổng thể của dự án.

### 3.1.3 Static vs Dynamic — so sánh ⭐
| | Static | Dynamic |
|---|--------|---------|
| Chạy code? | Không | Có |
| Tìm defect | Trực tiếp | Gián tiếp (qua failure) |
| Work product | Executable & non-executable | Chỉ executable |
| Quality chars | Maintainability | Performance efficiency |

**Defects dễ tìm bằng static**:
- Defects trong requirements (ambiguity, omissions, contradictions)
- Design defects (DB structure kém)
- Coding defects (undefined variables, unreachable code, complexity)
- Deviations từ standards
- Interface specification sai
- Security vulnerabilities (buffer overflows)
- Gaps/inaccuracies trong test basis coverage

---

## 3.2 Feedback and Review Process

### 3.2.1 Benefits of Early & Frequent Feedback
- Truyền thông sớm về quality problems.
- Ngăn hiểu lầm về requirements.
- Focus vào features có giá trị cao.

### 3.2.2 Review Process Activities (theo ISO/IEC 20246)
1. **Planning** — scope, quality chars, exit criteria, effort, timeframe.
2. **Review initiation** — đảm bảo mọi người đã sẵn sàng.
3. **Individual review** — mỗi reviewer tự review (dùng checklist/scenario), log anomalies.
4. **Communication and analysis** — phân tích anomalies (không phải tất cả đều là defects), quyết định status/ownership/actions.
5. **Fixing and reporting** — tạo defect report, tiếp tục đến khi đạt exit criteria.

### 3.2.3 Roles & Responsibilities
| Role | Responsibility |
|------|----------------|
| **Manager** | Quyết định review, cung cấp resources |
| **Author** | Tạo và sửa work product |
| **Moderator** (facilitator) | Điều phối meeting, giữ môi trường an toàn |
| **Scribe** (recorder) | Ghi anomalies, quyết định |
| **Reviewer** | Thực hiện review |
| **Review leader** | Chịu trách nhiệm tổng thể, quyết định ai tham gia |

> Trong **Inspection**, author **không được** kiêm review leader hoặc scribe.

### 3.2.4 Review Types ⭐
| Type | Formality | Leader | Objective |
|------|-----------|--------|-----------|
| **Informal review** | Thấp nhất | — | Detect anomalies, không có quy trình |
| **Walkthrough** | Trung bình | **Author** | Đánh giá chất lượng, educate, consensus, ideas |
| **Technical review** | Cao | **Moderator** | Technical decisions, consensus, detect anomalies |
| **Inspection** | Cao nhất | Trained leader (không phải author) | Tìm **tối đa** anomalies, collect metrics |

### 3.2.5 Success Factors
- Objectives và exit criteria rõ ràng (KHÔNG được đánh giá người tham gia).
- Chọn đúng review type.
- Review **từng chunk nhỏ** (tránh mất tập trung).
- Feedback kiến tạo cho stakeholders/authors.
- Đủ thời gian chuẩn bị.
- Hỗ trợ từ management.
- Review là một phần **văn hóa** tổ chức.
- Training đầy đủ.
- Facilitating meetings.

---

# Chương 4 — Test Analysis and Design ⭐ (chương **QUAN TRỌNG NHẤT** — 390 phút, nhiều K3)

## Keywords
`acceptance criteria, acceptance test-driven development, black-box test technique, boundary value analysis, branch coverage, checklist-based testing, collaboration-based test approach, coverage, coverage item, decision table testing, equivalence partitioning, error guessing, experience-based test technique, exploratory testing, state transition testing, statement coverage, test technique, white-box test technique`

## Learning Objectives
| LO | K | Nội dung |
|----|---|----------|
| FL-4.1.1 | K2 | Phân biệt black-box / white-box / experience-based |
| FL-4.2.1–4 | **K3** | **Use** Equivalence Partitioning, Boundary Value Analysis, Decision Table, State Transition |
| FL-4.3.1–3 | K2 | Statement, branch testing, giá trị white-box |
| FL-4.4.1–3 | K2 | Error guessing, exploratory, checklist-based |
| FL-4.5.1 | K2 | User stories viết collaboratively |
| FL-4.5.2 | K2 | Classify acceptance criteria formats |
| FL-4.5.3 | **K3** | **Use ATDD** để derive test cases |

---

## 4.1 Test Techniques Overview

| Type | Còn gọi | Based on | Mục đích |
|------|---------|----------|----------|
| **Black-box** | Specification-based | Specified behavior (không biết nội bộ) | Check behavior vs specification |
| **White-box** | Structure-based | Internal structure (code, architecture) | Cover implementation |
| **Experience-based** | — | Knowledge + experience of tester | Bổ sung cho 2 loại trên |

---

## 4.2 Black-Box Test Techniques ⭐ K3

### 4.2.1 Equivalence Partitioning (EP)
Chia data thành **partitions** — giả định: mọi phần tử trong partition được xử lý giống nhau.

- **Valid partition** / **Invalid partition** — partitions **không được overlap**, **non-empty**.
- **Coverage items = partitions**. Coverage = partitions exercised ÷ total partitions.
- Nhiều input → **Each Choice coverage**: mỗi partition từ mỗi bộ exercised ít nhất 1 lần.

### 4.2.2 Boundary Value Analysis (BVA)
Chỉ dùng cho **ordered partitions**. Min/max của partition = boundary values.
> Lý do: dev hay sai ở boundaries.

**2-value BVA**: mỗi boundary có 2 coverage items (boundary + neighbor partition gần nhất).
**3-value BVA**: 3 coverage items (boundary + 2 neighbors cả 2 phía).

> 3-value BVA **mạnh hơn** 2-value (phát hiện được defect mà 2-value bỏ sót).

**Ví dụ**: `if (x ≤ 10)` sai thành `if (x = 10)`:
- 2-value BVA: x=10, x=11 → không phát hiện.
- 3-value BVA: x=9 → phát hiện.

### 4.2.3 Decision Table Testing
Dùng cho implementation phụ thuộc tổ hợp conditions (business rules phức tạp).

**Notation conditions**:
- **T**: condition satisfied
- **F**: condition not satisfied
- **—**: irrelevant
- **N/A**: infeasible

**Notation actions**:
- **X**: action occurs
- **Blank**: không occur

**Loại tables**:
- **Limited-entry**: chỉ T/F
- **Extended-entry**: ranges, equivalence partitions

**Coverage items = feasible columns**. 100% = chạy hết columns feasible.

### 4.2.4 State Transition Testing
Dùng **state diagram** hoặc **state table**.
- Transition: `event [guard condition] / action`
- State table show cả invalid transitions (empty cells).

**3 coverage criteria** (mức độ tăng dần):
| Criterion | Coverage items | Mạnh hơn |
|-----------|----------------|----------|
| **All states coverage** | Mọi state | Yếu nhất |
| **Valid transitions coverage** (0-switch) | Mọi valid transitions | Trung bình — phổ biến nhất |
| **All transitions coverage** | Mọi transitions (valid + invalid) | Mạnh nhất (yêu cầu safety-critical) |

> All transitions coverage **subsumes** cả all states + valid transitions.

---

## 4.3 White-Box Test Techniques

### 4.3.1 Statement Testing & Coverage
- Coverage items = **executable statements**.
- Coverage = statements exercised ÷ total executable.
- 100% statement coverage → mọi statement chạy ít nhất 1 lần.

> 100% statement KHÔNG đảm bảo mọi branch đã được test, KHÔNG bắt được mọi data-dependent defects.

### 4.3.2 Branch Testing & Coverage
- Branch = transfer of control giữa 2 nodes trong control flow graph (conditional hoặc unconditional).
- 100% branch → mọi branch được chạy.

> **Branch coverage subsumes statement coverage** (nhưng không ngược lại).

### 4.3.3 Value of White-box Testing
- Xem xét toàn bộ implementation → tìm cả defects ngay khi spec mơ hồ/outdated.
- **Weakness**: không phát hiện defects **of omission** (thiếu feature).
- Dùng được trong static testing (dry run code).
- Cho objective measure of coverage (black-box không cho).

---

## 4.4 Experience-Based Test Techniques

### 4.4.1 Error Guessing
Đoán lỗi dựa trên:
- Lịch sử ứng dụng đã hoạt động thế nào
- Kiểu lỗi dev hay mắc
- Failures trong app tương tự

Các kiểu: input (không accept), output (sai format), logic (thiếu cases), computation (sai operand), interface (parameter mismatch), data (wrong init).

**Fault attacks** = cách triển khai error guessing có hệ thống.

### 4.4.2 Exploratory Testing
Test được **thiết kế, execute, đánh giá đồng thời** — vừa học về test object vừa test.

**Session-based testing**:
- Time-boxed session
- **Test charter** guide session
- **Debriefing** cuối session
- **Test session sheets** ghi lại steps + discoveries

**Khi nào hữu ích**: spec ít/chưa đủ, time pressure, bổ sung cho formal techniques.

### 4.4.3 Checklist-Based Testing
Design + execute tests dựa trên checklist.
- Checklist xây từ: experience, knowledge of user, hiểu cách software fails.
- Thường là câu hỏi (Yes/No check).
- **KHÔNG** chứa items có thể auto-check, items phù hợp entry/exit criteria, hoặc quá chung chung.
- Cần cập nhật thường xuyên.

---

## 4.5 Collaboration-Based Test Approaches

Focus vào **defect avoidance** thông qua collaboration + communication.

### 4.5.1 Collaborative User Story Writing — 3 C's (Jeffries 2000)
| C | Ý nghĩa |
|---|---------|
| **Card** | Medium mô tả user story |
| **Conversation** | Cách phần mềm sẽ được dùng |
| **Confirmation** | Acceptance criteria |

**Format phổ biến**: *"As a [role], I want [goal], so that I can [business value]"*

**INVEST** — user story tốt: **I**ndependent, **N**egotiable, **V**aluable, **E**stimable, **S**mall, **T**estable.

### 4.5.2 Acceptance Criteria — 2 formats phổ biến
| Format | Mô tả |
|--------|-------|
| **Scenario-oriented** | Given/When/Then (BDD format) |
| **Rule-oriented** | Bullet points verification list, hoặc input-output mapping |

**Mục đích**: define scope, consensus, positive + negative scenarios, basis cho acceptance testing, planning/estimation.

### 4.5.3 Acceptance Test-Driven Development (ATDD) ⭐ K3
Test-first approach. Steps:
1. **Specification workshop** — user story + acceptance criteria được phân tích/thảo luận/viết bởi team.
2. Tạo test cases (cả team hoặc tester riêng) dựa trên acceptance criteria.
3. Order: **positive tests** trước → **negative** → **non-functional**.
4. Test cases bằng ngôn ngữ tự nhiên (preconditions, inputs, postconditions).
5. Test cases **phủ hết characteristics** của user story, **không vượt quá** story.
6. Automation: nếu format support, dev tự automate khi implement → acceptance tests = executable requirements.

---

# Chương 5 — Managing the Test Activities

## Keywords
`defect management, defect report, entry criteria, exit criteria, product risk, project risk, risk, risk analysis, risk assessment, risk control, risk identification, risk level, risk management, risk mitigation, risk monitoring, risk-based testing, test approach, test completion report, test control, test monitoring, test plan, test planning, test progress report, test pyramid, test strategy, testing quadrants`

## Learning Objectives
| LO | K | Nội dung |
|----|---|----------|
| FL-5.1.1 | K2 | Purpose & content của test plan |
| FL-5.1.2 | K1 | Tester đóng góp vào iteration/release planning |
| FL-5.1.3 | K2 | So sánh entry vs exit criteria |
| FL-5.1.4 | **K3** | **Use** estimation techniques |
| FL-5.1.5 | **K3** | **Apply** test case prioritization |
| FL-5.1.6 | K1 | Test pyramid |
| FL-5.1.7 | K2 | Testing quadrants |
| FL-5.2.1 | K1 | Risk level = likelihood × impact |
| FL-5.2.2 | K2 | Project risk vs product risk |
| FL-5.2.3 | K2 | Product risk analysis ảnh hưởng thoroughness/scope |
| FL-5.2.4 | K2 | Measures cho product risk |
| FL-5.3.1 | K1 | Test metrics |
| FL-5.3.2 | K2 | Purpose/content/audience của reports |
| FL-5.3.3 | K2 | Communicate status |
| FL-5.4.1 | K2 | Configuration management |
| FL-5.5.1 | **K3** | **Prepare** defect report |

---

## 5.1 Test Planning

### 5.1.1 Test Plan Content
- **Context**: test scope, objectives, test basis
- **Assumptions & constraints**
- **Stakeholders**: roles, responsibilities, hiring/training needs
- **Communication**: forms, frequency, templates
- **Risk register**: product + project risks
- **Test approach**: test levels, types, techniques, deliverables, entry/exit criteria, independence, metrics, data requirements, environment, deviations
- **Budget & schedule**

*(Reference: ISO/IEC/IEEE 29119-3)*

### 5.1.2 Tester trong Iteration/Release Planning (Agile)
**Release planning**: write testable user stories, acceptance criteria, project/quality risk analysis, estimate effort, test approach.
**Iteration planning**: detailed risk analysis, testability, break stories into testing tasks, estimate task effort.

### 5.1.3 Entry vs Exit Criteria ⭐
| | Entry Criteria | Exit Criteria |
|---|----------------|---------------|
| Định nghĩa | Preconditions để bắt đầu activity | Điều kiện để **declare completed** |
| Ví dụ | Resources (people, tools, env, data, budget, time), testware availability, initial quality | Coverage achieved, defect density, số failed test cases, binary yes/no (all smoke tests passed, regression automated) |
| Agile name | **Definition of Ready** | **Definition of Done** |

> Hết time/budget cũng có thể coi là exit criteria hợp lệ (nếu stakeholder chấp nhận risk).

### 5.1.4 Estimation Techniques (4 techniques) ⭐ K3
| Technique | Based on | Mô tả |
|-----------|----------|-------|
| **Ratios** | Metrics (historical) | VD: dev:test = 3:2 → dev 600 person-days → test 400 |
| **Extrapolation** | Metrics | Dùng data của iterations đầu, extrapolate (thích hợp iterative) |
| **Wideband Delphi** | Expert | Expert estimate riêng → thảo luận → lặp đến consensus. Variant: **Planning Poker** |
| **Three-point estimation** | Expert | E = (a + 4m + b)/6, SD = (b−a)/6. a=optimistic, m=most likely, b=pessimistic |

**Ví dụ 3-point**: a=6, m=9, b=18 → E = (6 + 36 + 18)/6 = 10, SD = 2 → **10 ± 2** person-hours.

### 5.1.5 Test Case Prioritization ⭐ K3
| Strategy | Mô tả |
|----------|-------|
| **Risk-based** | Dựa trên kết quả risk analysis → test cases cho risk cao nhất chạy trước |
| **Coverage-based** | Test cases đạt coverage cao nhất chạy trước. Variant: **additional coverage prioritization** |
| **Requirements-based** | Dựa trên priority của requirements (định bởi stakeholders) |

> Cân nhắc **dependencies** giữa test cases + availability của resources/tools/env.

### 5.1.6 Test Pyramid (Cohn 2009)
- Bottom (unit tests): nhỏ, nhanh, nhiều, isolated
- Middle (service tests / integration): trung bình
- Top (UI / end-to-end): lớn, chậm, ít

> Cao hơn = granularity thấp hơn, isolation thấp hơn, execution time cao hơn.

### 5.1.7 Testing Quadrants (Marick, Crispin) — Agile
2 trục: **business facing ↔ technology facing**, **support the team ↔ critique the product**.

| Q | Facing | Goal | Tests |
|---|--------|------|-------|
| **Q1** | Technology | Support team | Component tests, component integration tests (automated, CI) |
| **Q2** | Business | Support team | Functional tests, user story tests, UX prototypes, API testing, simulations (manual/auto) |
| **Q3** | Business | Critique product | Exploratory, usability, UAT (manual) |
| **Q4** | Technology | Critique product | Smoke tests, non-functional tests (automated) |

---

## 5.2 Risk Management

### 5.2.1 Risk Attributes
**Risk level = Risk likelihood × Risk impact**
- Likelihood: 0 < P < 1
- Impact: harm/consequences

### 5.2.2 Project Risks vs Product Risks ⭐
| Project Risks | Product Risks |
|---------------|---------------|
| Liên quan **management/control** | Liên quan **quality characteristics** (ISO 25010) |
| VD: delays, estimates inaccurate, cost cutting, skill issues, communication, scope creep, supplier failure | VD: missing/wrong functionality, calculation errors, runtime errors, poor UX, security vulnerabilities |
| Hậu quả: schedule, budget, scope | Hậu quả: user dissatisfaction, revenue loss, reputation, legal penalties, damages/death |

### 5.2.3 Product Risk Analysis
= Risk identification + Risk assessment.
- **Identification**: brainstorming, workshops, interviews, cause-effect diagrams.
- **Assessment**: categorize, determine likelihood/impact/level, prioritize, propose mitigation.
- **Quantitative**: multiplication likelihood × impact.
- **Qualitative**: risk matrix.

**Ảnh hưởng đến**:
- Test scope
- Test levels/types
- Test techniques + coverage
- Test effort estimation
- Prioritization (tìm critical defects sớm)
- Additional activities ngoài testing

### 5.2.4 Product Risk Control
= Risk mitigation + Risk monitoring.

**Response options**: mitigation by testing, risk acceptance, risk transfer, contingency plan.

**Mitigation actions via testing**:
- Chọn testers có experience/skills phù hợp
- Apply appropriate **independence of testing**
- Reviews + static analysis
- Appropriate **techniques + coverage**
- Appropriate **test types** cho quality characteristics
- Dynamic testing, bao gồm regression

---

## 5.3 Test Monitoring, Test Control, Test Completion

- **Test monitoring**: thu thập info, đánh giá progress/exit criteria.
- **Test control**: actions/guidance để đạt testing hiệu quả (re-prioritize, re-evaluate entry/exit, adjust schedule, add resources).
- **Test completion**: tại milestones (test level done, iteration done, project cancelled, release, maintenance release done).

### 5.3.1 Test Metrics (7 loại)
1. **Project progress metrics** — task completion, resource usage, test effort
2. **Test progress metrics** — test case impl progress, env prep, test cases run/not run/passed/failed, execution time
3. **Product quality metrics** — availability, response time, MTTF
4. **Defect metrics** — number/priorities of defects found/fixed, defect density, defect detection %
5. **Risk metrics** — residual risk level
6. **Coverage metrics** — requirements coverage, code coverage
7. **Cost metrics** — cost of testing, cost of quality

### 5.3.2 Test Reports
| | Test Progress Report | Test Completion Report |
|---|----------------------|------------------------|
| Tần suất | Regular (daily/weekly) | 1 lần khi hoàn thành |
| Audience | Stakeholders | Broader stakeholders |
| Content | Testing period, progress (ahead/behind), impediments, metrics, new/changed risks, next period plan | Summary, testing & quality vs test plan, deviations, impediments, metrics, unmitigated risks/defects, lessons learned |

*(Reference: ISO/IEC/IEEE 29119-3 — gọi là **test status reports** và test completion reports)*

### 5.3.3 Communicating Status — options
- Verbal communication
- Dashboards (CI/CD, task boards, burn-down charts)
- Electronic channels (email, chat)
- Online documentation
- Formal test reports

> Formal communication nhiều hơn khi team distributed.

---

## 5.4 Configuration Management (CM)

Mục đích: **identify, control, track** work products (test plans, strategies, conditions, cases, scripts, results, logs, reports).

CM đảm bảo:
- Config items uniquely identified, version controlled, tracked
- Traceability throughout test process
- Documentation và software items tham chiếu unambiguously trong testware

**CI/CD/CDEP** thường có automated CM trong DevOps pipeline.

---

## 5.5 Defect Management ⭐ K3 (Prepare a defect report)

**Mục tiêu** của defect report:
1. Đủ info để responsible team giải quyết
2. Tracking quality của work product
3. Ideas cải tiến dev/test process

### Nội dung 1 defect report (dynamic testing) — ⭐ BẮT BUỘC NHỚ
- **Unique identifier**
- **Title** — short summary của anomaly
- **Date** observed, issuing organization, author + role
- **Identification** của test object + test environment
- **Context** của defect (test case, test activity, SDLC phase, technique, checklist, test data)
- **Description of failure** — để reproduce, resolution, test steps, test logs, DB dumps, screenshots, recordings
- **Expected vs actual results**
- **Severity** (impact)
- **Priority** (để fix)
- **Status** — open, deferred, duplicate, waiting to be fixed, awaiting confirmation testing, re-opened, closed, rejected
- **References** (e.g., test case)

*(Reference: ISO/IEC/IEEE 29119-3 — gọi là **incident reports**)*

> Anomalies ≠ defects. Có thể là false positive, change request, behavior đúng.

---

# Chương 6 — Test Tools

## Learning Objectives
| LO | K | Nội dung |
|----|---|----------|
| FL-6.1.1 | K2 | Các loại tools support testing |
| FL-6.2.1 | K1 | Benefits + risks của test automation |

---

## 6.1 Tool Support for Testing — các loại tools

| Tool type | Mục đích |
|-----------|----------|
| **Test management** | Efficiency cho SDLC, requirements, tests, defects, config management |
| **Static testing** | Hỗ trợ reviews + static analysis |
| **Test design & implementation** | Generate test cases, data, procedures |
| **Test execution & coverage** | Automated execution, coverage measurement |
| **Non-functional testing** | Khó/không thể làm manual |
| **DevOps** | Pipeline, workflow tracking, automated build, CI/CD |
| **Collaboration** | Facilitate communication |
| **Scalability & deployment** | Virtual machines, containerization |
| **Khác** | Spreadsheet cũng là test tool trong context |

---

## 6.2 Benefits & Risks of Test Automation

### Benefits (7)
1. Save time — reduce repetitive manual work
2. Prevent human errors — consistency, repeatability
3. More objective assessment (coverage)
4. Easier access to test info — statistics, graphs
5. Reduced execution time — faster feedback, earlier defect detection
6. More time for testers để design tests tốt hơn

### Risks (8)
1. Unrealistic expectations
2. Inaccurate estimation (time, cost, effort)
3. Dùng tool khi manual phù hợp hơn
4. Dependence on tool quá mức → bỏ qua human critical thinking
5. Vendor dependency (vendor phá sản, ngừng hỗ trợ)
6. Open-source bị abandon
7. Tool không compatible với dev platform
8. Tool không comply với regulatory/safety standards

---

# Tổng kết các điểm hay ra thi

## "Cheat sheet" siêu nén

**1.** 7 principles **PHẢI NHỚ**: Presence/Exhaustive/Early/Cluster/Wear out/Context/Absence-of-defects fallacy.

**2.** Chuỗi nhân quả: **Error (human)** → **Defect (work product)** → **Failure (execution)** ← có thể do **environmental conditions**.

**3.** Testing ≠ Debugging. Debugging = **Reproduce → Diagnose → Fix**. Confirmation testing **sau** debug, lý tưởng cùng người test ban đầu.

**4.** Testing vs QA: **Product-oriented/corrective** vs **Process-oriented/preventive**.

**5.** Test levels (từ nhỏ đến lớn): **Component → Component Integration → System → System Integration → Acceptance**.

**6.** Test types: **Functional / Non-functional / Black-box / White-box**.

**7.** Non-functional (ISO 25010 — 8 characteristics): **Performance efficiency, Compatibility, Usability, Reliability, Security, Maintainability, Portability, Safety**.

**8.** 5 review types theo formality: Informal < Walkthrough < Technical Review < Inspection. Inspection: author **không** làm leader/scribe.

**9.** Black-box techniques (K3): **EP, BVA (2-value/3-value), Decision Table, State Transition**.

**10.** State transition coverage: **all states < valid transitions (0-switch) < all transitions**.

**11.** White-box: **Branch coverage subsumes Statement coverage** (branch 100% → statement 100%, không ngược).

**12.** Experience-based: Error guessing, Exploratory (session-based, test charter), Checklist-based.

**13.** 3 C's của user story: **Card, Conversation, Confirmation**. **INVEST** (Independent, Negotiable, Valuable, Estimable, Small, Testable).

**14.** Acceptance criteria formats: **Scenario-oriented (Given/When/Then)** vs **Rule-oriented**.

**15.** Test-first: **TDD** (code by tests), **ATDD** (tests from acceptance criteria), **BDD** (Given/When/Then).

**16.** Estimation: **Ratios, Extrapolation, Wideband Delphi** (Planning Poker variant), **Three-point** (E = (a+4m+b)/6, SD = (b−a)/6).

**17.** Prioritization: **Risk-based, Coverage-based, Requirements-based**.

**18.** Entry = Definition of Ready. Exit = Definition of Done.

**19.** **Risk level = likelihood × impact**. Project risks vs Product risks.

**20.** Defect report bắt buộc có: **ID, title, date, identification, context, description (to reproduce), expected vs actual, severity, priority, status, references**.

**21.** 4 Testing Quadrants: Q1 component (tech/support), Q2 functional (biz/support), Q3 exploratory/UAT (biz/critique), Q4 smoke/non-functional (tech/critique).

**22.** Test Pyramid (Cohn): unit (bottom, nhiều/nhanh) → service → UI (top, ít/chậm).

**23.** Whole team approach = **XP** practice. Independence: 4 levels (none → peers → outside team → outside org).

**24.** Maintenance triggers: **Modifications, Upgrades/Migrations, Retirement**.

**25.** Shift left = testing earlier in SDLC. DevOps: CI + CD + automated testing.

---

## Mẹo khi làm đề

- Chú ý từ khóa: "**confirm**" → confirmation testing (test lại defect đã fix), "**change**" → regression testing.
- BVA 3-value mạnh hơn 2-value → gặp câu hỏi "technique nào phát hiện được defect này" mà 2-value miss → chọn 3-value.
- "Defect không chạy code tìm được" → static testing.
- "Omission defects" (thiếu feature) → **black-box** phát hiện, white-box **KHÔNG**.
- "Cover business rules with combinations of conditions" → **Decision Table**.
- "Test based on events/states" → **State Transition**.
- Câu hỏi về role review: Author không bao giờ là **moderator/leader/scribe** trong Inspection.
- Nếu đề hỏi "K3 apply" → phải chọn đáp án thể hiện **sinh ra được test case**, không phải chỉ định nghĩa.

---

*Tổng hợp từ ISTQB CTFL Syllabus v4.0.1 (15.09.2024). Chúc bạn thi tốt!* 🎯
