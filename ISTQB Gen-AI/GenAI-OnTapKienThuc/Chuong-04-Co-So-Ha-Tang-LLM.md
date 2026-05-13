# Chương 4 — LLM-Powered Test Infrastructure (Hạ tầng Kiểm thử sử dụng LLM)

> **Thời lượng syllabus**: 110 phút | **K-levels**: K2
> **Ghi chú của giáo viên**: Chương kỹ thuật nhất, chỉ có K2 — cần **giải thích và tóm tắt**, không cần apply. Tập trung vào RAG (cơ chế hoạt động), LLM-Powered Agents (các loại), Fine-tuning (lợi ích và thách thức), và LLMOps (3 cách triển khai).

---

## Mục lục
1. [Keywords giải thích](#keywords)
2. [Learning Objectives](#learning-objectives)
3. [4.1 Kiến trúc Hạ tầng Kiểm thử Sử dụng LLM](#41-kiến-trúc-hạ-tầng-kiểm-thử-sử-dụng-llm)
4. [4.2 Fine-tuning và LLMOps](#42-fine-tuning-và-llmops)
5. [Bẫy thi thường gặp](#bẫy-thi-thường-gặp)
6. [Câu hỏi luyện tập](#câu-hỏi-luyện-tập)
7. [Checklist ôn tập nhanh](#checklist-ôn-tập-nhanh)

---

## Keywords

| Thuật ngữ | Giải thích nhanh |
|-----------|-----------------|
| **Fine-tuning** | Huấn luyện thêm một pre-trained LLM trên **dataset cụ thể** cho domain/tác vụ |
| **LLM-powered agent** | Ứng dụng GenAI chuyên biệt cho xử lý **autonomous hoặc semi-autonomous** các tác vụ |
| **LLMOps** | Practices, tools và processes để **streamline deployment và maintenance** của LLMs |
| **RAG (Retrieval-Augmented Generation)** | Kỹ thuật tăng cường LLMs bằng cách **tích hợp external data sources** vào quá trình sinh phản hồi |
| **Test infrastructure** | Toàn bộ infrastructure hỗ trợ test activities (tools, environments, databases, integrations) |
| **Vector database** | Database lưu trữ **embeddings (vectors)**, hỗ trợ semantic similarity search |

---

## Learning Objectives

| ID | K-Level | Nội dung cần đạt được |
|----|---------|----------------------|
| GenAI-4.1.1 | **K2** | Giải thích (explain) các architectural components của LLM-powered test infrastructure |
| GenAI-4.1.2 | **K2** | Tóm tắt (summarize) cách RAG tăng cường LLMs trong context kiểm thử |
| GenAI-4.1.3 | **K2** | Giải thích (explain) role của LLM-powered agents trong automated testing |
| GenAI-4.2.1 | **K2** | Giải thích (explain) fine-tuning và khi nào phù hợp để sử dụng |
| GenAI-4.2.2 | **K2** | Giải thích (explain) LLMOps và các cách triển khai GenAI trong test processes |

> 💡 **Tip**: Không có K3 — không cần apply kỹ thuật, chỉ cần **giải thích và tóm tắt**. Câu hỏi sẽ dạng "component nào làm gì" hoặc "RAG hoạt động như thế nào".

---

## 4.1 Kiến trúc Hạ tầng Kiểm thử Sử dụng LLM

### Năm thành phần kiến trúc cơ bản

| Thành phần | Vai trò | Ví dụ |
|-----------|---------|-------|
| **Front-end** | Giao diện người dùng — testers nhập queries, commands, view results | Chat interface, IDE plugin |
| **Back-end** | Xử lý input, quản lý authentication, data retrieval, **chuẩn bị prompt**, giao tiếp với LLM | API gateway, orchestration layer |
| **LLM** | Third-party service (API) hoặc custom in-house model — **sinh phản hồi** từ structured prompts | OpenAI API, Anthropic API, local Llama |
| **Relational DB** | Lưu trữ **dữ liệu có cấu trúc** (test cases, requirements, test results, configurations) | PostgreSQL, MySQL |
| **Vector DB** | Lưu trữ **embeddings** — hỗ trợ semantic similarity search, dùng trong RAG | Pinecone, Weaviate, Chroma |

> 🧠 **Phân biệt Relational DB vs Vector DB**: 
> - Relational DB = tìm kiếm theo **exact match** (SELECT WHERE id = 5)
> - Vector DB = tìm kiếm theo **semantic similarity** (tìm những gì "có nghĩa tương tự")

### Retrieval-Augmented Generation (RAG) ⭐⭐

**Định nghĩa**: RAG tăng cường LLMs bằng cách tích hợp **external data sources** vào quá trình sinh phản hồi, giúp tăng độ chính xác và relevance.

**Tại sao cần RAG?**
- LLM chỉ biết thông tin đến **cutoff date** của training
- LLM không biết **thông tin nội bộ** của tổ chức (requirements, test cases, code)
- RAG = cách "tiêm" real-time, organization-specific knowledge vào LLM

**Quy trình RAG — HAI GIAI ĐOẠN:**

```
GIAI ĐOẠN 1: PREPROCESSING (làm một lần)
Documents → Chia thành chunks (256-512 tokens) → Làm sạch → Mã hóa thành embeddings → Lưu vào Vector DB

GIAI ĐOẠN 2: INFERENCE (mỗi lần query)
Query của user → Mã hóa → Tìm chunks liên quan nhất (semantic similarity) → Kết hợp với LLM knowledge → Sinh phản hồi
```

| Bước | Giai đoạn | Mô tả chi tiết |
|------|----------|----------------|
| 1 | Preprocessing | Chia documents thành **chunks nhỏ** (256–512 tokens) |
| 2 | Preprocessing | **Làm sạch và xử lý** từng chunk |
| 3 | Preprocessing | **Mã hóa thành high-dimensional vectors** (embeddings) |
| 4 | Preprocessing | **Lưu vào vector database** |
| 5 | Inference | **Retrieval**: Mã hóa query → tìm chunks liên quan nhất theo semantic similarity |
| 6 | Inference | **Generation**: Kết hợp retrieved chunks + LLM knowledge → sinh phản hồi chính xác |

**Ứng dụng RAG trong Testing**:
- Truy cập **enterprise test artifacts** (test cases, requirements, standards) trong real-time
- Đảm bảo test tasks phù hợp với **specifications mới nhất** (không dùng outdated knowledge)
- Giảm thiểu **hallucination** vì LLM có real data làm anchor

> 🎯 **Ví dụ thực tế**: Test team có 5000 existing test cases. Dùng RAG → LLM có thể tìm test cases liên quan đến feature mới và suggest reuse thay vì tạo mới từ đầu.

### LLM-Powered Agents ⭐

**Định nghĩa**: Ứng dụng GenAI **chuyên biệt**, được thiết kế để xử lý các tác vụ được định nghĩa theo cách **semi-autonomous hoặc autonomous**.

| Loại Agent | Mô tả | Use Case trong Testing |
|-----------|-------|----------------------|
| **Autonomous agents** | Hoạt động **độc lập**, tối thiểu human intervention | Test data generation tự động theo schedule |
| **Semi-autonomous agents** | Thực hiện tác vụ với **periodic human oversight** | Test case generation + human review trước khi execute |
| **Multi-agent architectures** | Nhiều agents chuyên biệt **phối hợp** — một agent "orchestrate" các agents khác | Agent 1 phân tích requirements → Agent 2 tạo test cases → Agent 3 tạo scripts |

**Lưu ý quan trọng về Agents**:
> ⚠️ Agents vẫn có thể **hallucinate, reasoning error, biases** như LLM thông thường. Cần:
> - **Automated verification** cho autonomous agents
> - **Semi-autonomous** agents cho tác vụ quan trọng (critical path testing)
> - Human checkpoint định kỳ trong multi-agent workflows

---

## 4.2 Fine-tuning và LLMOps

### Fine-tuning LLMs ⭐

**Định nghĩa**: Tinh chỉnh một **pre-trained model** để thực hiện tác vụ cụ thể hoặc domain cụ thể bằng cách **huấn luyện thêm** trên targeted dataset.

**Khi nào dùng Fine-tuning?**
- Tác vụ domain-specific mà General LLM không tốt
- Cần format output đặc thù của tổ chức
- Có labeled training data chất lượng cao

**Lợi ích của Fine-tuning**:
| Lợi ích | Mô tả |
|---------|-------|
| **Domain specialization** | Trang bị reasoning abilities chuyên biệt cho domain testing |
| **SLM compatibility** | Có thể áp dụng cho SLMs → hiệu suất cao hơn với computational overhead thấp hơn |
| **Format customization** | Ví dụ: Fine-tune để sinh test cases theo **format riêng** của tổ chức |

**Thách thức của Fine-tuning**:

| Thách thức | Mô tả |
|-----------|-------|
| **Biased/inaccurate results** | Cần **high-quality, task-specific training datasets** — garbage in, garbage out |
| **Overfitting** | Model quá chuyên biệt → **kém hiệu quả với unseen data** |
| **Opacity** | Thiếu transparency trong cách LLM ra quyết định |
| **Computational resources** | Fine-tuning LLMs tốn nhiều **tài nguyên** (GPU, time, cost) |

**Fine-tuning vs RAG — khi nào dùng cái nào?**

| Tiêu chí | RAG | Fine-tuning |
|---------|-----|------------|
| **Mục đích** | Cung cấp real-time, dynamic knowledge | Chuyên biệt hóa behavior của model |
| **Khi data thay đổi thường xuyên** | Tốt hơn (cập nhật Vector DB là đủ) | Phức tạp (cần retrain) |
| **Khi cần format/style cụ thể** | Hạn chế | Tốt hơn |
| **Computational cost** | Thấp hơn | Cao hơn |
| **Giảm hallucination** | Hiệu quả (grounding với real data) | Có thể (training data quality) |

### LLMOps (Large Language Model Operations)

**Định nghĩa**: Tập hợp **practices, tools và processes** để streamline development, deployment, maintenance của LLMs **trong production**.

Tương tự MLOps (cho ML models) nhưng dành riêng cho LLMs.

**Ba cách triển khai GenAI trong test processes**:

| Cách | Đặc điểm | Lưu ý quan trọng |
|------|----------|-----------------|
| **AI Chatbot** | Đơn giản, chi phí thấp, dễ bắt đầu | Cần quản lý data privacy, security, cost per conversation |
| **Test tool với GenAI capabilities** | Tích hợp vào test process hiện có | Đánh giá data security từ vendor; cost-benefit analysis |
| **In-house test tool** | Kiểm soát **tối đa** về data privacy & security | Cần expertise cao; planning chi phí vận hành (compute, storage, training data) |

**Lộ trình tăng dần**:
```
AI Chatbot → Test tool with GenAI → In-house tool
(dễ, ít kiểm soát)           (khó, kiểm soát tối đa)
```

---

## Bẫy thi thường gặp

### Bẫy 1: Nhầm RAG với Fine-tuning
**Câu đánh lừa**: "RAG modifies the LLM's weights to include organization-specific knowledge."
**Đáp án đúng**: RAG **không thay đổi LLM weights** — nó **truy vấn external data** và kết hợp vào prompt. Fine-tuning mới thay đổi weights.

### Bẫy 2: Vector DB = Relational DB
**Câu đánh lừa**: "The vector database stores structured test cases with SQL queries."
**Đáp án đúng**: Vector DB lưu **embeddings** và tìm kiếm theo **semantic similarity**. Relational DB lưu structured data và dùng SQL.

### Bẫy 3: Autonomous agents không cần human oversight
**Câu đánh lừa**: "Autonomous LLM agents eliminate the need for human testing oversight."
**Đáp án đúng**: Autonomous agents vẫn có thể **hallucinate và reasoning error**. Cần **automated verification** và periodic human oversight.

### Bẫy 4: Fine-tuning giải quyết mọi vấn đề của LLM
**Câu đánh lừa**: "Fine-tuning a foundation LLM guarantees accurate and unbiased test outputs."
**Đáp án đúng**: Fine-tuning có thể gây **overfitting** và vẫn phụ thuộc vào **chất lượng training data** — garbage in, garbage out.

### Bẫy 5: AI Chatbot phù hợp nhất cho tác vụ phức tạp
**Câu đánh lừa**: "AI Chatbots are the most suitable deployment option for complex, repeatable testing tasks."
**Đáp án đúng**: AI Chatbot phù hợp cho **tác vụ thường ngày, đơn giản**. Tác vụ phức tạp, lặp lại → **Test tool với GenAI** hoặc **In-house tool**.

### Bẫy 6: RAG Preprocessing chỉ cần làm một lần
**Thực ra đây là ĐÚNG**: RAG preprocessing (vectorize documents) chỉ cần làm một lần (hoặc khi data thay đổi). Inference xảy ra mỗi lần query. Câu bẫy thường hỏi ngược lại.

---

## Câu hỏi luyện tập

**Câu 1**: Test team muốn LLM có thể truy cập kho requirements và test cases nội bộ của công ty (10,000 tài liệu) và sử dụng chúng khi tạo test cases mới. Giải pháp nào phù hợp nhất?
- A. Fine-tuning LLM với 10,000 tài liệu đó
- B. Dùng RAG — lưu tài liệu vào vector DB và truy vấn khi cần
- C. Copy toàn bộ 10,000 tài liệu vào system prompt
- D. Dùng autonomous agent để tìm kiếm tài liệu thủ công

> **Đáp án**: B. RAG phù hợp để cung cấp **dynamic, real-time access** đến enterprise documents. Fine-tuning (A) tốn tài nguyên và không realtime. Copy vào system prompt (C) không thể với 10,000 tài liệu — vượt quá context window.

---

**Câu 2**: Tổ chức muốn LLM tạo test cases theo format đặc thù của công ty (template riêng, terminology riêng) và muốn hành vi này nhất quán không cần prompt phức tạp. Giải pháp nào phù hợp?
- A. Dùng RAG với vector DB chứa ví dụ format
- B. Fine-tuning LLM trên dataset test cases của công ty
- C. Thêm nhiều few-shot examples vào mọi prompt
- D. Dùng system prompt rất dài để mô tả format

> **Đáp án**: B. **Fine-tuning** phù hợp để embed **format/style cụ thể** vào model behavior. Sau fine-tuning, không cần prompt phức tạp.

---

**Câu 3**: Trong kiến trúc LLM-powered test infrastructure, thành phần nào chịu trách nhiệm chuẩn bị prompt và giao tiếp với LLM API?
- A. Front-end
- B. Back-end
- C. Vector database
- D. Relational database

> **Đáp án**: B. **Back-end** xử lý input, quản lý authentication, data retrieval, chuẩn bị prompt và giao tiếp với LLM.

---

**Câu 4**: Trong RAG, bước "retrieval" thực hiện điều gì?
- A. Chia documents thành chunks nhỏ 256-512 tokens
- B. Mã hóa query của user thành embedding và tìm chunks liên quan nhất theo semantic similarity
- C. Kết hợp retrieved data với LLM knowledge để sinh phản hồi
- D. Lưu embeddings của documents vào vector database

> **Đáp án**: B. Retrieval = **mã hóa query → tìm chunks liên quan** trong vector DB theo semantic similarity.

---

**Câu 5**: Tổ chức lo ngại về data privacy khi dùng AI cho testing. Họ muốn kiểm soát tối đa dữ liệu test. Cách triển khai nào phù hợp nhất?
- A. AI Chatbot (ChatGPT, Gemini) — vì dễ dùng
- B. Test tool với GenAI capabilities từ vendor — vì đã được tích hợp sẵn
- C. In-house test tool với LLM on-premise — vì kiểm soát tối đa
- D. Fine-tuning public LLM trên test data — vì hiệu quả hơn

> **Đáp án**: C. **In-house tool với on-premise LLM** cung cấp kiểm soát tối đa về data privacy và security.

---

**Câu 6**: Thách thức nào của Fine-tuning xảy ra khi model trở nên quá chuyên biệt và kém hiệu quả với các tình huống mới (unseen data)?
- A. Data poisoning
- B. Overfitting
- C. Hallucination
- D. Bias

> **Đáp án**: B. **Overfitting** — model quá chuyên biệt → kém hiệu quả với unseen data.

---

## Checklist ôn tập nhanh

Trước khi thi, tự check:

- [ ] Tôi biết **5 thành phần kiến trúc** của LLM-powered test infrastructure và vai trò mỗi cái?
- [ ] Tôi phân biệt được **Relational DB vs Vector DB** — cái nào dùng cho gì?
- [ ] Tôi hiểu **RAG** là gì và **2 giai đoạn** (preprocessing + inference)?
- [ ] Tôi biết RAG **không thay đổi LLM weights** — khác với fine-tuning?
- [ ] Tôi phân biệt được **3 loại agents** (autonomous, semi-autonomous, multi-agent)?
- [ ] Tôi biết **lợi ích và 4 thách thức** của fine-tuning?
- [ ] Tôi biết khi nào dùng **RAG vs Fine-tuning**?
- [ ] Tôi biết **3 cách triển khai** GenAI (chatbot, test tool, in-house) và trade-offs?
- [ ] Tôi hiểu **LLMOps** là gì?

---

> ✅ **Kết thúc Chương 4**. Chương tiếp theo: [Chương 5 — Triển khai GenAI](./Chuong-05-Trien-Khai-GenAI.md)
