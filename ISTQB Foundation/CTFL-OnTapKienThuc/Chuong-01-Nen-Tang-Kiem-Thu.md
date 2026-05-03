# Chương 1 — Fundamentals of Testing (Nền tảng kiểm thử)

> **Thời lượng syllabus**: 180 phút | **Trọng số**: ~26% bài thi
> **Ghi chú của giáo viên**: Đây là chương nền tảng nhất — mọi chương sau đều build on chapter này. Nắm chắc 7 Testing Principles và chuỗi Error→Defect→Failure là đủ để tránh bẫy thi.

---

## Mục lục
1. [Keywords giải thích](#keywords)
2. [Learning Objectives](#learning-objectives)
3. [1.1 Testing là gì?](#11-testing-là-gì)
4. [1.2 Tại sao Testing là cần thiết?](#12-tại-sao-testing-là-cần-thiết)
5. [1.3 Bảy nguyên tắc Testing](#13-bảy-nguyên-tắc-testing)
6. [1.4 Test Activities, Testware và Test Roles](#14-test-activities-testware-và-test-roles)
7. [1.5 Kỹ năng và Good Practices](#15-kỹ-năng-và-good-practices)
8. [Bẫy thi thường gặp](#bẫy-thi-thường-gặp)
9. [Câu hỏi luyện tập](#câu-hỏi-luyện-tập)
10. [Checklist ôn tập nhanh](#checklist-ôn-tập-nhanh)

---

## Keywords

| Thuật ngữ | Giải thích nhanh |
|-----------|-----------------|
| **Coverage** | Mức độ đã kiểm thử so với tổng thể (vd: bao nhiêu % requirements đã có test case) |
| **Debugging** | Quá trình tìm **nguyên nhân** và **sửa** defect — do developer làm, khác với testing |
| **Defect** (fault/bug) | Lỗi **tồn tại trong work product** (code, tài liệu) chưa xảy ra failure |
| **Error** (mistake) | **Con người mắc sai lầm** dẫn đến tạo ra defect |
| **Failure** | Behavior **sai lệch so với kỳ vọng** khi thực thi — kết quả quan sát được |
| **Quality** | Mức độ đáp ứng requirements và nhu cầu người dùng |
| **Quality Assurance (QA)** | Approach process-oriented, preventive — cải tiến process để tạo ra sản phẩm tốt |
| **Root cause** | **Nguyên nhân gốc rễ** của error (vd: thiếu training, deadline quá gấp) |
| **Test analysis** | "**What** to test?" — xác định test conditions từ test basis |
| **Test basis** | Tài liệu làm cơ sở để derive test cases (requirements, specs, designs, code) |
| **Test case** | Tập inputs, preconditions, expected results và postconditions để verify một behavior |
| **Test completion** | Hoạt động **kết thúc** test — report, archive, lessons learned |
| **Test condition** | Aspect/feature cần test (derived từ test basis) |
| **Test control** | Hành động điều chỉnh test dựa trên monitoring |
| **Test data** | Data cần thiết để thực thi test cases |
| **Test design** | "**How** to test?" — tạo test cases từ test conditions |
| **Test execution** | Chạy test và ghi nhận kết quả |
| **Test implementation** | Tạo testware thực tế (scripts, data, environment) |
| **Test monitoring** | Theo dõi tiến độ so với plan |
| **Test object** | Work product đang được test (ứng dụng, module, document) |
| **Test objective** | Mục tiêu của testing (find defects, build confidence, etc.) |
| **Test planning** | Định nghĩa approach và resources cho testing |
| **Test procedure** | Sequence các test cases theo thứ tự thực hiện |
| **Test process** | Tập hợp các test activities có cấu trúc |
| **Test result** | Kết quả sau khi chạy test (passed/failed + actual output) |
| **Testing** | Tập hợp activities **discover defects** và **evaluate quality** |
| **Testware** | Tất cả work products tạo ra trong quá trình testing |
| **Traceability** | Khả năng liên kết test basis ↔ testware (trace từ requirement đến test case) |
| **Validation** | Kiểm tra xem system có đáp ứng **nhu cầu người dùng** trong thực tế không |
| **Verification** | Kiểm tra xem system có đáp ứng **requirements đã chỉ định** không |

---

## Learning Objectives

| ID | K-Level | Nội dung cần đạt được |
|----|---------|----------------------|
| FL-1.1.1 | **K1** | Xác định (identify) các typical test objectives |
| FL-1.1.2 | **K2** | Phân biệt (differentiate) testing và debugging |
| FL-1.2.1 | **K2** | Nêu ví dụ (exemplify) tại sao testing là cần thiết |
| FL-1.2.2 | **K1** | Nhớ (recall) quan hệ giữa testing và QA |
| FL-1.2.3 | **K2** | Phân biệt (distinguish) root cause, error, defect, failure |
| FL-1.3.1 | **K2** | Giải thích (explain) 7 testing principles |
| FL-1.4.1 | **K2** | Giải thích các test activities và related tasks |
| FL-1.4.2 | **K2** | Giải thích tác động của context lên test process |
| FL-1.4.3 | **K2** | Phân biệt testware support các test activities |
| FL-1.4.4 | **K2** | Giải thích giá trị của traceability |
| FL-1.4.5 | **K2** | So sánh các roles trong testing |
| FL-1.5.1 | **K2** | Cho ví dụ về generic skills cần thiết |
| FL-1.5.2 | **K1** | Nhớ advantages của whole team approach |
| FL-1.5.3 | **K2** | Phân biệt lợi ích và hạn chế của independence of testing |

> 💡 **Tip**: Chương này không có K3 — đề chỉ hỏi "identify", "explain", "distinguish". Không cần apply kỹ thuật, chỉ cần **hiểu và phân biệt** các khái niệm.

---

## 1.1 Testing là gì?

### Định nghĩa cốt lõi

**Software testing** = tập hợp các activities nhằm:
1. **Discover defects** trong work products
2. **Evaluate quality** của software

> 🧠 **Hãy nhớ**: Test object = thứ đang được test. Không chỉ là code — có thể là requirements doc, design spec, user story, test plan...

### Hai hiểu lầm phổ biến — HAY RA ĐỀ

**Hiểu lầm 1**: *"Testing chỉ là chạy phần mềm và check kết quả"*
- **SAI**. Testing bao gồm cả **planning, analysis, design, implementation, execution, completion**.

**Hiểu lầm 2**: *"Testing chỉ là verification (kiểm tra theo specs)"*
- **SAI**. Testing bao gồm cả:
  - **Verification**: "Có đúng specifications không?" (đúng cái chúng ta đã cam kết build)
  - **Validation**: "Có đáp ứng nhu cầu thực tế của user không?" (đúng cái họ thực sự cần)

### Dynamic vs Static Testing

| | Dynamic Testing | Static Testing |
|---|----------------|----------------|
| Có chạy code? | **Có** | **Không** |
| Bao gồm | Executing test cases | Reviews + Static analysis |
| Ví dụ | Unit test, system test | Code review, inspection, linting |
| Tìm defect | Gián tiếp — qua **failure** | Trực tiếp — trong work product |

---

### 1.1.1 Test Objectives (9 mục tiêu)

Mục tiêu testing **thay đổi theo context** (test level, risks, SDLC, business context):

1. **Evaluate** work products — requirements, user stories, designs, code
2. **Cause failures** and **find defects**
3. **Ensure required coverage** của test object
4. **Reduce risk** of inadequate software quality
5. **Verify** specified requirements have been fulfilled
6. **Verify compliance** — contractual, legal, regulatory
7. **Provide information** to stakeholders for decisions
8. **Build confidence** in the quality of test object
9. **Validate** completeness and expected behavior

> 💡 **Mẹo nhớ**: 3 nhóm chính — (1) Tìm lỗi [2,3], (2) Đảm bảo chất lượng [1,4,5,6], (3) Thông tin & confidence [7,8,9].

---

### 1.1.2 Testing vs Debugging — Khác nhau quan trọng

```
Testing → phát hiện FAILURE → Debugging → tìm DEFECT → Fix → Confirmation Testing
```

| | Testing | Debugging |
|---|---------|-----------|
| **Làm gì** | Trigger failures / find defects trực tiếp | Tìm nguyên nhân → fix defect |
| **Ai làm** | **Tester** | **Developer** |
| **Khi nào** | Trước và sau fix | Sau khi testing phát hiện failure |
| **Static testing** | Tìm defect trực tiếp (không qua failure) | Sau static → không cần reproduce/diagnose |

**Debugging process (khi dynamic testing phát hiện failure)**:
1. **Reproduction** — tái tạo failure
2. **Diagnosis** — tìm defect gây ra failure
3. **Fix** — sửa defect

**Sau khi fix**:
- **Confirmation testing** (re-testing): verify fix đã resolve defect. *Lý tưởng: cùng người test ban đầu thực hiện.*
- **Regression testing**: verify fix không gây ra lỗi mới ở chỗ khác.

---

## 1.2 Tại sao Testing là cần thiết?

### 1.2.1 Đóng góp của Testing vào thành công

| Đóng góp | Giải thích |
|----------|-----------|
| **Phát hiện defects hiệu quả** | Cost-effective — defect tìm sớm rẻ hơn fix muộn |
| **Đánh giá chất lượng** | Cung cấp measures tại mỗi pha SDLC → hỗ trợ release decision |
| **Đại diện người dùng** | Testers ensure user needs được xem xét trong suốt dev |
| **Tuân thủ pháp lý** | Đáp ứng contractual, legal, regulatory requirements |

> 💡 **Thực tế**: Không phải lúc nào cũng có users thật để test → tester đại diện cho họ.

### 1.2.2 Testing vs Quality Assurance (QA) ⭐

**Đây là điểm hay bị nhầm!**

| Tiêu chí | Testing | Quality Assurance (QA) |
|----------|---------|----------------------|
| **Hướng** | **Product-oriented** | **Process-oriented** |
| **Approach** | **Corrective** (tìm và sửa sau) | **Preventive** (ngăn chặn từ đầu) |
| **Mục tiêu** | Đạt chất lượng sản phẩm | Cải tiến process → sản phẩm tốt hơn |
| **Là một phần của** | Quality control | Quality management |
| **Trách nhiệm** | Test team chủ đạo | **Mọi người** trong dự án |
| **Dùng test results để** | Fix defects | Feedback cải tiến process |

> 🎯 **Câu hỏi thi kinh điển**: "Testing và QA có giống nhau không?" → **Không giống nhau.** Testing là 1 dạng quality control (product-oriented), QA là process-oriented và preventive.

### 1.2.3 Error → Defect → Failure → Root Cause ⭐⭐

**Chuỗi quan hệ — PHẢI NHỚ THUỘC LÒNG**:

```
Root Cause (vd: deadline quá gấp)
    ↓
Error/Mistake (con người mắc sai lầm)
    ↓
Defect/Fault/Bug (trong work product: code, doc)
    ↓
Failure (khi execute: system behaves incorrectly)
```

**Ví dụ cụ thể**:
- *Root cause*: Developer không được training về security.
- *Error*: Developer quên validate input.
- *Defect*: Code không có input validation (tồn tại trong source code).
- *Failure*: Hệ thống bị SQL injection tấn công.

**Lưu ý quan trọng**:
- **Không phải defect nào cũng gây failure** (vd: unreachable code có defect nhưng không bao giờ chạy).
- **Failure có thể do môi trường** (bức xạ, nhiễu điện từ, firmware lỗi) — không nhất thiết từ defect trong code.
- **Root cause analysis** thường được thực hiện khi phát hiện failure hoặc defect.

---

## 1.3 Bảy nguyên tắc Testing ⭐⭐⭐

> 🎓 **Giáo viên nói**: Đây là phần hay ra đề nhất trong chương 1. Phải nhớ **cả tên lẫn ý nghĩa** của 7 principles. Hay có câu hỏi dạng: "Tình huống này vi phạm/minh họa nguyên tắc nào?"

| # | Nguyên tắc | Ý nghĩa cốt lõi | Ví dụ minh họa |
|---|-----------|-----------------|----------------|
| 1 | **Testing shows the presence, not the absence of defects** | Testing chứng minh defects **tồn tại**, không thể chứng minh **không có** defect | Dù test nhiều bao nhiêu, không bao giờ nói chắc "100% bug-free" |
| 2 | **Exhaustive testing is impossible** | Không thể test hết mọi combinations — dùng risk + prioritization | Input 2 ô text 10 ký tự mỗi ô → hàng triệu tổ hợp |
| 3 | **Early testing saves time and money** | Defect sớm = rẻ hơn nhiều để fix; cả static lẫn dynamic | Fix bug trong requirements rẻ hơn fix sau deploy 100x |
| 4 | **Defects cluster together** | Phần lớn defects tập trung ở **ít components** (Pareto principle) | 20% modules chứa 80% bugs |
| 5 | **Tests wear out** (Pesticide paradox) | Test lặp lại nhiều lần sẽ **mất hiệu quả** phát hiện lỗi mới | Regression test cần cập nhật định kỳ |
| 6 | **Testing is context dependent** | Không có một approach duy nhất cho mọi tình huống | Safety-critical (y tế) ≠ e-commerce ≠ game mobile |
| 7 | **Absence-of-defects fallacy** | Không có defect ≠ phần mềm thành công | Fix hết bugs nhưng build sai product → vẫn thất bại |

**Phân tích chi tiết từng nguyên tắc**:

**Principle 1 — Presence, not absence**:
Testing *giảm xác suất* còn defect ẩn, nhưng **không bao giờ loại bỏ hoàn toàn**. Đây là lý do cần luôn duy trì testing.

**Principle 2 — Exhaustive impossible**:
→ Giải pháp: **test techniques** (chương 4), **test case prioritization** (chương 5), **risk-based testing** (chương 5).

**Principle 3 — Early testing**:
→ Còn gọi là **Shift Left** (chương 2). Static testing (chương 3) là cách áp dụng nguyên tắc này.

**Principle 4 — Defects cluster**:
→ Hỗ trợ **risk-based testing** — tập trung test vào những chỗ có risk cao và cluster cao.

**Principle 5 — Tests wear out**:
→ Cần **update và thêm test mới** thường xuyên. Tuy nhiên, với **regression testing tự động**, lặp lại test cũ vẫn có giá trị để phát hiện regressions.

**Principle 6 — Context dependent**:
→ SDLC khác nhau, domain khác nhau, risk khác nhau → testing approach khác nhau.

**Principle 7 — Absence-of-defects fallacy**:
→ Ngoài verification (đúng specs), cần **validation** (đúng nhu cầu). Một phần mềm đúng từng requirement nhưng sai product direction vẫn thất bại.

---

## 1.4 Test Activities, Testware và Test Roles

### 1.4.1 Bảy Test Activities

> 💡 Testing **KHÔNG** chỉ là execute tests. Có 7 groups of activities tạo thành test process, thường chạy **iterative hoặc parallel** (không nhất thiết sequential).

| # | Activity | Câu hỏi trả lời | Output chính |
|---|----------|-----------------|--------------|
| 1 | **Test planning** | Làm gì? Với gì? Khi nào? | Test plan |
| 2 | **Test monitoring & control** | Đang ở đâu so với plan? | Progress reports, control directives |
| 3 | **Test analysis** | **What** to test? | Test conditions, defect reports |
| 4 | **Test design** | **How** to test? | Test cases, coverage items, test data requirements |
| 5 | **Test implementation** | Testware đã sẵn sàng? | Test procedures, scripts, suites, data, environment |
| 6 | **Test execution** | Kết quả là gì? | Test logs, defect reports |
| 7 | **Test completion** | Học được gì? Lưu lại gì? | Completion report, lessons learned |

**Giải thích chi tiết 3 activity hay bị nhầm**:

**Test analysis vs Test design**:
- Analysis: "Chúng ta cần test **điều gì**?" → Identify features, conditions, risks.
- Design: "Chúng ta sẽ test **như thế nào**?" → Tạo test cases cụ thể với inputs/expected outputs.

**Test implementation vs Test execution**:
- Implementation: **Chuẩn bị** testware — viết scripts, setup data, cấu hình environment.
- Execution: **Chạy** test theo schedule, compare actual vs expected, log results.

### 1.4.2 Test Process phụ thuộc Context

Testing thay đổi theo các yếu tố:
- **Stakeholders** (nhu cầu, expectations)
- **Team members** (skills, experience)
- **Business domain** (risk, legal)
- **Technical factors** (software type, architecture, technology)
- **Project constraints** (scope, time, budget)
- **Organizational factors** (structure, policies)
- **SDLC** (waterfall, agile, DevOps)
- **Tools** (availability, usability)

### 1.4.3 Testware — Work products từ mỗi activity

```
Plan → [Test plan, schedule, risk register, entry/exit criteria]
Monitor/Control → [Progress reports, control directives]
Analysis → [Test conditions, defect reports (nếu không fix ngay)]
Design → [Test cases, test charters, coverage items, data requirements, env requirements]
Implementation → [Test procedures, scripts, suites, data, environment items*]
Execution → [Test logs, defect reports]
Completion → [Completion report, action items, lessons learned, change requests]
```

*Environment items: stubs (giả lập module được gọi), drivers (giả lập module gọi), simulators, service virtualizations.

### 1.4.4 Traceability — Tại sao quan trọng?

**Traceability** = khả năng liên kết giữa test basis ↔ testware.

**Traceability hỗ trợ**:
- **Coverage evaluation**: requirements coverage có đủ test cases không?
- **Impact analysis**: khi requirements thay đổi, test cases nào bị ảnh hưởng?
- **Audit & governance**: prove compliance.
- **Stakeholder reporting**: dễ hiểu hơn (gắn test results với business requirements).
- **Assess residual risk**: test results → risks (đánh giá risk còn lại).

> 🎯 **Ví dụ thực tế**: Requirement A có 5 test cases; tất cả pass → requirement A được verified. Requirement B không có test case → gap trong coverage → cần thêm test.

### 1.4.5 Hai Roles chính trong Testing

| | Test Management Role | Testing Role |
|---|---------------------|-------------|
| **Focus** | Planning, monitoring, control, completion | Analysis, design, implementation, execution |
| **Ai đảm nhiệm** | Test manager, team leader, dev manager... | Tester, developer (component testing) |
| **Đặc điểm** | In Agile: nhiệm vụ thường chia sẻ với Agile team | |

> 💡 **Một người có thể kiêm cả 2 roles** — không phải lúc nào cũng là 2 người khác nhau.

---

## 1.5 Kỹ năng và Good Practices

### 1.5.1 Generic Skills của Tester giỏi

| Nhóm kỹ năng | Ví dụ |
|-------------|-------|
| **Testing knowledge** | Biết dùng test techniques |
| **Tính cách** | Thorough (kỹ lưỡng), careful, curious, methodical |
| **Communication** | Active listening, team player, convey info clearly |
| **Analytical & Critical thinking** | Creativity, critical thinking |
| **Technical** | Biết dùng test tools phù hợp |
| **Domain** | Hiểu business để communicate với users |

> 🧠 **Tại sao communication skills quan trọng?** Tester thường là người mang tin xấu. Defect reports có thể bị hiểu là "tấn công" tác giả code. Communication tốt → defects được nhìn nhận constructively.

### 1.5.2 Whole Team Approach

**Xuất phát từ**: Extreme Programming (XP).

**Nguyên tắc**: Bất kỳ team member nào có đủ knowledge/skills đều có thể làm bất kỳ task nào. **Mọi người đều chịu trách nhiệm về chất lượng**.

**Lợi ích**:
- Team dynamics tốt hơn
- Communication & collaboration tốt hơn
- Synergy — các skills bổ trợ nhau

**Giới hạn**: Không phải lúc nào cũng phù hợp. Ví dụ: **safety-critical** systems cần **high independence** — không dùng whole team approach.

### 1.5.3 Independence of Testing — 4 Cấp độ

| Cấp độ | Người test | Mức độ independence |
|--------|-----------|---------------------|
| Thấp nhất | **Author** tự test | Không có |
| Thấp | **Peers** cùng team | Một chút |
| Cao | Testers **ngoài team**, trong cùng tổ chức | Cao |
| Cao nhất | Testers **ngoài tổ chức** (outsource) | Rất cao |

**Lợi ích** của independence:
- Bias khác biệt → tìm được failure types khác
- Tester độc lập có thể verify, challenge, hoặc disprove assumptions của stakeholders

**Hạn chế** của independence:
- Tester bị cô lập khỏi dev team
- Communication problems
- Adversarial relationship với dev
- Developer có thể mất sense of responsibility cho quality
- Independent testers bị coi là bottleneck, bị blame khi delay

> 💡 **Best practice**: Sử dụng **nhiều cấp độ independence song song** — dev test component, test team test system, business rep test acceptance.

---

## Bẫy thi thường gặp

### Bẫy 1: Testing = chỉ execute test
**Câu đánh lừa**: "Testing primarily involves running the software and checking outputs."
**Đáp án đúng**: Testing bao gồm nhiều activities (planning, analysis, design, implementation, execution, completion).

### Bẫy 2: Testing = QA
**Câu đánh lừa**: "Testing and QA are the same thing."
**Đáp án đúng**: Testing = product-oriented, corrective; QA = process-oriented, preventive.

### Bẫy 3: Không có lỗi = phần mềm tốt
**Câu đánh lừa**: "If testing finds no defects, the software is ready for release."
**Đáp án đúng**: Absence-of-defects fallacy (Principle 7) — no defects ≠ meets user needs.

### Bẫy 4: Nhầm Error/Defect/Failure
**Tình huống**: "Tester chạy test và thấy kết quả sai" → đây là gì?
- **Failure** (behavior sai khi execution), không phải defect hay error.

### Bẫy 5: Debugging = Testing
**Câu đánh lừa**: "Debugging is part of the testing process."
**Đáp án đúng**: Debugging là **separate activity** — thường do developer làm sau khi tester phát hiện failure.

### Bẫy 6: Nhầm Validation và Verification
- **Verification**: "Are we building the product **right**?" (theo spec)
- **Validation**: "Are we building the **right** product?" (theo user needs)

---

## Câu hỏi luyện tập

**Câu 1**: Nhóm dev đã fix một defect. Tester cần làm gì tiếp theo?
- A. Tiếp tục test features khác
- B. Chạy lại test case đã fail (confirmation testing) và có thể thêm regression testing
- C. Bắt đầu root cause analysis
- D. Cập nhật test plan

> **Đáp án**: B. Sau khi fix: confirmation testing (verify fix) → có thể regression testing (check side effects).

---

**Câu 2**: Tester phát hiện rằng một đoạn code lớn không bao giờ được execute. Testing principle nào áp dụng khi tester đề xuất không cần test nhánh code đó?
- A. Tests wear out
- B. Defects cluster together
- C. Exhaustive testing is impossible
- D. Testing is context dependent

> **Đáp án**: C. Exhaustive testing impossible → dùng risk-based approach → code không execute được → risk thấp → có thể giảm test effort. (Thực ra A cũng có thể liên quan nhưng C là trực tiếp nhất.)

---

**Câu 3**: Công ty áp dụng practice mới: tất cả team members (dev, business, tester) đều có thể thực hiện bất kỳ testing task nào. Đây là gì?
- A. Independence of testing
- B. Whole team approach
- C. QA process
- D. DevOps practice

> **Đáp án**: B.

---

**Câu 4**: Principle nào nói rằng "dù testing không tìm thấy defect, không có nghĩa là phần mềm không có lỗi"?
- A. Testing is context dependent
- B. Exhaustive testing is impossible
- C. Testing shows the presence, not the absence of defects
- D. Absence-of-defects fallacy

> **Đáp án**: C.

---

**Câu 5**: QA team đang cải tiến quy trình review code để ngăn chặn defects từ sớm. Hoạt động này thuộc:
- A. Testing (dynamic)
- B. Debugging
- C. Quality Assurance
- D. Test monitoring

> **Đáp án**: C. QA = process-oriented, preventive — cải tiến process để ngăn defects.

---

**Câu 6**: Nguyên tắc nào giải thích tại sao phải liên tục cập nhật và thêm test cases mới?
- A. Early testing saves time and money
- B. Tests wear out (Pesticide paradox)
- C. Defects cluster together
- D. Testing shows presence, not absence

> **Đáp án**: B. Tests wear out — repeated tests mất hiệu quả.

---

## Checklist ôn tập nhanh

Trước khi thi, tự check:

- [ ] Tôi có thể liệt kê và giải thích **9 test objectives** không?
- [ ] Tôi hiểu rõ sự khác biệt **Testing vs Debugging** — ai làm, làm gì?
- [ ] Tôi có thể vẽ chuỗi **Root Cause → Error → Defect → Failure** với ví dụ?
- [ ] Tôi có thể giải thích và cho ví dụ cho **cả 7 Testing Principles** không?
- [ ] Tôi phân biệt được **Testing vs QA** (product vs process, corrective vs preventive)?
- [ ] Tôi biết **7 test activities** và output (testware) của từng activity?
- [ ] Tôi hiểu **traceability** quan trọng vì lý do gì?
- [ ] Tôi biết **2 roles** chính và activities của mỗi role?
- [ ] Tôi phân biệt được **Verification vs Validation**?
- [ ] Tôi biết **4 cấp độ independence** và lợi/hạn chế?

---

> ✅ **Kết thúc Chương 1**. Chương tiếp theo: [Chương 2 — Testing Throughout the SDLC](./Chuong-02-Vong-Doi-Phat-Trien.md)
