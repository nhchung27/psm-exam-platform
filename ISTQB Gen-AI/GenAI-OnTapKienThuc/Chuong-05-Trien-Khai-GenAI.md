# Chương 5 — Deploying and Integrating GenAI in the Testing Organization (Triển khai GenAI trong Tổ chức Kiểm thử)

> **Thời lượng syllabus**: 80 phút | **K-levels**: K1, K2
> **Ghi chú của giáo viên**: Chương ngắn nhất, chỉ K1/K2 — nhiều phần chỉ cần nhớ (recall). Tập trung vào: Shadow AI risks, 3 giai đoạn áp dụng GenAI, tiêu chí chọn LLM, và sự thay đổi vai trò tester/test manager. Đây thường là chương ra ít câu nhất trong đề.

---

## Mục lục
1. [Keywords giải thích](#keywords)
2. [Learning Objectives](#learning-objectives)
3. [5.1 Roadmap Áp dụng GenAI trong Kiểm thử](#51-roadmap-áp-dụng-genai-trong-kiểm-thử)
4. [5.2 Quản lý Thay đổi khi Áp dụng GenAI](#52-quản-lý-thay-đổi-khi-áp-dụng-genai)
5. [Bẫy thi thường gặp](#bẫy-thi-thường-gặp)
6. [Câu hỏi luyện tập](#câu-hỏi-luyện-tập)
7. [Checklist ôn tập nhanh](#checklist-ôn-tập-nhanh)

---

## Keywords

| Thuật ngữ | Giải thích nhanh |
|-----------|-----------------|
| **Shadow AI** | Nhân viên sử dụng **AI tools chưa được phê duyệt** mà không có sự kiểm soát của tổ chức |

> 💡 **Chỉ có 1 keyword cho chương này** — Shadow AI là khái niệm quan trọng nhất cần nhớ.

---

## Learning Objectives

| ID | K-Level | Nội dung cần đạt được |
|----|---------|----------------------|
| GenAI-5.1.1 | **K1** | Nhớ (recall) các rủi ro của Shadow AI |
| GenAI-5.1.2 | **K2** | Giải thích (explain) các yếu tố chính của chiến lược GenAI trong testing organizations |
| GenAI-5.1.3 | **K2** | Tóm tắt (summarize) tiêu chí chọn LLMs/SLMs cho testing |
| GenAI-5.1.4 | **K1** | Nhớ (recall) các giai đoạn chính của lộ trình áp dụng GenAI |
| GenAI-5.2.1 | **K2** | Giải thích (explain) essential skills cho testers trong môi trường GenAI |
| GenAI-5.2.2 | **K1** | Nhớ (recall) strategies để xây dựng AI skills trong test teams |
| GenAI-5.2.3 | **K1** | Nhận biết (recognize) sự thay đổi trong test processes khi áp dụng GenAI |

> 💡 **Tip**: Nhiều LO là K1 (recall) — không cần phân tích sâu, chỉ cần nhớ. Câu hỏi thường là "Rủi ro Shadow AI nào?" hoặc "Giai đoạn nào trong lộ trình GenAI?"

---

## 5.1 Roadmap Áp dụng GenAI trong Kiểm thử

### Shadow AI — Rủi ro cần tránh ⭐

**Định nghĩa Shadow AI**: Nhân viên sử dụng các **AI tools chưa được tổ chức phê duyệt** mà không có sự kiểm soát, giám sát.

**Ví dụ Shadow AI**: Tester dùng ChatGPT cá nhân để tạo test cases từ confidential requirements, mà không qua bất kỳ approval process nào.

**Ba rủi ro chính của Shadow AI**:

| Rủi ro | Mô tả |
|--------|-------|
| **Security & data privacy** | Personal AI tools có thể thiếu bảo mật → data breach; dữ liệu nhạy cảm bị leak |
| **Compliance & regulatory** | Sử dụng tools chưa được phê duyệt → vi phạm internal standards, hậu quả pháp lý (GDPR) |
| **Vague intellectual property** | Licensing agreements không rõ ràng → tranh chấp IP nếu xử lý dữ liệu có bản quyền |

> 🎯 **Phòng tránh Shadow AI**: Tổ chức cần **cung cấp approved GenAI tools** và **training** để nhân viên không cần dùng unapproved tools.

### Sáu Yếu tố Chính của Chiến lược GenAI

| # | Yếu tố | Mô tả |
|---|--------|-------|
| 1 | **Measurable test objectives** | Tăng productivity, rút ngắn test cycles, cải thiện test quality — phải có metrics cụ thể |
| 2 | **LLM selection** | Chọn LLM phù hợp với objectives, compatible với infrastructure hiện có |
| 3 | **Data quality** | Dữ liệu input chính xác, relevant, được bảo vệ bởi security procedures |
| 4 | **Training programs** | Đào tạo **technical và ethical skills** cho test teams |
| 5 | **Metrics collection** | Đo lường effectiveness của GenAI results (accuracy, execution success rate, etc.) |
| 6 | **Process guidelines** | Quy tắc dùng sensitive data, transparency obligations, quality gates |

### Tiêu chí Chọn LLM/SLM — Bốn tiêu chí

| Tiêu chí | Mô tả |
|----------|-------|
| **Model performance** | Đánh giá với **benchmarks của tổ chức** sử dụng metrics từ Section 2.3 |
| **Fine-tuning potential** | Có thể fine-tune với domain-specific data không? Cần thiết cho customization? |
| **Recurring cost** | Chi phí licensing, operational expenses trong budget — bao gồm API calls, compute |
| **Community and support** | Active community, documentation đầy đủ, vendor support quality |

### Ba giai đoạn Áp dụng GenAI — "PHẢI NHỚ" ⭐⭐

| Giai đoạn | Tên | Hoạt động chính |
|-----------|-----|----------------|
| **1** | **Discovery** | Xây dựng **nhận thức và năng lực**: training về GenAI, truy cập LLMs, thử nghiệm use cases ban đầu |
| **2** | **Initiation & Usage Definition** | Xác định và ưu tiên **use cases thực tế**; đánh giá LLM-powered test infrastructure |
| **3** | **Utilization & Iteration** | Tích hợp đầy đủ GenAI; **continuous monitoring**; đo lường và quản lý transformation |

**Lưu ý quan trọng**:
- Các giai đoạn có thể **chạy song song** cho các use cases khác nhau
- Cần chú ý đến lo ngại về **job displacement** từ sớm (Giai đoạn 1)
- Giai đoạn 3 không có điểm kết thúc — là **quá trình liên tục**

```
Discovery → Initiation & Usage → Utilization & Iteration
  (Nhận thức)    (Xác định)            (Tích hợp & Cải tiến)
```

---

## 5.2 Quản lý Thay đổi khi Áp dụng GenAI

### Kỹ năng cần thiết cho Testers trong môi trường GenAI

| Nhóm kỹ năng | Nội dung cần có |
|-------------|----------------|
| **AI & Prompt skills** | Prompt engineering, hiểu context window, prompt refinement và iteration |
| **Review & evaluation** | Đánh giá LLM-generated testware, **phát hiện hallucinations** và reasoning errors |
| **Risk awareness** | Hiểu inherent risks của GenAI (Chương 3) và mitigation strategies |
| **Data security** | Implications của sharing testware với LLMs; **data sanitization** trước khi gửi |
| **Environmental** | Tối ưu model selection, cân bằng benefits với cost và energy consumption |

### Xây dựng Năng lực GenAI trong Team

**Chiến lược xây dựng kỹ năng**:
- **Hands-on approach**: Thực hành trực tiếp với nhiều LLMs/SLMs, structured learning paths
- **Progression**: Từ **basic prompt creation** → test-specific prompts nâng cao
- **Prompt patterns**: Reusable templates để craft effective prompts cho testing tasks
- **Communities of practice**: Internal sharing sessions, meetings thường xuyên, **prompt pattern libraries**

> 💡 **Prompt pattern libraries**: Thư viện các prompt mẫu đã được validate, chia sẻ trong team → giảm thời gian tạo prompts từ đầu.

### Sự thay đổi vai trò — QUAN TRỌNG ⭐

| Vai trò | Trước GenAI | Sau GenAI |
|---------|------------|-----------|
| **Tester** | Test design & execution specialist | **AI-assisted test specialist**: hướng dẫn và verify AI-generated testware |
| **Test Manager** | Quản lý human testers | Phát triển AI-based test strategy, AI risk management, **coordinate hybrid teams** (người + GenAI tools) |

**Điều quan trọng**: GenAI **không thay thế** testers — nó **thay đổi** focus của công việc:
- Testers ít làm routine tasks hơn
- Testers dành nhiều thời gian hơn cho: review AI output, strategic decisions, complex exploratory testing

---

## Bẫy thi thường gặp

### Bẫy 1: Shadow AI chỉ là rủi ro về bảo mật
**Câu đánh lừa**: "Shadow AI only poses security risks to the organization."
**Đáp án đúng**: Shadow AI có **3 loại rủi ro**: security/data privacy, compliance/regulatory, và vague intellectual property.

### Bẫy 2: Ba giai đoạn luôn tuần tự, không song song
**Câu đánh lừa**: "The three GenAI adoption phases must be completed sequentially before moving to the next."
**Đáp án đúng**: Các giai đoạn **có thể chạy song song** cho các use cases khác nhau trong cùng tổ chức.

### Bẫy 3: GenAI sẽ thay thế testers
**Câu đánh lừa**: "The widespread adoption of GenAI in testing will eventually make human testers unnecessary."
**Đáp án đúng**: GenAI **thay đổi** focus của testers (từ routine tasks → AI oversight), nhưng **không thay thế**. Human judgment và oversight vẫn cần thiết.

### Bẫy 4: Nhầm thứ tự giai đoạn
**Câu đánh lừa**: "The second phase of GenAI adoption is focused on continuous monitoring and measurement."
**Đáp án đúng**: Continuous monitoring = **Phase 3 (Utilization & Iteration)**. Phase 2 = **Initiation & Usage Definition** (xác định use cases).

### Bẫy 5: Test Manager chỉ cần manage AI tools
**Câu đánh lừa**: "After GenAI adoption, the Test Manager's role is primarily to select and manage AI tools."
**Đáp án đúng**: Test Manager còn phải **develop AI-based test strategy, manage AI risks, coordinate hybrid teams** (người + GenAI).

---

## Câu hỏi luyện tập

**Câu 1**: Tester tự dùng tài khoản ChatGPT cá nhân để tạo test cases từ confidential requirements của dự án mà không báo cáo với team. Đây là ví dụ về vấn đề gì?
- A. Hallucination — vì ChatGPT có thể tạo test cases sai
- B. Shadow AI — vì dùng unapproved tool mà không có sự kiểm soát
- C. Data poisoning — vì dữ liệu được upload lên cloud
- D. Bias — vì ChatGPT có thể thiên vị

> **Đáp án**: B. **Shadow AI** — sử dụng AI tools chưa được tổ chức phê duyệt, không có oversight.

---

**Câu 2**: Test organization muốn bắt đầu hành trình áp dụng GenAI. Họ đang tổ chức training để nhân viên hiểu GenAI, cho phép truy cập một số LLMs và thử nghiệm use cases đơn giản. Đây là giai đoạn nào?
- A. Initiation & Usage Definition
- B. Utilization & Iteration
- C. Discovery
- D. Fine-tuning

> **Đáp án**: C. **Discovery** — xây dựng nhận thức và năng lực, thử nghiệm use cases ban đầu.

---

**Câu 3**: Tổ chức đang ở giai đoạn 3 (Utilization & Iteration) của lộ trình GenAI. Hoạt động chính nào phù hợp?
- A. Training nhân viên về GenAI basics
- B. Thử nghiệm AI tools lần đầu
- C. Xác định và ưu tiên use cases thực tế
- D. Continuous monitoring, đo lường và quản lý ongoing transformation

> **Đáp án**: D. Phase 3 = **tích hợp đầy đủ + continuous monitoring + đo lường**.

---

**Câu 4**: Khi chọn LLM cho test team, tiêu chí nào đảm bảo model có thể được tùy chỉnh với domain-specific testing knowledge của tổ chức?
- A. Recurring cost
- B. Community and support
- C. Fine-tuning potential
- D. Model performance

> **Đáp án**: C. **Fine-tuning potential** — khả năng fine-tune với domain-specific data để customize.

---

**Câu 5**: Phát biểu nào ĐÚNG về sự thay đổi vai trò của Tester sau khi áp dụng GenAI?
- A. Testers sẽ không còn cần kỹ năng test design vì AI đã làm thay
- B. Testers tập trung nhiều hơn vào hướng dẫn và verify AI-generated testware
- C. Testers chủ yếu quản lý AI tools và licenses
- D. Testers sẽ được replaced hoàn toàn bởi AI agents

> **Đáp án**: B. Tester = **AI-assisted test specialist**: hướng dẫn AI và **verify AI-generated testware** thay vì làm mọi thứ thủ công.

---

**Câu 6**: Rủi ro nào của Shadow AI liên quan đến việc tổ chức có thể mất quyền kiểm soát đối với tài sản trí tuệ nếu nhân viên dùng AI tool với licensing không rõ ràng?
- A. Security & data privacy risk
- B. Compliance & regulatory risk
- C. Vague intellectual property risk
- D. Hallucination risk

> **Đáp án**: C. **Vague intellectual property** — licensing agreements không rõ ràng → tranh chấp IP.

---

**Câu 7**: Test Manager muốn xây dựng prompt engineering skills cho toàn team. Chiến lược nào hiệu quả nhất theo syllabus?
- A. Thuê một expert bên ngoài để viết tất cả prompts cho team
- B. Chỉ cho senior testers học prompt engineering
- C. Xây dựng prompt pattern libraries và communities of practice để chia sẻ nội bộ
- D. Yêu cầu mỗi tester tự học một mình

> **Đáp án**: C. **Prompt pattern libraries + communities of practice** — structured sharing, reusable templates, collective learning.

---

## Checklist ôn tập nhanh

Trước khi thi, tự check:

- [ ] Tôi biết **Shadow AI là gì** và **3 rủi ro** của nó?
- [ ] Tôi biết **6 yếu tố** của chiến lược GenAI trong tổ chức?
- [ ] Tôi nhớ **4 tiêu chí chọn LLM/SLM**?
- [ ] Tôi thuộc **3 giai đoạn** áp dụng GenAI (Discovery → Initiation & Usage → Utilization & Iteration)?
- [ ] Tôi biết các giai đoạn **có thể song song** cho các use cases khác nhau?
- [ ] Tôi biết **5 nhóm kỹ năng** cần thiết cho tester trong môi trường GenAI?
- [ ] Tôi hiểu sự thay đổi vai trò **Tester** và **Test Manager** sau khi áp dụng GenAI?
- [ ] Tôi nhớ **prompt pattern libraries** là gì và lợi ích?
- [ ] Tôi hiểu GenAI **thay đổi** focus của testers nhưng **không thay thế** họ?

---

> ✅ **Kết thúc Chương 5 và toàn bộ tài liệu ôn tập CT-GenAI v1.1**
>
> Quay lại: [README — Danh sách tài liệu](./00-README.md)
>
> **Chúc bạn ôn tập hiệu quả và thi đậu CT-GenAI!** 🎯
