# Chương 3 — Managing Risks of Generative AI in Testing (Quản lý Rủi ro GenAI trong Kiểm thử)

> **Thời lượng syllabus**: 160 phút | **K-levels**: K1, K2, K3
> **Ghi chú của giáo viên**: Chương này có K3 — phải **nhận diện** được hallucination, reasoning error, bias trong tình huống cụ thể. Nắm chắc 3 loại rủi ro chính (hallucination, reasoning error, bias), các attack vectors bảo mật, và 4 bộ quy định AI. Đây là chương thứ 2 hay ra đề sau Chương 2.

---

## Mục lục
1. [Keywords giải thích](#keywords)
2. [Learning Objectives](#learning-objectives)
3. [3.1 Hallucinations, Reasoning Errors và Biases](#31-hallucinations-reasoning-errors-và-biases)
4. [3.2 Rủi ro Bảo mật và Quyền riêng tư Dữ liệu](#32-rủi-ro-bảo-mật-và-quyền-riêng-tư-dữ-liệu)
5. [3.3 Tiêu thụ Năng lượng và Tác động Môi trường](#33-tiêu-thụ-năng-lượng-và-tác-động-môi-trường)
6. [3.4 Quy định AI, Tiêu chuẩn và Framework](#34-quy-định-ai-tiêu-chuẩn-và-framework)
7. [Bẫy thi thường gặp](#bẫy-thi-thường-gặp)
8. [Câu hỏi luyện tập](#câu-hỏi-luyện-tập)
9. [Checklist ôn tập nhanh](#checklist-ôn-tập-nhanh)

---

## Keywords

| Thuật ngữ | Giải thích nhanh |
|-----------|-----------------|
| **Bias** | Thiên vị trong output LLM do **training data không cân bằng** → favoring một số loại thông tin |
| **Data privacy** | Quyền kiểm soát cách dữ liệu cá nhân được thu thập, xử lý, lưu trữ |
| **Hallucination** | LLM tạo output **sai về mặt thực tế** hoặc không liên quan đến tác vụ |
| **Reasoning error** | LLM hiểu sai **cấu trúc logic** (cause-effect, conditional logic) → kết luận sai |
| **Security** | Bảo vệ hệ thống khỏi unauthorized access và attacks |
| **Temperature** | Hyperparameter kiểm soát mức độ **ngẫu nhiên** trong output — cao → sáng tạo hơn, thấp → nhất quán hơn |
| **Vulnerability** | Điểm yếu có thể bị khai thác trong hệ thống |

---

## Learning Objectives

| ID | K-Level | Nội dung cần đạt được |
|----|---------|----------------------|
| GenAI-3.1.1 | **K1** | Nhớ (recall) định nghĩa hallucinations, reasoning errors, biases trong LLM output |
| GenAI-3.1.2 | **K3** | Xác định (identify) hallucinations, reasoning errors, biases trong LLM output |
| GenAI-3.1.3 | **K2** | Tóm tắt (summarize) kỹ thuật giảm thiểu hallucinations, reasoning errors, biases |
| GenAI-3.1.4 | **K1** | Nhớ (recall) kỹ thuật giảm thiểu non-deterministic behavior của LLMs |
| GenAI-3.2.1 | **K2** | Giải thích (explain) rủi ro data privacy và security khi dùng LLMs |
| GenAI-3.2.2 | **K2** | Cho ví dụ (exemplify) attack vectors và vulnerabilities liên quan đến LLMs |
| GenAI-3.2.3 | **K2** | Tóm tắt (summarize) chiến lược giảm thiểu rủi ro data privacy và security |
| GenAI-3.3.1 | **K2** | Giải thích (explain) tác động của energy consumption khi dùng GenAI |
| GenAI-3.4.1 | **K1** | Nhớ (recall) ví dụ về AI regulations, standards, frameworks liên quan |

> 💡 **Tip**: GenAI-3.1.2 là K3 — đề thi sẽ cho **output thực tế từ LLM** và hỏi "đây là loại lỗi gì?". Phải nhận diện được từng loại.

---

## 3.1 Hallucinations, Reasoning Errors và Biases

### Ba loại lỗi chính của LLM — PHÂN BIỆT CHÍNH XÁC ⭐⭐⭐

| Loại lỗi | Định nghĩa | Ví dụ trong Testing |
|----------|-----------|---------------------|
| **Hallucination** | LLM tạo output **sai về thực tế** hoặc **bịa ra** thông tin không có | Tạo test cases cho acceptance criteria không tồn tại trong requirements; sinh test scripts không thể chạy được; trích dẫn API endpoint không có thật |
| **Reasoning Error** | LLM **hiểu sai cấu trúc logic** (cause-effect, conditional logic, multi-step reasoning) | Đảo ngược điều kiện trong test case ("IF logged out → THEN can access admin" thay vì ngược lại); sai logic trong test prioritization |
| **Bias** | LLM **thiên vị** do training data không cân bằng → ưu ái một số loại thông tin/approach | Luôn dùng tiếng Anh dù requirements bằng tiếng Việt; bỏ qua non-functional tests; underrepresent edge cases của người dùng từ một nhóm dân số cụ thể |

**Phân biệt nhanh**:
- Hallucination = *Bịa ra / Sai thực tế* (thông tin không tồn tại)
- Reasoning Error = *Logic sai* (thông tin có thể đúng nhưng kết luận sai)
- Bias = *Thiên vị có hệ thống* (không sai hoàn toàn nhưng không cân bằng)

> 🎯 **Ví dụ phân biệt**: 
> - LLM nói "Function X có 5 parameters" nhưng thực ra chỉ có 3 → **Hallucination**
> - LLM nói "Nếu user không đăng nhập thì được phép xem admin panel" → **Reasoning Error**  
> - LLM chỉ tạo test cases cho desktop browser, bỏ qua mobile → **Bias**

### Cách phát hiện từng loại lỗi

**Hallucination detection:**
| Phương pháp | Mô tả |
|-------------|-------|
| **Cross-verification** | So sánh output với documentation, requirements, system behavior đã biết |
| **Domain expertise consultation** | Hỏi subject matter experts để validate accuracy |
| **Consistency checks** | Kiểm tra tính nhất quán giữa các outputs với nhau |

**Reasoning error detection:**
| Phương pháp | Mô tả |
|-------------|-------|
| **Logical validation** | Đánh giá logical flow, coherence của AI-generated content |
| **Output testing** | Chạy test cases/scripts đã sinh để kiểm tra kết quả thực tế |

**Bias detection:**
- Review xem synthetic test data có represent fairness/accuracy đúng không
- Kiểm tra xem non-functional tests có bị underrepresent trong output không
- So sánh tỷ lệ test cases cho các user segments khác nhau

### Kỹ thuật giảm thiểu — QUAN TRỌNG ⭐⭐

| Kỹ thuật | Mô tả | Giảm thiểu loại lỗi |
|----------|-------|---------------------|
| **Provide complete context** | Đảm bảo prompt có đủ 6 thành phần | Hallucination, Reasoning error |
| **Divide prompts into steps** | Dùng prompt chaining, verify từng bước | Reasoning error (verify logic từng bước) |
| **Use clear, interpretable formats** | Tránh format mơ hồ; dùng structured formats | Hallucination, Bias |
| **Select appropriate model** | Chọn LLM phù hợp với tác vụ cụ thể | Tất cả |
| **Compare across models** | Test prompt với nhiều LLMs, so sánh kết quả | Hallucination |
| **RAG** | Retrieval-Augmented Generation — grounding LLM với real data | Hallucination (vì có real data làm anchor) |
| **Fine-tuning** | Huấn luyện thêm trên domain-specific data | Bias (data cân bằng hơn) |

### Giảm thiểu Non-Deterministic Behavior

| Kỹ thuật | Mô tả |
|----------|-------|
| **Điều chỉnh temperature** | Giảm temperature → output nhất quán hơn, ít ngẫu nhiên hơn |
| **Setting random seeds** | Một số LLMs cho phép đặt seed để cải thiện reproducibility |

> ⚠️ **Lưu ý quan trọng**: Không thể đảm bảo **hoàn toàn** reproducibility với LLMs ngay cả khi dùng cả 2 kỹ thuật trên. Cần human oversight.

---

## 3.2 Rủi ro Bảo mật và Quyền riêng tư Dữ liệu

### Ba rủi ro Data Privacy chính

| Rủi ro | Mô tả | Ví dụ cụ thể |
|--------|-------|-------------|
| **Unintentional data exposure** | LLM vô tình tiết lộ thông tin nhạy cảm trong output | LLM nhắc đến tên khách hàng thật khi tạo test data |
| **Lack of control over data usage** | AI tools lưu trữ/xử lý dữ liệu mà không có sự đồng ý rõ ràng | Dữ liệu test được dùng để train model của vendor |
| **Compliance risks** | Vi phạm GDPR hoặc các quy định bảo vệ dữ liệu | Gửi PII thật vào ChatGPT để tạo test data → vi phạm GDPR |

### Bốn Attack Vectors — CẦN NHỚ ⭐

| Attack Vector | Định nghĩa | Ví dụ trong Testing |
|---------------|-----------|---------------------|
| **Data exfiltration** | Gửi requests để trích xuất dữ liệu nhạy cảm từ training data | Prompt dài khiến LLM tiết lộ dữ liệu training |
| **Request manipulation** (Adversarial inputs) | Đưa vào dữ liệu độc hại để phá vỡ output của AI | Ảnh được craft đặc biệt khiến AI hallucinate acceptance criteria |
| **Data poisoning** | Thao túng dữ liệu **huấn luyện** để ảnh hưởng behavior của model | Đưa đánh giá giả khi rating AI-generated test report → làm ô nhiễm training data |
| **Malicious code generation** | Thao túng LLM để tạo code có backdoor/malicious behavior | Prompt engineering để LLM sinh code mở kết nối đến IP độc hại trong test script |

**Phân biệt data exfiltration vs data poisoning**:
- Exfiltration = *Đánh cắp thông tin từ LLM ra ngoài*
- Poisoning = *Đầu độc training data để ảnh hưởng model*

### Chiến lược giảm thiểu Data Privacy & Security

| Chiến lược | Mô tả |
|------------|-------|
| **Data minimization** | Chỉ dùng dữ liệu cần thiết, không xử lý sensitive data trừ khi được phép |
| **Data anonymization & pseudonymization** | Che giấu/thay thế thông tin nhạy cảm trước khi gửi cho LLM |
| **Secure data storage & transmission** | Mã hóa mạnh, kiểm soát truy cập |
| **Resources training** | Đào tạo nhân viên về sử dụng GenAI có trách nhiệm |
| **Systematic human review** | Human evaluation là **bắt buộc** cho mọi AI-generated output |
| **Comparison evaluation** | Dùng nhiều LLMs để so sánh và cross-validate output |
| **Secure operational environment** | Dùng commercial secure offering / secure cloud / on-premise |
| **Regular security audits** | Định kỳ kiểm tra và đánh giá vulnerabilities |
| **Involving security experts** | Tham vấn CTO, CISO, Legal counsel |

---

## 3.3 Tiêu thụ Năng lượng và Tác động Môi trường

### Tác động môi trường của GenAI

| Yếu tố | Chi tiết |
|--------|---------|
| **Mức tiêu thụ** | Training và chạy LLMs đòi hỏi tài nguyên tính toán chuyên biệt, cường độ cao |
| **So sánh**: Image vs Text | Tạo **1 ảnh** bằng AI mạnh = năng lượng sạc đầy 1 smartphone. Tạo **text** chỉ bằng một phần nhỏ |
| **Cumulative effect** | Hàng triệu người dùng tạo ra CO₂ emissions đáng kể |

### Best Practice về môi trường

- **Hạn chế tương tác không cần thiết** với model
- Ưu tiên **SLMs** (Small Language Models) cho tác vụ đơn giản — tốn ít năng lượng hơn
- Cân nhắc **on-premise** vs cloud deployment về carbon footprint
- **Tái sử dụng prompts** tốt thay vì regenerate nhiều lần

---

## 3.4 Quy định AI, Tiêu chuẩn và Framework

### Bốn Bộ Quy định/Tiêu chuẩn Chính — PHẢI NHỚ ⭐⭐

| Tên | Loại | Năm | Mô tả | Ứng dụng trong Testing |
|-----|------|-----|-------|------------------------|
| **ISO/IEC 42001:2023** | International Standard | 2023 | Yêu cầu **quản lý hệ thống AI** trong tổ chức (AI management system) | Đảm bảo GenAI in testing tuân theo best practices về governance |
| **ISO/IEC 23053:2022** | International Standard | 2022 | Framework cho **AI systems dùng Machine Learning** — data quality, transparency, fault tolerance | Đảm bảo data quality, transparency trong LLM-powered test infrastructure |
| **EU AI Act** | EU Regulation | 2024 | Framework pháp lý **phân loại AI theo mức độ rủi ro** (risk-based approach) | Tuân thủ transparency, accountability, bias mitigation |
| **NIST AI RMF** (Risk Management Framework) | US Framework | 2023 | Hướng dẫn quản lý rủi ro AI: **fairness, transparency, security, reliability** | Đảm bảo fairness, ngăn biased test results, security |

**Mẹo nhớ**:
- ISO 42001 = *Quản lý tổ chức* (management system)
- ISO 23053 = *Kỹ thuật AI/ML* (framework cho AI systems)
- EU AI Act = *Luật châu Âu* (risk classification)
- NIST AI RMF = *Khung Mỹ* (risk management)

> 🎯 **Câu hỏi thi hay gặp**: "Tổ chức muốn phân loại các hệ thống AI theo mức độ rủi ro. Framework nào phù hợp?" → **EU AI Act** (risk-based classification). "Muốn đảm bảo AI management system trong tổ chức?" → **ISO/IEC 42001**.

---

## Bẫy thi thường gặp

### Bẫy 1: Nhầm Hallucination với Reasoning Error
**Tình huống**: LLM tạo test case với điều kiện "IF user is NOT admin THEN grant admin access."
**Đáp án đúng**: Đây là **Reasoning Error** (logic sai, conditional ngược). Hallucination = bịa ra thông tin không có.

### Bẫy 2: Nhầm Data Exfiltration với Data Poisoning
**Câu đánh lừa**: "An attacker manipulates training data to influence model behavior — this is data exfiltration."
**Đáp án đúng**: Đó là **Data Poisoning**. Data exfiltration = lấy dữ liệu **ra khỏi** LLM (không phải thao túng training).

### Bẫy 3: Temperature thấp = không có hallucination
**Câu đánh lừa**: "Setting temperature to 0 eliminates hallucinations."
**Đáp án đúng**: Temperature thấp làm output **nhất quán hơn** (ít ngẫu nhiên), nhưng **không loại bỏ hallucinations** hoàn toàn.

### Bẫy 4: Human review là optional với GenAI tốt
**Câu đánh lừa**: "With advanced LLMs, human review of AI-generated testware becomes optional."
**Đáp án đúng**: **Systematic human review là bắt buộc** bất kể LLM mạnh đến đâu. LLMs vẫn có thể hallucinate.

### Bẫy 5: Nhầm bộ quy định
**Câu đánh lừa**: "NIST AI RMF is an EU regulation that classifies AI by risk level."
**Đáp án đúng**: EU AI Act = EU regulation với risk classification. NIST AI RMF = **US framework** cho risk management.

### Bẫy 6: Bias chỉ ảnh hưởng đến ngôn ngữ
**Câu đánh lừa**: "Bias in LLMs only affects language choice (e.g., English vs Vietnamese)."
**Đáp án đúng**: Bias có thể ảnh hưởng đến nhiều thứ: **underrepresentation** của non-functional tests, specific user groups, edge cases, test techniques.

---

## Câu hỏi luyện tập

**Câu 1**: LLM được yêu cầu tạo test cases cho API endpoint `/users/{id}`. LLM trả về test cases cho endpoint `/accounts/{id}` — endpoint này không tồn tại trong hệ thống. Đây là loại lỗi gì?
- A. Reasoning Error — vì LLM chọn sai endpoint
- B. Bias — vì LLM thiên vị về naming convention
- C. Hallucination — vì LLM bịa ra thông tin không có thật
- D. Data poisoning — vì training data bị thao túng

> **Đáp án**: C. LLM tạo test cases cho endpoint **không tồn tại** = hallucination (bịa ra thông tin sai thực tế).

---

**Câu 2**: Tester phát hiện rằng LLM luôn tạo test cases bằng tiếng Anh và bỏ qua non-functional requirements (performance, security). Đây là loại lỗi gì?
- A. Hallucination
- B. Reasoning Error
- C. Bias
- D. Non-deterministic behavior

> **Đáp án**: C. **Bias** — LLM thiên vị về ngôn ngữ và loại test do training data không cân bằng.

---

**Câu 3**: Kẻ tấn công gửi một prompt đặc biệt để LLM tiết lộ thông tin từ training data của nó. Đây là loại attack vector nào?
- A. Request manipulation
- B. Data poisoning
- C. Data exfiltration
- D. Malicious code generation

> **Đáp án**: C. **Data exfiltration** — mục tiêu là lấy dữ liệu ra khỏi LLM.

---

**Câu 4**: Công ty muốn đảm bảo hệ thống AI management trong tổ chức tuân theo best practices về governance. Tiêu chuẩn nào phù hợp?
- A. EU AI Act
- B. NIST AI RMF
- C. ISO/IEC 23053:2022
- D. ISO/IEC 42001:2023

> **Đáp án**: D. **ISO/IEC 42001:2023** — yêu cầu quản lý hệ thống AI trong tổ chức.

---

**Câu 5**: Tester muốn LLM tạo ra output nhất quán hơn giữa các lần gọi. Kỹ thuật nào hiệu quả?
- A. Tăng context window
- B. Giảm temperature
- C. Dùng system prompt dài hơn
- D. Tăng số lượng few-shot examples

> **Đáp án**: B. **Giảm temperature** → output nhất quán hơn, ít ngẫu nhiên hơn.

---

**Câu 6**: Tester cần gửi dữ liệu test có chứa thông tin khách hàng thật lên ChatGPT để tạo test data. Rủi ro nào cần lo ngại nhất?
- A. Hallucination trong test data được tạo ra
- B. Non-deterministic output của ChatGPT
- C. Data privacy — thông tin nhạy cảm có thể bị lưu trữ/xử lý bởi vendor
- D. Reasoning error trong việc tạo test cases

> **Đáp án**: C. **Data privacy** — gửi PII thật lên third-party AI tool có thể vi phạm GDPR và các quy định bảo vệ dữ liệu. Cần anonymize/pseudonymize trước.

---

**Câu 7**: Tổ chức muốn áp dụng risk-based approach để phân loại các hệ thống AI theo mức độ nguy hiểm. Framework nào phù hợp?
- A. ISO/IEC 42001:2023
- B. ISO/IEC 23053:2022
- C. EU AI Act
- D. NIST AI RMF

> **Đáp án**: C. **EU AI Act** — sử dụng risk-based classification để phân loại AI systems theo mức độ rủi ro.

---

## Checklist ôn tập nhanh

Trước khi thi, tự check:

- [ ] Tôi phân biệt được **Hallucination vs Reasoning Error vs Bias** từ ví dụ cụ thể?
- [ ] Tôi biết cách **phát hiện** từng loại lỗi (cross-verification, logical validation, review)?
- [ ] Tôi nhớ **6+ kỹ thuật giảm thiểu** hallucination/reasoning error/bias?
- [ ] Tôi biết **temperature** ảnh hưởng thế nào đến output?
- [ ] Tôi biết **3 rủi ro data privacy** chính?
- [ ] Tôi nhớ **4 attack vectors** (data exfiltration, request manipulation, data poisoning, malicious code generation)?
- [ ] Tôi biết chiến lược giảm thiểu data privacy (data minimization, anonymization, human review)?
- [ ] Tôi nhớ **4 bộ quy định/tiêu chuẩn** (ISO 42001, ISO 23053, EU AI Act, NIST AI RMF) và mô tả của từng cái?
- [ ] Tôi hiểu tại sao **human review là bắt buộc** với AI-generated testware?

---

> ✅ **Kết thúc Chương 3**. Chương tiếp theo: [Chương 4 — Hạ tầng LLM](./Chuong-04-Co-So-Ha-Tang-LLM.md)
