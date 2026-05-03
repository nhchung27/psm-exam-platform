# Chương 4 — Test Analysis and Design (Phân tích và Thiết kế kiểm thử)

> **Thời lượng syllabus**: 390 phút | **Trọng số**: ~36% bài thi — **CHƯƠNG QUAN TRỌNG NHẤT**
> **Ghi chú của giáo viên**: Chiếm gần 1/3 bài thi với nhiều câu K3 (apply). Phần Black-box techniques (EP, BVA, Decision Table, State Transition) đòi hỏi luyện tập thực hành với ví dụ cụ thể. Đừng chỉ đọc — hãy làm bài tập!

---

## Mục lục
1. [Keywords giải thích](#keywords)
2. [Learning Objectives](#learning-objectives)
3. [4.1 Test Techniques Overview](#41-test-techniques-overview)
4. [4.2 Black-Box Test Techniques](#42-black-box-test-techniques)
5. [4.3 White-Box Test Techniques](#43-white-box-test-techniques)
6. [4.4 Experience-Based Test Techniques](#44-experience-based-test-techniques)
7. [4.5 Collaboration-Based Test Approaches](#45-collaboration-based-test-approaches)
8. [Bẫy thi thường gặp](#bẫy-thi-thường-gặp)
9. [Câu hỏi luyện tập](#câu-hỏi-luyện-tập)
10. [Checklist ôn tập nhanh](#checklist-ôn-tập-nhanh)

---

## Keywords

`acceptance criteria, acceptance test-driven development, black-box test technique, boundary value analysis, branch coverage, checklist-based testing, collaboration-based test approach, coverage, coverage item, decision table testing, equivalence partitioning, error guessing, experience-based test technique, exploratory testing, state transition testing, statement coverage, test technique, white-box test technique`

---

## Learning Objectives

| ID | K-Level | Nội dung cần đạt được |
|----|---------|----------------------|
| FL-4.1.1 | **K2** | Phân biệt black-box, white-box, và experience-based techniques |
| FL-4.2.1 | **K3** | **Áp dụng** EP để derive test cases |
| FL-4.2.2 | **K3** | **Áp dụng** BVA để derive test cases |
| FL-4.2.3 | **K3** | **Áp dụng** Decision Table để derive test cases |
| FL-4.2.4 | **K3** | **Áp dụng** State Transition để derive test cases |
| FL-4.3.1 | **K2** | Giải thích statement testing |
| FL-4.3.2 | **K2** | Giải thích branch testing |
| FL-4.3.3 | **K2** | Giải thích giá trị của white-box testing |
| FL-4.4.1 | **K2** | Giải thích error guessing |
| FL-4.4.2 | **K2** | Giải thích exploratory testing |
| FL-4.4.3 | **K2** | Giải thích checklist-based testing |
| FL-4.5.1 | **K2** | Giải thích cách viết user stories collaboratively |
| FL-4.5.2 | **K2** | Classify các options viết acceptance criteria |
| FL-4.5.3 | **K3** | **Áp dụng** ATDD để derive test cases |

---

## 4.1 Test Techniques Overview

**Test techniques** hỗ trợ tester trong:
- **Test analysis** (what to test) — define test conditions, coverage items
- **Test design** (how to test) — create test cases, identify test data

### Ba loại Test Techniques

| Loại | Còn gọi | Dựa trên | Đặc điểm |
|------|---------|----------|----------|
| **Black-box** | Specification-based | **Specified behavior** (không biết internal) | Test cases không phụ thuộc implementation — valid dù code thay đổi miễn behavior không đổi |
| **White-box** | Structure-based | **Internal structure** (code, architecture) | Test cases phụ thuộc implementation — tạo được sau khi design/implement |
| **Experience-based** | — | **Knowledge + experience** của tester | Bổ sung cho 2 loại trên — detect defects mà techniques kia bỏ sót |

> 💡 **Quan hệ**: Experience-based là **complementary** — không thay thế mà bổ sung cho black-box và white-box.

---

## 4.2 Black-Box Test Techniques

### 4.2.1 Equivalence Partitioning (EP) ⭐⭐ K3

**Ý tưởng cốt lõi**: Chia data thành các **partitions** — giả định rằng mọi phần tử trong cùng partition được xử lý **giống nhau** bởi test object.

**Nguyên tắc**: Test 1 giá trị đại diện từ mỗi partition là đủ. Nếu 1 giá trị trong partition detect defect, các giá trị khác trong cùng partition cũng sẽ detect defect đó.

#### Khái niệm quan trọng

| Khái niệm | Mô tả |
|-----------|-------|
| **Valid partition** | Chứa giá trị **hợp lệ** — test object xử lý bình thường |
| **Invalid partition** | Chứa giá trị **không hợp lệ** — test object phải reject hoặc xử lý đặc biệt |
| **Coverage item** | Mỗi partition = 1 coverage item |
| **100% EP coverage** | Mỗi partition phải được exercise ít nhất 1 lần |
| **Coverage %** | = Partitions exercised ÷ Total partitions |

**Điều kiện partitions**:
- **Không overlap** (mutually exclusive)
- **Non-empty** (có ít nhất 1 phần tử)
- Có thể: continuous, discrete, ordered, unordered, finite, infinite

#### EP với nhiều inputs — Each Choice Coverage

Khi có nhiều sets of partitions (nhiều input parameters):
- **Each Choice coverage**: mỗi partition từ mỗi set phải được exercise ít nhất 1 lần
- Không yêu cầu test mọi combination (đó là exhaustive — principle 2 = impossible)

#### Ví dụ thực hành

**Scenario**: Field "Age" chấp nhận giá trị từ 18 đến 65 (tuổi hợp lệ để đăng ký).

```
Partition 1 (Invalid - too young): x < 18    → test với: 0, 5, 17
Partition 2 (Valid):               18 ≤ x ≤ 65 → test với: 18, 40, 65
Partition 3 (Invalid - too old):   x > 65    → test với: 66, 100
```

**Test cases tối thiểu** (Each Choice, 1 per partition): age = 10, 40, 70
**Coverage** = 3/3 partitions = 100%

---

### 4.2.2 Boundary Value Analysis (BVA) ⭐⭐ K3

**Ý tưởng cốt lõi**: Chỉ áp dụng cho **ordered partitions**. Test tập trung vào **boundary values** (min/max) của partitions — nơi developer dễ mắc sai nhất.

**Tại sao boundary dễ sai?**: Developer thường sai trong so sánh (< vs <=, > vs >=).

#### 2-Value BVA vs 3-Value BVA

| | **2-Value BVA** | **3-Value BVA** |
|---|-----------------|-----------------|
| **Coverage items/boundary** | 2: boundary value + neighbor (adjacent partition) | 3: boundary value + 2 neighbors (cả 2 phía) |
| **Độ mạnh** | Yếu hơn | **Mạnh hơn** |
| **100% coverage** | Tất cả boundary values + neighbors | Tất cả boundary values + neighbors cả 2 phía |
| **Coverage %** | = Boundary values exercised ÷ Total boundaries | = (Boundaries + neighbors) exercised ÷ Total |

#### Ví dụ thực hành

**Scenario**: Field "Discount" — valid range là 1 đến 10 (inclusive).

```
Partitions:
  P1 (invalid): x < 1
  P2 (valid):   1 ≤ x ≤ 10
  P3 (invalid): x > 10

Boundaries: 1 (min của P2), 10 (max của P2)
```

**2-Value BVA**:
- Boundary = 1: test với **1** (boundary) và **0** (neighbor từ invalid P1)
- Boundary = 10: test với **10** (boundary) và **11** (neighbor từ invalid P3)
- Test cases: **{0, 1, 10, 11}** (4 values)

**3-Value BVA**:
- Boundary = 1: test với **0** (invalid side), **1** (boundary), **2** (valid side)
- Boundary = 10: test với **9** (valid side), **10** (boundary), **11** (invalid side)
- Test cases: **{0, 1, 2, 9, 10, 11}** (6 values, nhưng loại duplicates: {0, 1, 2, 9, 10, 11})

#### Tại sao 3-Value mạnh hơn?

**Scenario bug**: `if (x = 10)` thay vì đúng là `if (x ≤ 10)`.

- 2-value BVA test x=10 → pass (x=10 thỏa mãn cả hai)
- 2-value BVA test x=11 → correctly fail
- **Nhưng không test x=9!** → miss defect
- 3-value BVA test x=9 → **phát hiện defect** (x=9 should be valid but the buggy code says only x=10 is valid)

---

### 4.2.3 Decision Table Testing ⭐⭐ K3

**Khi dùng**: Requirements chứa **combinations của conditions** — business rules phức tạp.

**Ưu điểm**: Systematic approach để identify **tất cả combinations** — kể cả những cái dễ bị bỏ sót.

#### Cấu trúc Decision Table

```
              | Rule 1 | Rule 2 | Rule 3 | Rule 4 |
------------- |--------|--------|--------|--------|
CONDITIONS    |        |        |        |        |
  Condition A |   T    |   T    |   F    |   F    |
  Condition B |   T    |   F    |   T    |   F    |
------------- |--------|--------|--------|--------|
ACTIONS       |        |        |        |        |
  Action 1    |   X    |        |   X    |        |
  Action 2    |        |   X    |        |        |
```

#### Ký hiệu

**Conditions**:
- **T** = condition satisfied (true)
- **F** = condition not satisfied (false)
- **—** = condition irrelevant (value doesn't affect outcome)
- **N/A** = condition infeasible for this rule

**Actions**:
- **X** = action xảy ra
- **Blank** = action không xảy ra

#### Loại tables

| Loại | Mô tả |
|------|-------|
| **Limited-entry** | Chỉ dùng T/F cho conditions |
| **Extended-entry** | Conditions có thể là ranges, equivalence partitions, discrete values |

#### Coverage

**Coverage items** = các **feasible columns** (feasible rules).
**100% coverage** = mọi feasible column phải được execute.

**Coverage %** = Columns exercised ÷ Total feasible columns.

> **Minimize table**: Table đủ lớn để cover mọi combination. Có thể simplify bằng:
> - Merge columns với conditions "—" (irrelevant)
> - Delete infeasible combinations (N/A)

#### Ví dụ thực hành

**Scenario**: Discount áp dụng khi: Member (M) hoặc Spent > $100 (S).

| | R1 | R2 | R3 | R4 |
|---|---|---|---|---|
| Is Member? | T | T | F | F |
| Spent > $100? | T | F | T | F |
| Apply Discount? | X | X | X | — |

**Test cases**: 4 test cases — 1 cho mỗi rule.
- R1: Member + Spent>100 → Discount ✓
- R2: Member + Spent≤100 → Discount ✓
- R3: Non-member + Spent>100 → Discount ✓
- R4: Non-member + Spent≤100 → No discount

---

### 4.2.4 State Transition Testing ⭐⭐ K3

**Khi dùng**: System behavior phụ thuộc vào **current state** và **events/inputs**.

**Models**:
- **State diagram**: visual representation — states, transitions, events, guard conditions, actions
- **State table**: tabular form — rows = states, columns = events, cells = target state + action (empty = invalid transition)

#### Cú pháp

```
Transition: event [guard condition] / action
Ví dụ: "click login [credentials valid] / show dashboard"
```

Guard conditions và actions có thể omit nếu không relevant.

#### 3 Coverage Criteria (từ yếu đến mạnh)

| Criterion | Coverage items | 100% nghĩa là | Strength |
|-----------|---------------|----------------|----------|
| **All states coverage** | Mọi **state** | Mọi state được visit ít nhất 1 lần | **Yếu nhất** |
| **Valid transitions coverage** (0-switch) | Mọi **valid transition** | Mọi valid transition được execute | Trung bình — **phổ biến nhất** |
| **All transitions coverage** | Mọi transition (valid + **invalid**) | Mọi valid + attempt execute invalid | **Mạnh nhất** |

**Quan hệ subsumption** (quan trọng!):
- All transitions coverage → **subsumes** → valid transitions coverage → **subsumes** → all states coverage
- "All transitions 100%" **implies** valid transitions 100% và all states 100%

> ⚠️ **All transitions**: Khi test invalid transitions, chỉ 1 invalid transition trong 1 test case — tránh **defect masking** (1 defect che khuất defect khác).

#### Coverage Measurement

| Criterion | Coverage Formula |
|-----------|-----------------|
| All states | States exercised ÷ Total states |
| Valid transitions | Valid transitions exercised ÷ Total valid transitions |
| All transitions | (Valid + invalid) exercised/attempted ÷ Total transitions |

#### Ví dụ thực hành

**Scenario**: State machine của đèn giao thông đơn giản.

```
States: RED, GREEN, YELLOW
Transitions:
  RED --[timer]--> GREEN
  GREEN --[timer]--> YELLOW
  YELLOW --[timer]--> RED
```

| | Timer |
|--|-------|
| **RED** | GREEN |
| **GREEN** | YELLOW |
| **YELLOW** | RED |

**All states**: 1 test case có thể cover cả 3 states (RED→GREEN→YELLOW→RED)
**Valid transitions**: 3 test cases — mỗi transition 1 lần
**All transitions**: 3 valid + test các invalid cases (VD: timer khi không đúng state)

---

## 4.3 White-Box Test Techniques

### 4.3.1 Statement Testing và Statement Coverage ⭐

**Coverage items** = **executable statements** (dòng code có thể chạy).

**100% statement coverage** = mọi executable statement được chạy ít nhất 1 lần.

**Coverage %** = Statements exercised ÷ Total executable statements

**Giới hạn của Statement Coverage**:
- **KHÔNG** đảm bảo mọi branch được test
- **KHÔNG** phát hiện data-dependent defects (VD: division by zero chỉ xảy ra khi denominator = 0)
- **KHÔNG** đảm bảo mọi decision logic đã được test

### 4.3.2 Branch Testing và Branch Coverage ⭐

**Branch** = transfer of control giữa 2 nodes trong control flow graph.

Loại:
- **Unconditional branch** (straight-line code): luôn xảy ra
- **Conditional branch** (decision outcome): true hoặc false — từ if/else, switch/case, loop conditions

**Coverage items** = **branches**.
**100% branch coverage** = mọi branch được exercise.

**Coverage %** = Branches exercised ÷ Total branches

**Branch Coverage SUBSUMES Statement Coverage**:
- Nếu đạt 100% branch → tự động đạt 100% statement
- Nhưng 100% statement **KHÔNG** đảm bảo 100% branch

**Ví dụ**:
```python
def check_age(age):           # Statement 1
    if age >= 18:             # Statement 2 — 2 branches: age>=18 (true) và age<18 (false)
        return "adult"        # Statement 3 — trong branch true
    else:
        return "minor"        # Statement 4 — trong branch false
```

- Nếu test chỉ với age=25: Statement coverage = 3/4 (miss statement 4) = 75%
- Để đạt 100% statement: cần test cả age=25 (true) và age=15 (false)
- Để đạt 100% branch: test cả 2 branches = 2 test cases

**Giới hạn của Branch Coverage**:
- Không phát hiện defects cần execute specific path (không chỉ branch)

### 4.3.3 Giá trị của White-Box Testing ⭐

**Strengths**:
- Xem xét **toàn bộ implementation** → detect defects kể cả khi spec mơ hồ/outdated/incomplete
- Cung cấp **objective measurement of coverage**
- Cho phép generate additional tests để increase coverage
- Có thể dùng trong **static testing** (dry runs, pseudocode review)
- Performing only black-box không cho coverage measurement → white-box bổ sung điều này

**Weakness**:
- Không phát hiện **defects of omission** (feature bị thiếu hoàn toàn trong implementation) → black-box cần để cover cái này

> 💡 **Kết hợp tốt nhất**: Black-box (specification coverage) + White-box (code coverage) = comprehensive testing.

---

## 4.4 Experience-Based Test Techniques

### 4.4.1 Error Guessing ⭐

**Định nghĩa**: Anticipate errors, defects, failures dựa trên **knowledge của tester**.

**Knowledge sources**:
- Ứng dụng đã hoạt động như thế nào trong quá khứ
- Kiểu errors developers hay mắc
- Failures từ applications tương tự khác

**Các vùng thường có lỗi**:

| Vùng | Ví dụ lỗi |
|------|-----------|
| **Input** | Input đúng không được accept; input bị reject |
| **Output** | Sai format, wrong result |
| **Logic** | Missing cases, wrong operator |
| **Computation** | Incorrect operand, wrong calculation |
| **Interface** | Parameter mismatch, incompatible types |
| **Data** | Incorrect initialization, wrong data type |

**Fault attacks** = cách triển khai error guessing có hệ thống:
1. Tạo/acquire list các possible errors, defects, failures
2. Design tests để identify defects (expose errors, find defects, cause failures)
3. Lists xây từ: experience, defect/failure data, common knowledge

---

### 4.4.2 Exploratory Testing ⭐

**Định nghĩa**: Tests được **simultaneously designed, executed, và evaluated** trong khi tester học về test object.

**Mục đích**:
- Học về test object
- Explore sâu hơn với focused tests
- Create tests cho untested areas

#### Session-Based Testing approach

| Thành phần | Mô tả |
|-----------|-------|
| **Time box** | Session có time limit cố định |
| **Test charter** | Chứa test objectives → guide testing trong session |
| **Debriefing** | Discussion cuối session giữa tester và stakeholders về kết quả |
| **Test session sheets** | Document steps và discoveries |
| **Coverage items** | Được identify và exercise trong session |

**Khi nào Exploratory Testing hữu ích**:
- Few or inadequate specifications
- Time pressure cho testing
- Bổ sung cho formal techniques
- Tester có domain knowledge + analytical skills + curiosity + creativity (Section 1.5.1)

**Có thể incorporate** các techniques khác (VD: EP để explore input space).

---

### 4.4.3 Checklist-Based Testing ⭐

**Định nghĩa**: Tester design, implement, execute tests để cover conditions từ **checklist**.

**Xây checklist từ**:
- Experience
- Knowledge về những gì quan trọng với user
- Hiểu tại sao/cách software fails

**Đặc điểm của checklist tốt**:
- Items thường là **câu hỏi** (Yes/No checkable)
- Có thể refer đến requirements, graphical properties, quality characteristics
- **KHÔNG nên** chứa:
  - Items có thể auto-check
  - Items phù hợp hơn làm entry/exit criteria
  - Items quá chung chung

**Vấn đề theo thời gian**: Checklist items có thể **kém hiệu quả** khi developers học cách avoid những errors đó → cần update định kỳ để add items cho newly found high-severity defects.

**Lợi ích**: Cung cấp **consistency** và guidelines khi không có detailed test cases.

**Hạn chế**: Nếu checklist high-level, có **variability** trong testing → coverage lớn hơn nhưng repeatability thấp hơn.

---

## 4.5 Collaboration-Based Test Approaches

> 💡 **Phân biệt với Sections 4.2–4.4**: Các techniques ở 4.2-4.4 focus vào **defect detection**. Collaboration-based approaches focus vào **defect avoidance** thông qua communication và collaboration.

### 4.5.1 Collaborative User Story Writing ⭐

**User story** = feature có giá trị với user hoặc purchaser.

**3 C's của User Story** (Jeffries 2000):

| C | Mô tả |
|---|-------|
| **Card** | Medium mô tả user story (index card, electronic board) |
| **Conversation** | Giải thích cách software sẽ được dùng (documented hoặc verbal) |
| **Confirmation** | **Acceptance criteria** — điều kiện để accept story |

**Format phổ biến**: *"As a [role], I want [goal], so that I can [resulting business value]"*

**Collaborative authorship techniques**: brainstorming, mind mapping.

**Ba perspectives** cần consider: **Business, Development, Testing**.

**INVEST** — Tiêu chí user story tốt:

| Letter | Meaning | Tại sao quan trọng |
|--------|---------|-------------------|
| **I** | Independent | Story có thể develop và test riêng |
| **N** | Negotiable | Không fixed — có thể thương lượng |
| **V** | Valuable | Deliver business value |
| **E** | Estimable | Estimate được effort |
| **S** | Small | Nhỏ đủ để complete trong 1 sprint |
| **T** | Testable | **Có thể verify** — nếu không testable → story không rõ ràng |

> 💡 **Nếu stakeholder không biết test story như thế nào** → story không clear, không có business value, hoặc cần testing help.

---

### 4.5.2 Acceptance Criteria ⭐

**Acceptance criteria** = conditions mà implementation phải satisfy để được stakeholders accept.

**Mục đích của Acceptance Criteria**:
1. Define **scope** của user story
2. Reach **consensus** giữa stakeholders
3. Describe cả **positive và negative scenarios**
4. Basis cho **user story acceptance testing** (Section 4.5.3)
5. Allow accurate **planning và estimation**

**2 formats phổ biến**:

| Format | Mô tả | Ví dụ |
|--------|-------|-------|
| **Scenario-oriented** | Given/When/Then (BDD format, Section 2.1.3) | Given: user logged in; When: click logout; Then: session ends, redirect to login page |
| **Rule-oriented** | Bullet point verification list hoặc tabulated input-output mapping | "• Password must be 8+ chars • Must contain number" |

> Team có thể dùng format khác miễn là acceptance criteria **well-defined và unambiguous**.

---

### 4.5.3 Acceptance Test-Driven Development (ATDD) ⭐⭐ K3

**ATDD** = test-first approach (Section 2.1.3).

**Process ATDD**:

```
Step 1: Specification Workshop
         User story + acceptance criteria
         → Analyzed, discussed, written by team
         → Resolve incompleteness, ambiguities, defects
         
Step 2: Create Test Cases
         Based on acceptance criteria
         Team as a whole OR tester individually
         Test cases = examples của how software works
         
Step 3: Implement
         Team implements user story
         Test cases guide correct implementation
         
Step 4: Automate (nếu có framework)
         Developer automates test cases
         Tests = executable requirements
```

**Participants trong Specification Workshop**: customers, developers, testers.

**Thứ tự test cases**:
1. **Positive tests** — correct behavior, no exceptions, happy path
2. **Negative tests** — error conditions, exceptions
3. **Non-functional quality tests** — performance, usability

**Nguyên tắc viết test cases ATDD**:
- Bằng ngôn ngữ tự nhiên (preconditions, inputs, postconditions)
- Understandable cho stakeholders
- **Phủ hết** characteristics của user story
- **KHÔNG** go beyond story (không thêm requirements)
- Acceptance criteria có thể **detail** một số issues trong story

---

## Bẫy thi thường gặp

### Bẫy 1: Nhầm 2-value vs 3-value BVA
- 2-value: boundary + **1 neighbor** (adjacent partition)
- 3-value: boundary + **2 neighbors** (cả 2 phía)
- **3-value mạnh hơn** — detect defects mà 2-value bỏ sót

### Bẫy 2: EP với invalid partitions
**Câu đánh lừa**: "Chỉ cần test các valid partitions."
**Đúng**: Phải test **cả valid lẫn invalid partitions** (100% coverage = tất cả partitions).

### Bẫy 3: Branch coverage = Statement coverage
**Đúng**: Branch 100% **implies** Statement 100%, nhưng Statement 100% **KHÔNG implies** Branch 100%.

### Bẫy 4: White-box detect omission defects
**Đúng**: White-box KHÔNG phát hiện defects of omission (feature bị bỏ sót hoàn toàn). Cần black-box cho điều này.

### Bẫy 5: Decision table — N/A vs "—"
- **—**: condition **irrelevant** (value không ảnh hưởng outcome)
- **N/A**: condition **infeasible** cho rule đó (logically impossible)

### Bẫy 6: State transition — all states vs valid transitions
- 100% all states **KHÔNG đảm bảo** 100% valid transitions
- 100% valid transitions **TỰ ĐỘNG đảm bảo** 100% all states
- 100% all transitions **TỰ ĐỘNG đảm bảo** cả all states lẫn valid transitions

### Bẫy 7: Exploratory testing = no planning
**Đúng**: Exploratory có **test charter** định hướng — có structure, chỉ không có predefined scripts. Không phải random testing.

### Bẫy 8: ATDD chỉ dành cho testers
**Đúng**: ATDD là **collaborative** — customers, developers, testers cùng tham gia specification workshop.

---

## Câu hỏi luyện tập

**Câu 1 (EP — K3)**: Website chấp nhận tuổi từ 13 đến 17 (teen) và 18 đến 99 (adult). Dùng EP, test case nào đủ để achieve 100% coverage?
- A. 13, 18
- B. 5, 15, 50
- C. 13, 18, 100
- D. 12, 15, 18, 50, 100

> **Đáp án**: D.
> Partitions: (x<13 invalid), (13-17 teen), (18-99 adult), (x>99 invalid) → 4 partitions
> D: 12 (P1 invalid), 15 (P2 teen), ~~50 (P3)~~, 18 (P3 adult), 100 (P4 invalid) → covers 4 partitions.
> B chỉ cover 3 (thiếu P4). C cover 3 (thiếu P1 invalid).

---

**Câu 2 (BVA — K3)**: System cho phép input từ 10 đến 20. Dùng 2-value BVA, test cases cần thiết là:
- A. 10, 20
- B. 9, 10, 20, 21
- C. 9, 10, 11, 19, 20, 21
- D. 10, 15, 20

> **Đáp án**: B.
> Boundaries: 10 và 20
> 2-value BVA: boundary + 1 neighbor
> - Boundary 10: **10** + **9** (neighbor from invalid partition)
> - Boundary 20: **20** + **21** (neighbor from invalid partition)
> Test cases: {9, 10, 20, 21}

---

**Câu 3 (Decision Table — K3)**: Loan approval: cần Credit Score > 700 (C) AND Income > $50k (I). Bao nhiêu test cases cần để 100% Decision Table coverage?
- A. 2
- B. 3
- C. 4
- D. 6

> **Đáp án**: C. 4 rules (2 conditions × 2 values = 4 combinations: TT, TF, FT, FF).

---

**Câu 4 (State Transition)**: State machine có 4 states và 6 valid transitions. Để đạt 100% valid transitions coverage, cần tối thiểu bao nhiêu test cases?
- A. 4 (one per state)
- B. 6 (one per transition)
- C. At least 6 (có thể một test case cover nhiều transitions)
- D. 10 (states + transitions)

> **Đáp án**: C. Cần cover 6 transitions, nhưng 1 test case (sequence) có thể cover nhiều transitions. Tối thiểu phụ thuộc graph structure, nhưng cần ít nhất đủ để cover 6 transitions.

---

**Câu 5 (White-box)**: Test suite đạt 100% branch coverage. Điều này đảm bảo điều gì?
- A. Mọi statement được execute ít nhất 1 lần
- B. Mọi path trong code được test
- C. Không còn defects trong code
- D. 100% equivalence partition coverage

> **Đáp án**: A. Branch 100% subsumes Statement 100%. Không đảm bảo all paths (B), no defects (C), hay EP coverage (D).

---

**Câu 6 (INVEST)**: User story viết: "Improve the system." Story này vi phạm tiêu chí nào?
- A. Negotiable
- B. Valuable
- C. Small và Testable
- D. Independent

> **Đáp án**: C. "Improve the system" quá broad → không Small và không Testable (không biết verify thế nào).

---

**Câu 7 (ATDD)**: Trong ATDD, ai tham gia specification workshop?
- A. Chỉ testers
- B. Chỉ developers và business analysts
- C. Customers, developers, và testers
- D. Management và project leads

> **Đáp án**: C. ATDD là collaborative — cả 3 perspectives: customers/business, developers, testers.

---

## Checklist ôn tập nhanh

- [ ] Tôi phân biệt được **3 loại test techniques** (black-box/white-box/experience-based)?
- [ ] Tôi áp dụng được **EP** — chia partitions valid/invalid, tính coverage?
- [ ] Tôi áp dụng được **2-value BVA** và **3-value BVA** — biết khi nào 3-value mạnh hơn?
- [ ] Tôi xây dựng được **Decision Table** và biết coverage items là feasible columns?
- [ ] Tôi phân biệt được **3 state transition coverage criteria** (all states < valid transitions < all transitions)?
- [ ] Tôi hiểu **statement coverage** và **branch coverage** khác nhau thế nào?
- [ ] Tôi nhớ **Branch subsumes Statement** (một chiều, không ngược)?
- [ ] Tôi biết **error guessing, exploratory, checklist** mỗi loại dùng khi nào?
- [ ] Tôi biết **3 C's** và **INVEST** của user story?
- [ ] Tôi biết **2 formats** viết acceptance criteria (scenario-oriented vs rule-oriented)?
- [ ] Tôi biết **ATDD process** và order của test cases (positive → negative → non-functional)?

---

> ✅ **Kết thúc Chương 4**. Chương tiếp theo: [Chương 5 — Managing the Test Activities](./Chuong-05-Quan-Ly-Hoat-Dong-Kiem-Thu.md)
