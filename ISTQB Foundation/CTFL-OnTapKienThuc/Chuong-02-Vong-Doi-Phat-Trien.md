# Chương 2 — Testing Throughout the SDLC (Testing trong vòng đời phát triển)

> **Thời lượng syllabus**: 130 phút | **Trọng số**: ~17% bài thi
> **Ghi chú của giáo viên**: Chương này tập trung vào "Testing phải thích nghi với SDLC". Nắm rõ 5 test levels, 4 test types, và sự khác biệt confirmation vs regression là đủ để làm tốt phần này.

---

## Mục lục
1. [Keywords giải thích](#keywords)
2. [Learning Objectives](#learning-objectives)
3. [2.1 Testing trong SDLC](#21-testing-trong-sdlc)
4. [2.2 Test Levels và Test Types](#22-test-levels-và-test-types)
5. [2.3 Maintenance Testing](#23-maintenance-testing)
6. [Bẫy thi thường gặp](#bẫy-thi-thường-gặp)
7. [Câu hỏi luyện tập](#câu-hỏi-luyện-tập)
8. [Checklist ôn tập nhanh](#checklist-ôn-tập-nhanh)

---

## Keywords

| Thuật ngữ | Giải thích nhanh |
|-----------|-----------------|
| **Acceptance testing** | Test level cuối — validate system đáp ứng business needs, sẵn sàng deploy |
| **Black-box testing** | Test dựa trên **specification** — không xem internal structure |
| **Component integration testing** | Test interfaces/interactions **giữa** các components |
| **Component testing** | Test **từng component** riêng lẻ (unit testing) |
| **Confirmation testing** | Re-test để verify defect đã được **fix** |
| **Functional testing** | Test **functions** — "system làm được gì?" |
| **Integration testing** | Test tích hợp — component integration hoặc system integration |
| **Maintenance testing** | Test sau khi deploy — cho changes, upgrades, retirement |
| **Non-functional testing** | Test **quality attributes** — "system hoạt động như thế nào?" |
| **Regression testing** | Test để verify changes không gây ra **lỗi mới** ở chỗ khác |
| **Shift left** | Test **sớm hơn** trong SDLC |
| **System integration testing** | Test interfaces giữa system và **external systems/services** |
| **System testing** | Test **toàn bộ** system end-to-end |
| **Test level** | Nhóm activities test được tổ chức và quản lý cùng nhau |
| **Test object** | Work product đang được test |
| **Test type** | Nhóm test activities liên quan đến **quality characteristics** cụ thể |
| **White-box testing** | Test dựa trên **internal structure** — code, architecture, data flows |

---

## Learning Objectives

| ID | K-Level | Nội dung cần đạt được |
|----|---------|----------------------|
| FL-2.1.1 | **K2** | Giải thích tác động của SDLC lên testing |
| FL-2.1.2 | **K1** | Nhớ good testing practices áp dụng cho mọi SDLC |
| FL-2.1.3 | **K1** | Nhớ các ví dụ về test-first approaches |
| FL-2.1.4 | **K2** | Tóm tắt DevOps có thể tác động lên testing thế nào |
| FL-2.1.5 | **K2** | Giải thích shift left |
| FL-2.1.6 | **K2** | Giải thích retrospectives là cơ chế cải tiến process |
| FL-2.2.1 | **K2** | Phân biệt các test levels |
| FL-2.2.2 | **K2** | Phân biệt các test types |
| FL-2.2.3 | **K2** | Phân biệt confirmation testing và regression testing |
| FL-2.3.1 | **K2** | Tóm tắt maintenance testing và triggers của nó |

---

## 2.1 Testing trong SDLC

### SDLC là gì?

**SDLC (Software Development Lifecycle)** model = cách biểu diễn trừu tượng, mô tả:
- Các development phases và activities
- Quan hệ giữa chúng (logic và thời gian)

### Các loại SDLC model

| Loại | Ví dụ | Đặc điểm testing |
|------|-------|-----------------|
| **Sequential** | Waterfall, V-model | Testers tham gia review, analysis, design sớm; dynamic test chạy muộn |
| **Iterative** | Spiral, Prototyping | Mỗi iteration: cả static lẫn dynamic; cần fast feedback |
| **Incremental** | Unified Process | Frequent delivery → regression testing nặng |
| **Agile** | Scrum, XP, Kanban, FDD | Lightweight docs, heavy automation, experience-based techniques |

---

### 2.1.1 SDLC ảnh hưởng Testing như thế nào?

Chọn SDLC tác động đến:

1. **Scope và timing** của test activities (khi nào test, test gì)
2. **Level of detail** của test documentation
3. **Test techniques** và test approach được chọn
4. **Extent of test automation** (mức độ automation)
5. **Role và responsibilities** của tester

**Ví dụ thực tế**:
- *Waterfall*: Testers tham gia sớm ở requirements review, nhưng dynamic testing chạy muộn (sau khi có code).
- *Agile/Scrum*: Mỗi sprint đều có testing — cả static (review stories) và dynamic (execute tests). Cần automation nhiều cho regression.

---

### 2.1.2 Good Testing Practices (áp dụng mọi SDLC)

**4 nguyên tắc universal** — không phụ thuộc SDLC model nào:

1. **Mỗi dev activity đều có testing activity tương ứng** → không có giai đoạn nào "không cần test".
2. **Mỗi test level có objectives khác nhau** → tránh redundancy, đảm bảo comprehensiveness.
3. **Test analysis/design bắt đầu sớm** trong SDLC → thực hiện Principle 3 (Early testing).
4. **Testers review work products** ngay khi có bản nháp → shift left, detect defects sớm.

---

### 2.1.3 Test-first Approaches (TDD, ATDD, BDD) ⭐

Ba approaches này đều implement **"tests first, code later"** — phù hợp với Principle 3 (early testing) và shift left.

| Approach | Viết tắt | Đặc điểm |
|----------|----------|----------|
| **TDD** | Test-Driven Development | Tests viết **trước** → code để pass → **refactor** |
| **ATDD** | Acceptance Test-Driven Development | Tests derive từ **acceptance criteria** → viết trước code |
| **BDD** | Behavior-Driven Development | Tests bằng **Given/When/Then** (ngôn ngữ tự nhiên) → translate thành executable |

**Chi tiết từng approach**:

**TDD**:
- Directs coding via test cases (không phải design document)
- Chu kỳ: Write test → Run (fail) → Write code → Run (pass) → Refactor → Repeat
- Kết quả: automated tests tồn tại lâu dài để đảm bảo code quality

**ATDD** *(xem thêm Section 4.5.3)*:
- Tests derived từ acceptance criteria trong system design process
- Tester, developer, business cùng tham gia
- Tests viết trước khi phần application được develop

**BDD**:
- Mô tả desired behavior bằng ngôn ngữ tự nhiên (Given/When/Then)
- Dễ hiểu cho business stakeholders
- Test cases tự động translate thành executable tests

> 💡 **Điểm chung của cả 3**: Tests tồn tại như automated tests để đảm bảo code quality trong future adaptations/refactoring.

---

### 2.1.4 DevOps và Testing ⭐

**DevOps** = sự phối hợp giữa **development** (bao gồm testing) và **operations**, nhằm:
- Tạo synergy
- Đạt common goals
- Cultural shift — bridge gaps, treat functions with equal value

**DevOps practices**: CI (Continuous Integration), CD (Continuous Delivery), automated toolchains.

**Benefits của DevOps từ góc nhìn testing**:

| Benefit | Giải thích |
|---------|-----------|
| Fast feedback | Biết ngay code changes có ổn không |
| Shift left | CI khuyến khích developers submit code kèm component tests và static analysis |
| Stable test environments | CI/CD processes promote stable envs |
| Visibility on non-functional | Performance, reliability được monitor tốt hơn |
| Reduced manual work | Automation giảm repetitive manual testing |
| Reduced regression risk | Scale của automated regression tests lớn hơn |

**Risks/Challenges của DevOps**:
- Pipeline phải được thiết lập và maintain
- CI/CD tools cần được maintain
- Test automation cần resources, khó thiết lập

> ⚠️ **Lưu ý quan trọng**: DevOps có automation cao, nhưng **manual testing vẫn cần thiết** — đặc biệt từ góc nhìn người dùng (user perspective).

---

### 2.1.5 Shift Left ⭐

**Shift left** = thực hiện testing **sớm hơn** trong SDLC — đừng đợi code xong mới test.

> *Tên gọi "shift left" vì trong timeline, testing được dịch sang trái (earlier).*

**Good practices để "shift left"**:

1. **Review specifications** từ góc nhìn tester — phát hiện ambiguities, incompleteness, inconsistencies
2. **Write test cases before code** — code được chạy trong test harness khi implement
3. **Use CI (even better CD)** — fast feedback với automated component tests khi code vào repository
4. **Static analysis** trước hoặc như một phần của automated process
5. **Non-functional testing từ component level** — thường non-functional test được để đến khi có complete system, nhưng shift left đòi làm sớm hơn

**Hệ quả**:
- Có thể tốn thêm effort/cost **sớm** hơn
- Nhưng **tiết kiệm** effort/cost về **sau**
- Cần stakeholders **hiểu và đồng ý** với concept shift left

---

### 2.1.6 Retrospectives và Process Improvement

**Retrospective** = meeting ở cuối iteration/project/release để review:

| Câu hỏi | Mục đích |
|---------|---------|
| "Cái gì thành công và nên giữ lại?" | Reinforce good practices |
| "Cái gì chưa tốt, có thể cải tiến?" | Identify issues |
| "Làm thế nào triển khai cải tiến?" | Action plan |

**Participants**: Không chỉ testers — developers, architects, product owners, business analysts cũng tham gia.

**Khi nào**: Cuối project, iteration, release milestone, hoặc khi cần.

**Lợi ích cho testing cụ thể**:
- Tăng **test effectiveness/efficiency**
- Nâng cao chất lượng **testware** (jointly review test process)
- **Team bonding** — cơ hội nêu issues và đề xuất cải tiến
- Cải thiện **test basis** quality (giải quyết issues trong requirements)
- **Cooperation** tốt hơn giữa dev và testing

> 💡 Kết quả retrospective nên được record và thường là một phần của **test completion report** (Section 5.3.2). **Quan trọng**: improvements phải được **follow up** — không chỉ ghi xuống rồi bỏ.

---

## 2.2 Test Levels và Test Types

### Phân biệt Test Level vs Test Type

| | Test Level | Test Type |
|---|-----------|----------|
| **Là gì** | **Nhóm activities** tổ chức cùng nhau ở một **phase/granularity** | **Nhóm activities** tập trung vào **quality characteristic** cụ thể |
| **Phân loại theo** | Phase of development, granularity of test object | Quality characteristic (functional, performance, security...) |
| **Ví dụ** | Component testing, System testing | Functional, Non-functional, Black-box, White-box |
| **Áp dụng** | Mỗi level có objectives riêng | Mọi test type có thể áp dụng ở mọi test level |

---

### 2.2.1 Năm Test Levels ⭐⭐

> 🎓 **Giáo viên nói**: Đây là phần PHẢI nhớ. Câu hỏi thi thường cho tình huống và hỏi "đây là test level nào?" Chú ý: ai thực hiện, test object là gì, test basis là gì.

#### So sánh chi tiết 5 test levels

| | **Component** | **Component Integration** | **System** | **System Integration** | **Acceptance** |
|---|------|------|------|------|------|
| **Còn gọi** | Unit testing | Unit integration testing | — | — | UAT, alpha/beta |
| **Test object** | Components riêng lẻ | Interfaces giữa components | Toàn bộ system | System + external | System hoàn chỉnh |
| **Test basis** | Component specs, design, code | Interface specs, design, API specs | System specs, use cases | System/integration specs, API specs | Business process requirements, user needs |
| **Defects found** | Logic errors, boundary issues | Interface issues, data exchange errors | End-to-end flow issues, system behavior issues | Protocol issues, data format mismatches | Business requirements gaps, user expectation gaps |
| **Approach** | Black-box + white-box | Black-box chủ đạo | Black-box + non-functional | Black-box | Validation-focused |
| **Ai thực hiện** | **Developer** | Developer/Tester | **Tester độc lập** | Tester + dev | **End users/Business reps** |
| **Môi trường** | Dev environment, test harnesses | Dev/Integration env | Representative env | Production-like | Production-like/production |

#### Chi tiết từng level

**Component Testing** (Unit Testing):
- Test **components in isolation** — cần harnesses, stubs, drivers, frameworks
- Thường do **developer** thực hiện trong dev environment
- Mục tiêu: verify component behavior theo specification

**Component Integration Testing** (Unit Integration Testing):
- Test **interfaces và interactions** giữa components
- Strategies: **bottom-up** (test từ low-level components lên), **top-down** (từ high-level xuống), **big-bang** (tích hợp tất cả rồi test)
- Heavily dependent on integration strategy

**System Testing**:
- Test **entire system/product** end-to-end
- Bao gồm functional testing (end-to-end tasks) và **non-functional** (quality characteristics)
- Non-functional nên test trên **complete system** trong **representative test environment** (vd: usability)
- Thường do **independent test team** thực hiện
- Liên kết với specifications của system

**System Integration Testing**:
- Test interfaces giữa **system under test** và **other systems/external services**
- Cần test environments **similar to operational environment** (production-like)

**Acceptance Testing**:
- Focus vào **validation** và **demonstrating readiness for deployment**
- System fulfills user's **business needs**
- Lý tưởng: do **intended users** thực hiện

**Các dạng acceptance testing**:
| Dạng | Người thực hiện | Mục tiêu |
|------|----------------|---------|
| **UAT** (User Acceptance Testing) | End users | Validate business usage |
| **Operational acceptance testing** | Operations/Admins | Backup, recovery, security, performance |
| **Contractual acceptance testing** | Customer + Supplier | Verify contractual requirements |
| **Regulatory acceptance testing** | Regulatory body/internal | Compliance với laws/standards |
| **Alpha testing** | Testers/dev tại developer site | Early feedback |
| **Beta testing** | External users tại customer site | Real-world feedback |

#### Phân biệt test levels qua các attributes

- **Test object** (cái gì được test)
- **Test objectives** (mục tiêu là gì)
- **Test basis** (derived từ đâu)
- **Defects and failures** (loại defect gì)
- **Approach and responsibilities** (ai làm, như thế nào)

---

### 2.2.2 Bốn Test Types ⭐

> 💡 **Nhớ**: Test types có thể áp dụng ở **mọi test level**, nhưng **focus** sẽ khác nhau ở mỗi level.

#### Functional Testing
- Test **functions** mà component/system phải thực hiện
- "**What** the test object does"
- Objective: functional completeness, functional correctness, functional appropriateness
- Có thể áp dụng tất cả test levels

#### Non-Functional Testing
- Test **quality attributes** (ngoài functional)
- "**How well** the system behaves"
- **ISO/IEC 25010 — 8 quality characteristics** *(BẮT BUỘC NHỚ)*:

| # | Characteristic | Ví dụ kiểm tra |
|---|---------------|----------------|
| 1 | **Performance efficiency** | Response time, throughput, resource utilization |
| 2 | **Compatibility** | Tương thích với other systems/environments |
| 3 | **Usability** (interaction capability) | Dễ học, dễ dùng, user satisfaction |
| 4 | **Reliability** | MTBF, availability, fault tolerance |
| 5 | **Security** | Confidentiality, integrity, authentication |
| 6 | **Maintainability** | Modularity, reusability, testability |
| 7 | **Portability** (flexibility) | Adaptability, installability |
| 8 | **Safety** | Không gây hại cho users/environment |

> 🧠 **Mẹo nhớ 8 characteristics**: **P**erformance → **C**ompatibility → **U**sability → **R**eliability → **S**ecurity → **M**aintainability → **P**ortability → **S**afety → "**PCURSM-PS**" hoặc đặt câu chuyện riêng.

**Lưu ý về Non-functional**:
- Nên bắt đầu **sớm** trong SDLC (ngay component level nếu có thể)
- Late discovery of non-functional defects = serious threat to project success
- Một số cần **specific test environment** (vd: usability lab)

#### Black-Box Testing
- **Specification-based** — không quan tâm internal structure
- Test cases từ documentation, không từ code
- Objective: check system **behavior vs specification**
- **Test cases vẫn valid** khi implementation thay đổi miễn là behavior requirements không đổi

#### White-Box Testing
- **Structure-based** — dựa trên internal structure (code, architecture, workflows, data flows)
- Test cases phụ thuộc vào how software is designed/implemented
- Objective: cover underlying structure đến mức acceptable
- Có thể áp dụng ở **mọi test level** (component, integration, system)

> 💡 **All 4 test types áp dụng được ở mọi test level** — focus khác nhau. Ví dụ: security testing có thể làm ở component level (input validation) hay system level (penetration testing).

---

### 2.2.3 Confirmation Testing vs Regression Testing ⭐⭐

**Khi nào cần cả hai**: Sau khi có **bất kỳ thay đổi nào** — thêm feature mới hoặc fix defect.

| | **Confirmation Testing** | **Regression Testing** |
|---|--------------------------|----------------------|
| **Mục đích** | Verify **defect đã được fix** | Verify **không có side effects** từ thay đổi |
| **Trigger** | Sau khi fix một defect cụ thể | Sau **bất kỳ thay đổi nào** (fix, enhancement) |
| **Scope** | Test cases đã fail + test mới cho fix | Toàn bộ system (hoặc subset từ impact analysis) |
| **Nên automate?** | Thường không (một lần) | **Rất nên** — chạy nhiều lần |

**Confirmation testing** — 2 approaches:
1. Chạy lại **tất cả test cases đã fail** trước đây
2. Thêm **test cases mới** để cover changes được thực hiện để fix

*Khi time/money tight*: chỉ chạy test steps cụ thể reproduce failure và verify không còn xảy ra.

**Regression testing** — lưu ý quan trọng:
- Số lượng regression test cases **tăng** theo mỗi iteration/release
- **Impact analysis** nên được làm trước để xác định scope regression
- Regression là **strong candidate for automation** — phải chạy nhiều lần
- Khi dùng CI/DevOps: nên bao gồm automated regression ở **tất cả test levels**

---

## 2.3 Maintenance Testing

### Tại sao cần Maintenance Testing?

Sau khi deploy, software tiếp tục thay đổi → cần test những thay đổi này **và** kiểm tra không có regressions.

### Các loại Maintenance (theo ISO/IEC 14764)

| Loại | Mô tả |
|------|-------|
| **Corrective** | Fix defects trong production |
| **Adaptive** | Thích nghi với thay đổi môi trường (OS mới, platform mới) |
| **Perfective** | Cải thiện performance hoặc maintainability |

Maintenance có thể là **planned releases** hoặc **unplanned** (hot fixes).

### Scope phụ thuộc 3 yếu tố

1. **Degree of risk** của thay đổi (risk cao → test nhiều hơn)
2. **Size của existing system** (system lớn → regression phức tạp hơn)
3. **Size của change** (thay đổi lớn → test nhiều hơn)

### Triggers cho Maintenance Testing ⭐

| Trigger | Ví dụ | Loại test cần |
|---------|-------|---------------|
| **Modifications** | Enhancements, corrective changes, hot fixes | Confirmation + regression |
| **Upgrades/Migrations** | Chuyển sang platform mới, migrate data | Test với môi trường mới + data conversion tests |
| **Retirement** | End of life của system | Data archiving tests, restore/retrieval tests |

> 💡 **Retirement testing** ít biết đến nhưng quan trọng: khi system bị retire, dữ liệu cần archive → cần test data archiving procedures và restore/retrieval nếu cần data trong tương lai.

### Impact Analysis trong Maintenance

**Impact analysis** được thực hiện trước khi change để:
- Quyết định có nên thực hiện change không
- Identify các areas bị ảnh hưởng
- Determine scope của regression testing cần thiết

---

## Bẫy thi thường gặp

### Bẫy 1: Nhầm test levels và test types
**Câu đánh lừa**: "System testing là một test type."
**Đúng**: System testing là **test level**. Test types là functional, non-functional, black-box, white-box.

### Bẫy 2: Nhầm System testing và System Integration testing
- **System testing**: test **entire system** (behavior, capabilities)
- **System integration testing**: test **interfaces** giữa system và **external systems/services**

### Bẫy 3: Ai thực hiện Acceptance testing?
**Câu đánh lừa**: "Acceptance testing should be done by independent testers."
**Đúng**: Lý tưởng là **intended users**. Mục tiêu là validation — user biết business needs nhất.

### Bẫy 4: TDD, ATDD, BDD là test levels hay approaches?
**Đúng**: Chúng là **development approaches** (test-first), không phải test levels hay test types.

### Bẫy 5: Nhầm Confirmation và Regression
- **Confirmation**: verify **defect đã fix** (targeted)
- **Regression**: verify **không có side effects** (broader scope)
- Câu hỏi hay: "Sau khi fix bug A, tester chạy test để đảm bảo fix bug A không ảnh hưởng feature B" → **Regression testing**.

### Bẫy 6: DevOps = không cần manual testing
**Đúng**: DevOps có automation cao nhưng **manual testing — đặc biệt từ user perspective — vẫn cần thiết**.

### Bẫy 7: Shift left = bỏ testing cuối dự án
**Đúng**: Shift left = test **sớm hơn** nhưng **không có nghĩa bỏ testing giai đoạn sau**. "Shift left does not mean that testing later in the SDLC should be neglected."

---

## Câu hỏi luyện tập

**Câu 1**: Developer A đang viết unit tests cho một module trước khi viết code. Approach nào đang được áp dụng?
- A. Shift left
- B. ATDD
- C. TDD
- D. BDD

> **Đáp án**: C. TDD — tests viết trước, code viết sau để pass tests.

---

**Câu 2**: Team Agile sau mỗi sprint thường họp để thảo luận: "Cái gì hoạt động tốt? Cái gì cần cải thiện?" Đây là gì?
- A. Sprint review
- B. Retrospective
- C. Test completion
- D. Risk review

> **Đáp án**: B. Retrospective — cơ chế process improvement.

---

**Câu 3**: Tester đang test toàn bộ hệ thống bao gồm end-to-end workflows, performance, và security. Đây là test level nào?
- A. Component testing
- B. Component integration testing
- C. System testing
- D. Acceptance testing

> **Đáp án**: C. System testing — test entire system bao gồm cả non-functional.

---

**Câu 4**: Sau khi release, team phát hiện platform cũ không còn được support. Họ cần migrate system sang platform mới. Loại maintenance testing nào phù hợp nhất?
- A. Corrective maintenance testing
- B. Adaptive maintenance testing
- C. Perfective maintenance testing
- D. Regression maintenance testing

> **Đáp án**: B. Adaptive — thích nghi với thay đổi môi trường (platform mới).

---

**Câu 5**: Tester đang kiểm tra behavior của API giữa two different systems của hai công ty khác nhau. Đây là test level nào?
- A. System testing
- B. Component integration testing
- C. System integration testing
- D. Acceptance testing

> **Đáp án**: C. System integration testing — test interfaces với external systems.

---

**Câu 6**: Loại test nào dựa trên việc kiểm tra "how well" system hoạt động thay vì "what" nó làm?
- A. Functional testing
- B. Non-functional testing
- C. Black-box testing
- D. White-box testing

> **Đáp án**: B. Non-functional — evaluates quality attributes (how well), không phải functions (what).

---

**Câu 7**: Sau khi fix bug liên quan đến login, QA chạy lại các test cases cho toàn bộ registration/authentication module. Đây là gì?
- A. Confirmation testing
- B. Regression testing
- C. System integration testing
- D. Acceptance testing

> **Đáp án**: B. Regression testing — verify fix không gây side effects cho module rộng hơn.

---

**Câu 8**: Good testing practice nào áp dụng cho tất cả SDLC models?
- A. Test automation phải được thiết lập trong sprint đầu tiên
- B. Testers phải review work products khi có bản nháp
- C. System testing phải chạy trước component testing
- D. Acceptance testing phải do end users thực hiện

> **Đáp án**: B. Review work products khi draft available là good practice áp dụng mọi SDLC.

---

## Checklist ôn tập nhanh

- [ ] Tôi phân biệt được Sequential, Iterative, Incremental, Agile SDLC và ảnh hưởng lên testing?
- [ ] Tôi nhớ được **4 good testing practices** áp dụng cho mọi SDLC?
- [ ] Tôi phân biệt được TDD / ATDD / BDD (key differentiator)?
- [ ] Tôi biết **6 benefits** và **3 risks** của DevOps với testing?
- [ ] Tôi giải thích được shift left và **5 practices** để shift left?
- [ ] Tôi biết retrospective thảo luận 3 câu hỏi gì?
- [ ] Tôi phân biệt được **5 test levels** (object, basis, who, approach)?
- [ ] Tôi nhớ **8 non-functional quality characteristics** (ISO 25010)?
- [ ] Tôi phân biệt được **4 test types** và biết chúng áp dụng ở mọi level?
- [ ] Tôi phân biệt được **confirmation** vs **regression** testing?
- [ ] Tôi biết **3 triggers** của maintenance testing?

---

> ✅ **Kết thúc Chương 2**. Chương tiếp theo: [Chương 3 — Static Testing](./Chuong-03-Kiem-Thu-Tinh.md)
