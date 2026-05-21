---
layout: default
title: Python Developer Documentation
---

<style>
  :root {
    --bg-color: #1e1e1e;
    --text-main: #d4d4d4;
    --text-muted: #858585;
    --accent: #569cd6; 
    --accent-keyword: #c586c0; 
    --accent-string: #ce9178; 
    --accent-function: #dcdcaa; 
    --border: #333333;
    --card-bg: #252526;
    --tab-active: #1e1e1e;
    --tab-inactive: #2d2d2d;
  }
  body {
    background-color: var(--bg-color) !important;
    color: var(--text-main) !important;
    font-family: 'D2Coding', 'Consolas', 'Fira Code', 'Courier New', monospace;
    line-height: 1.8;
    letter-spacing: 0.3px;
  }
  .portfolio-wrapper {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0;
    border: 1px solid var(--border);
    border-radius: 8px;
    overflow: hidden;
    margin-top: 2rem;
    margin-bottom: 4rem;
    box-shadow: 0 10px 30px rgba(0,0,0,0.5);
    background: var(--bg-color);
  }
  .editor-header {
    background: #333333;
    padding: 12px 15px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #1e1e1e;
  }
  .mac-buttons {
    display: flex;
    gap: 8px;
    margin-right: 20px;
  }
  .mac-btn {
    width: 12px;
    height: 12px;
    border-radius: 50%;
  }
  .mac-btn.close { background: #ff5f56; }
  .mac-btn.min { background: #ffbd2e; }
  .mac-btn.max { background: #27c93f; }
  
  .file-tabs {
    display: flex;
    background: var(--tab-inactive);
    border-bottom: 1px solid var(--border);
    overflow-x: auto;
  }
  .tab {
    padding: 10px 20px;
    color: var(--text-muted);
    background: var(--tab-inactive);
    border-right: 1px solid var(--border);
    cursor: pointer;
    text-decoration: none;
    font-size: 0.95rem;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: all 0.2s;
  }
  .tab.active {
    background: var(--tab-active);
    color: #ffffff;
    border-top: 2px solid var(--accent);
  }
  .tab:hover:not(.active) {
    background: #333;
    color: var(--text-main);
  }
  
  .editor-layout {
    display: flex;
    min-height: 80vh;
  }
  
  /* 사이드바 영역 완전 숨김 처리 */
  .sidebar, .docs-sidebar, aside {
    display: none !important;
  }
  .sidebar-title {
    font-size: 0.85rem;
    text-transform: uppercase;
    color: var(--text-muted);
    padding: 0 1.5rem;
    margin-bottom: 1rem;
    letter-spacing: 1px;
    font-weight: bold;
  }
  .toc-item {
    display: block;
    padding: 0.5rem 1.5rem;
    color: var(--text-main);
    text-decoration: none;
    font-size: 0.95rem;
    transition: background 0.2s;
  }
  .toc-item:hover {
    background: #2a2d2e;
    color: #ffffff;
  }
  .toc-item span.icon {
    color: var(--accent-keyword);
    margin-right: 10px;
    font-size: 1.1rem;
  }
  
  .editor-content {
    flex: 1;
    padding: 3rem 4rem;
    background: var(--bg-color);
    overflow-y: auto;
  }
  
  .section-container {
    margin-bottom: 5rem;
    position: relative;
  }
  .section-anchor {
    position: absolute;
    top: -60px;
  }
  
  h2.section-title {
    font-size: 1.8rem;
    font-weight: bold;
    color: var(--accent);
    margin-bottom: 2rem;
    border-bottom: 1px dashed var(--border);
    padding-bottom: 0.5rem;
  }
  h2.section-title::before {
    content: "def ";
    color: var(--accent-keyword);
  }
  h2.section-title::after {
    content: "():";
    color: var(--text-main);
  }
  
  .section-content h3 {
    font-size: 1.4rem;
    color: var(--accent-function);
    margin-top: 3rem;
    margin-bottom: 1.5rem;
  }
  .section-content h3::before {
    content: "class ";
    color: var(--accent-keyword);
  }
  .section-content h3::after {
    content: ":";
    color: var(--text-main);
  }
  
  .section-content h4 {
    font-size: 1.15rem;
    color: #4fc1ff;
    margin-top: 2.5rem;
    margin-bottom: 1rem;
  }
  .section-content h4::before {
    content: "# ";
    color: #6a9955;
  }
  
  .section-content p {
    margin-bottom: 1.2rem;
  }
  
  .section-content ul, .section-content ol {
    margin-bottom: 1.5rem;
    padding-left: 20px;
  }
  .section-content li {
    margin-bottom: 0.8rem;
  }
  
  .section-content code {
    background: rgba(255, 255, 255, 0.08);
    padding: 2px 6px;
    border-radius: 4px;
    color: #ce9178;
    font-family: inherit;
  }
  .section-content pre {
    background: #1e1e1e !important;
    border: 1px solid var(--border);
    border-left: 3px solid var(--accent);
    border-radius: 6px;
    padding: 1.5rem;
    overflow-x: auto;
    margin: 1.5rem 0 2.5rem 0;
  }
  .section-content pre code {
    background: transparent;
    padding: 0;
    color: var(--text-main);
  }
  
  .section-content table {
    width: 100%;
    border-collapse: collapse;
    margin: 2rem 0;
  }
  .section-content th, .section-content td {
    border: 1px solid var(--border);
    padding: 1rem;
    text-align: left;
  }
  .section-content th {
    background: #252526;
    color: var(--accent);
  }
  
  .section-content blockquote {
    border-left: 4px solid #6a9955;
    padding-left: 1.2rem;
    color: #6a9955;
    margin: 2rem 0;
    background: rgba(106, 153, 85, 0.05);
    padding: 1.2rem;
    border-radius: 0 6px 6px 0;
    font-style: italic;
  }
  
  hr {
    border: none;
    border-top: 1px solid var(--border);
    margin: 3rem 0;
  }
</style>

<div class="portfolio-wrapper">

  <!-- VS Code / IDE Header -->
  <div class="editor-header">
    <div class="mac-buttons">
      <div class="mac-btn close"></div>
      <div class="mac-btn min"></div>
      <div class="mac-btn max"></div>
    </div>
    <span style="color: var(--text-muted); font-size: 0.9rem; font-family: sans-serif;">python_core_summary.py - Portfolio IDE</span>
  </div>
  
  <!-- Editor Tabs (목차 버튼 역할) -->
  <div class="file-tabs">
    <a href="#01" class="tab active"><span style="color:#e34c26">📄</span> 01_intro.py</a>
    <a href="#02" class="tab"><span style="color:#f1e05a">📄</span> 02_variables.py</a>
    <a href="#03" class="tab"><span style="color:#569cd6">📄</span> 03_control_flow.py</a>
    <a href="#04" class="tab"><span style="color:#c586c0">📄</span> 04_functions.py</a>
    <a href="#05" class="tab"><span style="color:#4fc1ff">📄</span> 05_modules.py</a>
  </div>
  
  <div class="editor-layout">
    
    <!-- Main Editor Content -->
    <div class="editor-content" markdown="1">

<!-- Section 01 -->
<div class="section-container" markdown="1">
  <a id="01" class="section-anchor"></a>
  <h2 class="section-title">파이썬이란</h2>
  <div class="section-content" markdown="1">

1991년 네덜란드에서 귀도 반 로섬이 발표한 **인터프리터 언어**(소스 코드를 한 줄씩 해석하고 즉시 실행하여 결과를 바로 확인할 수 있는 언어)입니다. 

공동 작업과 유지보수가 편리하기 때문에 다양한 분야에서 널리 쓰입니다.

  </div>
</div>

<!-- Section 02 -->
<div class="section-container" markdown="1">
  <a id="02" class="section-anchor"></a>
  <h2 class="section-title">자료형과 변수</h2>
  <div class="section-content" markdown="1">

### 변수 (Variable)

* **정의**: 값을 저장하는 메모리 공간입니다.
* **특징**: 변수 이름(식별자)과 값을 할당하여 생성하며, 프로그램이 실행되는 동안 값이 바뀔 수 있습니다.

### 02-1 숫자형 (Number)

* **정수형 (int)**: 양의 정수, 음의 정수, 0
* **실수형 (float)**: 소수점이 포함된 숫자 (예: `-5.0`, `1.23`, `0.0`)
* **8진수 (octal)**: `0o` 또는 `0O`로 시작하는 수
* **16진수 (hexadecimal)**: `0x`로 시작하는 수

#### 연산자
* **사칙연산**: `+`, `-`, `*`, `/`
* **특수연산**: 제곱 (`**`), 나머지 (`%`), 몫 (`//`)
* **복합 대입 연산자**: `+=`, `-=`, `*=`, `/=`, `//=`, `%=`, `**=`

> 예: `a += 1`은 `a = a + 1`과 같습니다.

<hr>

### 02-2 문자열 (String, `str`)

문자, 단어 등으로 구성된 문자들의 집합입니다.

#### 문자열 생성 방법 (4가지)
1. 큰따옴표 사용: `"I'm a good boy"`
2. 작은따옴표 사용: `'Python'`
3. 큰따옴표 3개 사용: `"""그녀는 말했다. "나는 네가 좋아." """`
4. 작은따옴표 3개 사용: `'''Hello World'''`

#### 이스케이프 문자
프로그래밍할 때 사용할 수 있도록 미리 정의해 둔 특수 문자 조합입니다. 키보드의 원화 표시(`₩`) 키가 프로그램에서는 백슬래시(`\`)로 표현됩니다.

* `\n`: 줄바꿈
* `\t`: 탭(간격 띄우기)
* `\\`: 백슬래시 출력
* `\'`, `\"`: 따옴표 출력
* `\r`: 캐리지 리턴 (커서를 줄 맨 앞으로 이동)
* `\b`: 백스페이스

#### 문자열 연산 및 기능
* **더하기 (`+`)**: 문자열 합치기 (`'hi' + 'python'` $\rightarrow$ `'hipython'`)
* **곱하기 (`*`)**: 문자열 반복 (`'hi' * 2` $\rightarrow$ `'hihi'`)
* **길이 구하기 (`len()`)**: 문자열의 전체 길이를 반환합니다.
* **인덱싱 (Indexing)**: `0`번부터 시작하며, 특정 위치의 문자를 가리킵니다. (`-1`은 뒤에서 첫 번째 글자)
* **슬라이싱 (Slicing)**: `[시작번호:끝번호]` 구조로 문자열을 잘라냅니다. (끝번호는 포함되지 않음)

#### 주요 문자열 함수 (메서드)
* `.count(x)` : 문자 x의 개수 세기
* `'.'.join(시퀀스)` : 문자열 사이에 특정 문자 삽입
* `.upper()` / `.lower()` : 대문자 / 소문자 변환
* `.strip()` / `.lstrip()` / `.rstrip()` : 양쪽 / 왼쪽 / 오른쪽 공백 제거
* `.split()` : 공백이나 특정 기준 문자로 문자열 나누기 (결과는 리스트 형태)
* `.replace(A, B)` : 문자열 A를 B로 변경

#### 문자열 포메팅 (Formatting)
* `%d`: 정수 대입
* `%s`: 문자열 대입 (어떤 자료형이든 자동으로 변환되므로 편리함)
* `%f`: 부동 소수 대입

> 예: `"I eat %d grapes." % 5` $\rightarrow$ `'I eat 5 grapes.'`

<hr>

### 시퀀스 자료형 비교

| 자료형 | 기호 | 예시 | 특징 |
| :--- | :---: | :--- | :--- |
| **리스트 (List)** | `[]` | `[1, 2, 3]` | 순서 있음, 수정 가능 |
| **튜플 (Tuple)** | `()` | `(1, 2, 3)` | 순서 있음, 수정 불가능 |
| **문자열 (String)** | `''`, `""` | `'Hello'` | 순서 있음, 수정 불가능 |

<hr>

### 02-3 리스트 (List)

순서가 있고 언제든지 값을 변경할 수 있는 자료형입니다.

* **생성**: `my_list = [10, 20, 30]`, 빈 리스트는 `my_list = []`
* **리스트 함수**:
  * 수정: 인덱싱으로 직접 접근 후 대입 (`a[2] = 5`)
  * 삭제: `del a[0]`
  * `.append(x)`: 맨 뒤에 요소 추가 (리스트 자체를 추가할 수도 있음)
  * `.sort()`: 오름차순 정렬
  * `.reverse()`: 리스트 뒤집기
  * `.insert(인덱스, 값)`: 원하는 위치에 값 삽입
  * `.remove(값)`: 첫 번째로 나오는 특정 값 제거
  * `.pop(인덱스)`: 해당 위치의 요소를 반환하고 삭제 (인덱스 생략 시 맨 뒤 요소)
  * `.extend(리스트)`: 기존 리스트에 다른 리스트를 더해 확장

<hr>

### 02-4 튜플 (Tuple)

리스트와 유사하지만, 값을 변경하거나 삭제할 수 없는 자료형입니다.

* **특징**:
  * 소(원)괄호 `()`를 사용합니다.
  * 요소를 1개만 가질 때는 반드시 뒤에 쉼표를 붙여야 합니다 (예: `my_tuple = (10,)`).
* **불가능한 작업**: 값의 수정 및 삭제가 불가능하므로 `.sort()`, `.insert()`, `.remove()`, `.pop()` 등의 메서드는 사용할 수 없습니다.

<hr>

### 02-5 딕셔너리 (Dictionary)

Key(키)와 Value(값)의 쌍을 데이터로 저장하는 연관 배열 구조입니다.

* **특징**: 순서가 없으며, **Key는 고유해야 합니다.** (Key가 중복되면 나머지 값은 무시됨)
* **기본 문법**: `{Key1: Value1, Key2: Value2, ...}`
* **주요 메서드**:
  * `.keys()`: Key 리스트 얻기
  * `.values()`: Value 리스트 얻기
  * `.items()`: Key와 Value의 쌍(Tuple) 리스트 얻기
  * `.clear()`: 딕셔너리 안의 모든 쌍 지우기
  * `.get(Key)`: Key를 통해 Value 안전하게 얻기

<hr>

### 02-6 집합 자료형 (Set)

`set()` 함수나 중괄호 `{}`를 사용하여 만들며, 수학의 집합과 동일한 개념입니다.

* **특징**:
  1. 중복을 허용하지 않습니다.
  2. 순서가 없습니다 (Unordered $\rightarrow$ 인덱싱 불가능, 리스트나 튜플로 변환 후 접근해야 함).
* **집합 연산**:
  * 교집합: `s1 & s2` 또는 `s1.intersection(s2)`
  * 합집합: `s1 | s2` 또는 `s1.union(s2)`
  * 차집합: `s1 - s2` 또는 `s1.difference(s2)`
* **관련 함수**:
  * `.add(값)`: 값 1개 추가
  * `.update([값1, 값2])`: 값 여러 개 추가
  * `.remove(값)` / `.discard(값)`: 특정 값 제거
  * `.clear()`: 모든 값 제거

<hr>

### 02-7 불 자료형 (Boolean)

참(`True`)과 거짓(`False`)을 나타내는 자료형입니다. **반드시 첫 글자는 대문자로 작성해야 합니다.**

* **참과 거짓의 규칙**:
  * 값이 비어 있거나 (`""`, `[]`, `()`, `{}`), 숫자 `0`, 또는 객체 `None`은 **거짓(`False`)**으로 취급됩니다.
  * 비어있지 않은 모든 값은 **참(`True`)**입니다.
* **비교 연산자**: `==`, `!=`, `<`, `>`, `>=`, `<=`
* **논리 연산자**:
  * `and`: 둘 다 참일 때만 `True`
  * `or`: 하나라도 참이면 `True`
  * `not`: 참과 거짓을 반대로 변경

<hr>

### 02-8 변수와 명명 규칙

* 파이썬에서 모든 자료형(데이터)은 **객체**이며, 변수는 객체가 저장된 메모리의 주소를 가리킵니다.
* **리스트 복사**: 리스트를 그냥 대입하면 주소만 복사되므로 별도의 객체로 복사하려면 슬라이싱 `[:]` 또는 `from copy import copy`를 사용해야 합니다.

#### 변수명 작성 규칙
* 영문자, 숫자, 언더스코어(`_`)만 사용 가능합니다.
* 숫자로 시작할 수 없습니다.
* 대소문자를 엄격하게 구분합니다.
* 파이썬 예약어(예: `False`, `None`, `True`, `and`, `break`, `class`, `def`, `if`, `else` 등)는 사용할 수 없습니다.
* **권장사항**: 의미가 명확해야 하며, 단어 사이를 언더스코어로 연결하는 **snake_case** 스타일을 권장합니다.

  </div>
</div>

<!-- Section 03 -->
<div class="section-container" markdown="1">
  <a id="03" class="section-anchor"></a>
  <h2 class="section-title">제어문</h2>
  <div class="section-content" markdown="1">

### 03-1 if 조건문

주어진 조건식이 참인지 거짓인지 판단하여 흐름을 제어합니다.

* **기본 구조**:
  ```python
  if 조건문:
      수행할_문장1
  elif 조건문2:
      수행할_문장A
  else:
      수행할_문장X
  ```

> 장 제어문: "나는 year = 2024 이렇게 만들고 싶어"

* **if 조건이 참인 경우**: 
  ```python
  if score >= 90: 
      print("a")
  ```

* **else if가 거짓인 경우**: 
  ```python
  elif score >= 80: 
      print("b")
  ```

* **elif (else if)**: 앞선 if가 거짓일 때 다른 조건을 평가합니다.
  ```python
  elif score >= 70: 
      print("c")
  ```

#### 예시
사용자에게 문자를 입력받아 입력받은 문자가 `a`인지 판별합니다.

if 문 들여쓰기를 하면 if else문에 포함된 문장이 되지만, 들여쓰기를 안하고 if else랑 같은 선상에 쓰면 관계 없는 독립적인 코드가 되어 그냥 print 됩니다.

#### 3-1 if 문 상세 설명

주어진 조건을 판단한 후 그 상황에 맞게 처리해야 할 경우가 생겼을 때 사용합니다.

```python
money = True

if money:
    print("택시")
else:
    print("다리")
```

**[흐름도 시각화]**
1. 시작 
2. `money = True`
3. 조건 참 (T) 
   * 참 $\rightarrow$ "택시" 출력
   * 거짓 $\rightarrow$ "다리" 출력
4. 종료

#### if else 조건문 구조

```python
if 조건문:
    수행문장1
else:
    수행문장A
```
*(주의: 들여쓰기를 꼭 해야 문법 오류가 발생하지 않습니다!)*

#### 비교연산자
* `x < y`: x가 y보다 작다.
* `x > y`: x가 y보다 크다.
* `x == y`: x와 y가 같다.
* `x != y`: x와 y가 같지 않다.
* `x >= y`: x가 y보다 크거나 같다.
* `x <= y`: x가 y보다 작거나 같다.

#### and / or / not
* `x or y`: x와 y 둘 중 하나만 참이어도 참이다.
* `x and y`: x와 y 모두 참이어야 참이다.
* `not x`: x가 거짓이면 참이다.

#### in 연산자
문자열 리스트 튜플 등 시퀀스 자료형에 원하는 원소가 있는지 확인하는 연산자이며 있으면 true, 없으면 false 이다.

* `x in 리스트` / `x not in 리스트`
* `x in 튜플` / `x not in 튜플`
* `x in 문자열` / `x not in 문자열`

#### not in
있으면 false 없으면 true
* `1 in [9, 1, 3]` $\rightarrow$ `True`
* `1 not in [9, 1, 2]` $\rightarrow$ `False`

#### elif 상세
`if`와 `else` 만으로는 다양한 조건을 판단하기 어렵기 때문에 `elif`를 사용합니다.
```python
if 조건문: 
    수행문장1 
elif 조건문: 
    수행문장1 
else:
    수행문장
```

<hr>

### 03-2 While 반복문 

주어진 조건이 참인 동안 특정 코드를 반복적으로 실행합니다. (들여 쓰기 중요)

```python
while 조건문:
    수행문장
```
조건문이 참인 동안 `while` 문에 속한 문장들을 반복해서 수행합니다.

#### 강제로 빠져나가기
`break`: while 문을 조건과 관계없이 강제로 탈출하는 명령어.

#### 맨처음으로 돌아가기
`continue`: while 문을 빠져나가지 않고, 아래의 문장을 무시하고 처음(조건식)으로 돌아가게 하는 코드입니다. 조건문과 `continue`를 같이 연결해주면 무시하고 다음 루프부터 실행합니다.

#### 무한루프
무한히 반복합니다. 빠져나가는 방법은 `ctrl + c` 입니다.

#### while else 문
정상적으로 종료되었을 때 (`break`로 빠져나가지 않았을 때) `else` 절이 실행됩니다.
`break` 문으로 while 문을 빠져나가면 `else` 절은 실행되지 않습니다.

#### 중첩된 while 문
* while 문 안에 또 다른 while 문을 사용할 수 있습니다.
* 중첩된 while 문에서 `break`나 `continue`를 사용할 때는 가장 가까운 while 문에만 영향을 준다는 점에 주의해야 합니다.

**[코드 예시]**

```python
num = 1
while num <= 5:
    print(num)
    num += 1

print("while문이 종료된후 num은 %d 입니다" % num)
```

1. **첫번째**: `num = 1` $\rightarrow$ `1 <= 5` (참) $\rightarrow$ `print(1)` 실행 $\rightarrow$ `num(1) + 1 = 2`
2. **두번째**: `num = 2` $\rightarrow$ `2 <= 5` (참) $\rightarrow$ `print(2)` 실행 $\rightarrow$ `num(2) + 1 = 3`
3. **세번째**: `num = 3` $\rightarrow$ `3 <= 5` (참) $\rightarrow$ `print(3)` 실행 $\rightarrow$ `num(3) + 1 = 4`
4. **네번째**: `num = 4` $\rightarrow$ `4 <= 5` (참) $\rightarrow$ `print(4)` 실행 $\rightarrow$ `num(4) + 1 = 5`
5. **다섯번째**: `num = 5` $\rightarrow$ `5 <= 5` (참) $\rightarrow$ `print(5)` 실행 $\rightarrow$ `num(5) + 1 = 6`
6. **여섯번째**: `num = 6` $\rightarrow$ `6 <= 5` (거짓) $\rightarrow$ 루프 종료

<hr>

### 03-3 for 반복문

주어진 시퀀스의 요소에 대해 특정 코드를 여러 번 실행합니다.
`while` 문과 비슷하게 진행되지만 더 직관적입니다.

> 1부터 4까지의 숫자를 출력: `for i in [1,2,3,4,5]: print(i)`

```python
for 변수 in 리스트(또는 튜플, 문자열):
    print(변수) 
```
리스트나 튜플, 문자열의 첫 번째 요소부터 마지막 요소까지 차례로 변수에 대입되어 `print`가 실행됩니다.

#### for 문과 함께 쓰이는 문장

* **continue 문**: for 문 안의 문장을 수행하는 도중 `continue` 문을 만나면 for 문의 처음으로 돌아간다.
* **range 함수**: 숫자 리스트를 자동으로 만들어주는 함수. 
  `range(시작번호, 마지막번호, step)` 
  (step은 생략 가능하며, 마지막 번호는 미포함한다.)
* **break**: for 문을 강제로 빠져나가고 싶을 때 사용한다. (while 문과 비슷하다)
  *(참고: `num += 1`은 `num = num + 1`과 동일)*
* **else 절**: for 문이 정상적으로 종료되었을 때 (`break`로 빠져나가지 않았을 때) `else` 절이 실행된다.

  </div>
</div>

<!-- Section 04 -->
<div class="section-container" markdown="1">
  <a id="04" class="section-anchor"></a>
  <h2 class="section-title">함수 function</h2>
  <div class="section-content" markdown="1">

특정한 기능. 입력값에 따라 기능에 맞는 출력값을 내어 놓는 것입니다. 
반복되는 부분이 있을 경우에 사용하기 좋습니다.

#### 구조
```python
def 함수_이름(매개변수):
    수행문장
    return 반환값
```
* **def**: 함수 만들 때 사용하는 예약어
* **함수이름**: 만드는 사람이 임의로 정할 수 있다. 
* **매개변수**: 함수의 입력으로 전달되는 값을 받는 변수 
* **return**: 결과값을 반환하는 명령어

**[add 함수 예시]**
```python
def add(a, b):
    return a + b

a = 10 
b = 5 
c = add(a, b) 
print(c) # >> 15
```

for, while 처럼 특정한 기능을 하는 코드 블록들을 미리 정의하고, 내용들을 입력하면 바로 구할 수 있습니다. 내부의 기능을 압축하고 보완해서 사용의 편리를 위함입니다.

```python
def add(a, b): # 함수 내부에서 a, b 변수를 사용. 외부에서 값을 가져와 사용한다.
    c = a + b
    return c   # 값을 외부로 다시 반환 (지우면 None이라고 뜬다)
```

함수는 기능이랑 사용법을 알면 누구든 언제든지 불러와서 사용이 가능합니다.

#### 매개변수와 인수
* **매개변수 (Parameter)**: 매개가 되는 임시 변수.
* **인수 (Argument)**: 함수를 호출할 때 전달받는 실제 입력값.
(위 함수에서 `a`, `b`는 매개변수이고, 호출할 때 넘기는 `10`과 `5`는 인수이다.)

#### 변수 종류
* **지역변수**: 함수 내부에서 만들어진 애들
* **전역변수**: 프로그램 어디서든 호출 가능
(함수 선언은 `def` 키워드를 사용하여 선언한다.)

#### 입력값과 반환값
> 입력값 $\rightarrow$ 함수 $\rightarrow$ 리턴값

* **일반적인 함수**: 입력값이 있고 반환값이 있는 함수.
* **입력값이 없는 함수**:
  ```python
  def 함수이름(): 
      return '반환하고 싶은 값'
  ```
  사용 시: `반환받을_변수 = 함수이름()` $\rightarrow$ `print(반환받을_변수)`
* **반환값이 없는 함수**: 반환값이 없다는 뜻으로 `None`을 반환한다.
* **입력 값도, 반환값도 없는 함수**: 단순 수행 목적으로 쓰인다.

#### 매개변수를 지정하여 호출하기
빼기의 예: 
```python
def sub(a, b): 
    return a - b

result = sub(a=10, b=5) # a에 10, b에 5를 전달 >> 5
result = sub(b=4, a=10) # b에 4, a에 10을 전달 >> 6
```
장점: 매개변수 이름을 지정하면 순서에 상관없이 사용할 수 있다.

#### 키워드 매개변수 
`kwargs` = keyword arguments 의 약자.
키워드 = 값 형태로, 매개변수 앞에 별 2개(`**`)를 붙여야 한다.

#### 초깃값 미리 설정
매개변수에 초깃값을 미리 설정해주는 경우이다.
```python
def hi_me(name, age=27):
    print("저의 이름은 %s 입니다." % name) 
    print("나이는 %d살입니다." % age) 

hi_me("김영훈") # 나이를 생략해도 초깃값 27이 적용된다.
```

#### 함수 안에서 선언한 변수의 효력 범위
함수 안에서 사용하는 매개변수는 함수 안에서만 사용하는 '함수만의 변수'이다.
입력값을 전달받는 매개변수 `a`는 함수 안에서만 사용하는 변수일 뿐, 함수 밖의 변수 `a`와는 전혀 상관없다.

**함수 안에서 함수 밖의 변수를 변경하는 방법 2가지**:
1. `return`을 사용한다.
2. `global` 명령어를 사용한다.

(함수는 독립적으로 존재하는 것이 좋고, 외부 변수에 종속적인 함수는 좋은 함수가 아니기 때문에 가급적 `return` 방법을 사용하는 게 좋다.)

#### lambda 예약어 
`def`와 동일한 역할을 한다. 코드를 한 줄로 간결하게 만들 때 사용한다. `def`를 사용할 수 없는 곳에 주로 쓰인다.
```python
함수_이름 = lambda 매개변수1, 매개변수2: 매개변수1 + 매개변수2
```

#### docstring (문서화)
함수에 대한 설명을 문서화하는 방법이다.
함수 내부 첫 번째 줄에 삼중 따옴표(`"""`)로 둘러싼 문자열을 작성하면 된다.

#### 매서드 (method)
특정 객체(클래스의 인스턴스)에 종속되어 사용되며, 객체의 상태를 변경하거나 동작을 수행한다.
객체 이름 뒤에 마침표(`.`)를 붙이고 이름을 써서 호출한다.
(예: `list.append('a')`)

<hr>

### 04-2 사용자의 입출력

#### 사용자 입력 (`input`)
사용자가 키보드로 입력한 모든 것을 문자열로 저장한다.
* 방법: `input("안내_문구")`

**입력값을 숫자로 변환**
`input`은 문자열을 반환하므로 숫자 계산을 위해서는 변환해야 한다.
* 정수: `변수 = int(input())`
* 실수: `변수 = float(input())`
(자료형 확인하기: `print(type(변수))`)

#### 출력 (`print`)
데이터를 출력하는 것이다.

* **큰따옴표로 둘러싸인 문자열은 `+` 연산과 같다**:
  `print("i" "like" "grape")` = `print("i" + "like" + "grape")`
* **문자열 띄어쓰기는 쉼표(`,`)**:
  `print("i", "like", "grape")`
  `,(콤마)`를 사용하면 공백이 자동으로 추가된다.
* **`sep`를 사용하여 구분자 설정하기**:
  `print("i", "like", "grape", sep=" yum ")` $\rightarrow$ `i yum like yum grape`

#### 함수와 메서드의 장단점
* **장점**: 코드 재사용성이 높아 개발 시간 단축, 가독성 및 유지보수 향상, 복잡성 감소 및 관리가 용이하다.
* **단점**: 너무 많아지면 코드 관리가 어려움, 오류 시 전체 프로그램에 영향을 미칠 수 있음, 복잡한 함수는 이해하기 어려워지고 디버깅이 어렵다.

  </div>
</div>

<!-- Section 05 -->
<div class="section-container" markdown="1">
  <a id="05" class="section-anchor"></a>
  <h2 class="section-title">모듈 및 패키지</h2>
  <div class="section-content" markdown="1">

### 05-2 모듈 (Module)

관련된 함수, 클래스, 변수 등을 하나의 파이썬 파일로 모아 놓은 것이다. 
파이썬 프로그램에서 외부 기능으로 불러올 수 있다.

* **만들기**: 그냥 코드를 작성하고 확장자 `.py`로 저장하면 그게 모듈이다.
* **불러오기**:
  ```python
  import 모듈이름
  from 모듈이름 import 모듈함수
  ```
  
  (2개 이상의 함수 불러오기: 쉼표로 나누기)
  ```python
  from 모듈이름 import 모듈함수1, 모듈함수2
  ```
  
  (`*` 문자를 사용하여 모든 것 불러오기)
  ```python
  from 모듈이름 import *
  ```

독립적인 모듈(일반적으로 많이 만든다)은 다른 모듈에 영향을 미치지 않고 자유롭게 개발 및 수정이 가능하다.

<hr>

### 05-3 패키지 (Package)

관련된 여러 모듈을 하나의 디렉터리(계층적)로 모아 놓은 것이다.
`__init__.py` 파일이 디렉터리 안에 포함되어 있어야 패키지로 정상 인식된다.
패키지를 사용하면 코드의 구조화와 조직화가 용이해져 대규모 프로젝트 관리에 좋다.

  </div>
</div>

</div>
</div>
</div>
