# Chương 2 — Prompt Engineering for Effective Testing (Kỹ thuật Prompt cho Kiểm thử Hiệu quả)

> **Thời lượng syllabus**: 365 phút | **K-levels**: K2, K3
> **Ghi chú của giáo viên**: Chương dài nhất và quan trọng nhất trong kỳ thi. Có K3 — phải **áp dụng được** kỹ thuật, không chỉ nhớ. Thuộc lòng 6 thành phần prompt và 3 kỹ thuật prompting. Đây là trọng tâm số 1 của đề thi.

---

## Mục lục
1. [Keywords giải thích](#keywords)
2. [Learning Objectives](#learning-objectives)
3. [2.1 Cấu trúc Prompt và Kỹ thuật Prompting cốt lõi](#21-cấu-trúc-prompt-và-kỹ-thuật-prompting-cốt-lõi)
4. [2.2 Áp dụng Prompt Engineering vào các Tác vụ Testing](#22-áp-dụng-prompt-engineering-vào-các-tác-vụ-testing)
5. [2.3 Đánh giá và Tinh chỉnh Prompt](#23-đánh-giá-và-tinh-chỉnh-prompt)
6. [Bẫy thi thường gặp](#bẫy-thi-thường-gặp)
7. [Câu hỏi luyện tập](#câu-hỏi-luyện-tập)
8. [Checklist ôn tập nhanh](#checklist-ôn-tập-nhanh)

---

## Keywords

| Thuật ngữ | Giải thích nhanh |
|-----------|-----------------|
| **Acceptance criteria** | Điều kiện cần đáp ứng để user story/feature được chấp nhận |
| **Few-shot prompting** | Cung cấp **nhiều ví dụ mẫu** trong prompt để guide LLM |
| **Meta prompting** | Dùng LLM để **tự tạo hoặc cải thiện** prompt |
| **Natural language processing (NLP)** | Kỹ thuật AI xử lý và hiểu ngôn ngữ tự nhiên của con người |
| **One-shot prompting** | Cung cấp **đúng 1 ví dụ** mẫu trong prompt |
| **Prompt** | Input (text hoặc multimodal) được cung cấp cho LLM để nhận output mong muốn |
| **Prompt chaining** | Kỹ thuật chia tác vụ thành **chuỗi prompts liên tiếp**, output bước này = input bước sau |
| **Prompt engineering** | Quá trình **thiết kế và tối ưu** prompts để đạt output mong muốn từ LLM |
| **System prompt** | Prompt định nghĩa **behavior tổng thể** của LLM, **ẩn** với người dùng cuối |
| **User prompt** | Input **trực tiếp từ người dùng** trong từng lượt tương tác |
| **Zero-shot prompting** | **Không cung cấp ví dụ** — dựa vào kiến thức pre-existing của LLM |

---

## Learning Objectives

| ID | K-Level | Nội dung cần đạt được |
|----|---------|----------------------|
| GenAI-2.1.1 | **K2** | Cho ví dụ (exemplify) về cách structuring prompts hiệu quả sử dụng 6 thành phần |
| GenAI-2.1.2 | **K2** | Phân biệt (distinguish) các kỹ thuật prompting cốt lõi: prompt chaining, few-shot, meta prompting |
| GenAI-2.1.3 | **K2** | Phân biệt (distinguish) system prompt và user prompt |
| GenAI-2.2.1 | **K3** | Áp dụng (apply) GenAI để hỗ trợ test analysis |
| GenAI-2.2.2 | **K3** | Áp dụng (apply) GenAI cho test design và test implementation |
| GenAI-2.2.3 | **K3** | Áp dụng (apply) GenAI để hỗ trợ automated regression testing |
| GenAI-2.2.4 | **K3** | Áp dụng (apply) GenAI cho test monitoring và test control |
| GenAI-2.3.1 | **K2** | Hiểu (understand) metrics đánh giá kết quả GenAI |
| GenAI-2.3.2 | **K2** | Cho ví dụ (exemplify) về các kỹ thuật tinh chỉnh prompt |

> 💡 **Tip**: Các LO K3 có nghĩa là đề thi sẽ cho **tình huống thực tế** và hỏi bạn phải làm gì. Phải biết áp dụng từng kỹ thuật vào đúng tình huống.

---

## 2.1 Cấu trúc Prompt và Kỹ thuật Prompting cốt lõi

### Cấu trúc 6 thành phần của Prompt — PHẢI THUỘC LÒNG ⭐⭐⭐

| # | Thành phần | Vai trò | Ví dụ |
|---|-----------|---------|-------|
| 1 | **Role** (Vai trò) | Định nghĩa góc nhìn/persona của LLM | "Bạn là một senior QA engineer chuyên về testing" |
| 2 | **Context** (Ngữ cảnh) | Cung cấp thông tin nền về đối tượng kiểm thử | "Chúng tôi đang test chức năng login của hệ thống e-commerce B2B" |
| 3 | **Instruction** (Hướng dẫn) | Chỉ thị cụ thể, rõ ràng về tác vụ cần làm | "Hãy tạo test cases covering happy path và edge cases" |
| 4 | **Input data** (Dữ liệu đầu vào) | Thông tin thô cần thiết: user stories, AC, code, screenshots | [User story text, acceptance criteria, existing test cases] |
| 5 | **Constraints** (Ràng buộc) | Giới hạn và yêu cầu đặc biệt cần tuân thủ | "Chỉ tạo test cases cho critical severity, tối đa 10 test cases" |
| 6 | **Output format** (Định dạng đầu ra) | Chỉ định format, cấu trúc của phản hồi | "Trả về dạng Gherkin (Given/When/Then), dùng markdown table" |

**Memory trick**:
- **R**ole = *Người diễn*
- **C**ontext = *Bối cảnh sân khấu*
- **I**nstruction = *Kịch bản*
- **I**nput data = *Đạo cụ*
- **C**onstraints = *Giới hạn ngân sách*
- **O**utput format = *Loại vở diễn* (kịch? nhạc kịch?)

> 🎯 **Câu hỏi thi hay gặp**: "Test reports, monitoring logs, performance benchmarks" = thành phần nào? → **Input data** (dữ liệu thô đưa vào). "Return a markdown table with columns: ID, Type, Severity" = thành phần nào? → **Output format**.

### Ba kỹ thuật Prompting cốt lõi ⭐⭐

| Kỹ thuật | Cơ chế | Khi nào dùng | Ví dụ |
|----------|--------|--------------|-------|
| **Zero-shot** | Không cung cấp ví dụ — dựa vào kiến thức sẵn có | Tác vụ đơn giản, LLM đã biết cách làm | "Tạo test cases cho login form" |
| **One-shot** | Cung cấp **1 ví dụ** trong prompt | Cần hướng dẫn nhẹ về format | 1 ví dụ test case → sau đó yêu cầu tạo thêm |
| **Few-shot** | Cung cấp **nhiều ví dụ** (2+) trong prompt | Output có format cố định, tác vụ lặp lại, cần tính nhất quán | 3 ví dụ Gherkin tests → tạo thêm 10 cái tương tự |
| **Prompt Chaining** | Chia tác vụ thành **chuỗi prompts** nhỏ, output bước này = input bước sau | Tác vụ phức tạp cần độ chính xác cao, cần verify từng bước | Step 1: phân tích requirements → Step 2: tạo test conditions → Step 3: tạo test cases |
| **Meta Prompting** | Dùng **LLM để tự tạo hoặc cải thiện prompt** | Tối ưu hóa prompt, không biết cách viết prompt hiệu quả | "Hãy viết cho tôi một prompt tốt để tạo test cases từ user stories" |

**Phân biệt nhanh**:
- Few-shot = *Học từ ví dụ*
- Chaining = *Dây chuyền lắp ráp* (từng bước, có checkpoint)
- Meta = *AI tự viết prompt cho AI*

**Kết hợp kỹ thuật** (hoàn toàn được phép):
1. Meta prompting → tạo prompt ban đầu
2. Few-shot → thêm ví dụ vào prompt đó
3. Prompt chaining → chia thành subtasks để validate từng bước

### System Prompt vs User Prompt ⭐

| Tiêu chí | System Prompt | User Prompt |
|----------|--------------|-------------|
| **Người tạo** | Developer / Test manager / QA lead | Người dùng chatbot / Tester |
| **Khả năng thấy** | **Ẩn** với người dùng cuối | **Hiển thị** trực tiếp |
| **Mức độ thay đổi** | **Cố định** suốt phiên / deployment | **Thay đổi** mỗi lần tương tác |
| **Nội dung** | Role tổng thể, constraints, behavior của LLM | Câu hỏi, lệnh, tác vụ cụ thể từng lần |
| **Ví dụ testing** | "Bạn là trợ lý kiểm thử chuyên nghiệp. Luôn dùng ngôn ngữ formal và theo chuẩn ISTQB. Không tạo test data chứa PII." | "Liệt kê sự khác biệt giữa black-box và white-box testing." |

> 💡 **Ví dụ thực tế**: Khi dùng ChatGPT with Custom Instructions = System Prompt. Mỗi tin nhắn bạn gửi = User Prompt.

---

## 2.2 Áp dụng Prompt Engineering vào các Tác vụ Testing

### Test Analysis với GenAI (K3 — phải biết áp dụng)

| Tác vụ | Kỹ thuật phù hợp | Output |
|--------|-----------------|--------|
| Phát hiện defects trong requirements (mơ hồ, không nhất quán) | Prompt chaining: Step 1 phân tích → Step 2 liệt kê issues | Danh sách issues với severity |
| Tạo test conditions từ user stories | Few-shot (ví dụ test conditions mẫu) | Test conditions có thể đo được |
| Ưu tiên test conditions theo rủi ro | Prompt chaining (phân tích → prioritize) | Prioritized list theo risk likelihood × impact |
| Phân tích coverage gaps | Meta prompting để tạo prompt phân tích | Map requirements ↔ test conditions, gaps rõ ràng |

### Test Design và Test Implementation với GenAI (K3)

| Tác vụ | Mô tả | Kỹ thuật |
|--------|-------|---------|
| **Test case generation** | NLP phân tích requirements → draft test cases với preconditions, inputs, expected results | Few-shot với ví dụ test case mẫu |
| **Test data synthesis** | Tạo synthetic test data bảo vệ data privacy, phủ extreme cases, boundary values | Prompt chaining: tạo → validate → refine |
| **Automated test script generation** | Dịch test cases thành code cho frameworks (Selenium, Playwright, etc.) | Few-shot với ví dụ script mẫu |
| **Test execution scheduling** | Phân tích dependencies, tối ưu thứ tự thực thi theo priority và risk | Meta prompting để tạo scheduling prompt |

**Ví dụ Prompt hoàn chỉnh cho Test Case Generation**:
```
[Role] Bạn là senior QA engineer với 10 năm kinh nghiệm.
[Context] Chúng tôi đang test tính năng "Đặt hàng" của e-commerce platform B2B.
[Instruction] Tạo test cases covering happy path, invalid inputs, và edge cases.
[Input data] User story: "Là người mua, tôi muốn đặt hàng với số lượng 1-999 sản phẩm..."
[Constraints] Chỉ tạo 5 test cases, focus vào critical paths.
[Output format] Bảng markdown với cột: TC_ID | Precondition | Input | Expected Result | Priority
```

### Automated Regression Testing với GenAI (K3)

| Khả năng | Mô tả |
|----------|-------|
| **Keyword-driven automation** | Tạo và quản lý test scripts dựa trên keyword framework |
| **Impact analysis** | Phân tích code changes → xác định vùng high-risk cần regression test |
| **Self-healing tests** | Tự động điều chỉnh test scripts khi UI/API thay đổi nhỏ (locator thay đổi) |
| **Automated test reporting** | Tạo báo cáo với success metrics, failures, insights |
| **Defect root cause analysis** | Tổng hợp defect reports với logs, screenshots, environment data |

> 🎯 **Ứng dụng self-healing**: Khi button "Login" đổi class CSS → test script cũ fail. GenAI có thể detect và tự sửa locator để script tiếp tục chạy.

### Test Monitoring và Test Control với GenAI (K3)

| Tác vụ | GenAI hỗ trợ |
|--------|-------------|
| **Monitoring & metrics** | Tự động theo dõi KPIs, phân tích xu hướng, cảnh báo deviation |
| **Test control** | Insights để re-prioritize tests, điều chỉnh schedule, phân bổ resources |
| **Completion insights** | Tạo test completion reports, lessons learned |
| **Dashboard & reporting** | Tạo dashboard động, tóm tắt bằng ngôn ngữ tự nhiên cho stakeholders |

### Chọn kỹ thuật Prompting phù hợp — Bảng tổng hợp

| Kỹ thuật | Use case phù hợp nhất | Đặc điểm nhận biết |
|----------|----------------------|-------------------|
| **Prompt Chaining** | Tác vụ phức tạp cần accuracy cao + verify từng bước | "Phức tạp", "nhiều bước", "cần validation" |
| **Few-shot** | Output có format lặp lại/cố định | "Gherkin", "template", "nhất quán", "lặp lại" |
| **Meta Prompting** | Tác vụ linh hoạt, mới, cần tạo prompt | "Không biết cách prompt", "use case mới" |

---

## 2.3 Đánh giá và Tinh chỉnh Prompt

### Metrics đánh giá kết quả GenAI

| Metric | Mô tả | Ví dụ trong Testing |
|--------|-------|---------------------|
| **Accuracy** | Độ chính xác tổng thể của output so với chuẩn | % test cases phủ đúng requirements |
| **Precision** | Độ chính xác cho mục tiêu cụ thể | % test cases phát hiện đúng anomaly |
| **Recall** | Khả năng tìm tất cả instances liên quan | Phủ đủ equivalence partitions |
| **Relevance & Contextual Fit** | Output phù hợp với ngữ cảnh cụ thể | Test cases nhất quán với test basis |
| **Diversity** | Phạm vi inputs/scenarios rộng, tránh lặp | Phủ nhiều user behaviors, edge cases |
| **Execution Success Rate** | % test scripts chạy thành công | Scripts không có syntax error |
| **Time Efficiency** | Thời gian tiết kiệm so với manual | AI tạo 100 test cases trong 5 phút vs 5 giờ manual |

### Kỹ thuật đánh giá và tinh chỉnh Prompt

| Kỹ thuật | Mô tả |
|----------|-------|
| **Iterative prompt modification** | Bắt đầu từ base prompt → sửa dần dựa trên kết quả quan sát |
| **A/B testing of prompts** | Tạo 2+ phiên bản prompt, so sánh kết quả theo metrics |
| **Output analysis** | Kiểm tra output để tìm inaccuracies, inconsistencies |
| **User feedback integration** | Thu thập phản hồi từ testers về usefulness của output |
| **Adjust prompt length and specificity** | Thử độ dài và mức chi tiết khác nhau — đôi khi ngắn hơn tốt hơn |

> 💡 **Best practice**: Tinh chỉnh prompt là quá trình **iterative** — không bao giờ expect prompt đầu tiên là tốt nhất.

---

## Bẫy thi thường gặp

### Bẫy 1: Nhầm thành phần của prompt
**Câu đánh lừa**: "The logs and test results provided to the LLM represent the Output format component."
**Đáp án đúng**: Logs và test results là **Input data** (dữ liệu thô đưa vào). Output format = định dạng **kết quả trả về**.

### Bẫy 2: Nhầm kỹ thuật prompting
**Câu đánh lừa**: "Prompt chaining means providing multiple examples in a single prompt."
**Đáp án đúng**: Đó là **Few-shot prompting**. Prompt chaining = chia thành **chuỗi prompts liên tiếp**.

### Bẫy 3: Meta prompting = dùng AI để test AI
**Câu đánh lừa**: "Meta prompting involves using LLMs to evaluate the output of other LLMs."
**Đáp án đúng**: Meta prompting = dùng LLM để **tạo hoặc cải thiện prompt**. Không phải evaluate output.

### Bẫy 4: System prompt có thể thay đổi mỗi lần
**Câu đánh lừa**: "The system prompt changes with each user interaction."
**Đáp án đúng**: System prompt **cố định** suốt phiên. User prompt mới thay đổi mỗi lần tương tác.

### Bẫy 5: Few-shot tốt hơn zero-shot trong mọi trường hợp
**Câu đánh lừa**: "Few-shot prompting always produces better results than zero-shot."
**Đáp án đúng**: Phụ thuộc vào tác vụ. Zero-shot đủ cho tác vụ đơn giản. Few-shot tốt hơn khi **cần format nhất quán**.

### Bẫy 6: Nhầm khi nào dùng Prompt Chaining
**Câu đánh lừa**: "Prompt chaining is best for simple, repetitive tasks with fixed output format."
**Đáp án đúng**: Prompt chaining phù hợp cho tác vụ **phức tạp** cần **validate từng bước**. Repetitive + fixed format → Few-shot.

---

## Câu hỏi luyện tập

**Câu 1**: Tester cần tạo 50 test cases từ 50 user stories, mỗi test case phải theo format Gherkin chuẩn. Kỹ thuật prompting nào phù hợp nhất?
- A. Zero-shot — LLM biết Gherkin rồi, không cần ví dụ
- B. Few-shot — cung cấp 3-5 ví dụ Gherkin mẫu để guide format
- C. Prompt chaining — chia thành nhiều bước
- D. Meta prompting — nhờ LLM viết prompt

> **Đáp án**: B. Few-shot phù hợp khi output có **format cố định** (Gherkin) và cần **tính nhất quán** giữa 50 test cases.

---

**Câu 2**: Tester nhận được requirements phức tạp và cần: (1) phân tích tìm ambiguities, (2) tạo test conditions từ các requirements rõ ràng, (3) prioritize theo risk. Kỹ thuật nào phù hợp?
- A. Zero-shot — đủ để làm tất cả trong 1 prompt
- B. Few-shot — cần ví dụ cho mỗi bước
- C. Prompt chaining — chia thành 3 bước, validate từng bước
- D. Meta prompting — nhờ LLM tạo prompt tốt hơn

> **Đáp án**: C. Prompt chaining phù hợp cho **tác vụ phức tạp nhiều bước** cần **validate output của từng bước** trước khi tiếp tục.

---

**Câu 3**: Trong prompt "Return a JSON array where each element has fields: id, title, precondition, steps, expected_result, priority", đây là thành phần nào?
- A. Constraints — vì chỉ định giới hạn
- B. Instruction — vì hướng dẫn LLM làm gì
- C. Output format — vì chỉ định cấu trúc kết quả trả về
- D. Input data — vì là dữ liệu đưa vào

> **Đáp án**: C. Chỉ định cấu trúc JSON = **Output format**.

---

**Câu 4**: Tester A muốn tạo prompt hiệu quả nhưng chưa biết cách diễn đạt. Anh ấy nhờ LLM giúp tạo prompt phù hợp để generate test cases từ API specs. Đây là kỹ thuật gì?
- A. Few-shot prompting
- B. Prompt chaining
- C. Meta prompting
- D. Zero-shot prompting

> **Đáp án**: C. **Meta prompting** = dùng LLM để tạo hoặc cải thiện prompt.

---

**Câu 5**: Tester muốn biết "có bao nhiêu % test scripts được LLM tạo ra có thể chạy thành công mà không cần chỉnh sửa". Đây là metric nào?
- A. Accuracy
- B. Precision
- C. Recall
- D. Execution Success Rate

> **Đáp án**: D. **Execution Success Rate** = % test scripts chạy thành công.

---

**Câu 6**: Phát biểu nào ĐÚNG về System Prompt và User Prompt?
- A. System prompt thay đổi theo từng tin nhắn của người dùng
- B. User prompt được developer thiết lập từ trước và ẩn với người dùng
- C. System prompt định nghĩa behavior tổng thể, cố định suốt phiên
- D. Cả hai đều hiển thị với người dùng cuối

> **Đáp án**: C. System prompt cố định, ẩn với người dùng, định nghĩa behavior tổng thể của LLM.

---

**Câu 7**: Sau khi tạo prompt để phân tích defects trong requirements, tester nhận thấy LLM luôn bỏ sót các defects liên quan đến performance requirements. Kỹ thuật tinh chỉnh nào phù hợp nhất?
- A. Dùng meta prompting để nhờ LLM tự sửa prompt
- B. Thêm ví dụ performance-related defects vào prompt (few-shot)
- C. Chuyển sang zero-shot để LLM tự quyết định
- D. Dùng A/B testing để so sánh 2 phiên bản prompt

> **Đáp án**: B. Thêm ví dụ về performance defects giúp LLM nhận ra loại defect này (few-shot để guide). Hoặc D cũng có thể đúng tùy context — nhưng B trực tiếp giải quyết vấn đề bỏ sót.

---

## Checklist ôn tập nhanh

Trước khi thi, tự check:

- [ ] Tôi thuộc **6 thành phần của structured prompt** (Role, Context, Instruction, Input data, Constraints, Output format)?
- [ ] Tôi phân biệt được **Input data vs Constraints vs Output format** từ ví dụ cụ thể?
- [ ] Tôi biết **3 kỹ thuật prompting chính** và khi nào dùng từng loại (zero/one/few-shot, chaining, meta)?
- [ ] Tôi phân biệt được **System prompt vs User prompt** — ai tạo, có thể thấy không, thay đổi khi nào?
- [ ] Tôi biết cách áp dụng GenAI cho **test analysis** (tìm ambiguities, tạo test conditions, prioritize)?
- [ ] Tôi biết cách áp dụng GenAI cho **test design** (test cases, test data, test scripts)?
- [ ] Tôi hiểu **self-healing tests** là gì và lợi ích của nó?
- [ ] Tôi biết **7 metrics** đánh giá kết quả GenAI?
- [ ] Tôi biết ít nhất 3 **kỹ thuật tinh chỉnh prompt**?

---

> ✅ **Kết thúc Chương 2**. Chương tiếp theo: [Chương 3 — Quản lý Rủi ro](./Chuong-03-Quan-Ly-Rui-Ro.md)
