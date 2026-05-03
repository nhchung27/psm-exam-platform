# Chương 5 — Managing the Test Activities (Quản lý hoạt động kiểm thử)

> **Thời lượng syllabus**: 335 phút | **Trọng số**: ~29% bài thi
> **Ghi chú của giáo viên**: Chương này bao quát nhiều topics: Test Planning, Risk Management, Test Monitoring/Reporting, Configuration Management, Defect Management. Phần hay ra K3 là Estimation techniques và Defect report. Học kỹ Testing Quadrants, Test Pyramid, và risk types.

---

## Mục lục
1. [Keywords giải thích](#keywords)
2. [Learning Objectives](#learning-objectives)
3. [5.1 Test Planning](#51-test-planning)
4. [5.2 Risk Management](#52-risk-management)
5. [5.3 Test Monitoring, Control và Completion](#53-test-monitoring-control-và-completion)
6. [5.4 Configuration Management](#54-configuration-management)
7. [5.5 Defect Management](#55-defect-management)
8. [Bẫy thi thường gặp](#bẫy-thi-thường-gặp)
9. [Câu hỏi luyện tập](#câu-hỏi-luyện-tập)
10. [Checklist ôn tập nhanh](#checklist-ôn-tập-nhanh)

---

## Keywords

`defect management, defect report, entry criteria, exit criteria, product risk, project risk, risk, risk analysis, risk assessment, risk control, risk identification, risk level, risk management, risk mitigation, risk monitoring, risk-based testing, test approach, test completion report, test control, test monitoring, test plan, test planning, test progress report, test pyramid, test strategy, testing quadrants`

---

## Learning Objectives

| ID | K-Level | Nội dung cần đạt được |
|----|---------|----------------------|
| FL-5.1.1 | **K2** | Exemplify purpose và content của test plan |
| FL-5.1.2 | **K1** | Recall cách tester adds value vào iteration và release planning |
| FL-5.1.3 | **K2** | Compare và contrast entry criteria và exit criteria |
| FL-5.1.4 | **K3** | **Apply** estimation techniques để tính test effort |
| FL-5.1.5 | **K3** | **Apply** test case prioritization |
| FL-5.1.6 | **K1** | Recall khái niệm của test pyramid |
| FL-5.1.7 | **K2** | Summarize testing quadrants và relationships với test levels/types |
| FL-5.2.1 | **K1** | Identify risk level dùng risk likelihood và impact |
| FL-5.2.2 | **K2** | Distinguish project risks và product risks |
| FL-5.2.3 | **K2** | Explain product risk analysis ảnh hưởng thoroughness và test scope |
| FL-5.2.4 | **K2** | Explain các measures có thể thực hiện để respond to product risks |
| FL-5.3.1 | **K1** | Recall metrics được dùng trong testing |
| FL-5.3.2 | **K2** | Summarize purposes, content, audiences cho test reports |
| FL-5.3.3 | **K2** | Exemplify cách communicate status của testing |
| FL-5.4.1 | **K2** | Summarize cách configuration management supports testing |
| FL-5.5.1 | **K3** | **Prepare** defect report |

---

## 5.1 Test Planning

### 5.1.1 Test Plan — Mục đích và Nội dung ⭐

**Test plan** = document mô tả test objectives, resources và processes.

**4 mục đích của Test Plan**:
1. **Document** means và schedule để đạt test objectives
2. **Ensure** test activities meet established criteria
3. **Serve as communication** với team members và stakeholders
4. **Demonstrate** testing sẽ adhere to test policy và test strategy

> 💡 **Tại sao valuable?** Quá trình **chuẩn bị** test plan buộc testers phải suy nghĩ kỹ về challenges (risks, schedules, people, tools, costs, effort) → rất hữu ích dù plan sau đó thay đổi.

**Nội dung Test Plan điển hình** *(Reference: ISO/IEC/IEEE 29119-3)*:

| Mục | Nội dung |
|-----|---------|
| **Context of testing** | Test scope, test objectives, test basis |
| **Assumptions & constraints** | Những gì giả định đúng và những hạn chế |
| **Stakeholders** | Roles, responsibilities, relevance, hiring/training needs |
| **Communication** | Forms và frequency of communication, documentation templates |
| **Risk register** | Product risks, project risks |
| **Test approach** | Test levels, types, techniques, deliverables, entry/exit criteria, independence, metrics, data requirements, environment requirements, deviations from test policy |
| **Budget & schedule** | Resources và timeline |

---

### 5.1.2 Tester trong Iteration/Release Planning (Agile)

Trong iterative SDLCs, thường có 2 loại planning:

**Release planning** (toàn bộ release):
- Write testable user stories và acceptance criteria
- Participate trong project và quality **risk analyses**
- Estimate test effort với user stories
- Determine test approach
- Plan testing cho release

**Iteration planning** (1 iteration/sprint):
- Detailed risk analysis của user stories
- Determine **testability** of user stories
- Break down user stories thành testing tasks
- Estimate test effort
- Identify và refine functional và non-functional aspects

---

### 5.1.3 Entry Criteria và Exit Criteria ⭐⭐

**Entry Criteria** = điều kiện **trước khi** bắt đầu một activity (preconditions).

**Exit Criteria** = điều kiện **để declare** một activity là completed.

**Tại sao quan trọng**:
- Entry: nếu không đáp ứng → activity costly, risky, time-consuming hơn
- Exit: define "done" rõ ràng → tránh endless testing

**Agile equivalents**:
- Entry Criteria = **Definition of Ready** (user story sẵn sàng để develop/test)
- Exit Criteria = **Definition of Done** (user story complete)

#### Ví dụ điển hình

**Entry Criteria** (điều kiện để bắt đầu test):
- **Resources available**: people, tools, environments, test data, budget, time
- **Testware available**: test basis (requirements), testable user stories, test cases
- **Initial quality**: all smoke tests passed

**Exit Criteria** (điều kiện để kết thúc test):
- **Thoroughness measures**: achieved level of coverage, defect density, số test cases failed
- **Binary yes/no**: planned tests executed, static testing done, defects reported, regression automated

> ⚠️ **Running out of time/budget** cũng là valid exit criteria — nếu stakeholders đã review và accept risk của việc stop testing.

---

### 5.1.4 Estimation Techniques ⭐⭐ K3

**Mục đích**: Predict lượng test-related work cần để meet test objectives.

**Lưu ý quan trọng**: Estimation **luôn có sai số** và dựa trên assumptions → phải communicate điều này với stakeholders.

#### Bốn Estimation Techniques trong syllabus

**1. Estimation based on Ratios** (Metrics-based)
- Dùng historical data từ previous projects trong tổ chức
- Tính "standard ratios" giữa các activities (VD: dev:test = 3:2)

*Ví dụ*: Previous ratio dev:test = 3:2. Current project dev effort = 600 person-days.
→ Test effort = (2/3) × 600 = **400 person-days**

**2. Extrapolation** (Metrics-based)
- Measure sớm trong project → extrapolate cho phần còn lại
- Rất phù hợp với **iterative SDLCs** (dùng data từ iterations đầu)

*Ví dụ*: 3 sprints đầu: test effort trung bình 50 person-hours/sprint. Project còn 7 sprints.
→ Estimate = 7 × 50 = **350 person-hours**

**3. Wideband Delphi** (Expert-based, Iterative)
- Process:
  1. Expert ước tính **riêng biệt**
  2. Thu thập kết quả → nếu có outliers, experts **thảo luận** estimate của mình
  3. Estimate lại riêng biệt → lặp đến **consensus**
- **Planning Poker** là variant phổ biến trong Agile (dùng cards với số đại diện effort size)

**4. Three-Point Estimation** (Expert-based)
- Ba estimates: a (optimistic), m (most likely), b (pessimistic)
- **Final estimate**: E = **(a + 4m + b) / 6**
- **Standard deviation**: SD = **(b − a) / 6**

*Ví dụ*: a=6, m=9, b=18 person-hours
- E = (6 + 4×9 + 18) / 6 = (6 + 36 + 18) / 6 = 60/6 = **10 person-hours**
- SD = (18 − 6) / 6 = 12/6 = **2**
- Result: **10 ± 2 person-hours** (8 đến 12 person-hours)

---

### 5.1.5 Test Case Prioritization ⭐⭐ K3

Sau khi có test cases, sắp xếp thứ tự chạy. **3 strategies phổ biến**:

| Strategy | Cơ sở | Mô tả |
|----------|--------|-------|
| **Risk-based** | Risk analysis results | Test cases cho **highest risks** chạy trước |
| **Coverage-based** | Coverage measurement | Test cases đạt **highest coverage** chạy trước; variant: **additional coverage** (mỗi test case sau đạt thêm coverage cao nhất) |
| **Requirements-based** | Requirements priority (stakeholder-defined) | Test cases cho **highest priority requirements** chạy trước |

**Các yếu tố cần cân nhắc khi prioritize**:
- **Dependencies** giữa test cases (nếu A depend on B → B phải chạy trước dù A priority cao hơn)
- **Resource availability** — tools, environments, people chỉ available trong timeframe cụ thể

---

### 5.1.6 Test Pyramid ⭐

**Test Pyramid** = model (Cohn 2009) biểu diễn rằng different tests có **granularity khác nhau**.

```
        ___________
       /           \       ← UI/E2E (few, slow, complex, high-level)
      /  UI/End-to-end \
     /___________________\
    /                     \
   /  Service/Integration  \   ← Middle (some)
  /_________________________\
 /                           \
/   Component/Unit tests      \  ← Bottom (many, fast, small, isolated)
/______________________________\
```

**Đặc điểm theo layer**:
| Layer | Số lượng | Speed | Granularity | Isolation | Cost |
|-------|---------|-------|-------------|-----------|------|
| Bottom (Unit) | **Nhiều** | **Nhanh** | **Cao** (nhỏ) | **Cao** | Thấp |
| Middle (Integration/Service) | Vừa | Vừa | Vừa | Vừa | Vừa |
| Top (UI/E2E) | **Ít** | **Chậm** | **Thấp** (lớn) | **Thấp** | Cao |

**Ứng dụng**: Pyramid layers correspond to test levels (Section 2.2.1). Number và naming có thể khác nhau tùy model.

**Ví dụ models**:
- Cohn 2009: Unit → Service → UI
- Phổ biến: Component → Component Integration → End-to-end

---

### 5.1.7 Testing Quadrants ⭐⭐

**Testing Quadrants** (Marick 2003, Crispin 2008) — model cho Agile, group test levels với test types.

**2 trục**:
- **Business facing ↔ Technology facing**
- **Support the team ↔ Critique the product**

```
                    BUSINESS FACING
                    
         Q2                   Q3
   Support team          Critique product
   Functional tests      Exploratory testing
   Story tests           Usability testing
   UX prototypes         UAT
   API testing           (often manual)
   (manual/automated)
   
SUPPORT               |                CRITIQUE
THE TEAM              |                THE PRODUCT
   Q1                   Q4
   Component tests      Smoke tests
   Component            Non-functional
   integration          (except usability)
   (automated, CI)      (often automated)
   
                    TECHNOLOGY FACING
```

#### Chi tiết 4 Quadrants

| Quadrant | Facing | Goal | Types | Approach |
|---------|--------|------|-------|----------|
| **Q1** | Technology | Support team | Component tests, Component integration tests | **Automated**, in CI process |
| **Q2** | Business | Support team | Functional tests, user story tests, UX prototypes, API testing, simulations | Manual **OR** automated |
| **Q3** | Business | Critique product | Exploratory testing, usability testing, UAT | Often **manual**, user-oriented |
| **Q4** | Technology | Critique product | Smoke tests, non-functional (except usability) | Often **automated** |

---

## 5.2 Risk Management

### 5.2.1 Risk Definition và Attributes ⭐

**Risk** = potential event/hazard/situation whose occurrence causes **adverse effect**.

**Risk Level = Risk Likelihood × Risk Impact**

| Attribute | Mô tả |
|-----------|-------|
| **Risk likelihood** | Xác suất xảy ra (0 < P < 1) |
| **Risk impact** (harm) | Hậu quả khi xảy ra |

> 💡 **Risk level cao → phải xử lý quan trọng hơn**.

**Risk management activities**:
- **Risk analysis** = Risk identification + Risk assessment → Section 5.2.3
- **Risk control** = Risk mitigation + Risk monitoring → Section 5.2.4

**Risk-based testing** = test approach trong đó test activities được selected, prioritized, managed dựa trên risk analysis và risk control.

---

### 5.2.2 Project Risks vs Product Risks ⭐⭐

| | **Project Risks** | **Product Risks** |
|---|-------------------|-------------------|
| **Liên quan đến** | **Management và control** của project | **Quality characteristics** của product |
| **Nếu xảy ra** | Ảnh hưởng **schedule, budget, scope** của project | Ảnh hưởng **quality** của test object |
| **Ví dụ** | Organizational issues, people issues, technical issues, supplier issues | Missing functionality, security vulnerabilities, poor performance |
| **Hậu quả** | Project ability to achieve objectives | User dissatisfaction, revenue loss, reputation damage, injuries, death |

**Project Risk examples** (4 categories):
- **Organizational**: delays, inaccurate estimates, cost cutting
- **People**: insufficient skills, conflicts, communication problems, shortage of staff
- **Technical**: scope creep, poor tool support
- **Supplier**: third-party delivery failure, bankruptcy

**Product Risk examples** (từ ISO 25010 quality model):
- Missing/wrong functionality
- Incorrect calculations
- Runtime errors
- Poor architecture
- Inadequate response time
- Poor user experience
- **Security vulnerabilities**

**Consequences khi Product Risks materialize**:
- User dissatisfaction
- Loss of revenue, trust, reputation
- Damage to third parties
- High maintenance costs
- Criminal penalties
- **Physical damage, injuries, or death** (safety-critical)

---

### 5.2.3 Product Risk Analysis ⭐

**Mục đích**: Provide awareness of product risk để focus test effort, minimize residual risk.

**Nên bắt đầu** sớm trong SDLC.

#### Hai components

**1. Risk Identification**: Tạo comprehensive list of risks.
- Techniques: brainstorming, workshops, interviews, cause-effect diagrams
- Stakeholders contribute từ nhiều perspectives

**2. Risk Assessment**: Categorize + determine likelihood/impact/level + prioritize + propose mitigation.
- **Quantitative approach**: Risk level = likelihood × impact (numerical)
- **Qualitative approach**: Risk matrix (low/medium/high)
- Risks trong cùng category → similar mitigation approach

#### Ảnh hưởng đến Testing

Product risk analysis results ảnh hưởng đến **thoroughness và test scope**. Results được dùng để:

| Quyết định | Mô tả |
|-----------|-------|
| **Determine test scope** | Cái gì cần test |
| **Determine test levels/types** | Test levels và types phù hợp |
| **Determine test techniques** | Techniques nào và coverage level nào |
| **Estimate effort** | Effort cho từng task |
| **Prioritize testing** | Tìm critical defects sớm nhất |
| **Additional activities** | Activities ngoài testing để reduce risk |

---

### 5.2.4 Product Risk Control ⭐

**Product risk control** = tất cả measures để respond to identified và assessed product risks.

**Hai components**:
- **Risk mitigation**: implement actions để giảm risk level
- **Risk monitoring**: đảm bảo mitigation effective, obtain thêm info, identify emerging risks

**Response options** khi risk đã được analyzed:
1. **Risk mitigation by testing** — test để find và fix
2. **Risk acceptance** — accept risk as-is
3. **Risk transfer** — transfer risk (VD: insurance)
4. **Contingency plan** — plan B nếu risk materializes

**Actions để mitigate product risks**:
- Chọn testers với right **experience và skills** cho risk type
- Appropriate **level of independence** of testing
- Perform **reviews và static analysis**
- Appropriate **test techniques và coverage levels**
- Appropriate **test types** addressing affected quality characteristics
- **Dynamic testing** including regression testing

---

## 5.3 Test Monitoring, Control và Completion

### Phân biệt 3 activities

| Activity | Mô tả | Output |
|---------|-------|--------|
| **Test monitoring** | Gather information về testing — assess progress, measure exit criteria | Raw data |
| **Test control** | Use monitoring info → actions/guidance để achieve efficient testing | Corrective actions |
| **Test completion** | Collect data từ completed activities → consolidate, lessons learned | Reports, archived testware |

**Control directives** (examples):
- Re-prioritize tests khi risk trở thành issue
- Re-evaluate entry/exit criteria do rework
- Adjust schedule vì delay trong test environment
- Add new resources khi cần

**Test completion trigger** tại milestones:
- Test level hoàn thành
- Agile iteration hoàn thành
- Test project hoàn thành hoặc bị cancel
- Software system được release
- Maintenance release hoàn thành

---

### 5.3.1 Test Metrics ⭐

**Test metrics** được gather để show progress và đo effectiveness.

**7 loại metrics**:

| Loại | Ví dụ |
|------|-------|
| **Project progress** | Task completion, resource usage, test effort |
| **Test progress** | Test case implementation progress, env preparation, test cases run/not run/passed/failed, execution time |
| **Product quality** | Availability, response time, MTTF (mean time to failure) |
| **Defect** | Number/priorities of defects found/fixed, defect density, **defect detection percentage** |
| **Risk** | Residual risk level |
| **Coverage** | Requirements coverage, code coverage |
| **Cost** | Cost of testing, organizational cost of quality |

---

### 5.3.2 Test Reports — Purpose, Content, Audience ⭐⭐

Hai loại reports chính:

#### Test Progress Report (Periodic)

| Attribute | Mô tả |
|-----------|-------|
| **Mục đích** | Support ongoing test control — cung cấp info để modify schedule/resources/plan |
| **Frequency** | Regular basis (daily, weekly) |
| **Audience** | Team members và stakeholders (in-team: informal; broader: formal) |
| **Content** | Testing period, test progress (ahead/behind), impediments + workarounds, test metrics, new/changed risks, testing planned for next period |

#### Test Completion Report (One-time)

| Attribute | Mô tả |
|-----------|-------|
| **Mục đích** | Summarize specific test activity, cung cấp info cho subsequent testing |
| **Khi nào** | Khi project/level/type hoàn thành và exit criteria đạt |
| **Audience** | Stakeholders (broader) |
| **Content** | Test summary, testing và product quality evaluation vs original plan, deviations from test plan, testing impediments + workarounds, test metrics, unmitigated risks/defects not fixed, lessons learned |

*Reference: ISO/IEC/IEEE 29119-3 (test status reports và test completion reports)*

---

### 5.3.3 Communicating Test Status

**Options** phụ thuộc context:
- **Verbal communication** — face-to-face với team
- **Dashboards** — CI/CD dashboards, task boards, burn-down charts
- **Electronic channels** — email, chat
- **Online documentation**
- **Formal test reports**

> 💡 **Formal vs Informal**: Distributed teams (different locations/timezones) → more formal. In-team → frequent và informal. Different stakeholders cần different types of information → tailor accordingly.

---

## 5.4 Configuration Management ⭐

**Configuration Management (CM)** = discipline để identify, control, và track work products.

**Work products trong scope của CM**:
- Test plans, strategies
- Test conditions, test cases
- Test scripts, test results
- Test logs, test reports

**Tại sao CM quan trọng trong testing**:

| CM đảm bảo | Tác dụng |
|-----------|---------|
| Config items **uniquely identified, version controlled, tracked** | Traceability maintained |
| Documentation và software items **referenced unambiguously** trong testware | Integrity của testware |
| **Revert** về previous baseline | Reproduce previous test results |

**Cho complex config items** (VD: test environment):
- CM records items nó bao gồm, relationships, versions
- Khi approved → **baseline** → chỉ change qua formal change control

> 💡 **DevOps context**: CI/CD automated CM thường được included trong DevOps pipeline (Section 2.1.4).

---

## 5.5 Defect Management ⭐⭐⭐ K3

### Defect Management Process

**Tại sao cần process?** Vì một trong major test objectives là find defects → cần established process để handle từ discovery đến closure.

**Lưu ý**: "Defects" từ reports có thể là:
- Real defects
- False positive results
- Change requests
- Hoặc thứ gì đó khác

**Workflow điển hình**:
```
Discovery → Log → Analyze & Classify → Decide (fix/keep/close) → Close
```

**3 mục đích của Defect Reports**:
1. Provide **sufficient information** để responsible team resolve the issue
2. Means of **tracking quality** of work product
3. **Ideas for improvement** của development và test process

---

### Nội dung Defect Report ⭐⭐⭐ — K3 (Prepare a defect report)

**Defect report logged during dynamic testing** thường bao gồm:

| Field | Mô tả |
|-------|-------|
| **Unique identifier** | ID để track và reference |
| **Title** | Short summary của anomaly being reported |
| **Date observed** | Khi nào phát hiện |
| **Issuing organization** | Ai/team nào báo cáo |
| **Author** + role | Người viết report |
| **Test object** | Cái gì đang được test |
| **Test environment** | Môi trường nào (OS, browser, version) |
| **Context** | Test case being run, test activity, SDLC phase, technique, checklist, test data used |
| **Description of failure** | Đủ để **reproduce và resolve** — test steps, test logs, DB dumps, screenshots, recordings |
| **Expected results** | Behavior đúng phải là gì |
| **Actual results** | Behavior thực tế quan sát được |
| **Severity** | Degree of impact on stakeholders/requirements |
| **Priority** | Urgency to fix |
| **Status** | open, deferred, duplicate, waiting to be fixed, awaiting confirmation testing, re-opened, closed, rejected |
| **References** | Ví dụ: test case ID |

*Reference: ISO/IEC/IEEE 29119-3 gọi là **incident reports**.*

> 💡 **Static testing defects**: Nên handle theo cách tương tự, đặc biệt static analysis.

---

## Bẫy thi thường gặp

### Bẫy 1: Nhầm entry/exit criteria
- **Entry** = điều kiện ĐỂ BẮT ĐẦU (như cửa vào)
- **Exit** = điều kiện ĐỂ KẾT THÚC (như cửa ra / Definition of Done)

### Bẫy 2: Three-point estimation formula
**SAI**: E = (a + m + b) / 3 (simple average)
**ĐÚNG**: E = **(a + 4m + b) / 6** (weighted — m được weight gấp 4)

### Bẫy 3: Project risk vs Product risk
- **Project risk**: ảnh hưởng schedule/budget/scope của **dự án**
- **Product risk**: ảnh hưởng **quality** của sản phẩm
- **Security vulnerabilities** = Product risk (không phải project risk)

### Bẫy 4: Nhầm Q3 và Q4 trong Testing Quadrants
- **Q3**: Business facing, critique product → **Exploratory**, usability, UAT (user-oriented, manual)
- **Q4**: Technology facing, critique product → **Smoke tests, non-functional** (automated)

### Bẫy 5: Test Pyramid — số lượng ngược
**Đúng**: Bottom (unit) = **NHIỀU** nhất, nhanh nhất; Top (E2E) = **ÍT** nhất, chậm nhất.

### Bẫy 6: Risk level calculation
**Risk level = likelihood × impact** (perkalian, không cộng).

### Bẫy 7: Defect report — expected vs actual
Nhớ phải có **cả hai**: expected results (đúng phải là gì) **và** actual results (thực tế là gì). Thiếu một trong hai → không đủ info để reproduce.

### Bẫy 8: Severity vs Priority
- **Severity**: mức độ **ảnh hưởng** (technical impact)
- **Priority**: **urgency** to fix (business priority)
- Chúng có thể không tương quan: bug ít ảnh hưởng nhưng urgent (VD: CEO thường xuyên gặp) hoặc ngược lại.

---

## Câu hỏi luyện tập

**Câu 1 (Entry/Exit)**: Team nhận được build mới để test nhưng chưa có test data và môi trường chưa setup. Theo entry criteria, team nên làm gì?
- A. Bắt đầu test ngay và log defects về missing setup
- B. Không bắt đầu test vì entry criteria chưa đáp ứng
- C. Chạy smoke test để verify build quality
- D. Báo cáo cho management và continue

> **Đáp án**: B. Entry criteria chưa đáp ứng (test data, environment) → activity sẽ khó khăn, tốn kém, rủi ro hơn → không nên bắt đầu.

---

**Câu 2 (Three-point Estimation)**: Expert estimates: optimistic = 4 hours, most likely = 7 hours, pessimistic = 16 hours. Estimate là bao nhiêu?
- A. 9 hours
- B. 8 hours
- C. 7.5 hours
- D. 7 hours

> **Đáp án**: B. E = (4 + 4×7 + 16) / 6 = (4 + 28 + 16) / 6 = 48/6 = **8 hours**.

---

**Câu 3 (Risk types)**: Team phát hiện rằng key developer vừa resign. Đây là loại risk nào?
- A. Product risk — security
- B. Project risk — people issue
- C. Product risk — reliability
- D. Project risk — supplier issue

> **Đáp án**: B. Mất nhân sự = people issue → project risk (ảnh hưởng ability để deliver project).

---

**Câu 4 (Testing Quadrants)**: Tester đang làm load testing và security penetration testing. Đây là Quadrant nào?
- A. Q1
- B. Q2
- C. Q3
- D. Q4

> **Đáp án**: D. Q4 = Technology facing, Critique product → Non-functional tests (performance, security) — thường automated.

---

**Câu 5 (Defect Report)**: Tester viết defect report. Field nào là QUAN TRỌNG NHẤT để developer có thể reproduce defect?
- A. Severity và Priority
- B. Test object và Date
- C. Description of failure với test steps, actual và expected results
- D. Status và References

> **Đáp án**: C. Description đủ để reproduce + expected vs actual — không có này, developer không biết defect là gì và làm sao reproduce.

---

**Câu 6 (Test Pyramid)**: Theo Test Pyramid, loại test nào nên có số lượng NHIỀU NHẤT?
- A. UI/End-to-end tests
- B. Integration tests
- C. Service tests
- D. Unit/Component tests

> **Đáp án**: D. Unit/Component tests — bottom of pyramid — nhiều nhất, nhanh nhất, cheapest.

---

**Câu 7 (Risk-based prioritization)**: Khi dùng risk-based test case prioritization, test case nào được chạy TRƯỚC?
- A. Test cases cho features được implement mới nhất
- B. Test cases cho features được users dùng nhiều nhất
- C. Test cases cho areas có risk cao nhất (likelihood × impact)
- D. Test cases ngắn nhất (fastest to execute)

> **Đáp án**: C. Risk-based prioritization = highest risk areas first.

---

**Câu 8 (CM)**: Configuration Management hỗ trợ testing theo cách nào?
- A. Đảm bảo test cases được viết theo đúng format
- B. Đảm bảo test items được uniquely identified và version controlled để maintain traceability
- C. Tự động chạy test cases khi code thay đổi
- D. Đảm bảo test plan được approve bởi management

> **Đáp án**: B. CM = identify, control, track work products — duy trì traceability, cho phép revert về previous baseline.

---

## Checklist ôn tập nhanh

- [ ] Tôi biết **7 sections** trong content của test plan?
- [ ] Tôi phân biệt được **entry criteria** vs **exit criteria** (và Agile equivalents)?
- [ ] Tôi áp dụng được **4 estimation techniques** (đặc biệt Three-point formula E=(a+4m+b)/6)?
- [ ] Tôi biết **3 test case prioritization strategies** và khi nào dùng?
- [ ] Tôi mô tả được **Test Pyramid** (bottom nhiều/nhanh, top ít/chậm)?
- [ ] Tôi nhớ **4 Testing Quadrants** (axis: business/technology × support/critique)?
- [ ] Tôi tính được **Risk level = likelihood × impact**?
- [ ] Tôi phân biệt được **Project risks vs Product risks** với ví dụ?
- [ ] Tôi biết **Product risk analysis** ảnh hưởng đến test scope/levels/techniques thế nào?
- [ ] Tôi biết **4 response options** cho product risks?
- [ ] Tôi biết **7 loại test metrics**?
- [ ] Tôi phân biệt được **Test Progress Report** và **Test Completion Report**?
- [ ] Tôi biết **5 ways** để communicate test status?
- [ ] Tôi biết CM đảm bảo gì cho testing?
- [ ] Tôi có thể **chuẩn bị defect report** với đầy đủ các fields (K3)?

---

> ✅ **Kết thúc Chương 5**. Chương tiếp theo: [Chương 6 — Test Tools](./Chuong-06-Cong-Cu-Kiem-Thu.md)
