# Chương 3 — Static Testing (Kiểm thử tĩnh)

> **Thời lượng syllabus**: 80 phút | **Trọng số**: ~11% bài thi
> **Ghi chú của giáo viên**: Chương nhỏ nhưng hay ra đề về **review types** (4 loại) và **review process activities** (5 bước). Đặc biệt chú ý vai trò trong Inspection: author KHÔNG được làm review leader hoặc scribe.

---

## Mục lục
1. [Keywords giải thích](#keywords)
2. [Learning Objectives](#learning-objectives)
3. [3.1 Static Testing Basics](#31-static-testing-basics)
4. [3.2 Feedback và Review Process](#32-feedback-và-review-process)
5. [Bẫy thi thường gặp](#bẫy-thi-thường-gặp)
6. [Câu hỏi luyện tập](#câu-hỏi-luyện-tập)
7. [Checklist ôn tập nhanh](#checklist-ôn-tập-nhanh)

---

## Keywords

| Thuật ngữ | Giải thích nhanh |
|-----------|-----------------|
| **Anomaly** | Bất kỳ condition nào khác biệt với expectation — có thể là defect hoặc không |
| **Dynamic testing** | Test thông qua **execution** của code |
| **Formal review** | Review có quy trình cụ thể, documented output bắt buộc (inspection) |
| **Informal review** | Review **không** có quy trình và documented output bắt buộc |
| **Inspection** | Review type **formal nhất** — có moderator, checklist, metrics |
| **Review** | Đánh giá work product bởi một hoặc nhiều người |
| **Static analysis** | Công cụ tự động đánh giá code/models mà không execute |
| **Static testing** | Đánh giá work product **không cần execute** — bao gồm reviews + static analysis |
| **Technical review** | Review bởi technical experts dưới sự dẫn dắt của moderator |
| **Walkthrough** | Review được dẫn dắt bởi **author** |

---

## Learning Objectives

| ID | K-Level | Nội dung cần đạt được |
|----|---------|----------------------|
| FL-3.1.1 | **K1** | Nhận ra (recognize) các loại work products có thể kiểm tra bằng static testing |
| FL-3.1.2 | **K2** | Giải thích (explain) giá trị của static testing |
| FL-3.1.3 | **K2** | So sánh và đối chiếu (compare and contrast) static testing và dynamic testing |
| FL-3.2.1 | **K1** | Xác định (identify) lợi ích của early and frequent stakeholder feedback |
| FL-3.2.2 | **K2** | Tóm tắt (summarize) các activities của review process |
| FL-3.2.3 | **K1** | Nhớ (recall) responsibilities của các principal roles trong review |
| FL-3.2.4 | **K2** | So sánh và đối chiếu (compare and contrast) các review types khác nhau |
| FL-3.2.5 | **K1** | Nhớ (recall) các factors góp phần vào successful review |

---

## 3.1 Static Testing Basics

### Static Testing là gì?

**Static testing** = đánh giá work products **mà không cần execute code**.

Hai hình thức chính:
1. **Reviews** (Manual examination): Con người đọc và đánh giá work product
2. **Static analysis** (Tool-based): Công cụ tự động phân tích code/models (VD: linters, syntax checkers, readability tools)

> 🧠 **So sánh nhanh với Dynamic Testing**:
> - Dynamic = chạy code → quan sát failure → suy ra defect
> - Static = đọc code/docs → tìm defect **trực tiếp** (không qua failure)

### Tại sao Static Testing quan trọng?

Trong Agile, testers và business reps cùng nhau:
- **Example mapping sessions**
- **Collaborative user story writing**
- **Backlog refinement**

Mục tiêu: đảm bảo user stories và work products đáp ứng **Definition of Ready** (entry criteria).

**Static analysis** thường:
- Tích hợp vào **CI frameworks** (Section 2.1.4)
- Dùng để detect code defects, maintainability issues, security vulnerabilities

---

### 3.1.1 Work Products có thể Static Test

**Gần như mọi work product** — miễn là có thể đọc và hiểu được:

| Loại | Ví dụ |
|------|-------|
| **Documentation** | Requirements specs, user stories, test plans, test cases, product backlog items, test charters |
| **Code** | Source code, test scripts |
| **Models** | UML diagrams, data flow diagrams |
| **Others** | Project documentation, contracts |

**Điều kiện để static analysis áp dụng được**: Work product cần có **formal syntax** để tools có thể check (code, models, text với syntax).

**Work products KHÔNG phù hợp** cho static testing:
- Executable code của **third party** (không có source, legal issues)
- Thứ khó để human interpret

---

### 3.1.2 Giá trị của Static Testing

**1. Phát hiện defects SỚM — principle 3 (Early testing)**:
- Bắt đầu ngay khi work products sẵn sàng — không cần đợi code executable
- Fulfill "early testing saves time and money"

**2. Phát hiện defects mà Dynamic Testing KHÔNG phát hiện được**:
- **Unreachable code** (dead code) — không bao giờ chạy
- **Design patterns** không được implement đúng
- **Defects trong non-executable work products** (requirements, design docs)

**3. Build confidence và shared understanding**:
- Stakeholders verify requirements mô tả đúng actual needs
- Shared understanding giữa tất cả participants
- Communication improved

**4. Cost-effective**:
- Reviews có thể tốn kém, nhưng overall project cost **thấp hơn** vì ít effort fix defects muộn
- Certain code defects tìm được bằng static analysis **nhanh và rẻ hơn** dynamic testing

---

### 3.1.3 Static Testing vs Dynamic Testing ⭐

| Tiêu chí | Static Testing | Dynamic Testing |
|----------|---------------|-----------------|
| **Execute code?** | **Không** | **Có** |
| **Cách tìm defect** | **Trực tiếp** trong work product | Gián tiếp — qua **failure** → sau đó diagnose |
| **Áp dụng cho** | Executable **và** non-executable work products | **Chỉ** executable work products |
| **Quality chars** | Đo được characteristics **không phụ thuộc execution** (VD: maintainability) | Đo được characteristics **phụ thuộc execution** (VD: performance efficiency) |
| **Phát hiện** | Defects trong code paths **hiếm hoặc khó reach** | Behavior thực tế khi runtime |
| **Thời điểm** | Sớm trong SDLC | Sau khi code executable |

**Defects dễ tìm hơn bằng static testing** (không thể hoặc khó tìm bằng dynamic):

| Loại defect | Ví dụ |
|-------------|-------|
| **Requirements defects** | Ambiguities, contradictions, omissions, inaccuracies, duplications |
| **Design defects** | Inefficient database structures, poor modularization |
| **Coding defects** | Undefined variables, undeclared variables, unreachable/duplicated code, excessive complexity |
| **Standards deviations** | Lack of naming conventions |
| **Interface specification issues** | Mismatched parameters (number, type, order) |
| **Security vulnerabilities** | Buffer overflows |
| **Test basis gaps** | Missing tests for an acceptance criterion |

> 💡 **Bổ sung nhau**: Static và Dynamic KHÔNG thay thế nhau — họ **bổ sung** cho nhau. Một số defect chỉ tìm được bằng static, một số chỉ bằng dynamic.

---

## 3.2 Feedback và Review Process

### 3.2.1 Lợi ích của Early & Frequent Stakeholder Feedback

**Vấn đề khi thiếu stakeholder involvement sớm**:
- Product không đáp ứng vision gốc của stakeholder
- Costly rework, missed deadlines, blame games, project failure

**Lợi ích của frequent feedback**:
- Communicate **potential quality problems** sớm
- **Prevent misunderstandings** về requirements
- Ensure **changes** được understand và implement đúng
- Team focus vào **features có giá trị cao** nhất
- Identify và address **emerging risks** sớm

---

### 3.2.2 Review Process Activities ⭐⭐

> 🎓 **Giáo viên nói**: Hay ra đề về thứ tự các activities và điều gì xảy ra trong từng step. Đặc biệt phân biệt "Individual review" (mỗi người tự review) vs "Communication and analysis" (nhóm thảo luận).

**Chuẩn**: ISO/IEC 20246 — generic review process, có thể tailor cho tình huống cụ thể.

**5 Activities trong Review Process**:

#### Activity 1: Planning (Lập kế hoạch)
Xác định:
- **Scope** của review (purpose, work product cần review)
- **Quality characteristics** cần evaluate
- **Areas to focus on**
- **Exit criteria**
- **Supporting information** (standards, effort, timeframes)

#### Activity 2: Review Initiation (Khởi động)
Đảm bảo:
- Mọi người đã sẵn sàng
- Mọi participant có **access** vào work product under review
- Mọi người **hiểu role và responsibilities** của mình
- Mọi người **nhận được** thứ cần thiết để thực hiện review

#### Activity 3: Individual Review (Review cá nhân)
- Mỗi reviewer **độc lập** đánh giá work product
- Áp dụng **review techniques** (checklist-based, scenario-based, etc.)
- Xác định anomalies, recommendations, và questions
- Log tất cả findings

*Các kỹ thuật review: ISO/IEC 20246 cung cấp thêm chi tiết.*

#### Activity 4: Communication and Analysis (Giao tiếp và Phân tích)
- Anomalies được phân tích và thảo luận (**không phải tất cả anomalies đều là defects**)
- Quyết định cho từng anomaly: **status, ownership, required actions**
- Thường được làm trong **review meeting**
- Đánh giá **quality level** của work product
- Xác định **follow-up actions**

#### Activity 5: Fixing and Reporting (Sửa và Báo cáo)
- Tạo **defect reports** cho mỗi defect (để có thể follow up)
- Review results được **reported**
- Khi exit criteria đạt → work product được **accepted**
- Có thể cần **follow-up review** để verify

---

### 3.2.3 Roles và Responsibilities trong Review ⭐

| Role | Trách nhiệm chính |
|------|------------------|
| **Manager** | Quyết định **cái gì** được review, cung cấp **resources** (staff, time) |
| **Author** | **Tạo và sửa** work product under review |
| **Moderator** (Facilitator) | Đảm bảo review meeting chạy **hiệu quả** — mediation, time management, **safe environment** để mọi người nói tự do |
| **Scribe** (Recorder) | **Ghi lại** anomalies từ reviewers, ghi decisions và anomalies mới trong review meeting |
| **Reviewer** | **Thực hiện review** — có thể là project member, subject matter expert, hoặc any stakeholder |
| **Review leader** | **Chịu trách nhiệm tổng thể** — quyết định ai tham gia, tổ chức khi/ở đâu review diễn ra |

> ⚠️ **Quy tắc đặc biệt cho Inspection**: Trong inspection (formal nhất), **author KHÔNG THỂ kiêm role review leader hoặc scribe**.

---

### 3.2.4 Review Types ⭐⭐

> 🎓 **Giáo viên nói**: Đây là phần CHẮC CHẮN ra đề. Phải nhớ bảng so sánh này. Hay có câu hỏi "tình huống này, review type nào phù hợp?"

**Cách chọn review type phụ thuộc**:
- SDLC model
- Maturity của development process
- Criticality/complexity của work product
- Legal/regulatory requirements
- Need for audit trail
- Project needs, available resources, business domain, culture

**4 Review Types — Từ ít formal đến formal nhất**:

| Tiêu chí | **Informal Review** | **Walkthrough** | **Technical Review** | **Inspection** |
|----------|--------------------|-----------------|--------------------|----------------|
| **Formal level** | Thấp nhất | Trung bình | Cao | **Cao nhất** |
| **Quy trình** | Không có quy trình định nghĩa | Có thể có | Có | **Hoàn toàn theo generic process** |
| **Lead by** | — (không yêu cầu) | **Author** | **Moderator** | Trained **review leader** (≠ author) |
| **Documented output** | **Không bắt buộc** | Có thể | Thường có | **Bắt buộc** |
| **Reviewer prep** | Không bắt buộc | Không bắt buộc (nên có) | Có | **Bắt buộc** |
| **Metrics** | Không | Ít/không | Có | **Có — dùng cải tiến process** |
| **Main objective** | Detect anomalies | Quality eval, build confidence, educate, consensus, new ideas | Technical decisions, detect anomalies, quality | **Tìm TỐI ĐA anomalies** |
| **Author = leader?** | N/A | **Có** | Không | **Không (KHÔNG ĐƯỢC)** |
| **Author = scribe?** | N/A | Có thể | Không | **Không (KHÔNG ĐƯỢC)** |

**Chi tiết từng loại**:

**Informal Review**:
- Không có defined process, không cần documented output
- Mục tiêu: detect anomalies
- VD: developer hỏi colleague "bạn xem code này có vấn đề gì không?"

**Walkthrough**:
- **Author dẫn dắt** — author walk participants qua work product
- Có thể phục vụ nhiều mục đích: quality eval, build confidence, educate reviewers, consensus, generate ideas, motivate authors
- Reviewers có thể review trước cá nhân (không bắt buộc)

**Technical Review**:
- **Technically qualified reviewers** thực hiện, do **moderator** dẫn dắt
- Mục tiêu: gain consensus, make technical decisions, detect anomalies, evaluate quality, build confidence, generate ideas

**Inspection**:
- **Formal nhất** — follow complete generic process (ISO/IEC 20246)
- **Mục tiêu chính**: tìm **tối đa anomalies**
- Objectives phụ: evaluate quality, build confidence, motivate authors
- **Metrics collected** và dùng để cải tiến SDLC, bao gồm cải tiến inspection process
- **Author KHÔNG** được là review leader hoặc scribe

> 💡 **Lưu ý**: Cùng một work product có thể được review với nhiều types khác nhau — VD: informal review trước, sau đó formal inspection.

---

### 3.2.5 Success Factors cho Reviews ⭐

Các yếu tố quyết định review thành công hay thất bại:

| # | Success Factor | Giải thích |
|---|----------------|-----------|
| 1 | **Clear objectives và measurable exit criteria** | Không được dùng evaluation của participants làm objective |
| 2 | **Chọn đúng review type** | Phù hợp với objectives, work product type, participants, context |
| 3 | **Review small chunks** | Reviewers không bị mất tập trung trong individual review hoặc meeting |
| 4 | **Feedback kiến tạo** | Feedback cho stakeholders/authors để họ cải thiện product và activities |
| 5 | **Đủ thời gian chuẩn bị** | Participants cần time để prepare |
| 6 | **Management support** | Hỗ trợ từ management cho review process |
| 7 | **Review là một phần văn hóa** | Promote learning và process improvement trong tổ chức |
| 8 | **Training đầy đủ** | Tất cả participants biết cách thực hiện role của mình |
| 9 | **Facilitating meetings** | Tổ chức meetings hiệu quả |

> ⚠️ **Điểm quan trọng trong Success Factor #1**: "Evaluation of participants should **never** be an objective" — không dùng review để đánh giá performance của reviewer hay author. Điều này tạo ra môi trường sợ hãi, làm review kém hiệu quả.

---

## Bẫy thi thường gặp

### Bẫy 1: Không phải mọi anomaly đều là defect
**Câu đánh lừa**: "All anomalies found in a review are defects."
**Đúng**: Anomaly = bất kỳ condition nào khác expectation — có thể là defect, false positive, change request, question, or improvement suggestion. Cần **Communication and Analysis** để xác định.

### Bẫy 2: Nhầm Walkthrough và Technical Review
- **Walkthrough**: led by **Author**
- **Technical Review**: led by **Moderator** (not author), có technical experts
- Key differentiator: **who leads**

### Bẫy 3: Author trong Inspection
**Câu đánh lừa**: "In an inspection, the author presents the work product to reviewers."
**Đúng**: Trong Inspection, author KHÔNG là review leader. Review leader là trained leader khác. (Trong Walkthrough thì author mới là leader.)

### Bẫy 4: Static testing chỉ là code review
**Đúng**: Static testing bao gồm review của **bất kỳ work product nào** — requirements docs, test plans, test cases, user stories, etc.

### Bẫy 5: Static analysis = static testing
**Đúng**: Static analysis là **một phần** của static testing (tool-based). Static testing còn bao gồm **manual reviews**.

### Bẫy 6: Reviews luôn tốn kém hơn không review
**Đúng**: Reviews có thể tốn kém để implement, nhưng **overall project cost thấp hơn** vì giảm được cost fix defects muộn.

### Bẫy 7: Dynamic testing có thể replace static testing
**Đúng**: Một số defect **chỉ** có thể tìm bằng static (unreachable code, non-executable work product defects). Hai loại bổ sung nhau, không thay thế.

---

## Câu hỏi luyện tập

**Câu 1**: Reviewer phát hiện một đoạn code không bao giờ được chạy. Điều này được phát hiện bằng cách nào?
- A. Dynamic testing
- B. Static analysis
- C. Acceptance testing
- D. Regression testing

> **Đáp án**: B. Static analysis — unreachable code được phát hiện bằng static analysis, không cần chạy code.

---

**Câu 2**: Trong một review meeting, participants quyết định một anomaly không thực sự là defect mà là false positive. Activity nào đang diễn ra?
- A. Individual review
- B. Planning
- C. Communication and analysis
- D. Fixing and reporting

> **Đáp án**: C. Communication and analysis — phân tích và discuss anomalies để xác định status.

---

**Câu 3**: Author đang dẫn một session mà team cùng đọc qua requirements doc, thảo luận và ghi nhận các issues. Đây là review type nào?
- A. Inspection
- B. Technical review
- C. Walkthrough
- D. Informal review

> **Đáp án**: C. Walkthrough — được dẫn dắt bởi author.

---

**Câu 4**: Review type nào yêu cầu participants phải prepare trước và thu thập metrics?
- A. Walkthrough
- B. Informal review
- C. Technical review
- D. Inspection

> **Đáp án**: D. Inspection — mandatory preparation, metrics collected, most formal.

---

**Câu 5**: Cái nào là ví dụ của defect dễ phát hiện bằng static testing nhưng khó phát hiện bằng dynamic testing?
- A. Memory leak khi xử lý 1 triệu transactions
- B. Performance degradation dưới load cao
- C. Buffer overflow vulnerability trong code
- D. UI không hiển thị đúng trên mobile

> **Đáp án**: C. Security vulnerabilities như buffer overflow — có thể detect bằng static analysis. A và B cần dynamic test với load. D cần visual inspection/dynamic test.

---

**Câu 6**: Success factor nào sau đây là QUAN TRỌNG NHẤT để đảm bảo reviewers nói thật trong review?
- A. Collecting metrics về số anomalies tìm được
- B. Đảm bảo evaluation của participants không phải là objective
- C. Sử dụng inspection (most formal review type)
- D. Author tham gia với role là scribe

> **Đáp án**: B. "Evaluation of participants should never be an objective" — tạo môi trường an toàn để nói thật.

---

**Câu 7**: Ai là người phù hợp nhất để là Review Leader trong Inspection?
- A. Author của work product
- B. Project Manager
- C. Trained review leader (khác với author)
- D. Scribe

> **Đáp án**: C. Trong Inspection, author không được là review leader.

---

## Checklist ôn tập nhanh

- [ ] Tôi phân biệt được **static testing** (không execute) và **dynamic testing** (execute)?
- [ ] Tôi biết **work products nào** có thể và **không thể** static test?
- [ ] Tôi có thể kể **5 loại defects** dễ tìm bằng static hơn dynamic?
- [ ] Tôi biết **5 activities** của review process và điều gì xảy ra trong từng bước?
- [ ] Tôi nhớ **6 roles** trong review và responsibility của mỗi role?
- [ ] Tôi phân biệt được **4 review types** (informal, walkthrough, technical, inspection)?
- [ ] Tôi nhớ quy tắc đặc biệt: trong **Inspection, author KHÔNG là leader/scribe**?
- [ ] Tôi biết **9 success factors** cho review?
- [ ] Tôi hiểu rằng **anomaly ≠ defect** — cần Communication & Analysis để phân loại?

---

> ✅ **Kết thúc Chương 3**. Chương tiếp theo: [Chương 4 — Test Analysis and Design](./Chuong-04-Phan-Tich-Va-Thiet-Ke-Kiem-Thu.md)
