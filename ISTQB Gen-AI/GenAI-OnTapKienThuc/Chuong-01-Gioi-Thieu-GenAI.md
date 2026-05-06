# Chương 1 — Introduction to GenAI for Software Testing (Giới thiệu GenAI cho Kiểm thử)

> **Thời lượng syllabus**: 100 phút | **K-levels**: K1, K2
> **Ghi chú của giáo viên**: Chương nền tảng — hiểu bức tranh toàn cảnh AI spectrum và 3 loại LLM là đủ để tránh bẫy thi. Không có K3 — chỉ cần nhớ và giải thích, không cần apply kỹ thuật.

---

## Mục lục
1. [Keywords giải thích](#keywords)
2. [Learning Objectives](#learning-objectives)
3. [1.1 Phổ AI và nền tảng GenAI](#11-phổ-ai-và-nền-tảng-genai)
4. [1.2 Kiến thức cơ bản về LLM](#12-kiến-thức-cơ-bản-về-llm)
5. [1.3 Ba loại LLM và Multimodal Models](#13-ba-loại-llm-và-multimodal-models)
6. [1.4 Áp dụng GenAI vào Kiểm thử](#14-áp-dụng-genai-vào-kiểm-thử)
7. [Bẫy thi thường gặp](#bẫy-thi-thường-gặp)
8. [Câu hỏi luyện tập](#câu-hỏi-luyện-tập)
9. [Checklist ôn tập nhanh](#checklist-ôn-tập-nhanh)

---

## Keywords

| Thuật ngữ | Giải thích nhanh |
|-----------|-----------------|
| **AI chatbot** | Ứng dụng AI dùng LLM để cung cấp giao diện hội thoại tương tác |
| **Context window** | Lượng text (tokens) mà LLM có thể xem xét **cùng lúc** khi sinh phản hồi |
| **Deep learning** | Kỹ thuật ML dùng neural networks nhiều lớp để **tự học features** từ dữ liệu |
| **Embedding** | Biểu diễn **số** (vector) của tokens, mã hóa quan hệ ngữ nghĩa trong không gian đa chiều |
| **Feature** | Thuộc tính/đặc điểm của dữ liệu được dùng để huấn luyện ML model |
| **Foundation LLM** | LLM pre-trained trên dataset đa dạng, khổng lồ — **đa năng** nhưng cần tùy chỉnh thêm |
| **Generative AI (GenAI)** | Branch of AI dùng deep learning để **tạo nội dung mới** (text, ảnh, code, audio) |
| **GPT** | Generative Pre-trained Transformer — kiến trúc neural network nền tảng của nhiều LLMs hiện đại |
| **Instruction-tuned LLM** | LLM đã fine-tuned để **tuân theo hướng dẫn** của người dùng tốt hơn Foundation LLM |
| **Large Language Model (LLM)** | GenAI model được pre-trained trên dataset text rất lớn, xử lý và sinh ngôn ngữ tự nhiên |
| **Machine learning (ML)** | Phân nhánh AI dựa trên dữ liệu: chuẩn bị data, chọn features, huấn luyện model |
| **Multimodal model** | Model có thể xử lý nhiều loại dữ liệu: text, ảnh, âm thanh, video |
| **Reasoning LLM** | LLM tối ưu cho **lập luận logic** và multi-step problem-solving |
| **Symbolic AI** | AI dựa trên **quy tắc và ký hiệu** để mô phỏng reasoning con người |
| **Tokenization** | Quá trình phân tách text thành các đơn vị nhỏ gọi là **token** để LLM xử lý |
| **Transformer** | Kiến trúc neural network nền tảng của hầu hết LLMs hiện đại |

---

## Learning Objectives

| ID | K-Level | Nội dung cần đạt được |
|----|---------|----------------------|
| GenAI-1.1.1 | **K1** | Nhớ (recall) các loại AI: symbolic AI, classical ML, deep learning, generative AI |
| GenAI-1.1.2 | **K2** | Giải thích (explain) các khái niệm cơ bản của GenAI và LLMs (tokenization, embeddings, context window) |
| GenAI-1.1.3 | **K2** | Phân biệt (distinguish) foundation LLM, instruction-tuned LLM, reasoning LLM |
| GenAI-1.2.1 | **K2** | Tóm tắt (summarize) multimodal LLMs và vision-language models |
| GenAI-1.2.2 | **K2** | So sánh (compare) AI chatbot và LLM-powered testing application |

> 💡 **Tip**: Chương này **không có K3** — không cần apply kỹ thuật. Chỉ cần nhớ, giải thích và phân biệt.

---

## 1.1 Phổ AI và nền tảng GenAI

### AI Spectrum (Phổ AI) — 4 cấp độ

| Loại AI | Cơ chế | Ứng dụng trong Testing |
|---------|--------|----------------------|
| **Symbolic AI** | Rule-based, biểu diễn tri thức bằng ký hiệu và logic | Mô phỏng decision-making theo quy tắc cứng |
| **Classical Machine Learning** | Data-driven: chuẩn bị data thủ công → chọn features → train model | Phân loại defect, dự đoán failure |
| **Deep Learning** | Neural networks nhiều lớp → **tự học features** từ dữ liệu | Nhận dạng ảnh UI, phân tích log |
| **Generative AI** | Dùng deep learning để **tạo nội dung mới** (text, code, ảnh) | Tạo test cases, test data, test scripts |

```
Symbolic AI → Classical ML → Deep Learning → Generative AI
   (rules)     (features)      (auto-learn)    (creates new)
```

> 🎯 **Câu hỏi thi hay gặp**: Phân biệt 4 loại AI theo cơ chế và ứng dụng. Ví dụ: "Deep Learning khác Classical ML ở chỗ nào?" → Deep Learning **tự học features**, Classical ML cần **chọn features thủ công**.

### Vì sao GenAI đặc biệt hữu ích cho Testing?

Ưu điểm chính: **Dùng ngay pre-trained models** mà không cần giai đoạn huấn luyện bổ sung. Developer/Tester có thể sử dụng ngay thông qua prompts.

---

## 1.2 Kiến thức cơ bản về LLM

### Kiến trúc LLM

**Large Language Models (LLMs)**:
- Dựa trên kiến trúc **Generative Pre-trained Transformer (GPT)**
- Được huấn luyện trên **tập dữ liệu khổng lồ** (sách, bài viết, code, websites)
- **Small Language Models (SLMs)**: Phiên bản nhỏ hơn, ít tham số hơn, nhẹ và tập trung vào domain cụ thể

### Tokenization và Embeddings — HAI KHÁI NIỆM CỐT LÕI

| Khái niệm | Định nghĩa | Ví dụ |
|-----------|-----------|-------|
| **Tokenization** | Phân tách text thành các đơn vị nhỏ gọi là **token** | "unbelievable" → ["un", "believ", "able"] hoặc từng ký tự |
| **Embeddings** | Biểu diễn **số (vector)** của tokens, mã hóa quan hệ ngữ nghĩa | "cat" và "kitten" → vectors gần nhau; "car" → vector xa hơn |

> 🧠 **Phân biệt**: Tokenization = **bước đầu tiên** (chia text). Embedding = **bước sau** (mã hóa ý nghĩa).

**Memory trick**: 
- Tokenization = *Máy cắt bánh mì* (chia nhỏ)
- Embedding = *Bản đồ ngữ nghĩa* (đặt vào không gian có tọa độ)

### Context Window

**Định nghĩa**: Lượng text (tính bằng **tokens**) mà LLM có thể xem xét **cùng lúc** khi sinh phản hồi.

**Tác động**:
- Window **lớn hơn** → duy trì ngữ cảnh tốt hơn trong cuộc hội thoại dài
- Khi đầy context window → LLM **loại bỏ thông tin cũ** → có thể quên details quan trọng
- Window lớn hơn → tốn **nhiều tài nguyên tính toán** hơn

> 💡 **Ví dụ thực tế**: Cuộc hội thoại với ChatGPT kéo dài → ChatGPT "quên" những gì đã nói ở đầu cuộc trò chuyện. Đây là context window bị vượt quá.

### Non-Deterministic Behavior

LLMs hoạt động theo cơ chế **lấy mẫu xác suất** — cùng một input có thể cho output **khác nhau** giữa các lần gọi.

Ví dụ: Prompt "Tạo 3 test cases cho login" → lần 1 và lần 2 có thể ra kết quả khác nhau.

---

## 1.3 Ba loại LLM và Multimodal Models

### Ba loại LLM — BẢNG SO SÁNH QUAN TRỌNG

| Loại | Đặc điểm | Phù hợp với tác vụ |
|------|----------|-------------------|
| **Foundation LLMs** | Pre-trained trên dataset đa dạng, khổng lồ. **Đa năng** nhưng cần tùy chỉnh thêm | Nhiều domain: NLP, computer vision, speech |
| **Instruction-tuned LLMs** | Fine-tuned từ Foundation, tối ưu để **tuân theo hướng dẫn** và intent người dùng | Chatbot, trợ lý AI, tạo Gherkin tests, test scripts theo template |
| **Reasoning LLMs** | Mở rộng từ Instruction-tuned, nhấn mạnh **lập luận logic**, giải quyết vấn đề nhiều bước (chain-of-thought) | Phân tích defect trends, test prioritization phức tạp, debug multi-step logic |

**Phân biệt nhanh**:
- Foundation = *Người học rộng biết nhiều* (nhưng cần hướng dẫn)
- Instruction-tuned = *Nhân viên giỏi làm theo chỉ thị* (làm đúng format, theo template)
- Reasoning = *Chuyên gia phân tích* (giải quyết vấn đề nhiều bước logic)

> 🎯 **Câu hỏi thi hay gặp**: "LLM nào phù hợp để tạo Gherkin-style test cases?" → **Instruction-tuned** (vì template/format cố định). "LLM nào phù hợp để phân tích defect trends?" → **Reasoning** (vì multi-step analysis).

### Multimodal LLMs và Vision-Language Models (VLMs)

| Loại | Xử lý | Ứng dụng trong Testing |
|------|-------|----------------------|
| **Multimodal LLMs** | Text + ảnh + âm thanh + video | Tổng hợp nhiều loại test data |
| **Vision-Language Models (VLMs)** | Text + ảnh **(subset của Multimodal)** | Phân tích UI screenshots, wireframe, so sánh expected vs actual |

**Ứng dụng VLM trong Testing**:
- Phân tích ảnh chụp màn hình UI để tìm visual defects
- So sánh expected output (image) với actual output (image)
- Tạo test cases từ wireframes hoặc mockups
- Phát hiện sự không nhất quán giữa design spec và implementation

> 🧠 **Nhớ**: VLM ⊂ Multimodal LLM. VLM chỉ xử lý text + image. Multimodal xử lý nhiều loại hơn (audio, video, v.v.).

---

## 1.4 Áp dụng GenAI vào Kiểm thử

### Các khả năng chính của LLMs trong Testing

| Khả năng | Mô tả |
|----------|-------|
| **Requirements analysis** | Phát hiện sự mơ hồ, không nhất quán, thiếu thông tin trong requirements |
| **Test case creation** | Sinh test cases và gợi ý test objectives từ user stories, requirements |
| **Test oracle generation** | Sinh expected results (kết quả mong đợi) |
| **Test data generation** | Sinh datasets, boundary values, equivalence combinations |
| **Test automation support** | Sinh test scripts, cải thiện test scripts hiện có |
| **Test result analysis** | Tóm tắt kết quả, phân loại anomalies theo severity/priority |
| **Testware creation** | Tạo test plans, test reports, defect reports |

> ⚠️ **Giới hạn**: LLM **không tự execute test** thay người. LLM generate/analyze, không run test suite.

### Hai cách tương tác với LLMs

| Cách | Đặc điểm | Phù hợp với |
|------|----------|-------------|
| **AI Chatbots** | Giao diện hội thoại, phản hồi ngay. Đơn giản, chi phí thấp | Tác vụ thường ngày, exploratory testing, onboarding |
| **LLM-Powered Testing Applications** | Tích hợp qua API, tự động hóa cao, tùy chỉnh và scalable | Tác vụ phức tạp, lặp lại, tích hợp vào CI/CD pipeline |

---

## Bẫy thi thường gặp

### Bẫy 1: Nhầm Tokenization với Embedding
**Câu đánh lừa**: "Tokenization converts tokens into high-dimensional vectors."
**Đáp án đúng**: Tokenization = **chia text thành tokens**. Embedding = **chuyển tokens thành vectors** (bước sau).

### Bẫy 2: Nhầm loại LLM
**Câu đánh lừa**: "Reasoning LLMs excel at creating test scripts following predefined templates."
**Đáp án đúng**: Template-following = **Instruction-tuned LLM** (làm theo format). Reasoning LLM dùng cho **multi-step logic**.

### Bẫy 3: Foundation LLM đã đủ tốt để generate test cases
**Câu đánh lừa**: "Foundation LLMs excel at generating test cases from high-level requirements."
**Đáp án đúng**: Foundation LLMs **cần tùy chỉnh thêm** (instruction-tuning hoặc fine-tuning). Chưa phù hợp cho tác vụ cụ thể ngay.

### Bẫy 4: VLM = Multimodal LLM
**Câu đánh lừa**: "Multimodal models and vision-language models are the same."
**Đáp án đúng**: VLM là **subset** của Multimodal. VLM chỉ xử lý text + image; Multimodal còn xử lý audio, video, v.v.

### Bẫy 5: LLM có thể tự execute test scripts
**Câu đánh lừa**: "LLMs can automate execution of all test scripts."
**Đáp án đúng**: LLM **generate và analyze**, không tự chạy test suite. Test execution vẫn cần tool riêng.

### Bẫy 6: Context window lớn hơn luôn tốt hơn
**Câu đánh lừa**: "A larger context window always produces better results."
**Đáp án đúng**: Context window lớn = duy trì ngữ cảnh tốt hơn, **nhưng tốn nhiều tài nguyên tính toán** hơn. Có trade-off.

---

## Câu hỏi luyện tập

**Câu 1**: Một tester muốn LLM tạo Gherkin-style test cases từ user stories theo format cố định của công ty. Loại LLM nào phù hợp nhất?
- A. Foundation LLM — vì đa năng nhất
- B. Instruction-tuned LLM — vì tối ưu để làm theo format và instructions
- C. Reasoning LLM — vì cần logic phức tạp
- D. Symbolic AI — vì dùng quy tắc cố định

> **Đáp án**: B. Instruction-tuned LLM excel tại các tác vụ có format cố định và cần tuân theo instructions.

---

**Câu 2**: Đội QA nhận thấy rằng khi họ hỏi LLM cùng một câu hỏi hai lần, kết quả đôi khi khác nhau. Điều này được giải thích bởi đặc điểm nào của LLM?
- A. Context window quá nhỏ
- B. Tokenization không nhất quán
- C. Non-deterministic behavior (cơ chế lấy mẫu xác suất)
- D. Embedding không chính xác

> **Đáp án**: C. LLMs dùng cơ chế lấy mẫu xác suất → cùng input có thể ra output khác nhau.

---

**Câu 3**: Tester muốn phân tích screenshots của UI để phát hiện visual defects. Loại model nào phù hợp nhất?
- A. Foundation LLM — vì đa năng
- B. Instruction-tuned LLM — vì làm theo instructions tốt
- C. Vision-Language Model (VLM) — vì xử lý text + image
- D. Classical Machine Learning — vì dùng features thủ công

> **Đáp án**: C. VLM được thiết kế để xử lý cả text lẫn hình ảnh, phù hợp với UI screenshot analysis.

---

**Câu 4**: Phát biểu nào ĐÚNG về Tokenization và Embedding?
- A. Tokenization chuyển tokens thành high-dimensional vectors
- B. Embedding chia text thành các đơn vị nhỏ hơn để xử lý
- C. Tokenization xảy ra trước, sau đó mới tạo Embeddings
- D. Embedding và Tokenization là cùng một quá trình

> **Đáp án**: C. Tokenization = chia text → Embedding = mã hóa tokens thành vectors. Thứ tự: Tokenization trước, Embedding sau.

---

**Câu 5**: Tester A nói: "Sau khi áp dụng GenAI, chúng ta không cần test nữa vì AI sẽ đảm bảo không có defects." Phát biểu này sai ở đâu?
- A. GenAI không thể tạo test cases
- B. LLMs có thể hallucinate và tạo ra kết quả sai — cần human oversight để verify
- C. GenAI chỉ dùng được cho unit testing
- D. GenAI không thể xử lý ngôn ngữ tự nhiên

> **Đáp án**: B. LLMs có thể hallucinate (tạo output sai thực tế). Cần human oversight để verify mọi AI-generated output.

---

**Câu 6**: So sánh AI Chatbot và LLM-Powered Testing Application — phát biểu nào ĐÚNG?
- A. AI Chatbot tích hợp sâu hơn vào CI/CD pipeline so với LLM-powered apps
- B. LLM-powered testing apps phù hợp hơn cho tác vụ phức tạp, lặp lại, cần scalability cao
- C. AI Chatbot không thể dùng cho testing tasks
- D. Cả hai đều không hỗ trợ exploratory testing

> **Đáp án**: B. LLM-powered testing apps tích hợp qua API, tự động hóa cao, phù hợp cho tác vụ phức tạp và lặp lại.

---

## Checklist ôn tập nhanh

Trước khi thi, tự check:

- [ ] Tôi có thể liệt kê và giải thích **4 loại AI** trong phổ AI (symbolic, classical ML, deep learning, generative AI)?
- [ ] Tôi phân biệt được **Tokenization vs Embedding** — cái nào xảy ra trước, cái nào làm gì?
- [ ] Tôi hiểu **Context Window** là gì và tác động khi bị vượt quá?
- [ ] Tôi phân biệt được **3 loại LLM** (Foundation, Instruction-tuned, Reasoning) và use case của mỗi loại?
- [ ] Tôi biết **VLM là subset của Multimodal LLM**, không phải đồng nghĩa?
- [ ] Tôi biết **7 khả năng chính** của LLMs trong testing?
- [ ] Tôi phân biệt được **AI Chatbot vs LLM-Powered Testing Application**?
- [ ] Tôi nhớ rằng LLMs có **non-deterministic behavior** — cùng input có thể ra output khác nhau?

---

> ✅ **Kết thúc Chương 1**. Chương tiếp theo: [Chương 2 — Prompt Engineering](./Chuong-02-Prompt-Engineering.md)
