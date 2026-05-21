---
layout: docs
title: Python Developer Documentation
---

<style>
  :root {
    --ide-bg: #1e1e1e;
    --ide-topbar: #252526;
    --ide-tab-active: #1e1e1e;
    --ide-tab-inactive: #2d2d2d;
    --ide-text: #cccccc;
    --ide-keyword: #569cd6;
    --ide-string: #ce9178;
    --ide-comment: #6a9955;
    --ide-number: #b5cea8;
    --ide-function: #dcdcaa;
    --ide-variable: #9cdcfe;
    --border: #333333;
  }
  body {
    background-color: #000000 !important;
    color: var(--ide-text) !important;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  .ide-window {
    max-width: 1400px;
    width: 100%;
    margin: 2rem auto;
    background: var(--ide-bg);
    border: 1px solid var(--border);
    border-radius: 14px;
    overflow: hidden;
    box-shadow: 0 15px 35px rgba(255,255,255,0.03);
    backdrop-filter: blur(10px);
  }
  .ide-titlebar {
    background: var(--ide-topbar);
    height: 40px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid var(--border);
    padding: 0 14px;
  }
  .ide-dots {
    display: flex;
    gap: 8px;
    margin-left: 4px;
    margin-right: 18px;
  }
  .ide-dot {
    width: 12px; height: 12px; border-radius: 50%;
  }
  .dot-red { background: #ff5f56; }
  .dot-yellow { background: #ffbd2e; }
  .dot-green { background: #27c93f; }
  .ide-tabs {
    display: flex;
    height: 100%;
    overflow-x: auto;
  }
  .ide-tab {
    background: var(--ide-tab-inactive);
    color: #969696;
    padding: 0 20px;
    height: 95%;
    display: flex;
    align-items: center;
    font-size: 14px;
    font-family: Consolas, 'Courier New', monospace;
    border-right: 1px solid var(--border);
    position: relative;
    cursor: pointer;
    white-space: nowrap;
    transition: background 0.15s, color 0.15s;
    text-decoration: none;
  }
  .ide-tab:hover {
    background: #37373d;
    color: #ffffff;

    transition:
    background 0.2s ease,
    color 0.2s ease;
  }
  .ide-tab.active {
    background: var(--ide-tab-active);
    color: #ffffff;

    box-shadow:
    inset 0 -2px 0 #4fc3f7,
    0 0 12px rgba(79,195,247,0.15);

    font-weight: 600;
  }
  .ide-tab.active::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 2px;
    background: #007acc;
  }
  .ide-tab .tab-icon {
    margin-right: 6px;
    font-size: 14px;
  }
  .py-icon { color: #519aba; }

  /* Scroll to Top Button */
  .scroll-top-btn {
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 48px;
    height: 48px;
    background: #007acc;
    color: #ffffff;
    border: none;
    border-radius: 12px;
    font-size: 22px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 16px rgba(0,122,204,0.4);
    transition: all 0.25s ease;
    z-index: 9999;
    opacity: 0.85;
    text-decoration: none;
  }
  .scroll-top-btn:hover {
    background: #1f6feb;
    transform: translateY(-3px);
    opacity: 1;
    box-shadow: 0 6px 20px rgba(31,111,235,0.5);
  }
  .ide-breadcrumb {
    background: #1e1e1e;
    padding: 5px 15px;
    font-size: 13px;
    font-family: Consolas, 'Courier New', monospace;
    color: #858585;
    border-bottom: 1px solid var(--border);
  }
  .ide-breadcrumb span {
    color: var(--ide-text);
  }
  .ide-content {
    display: flex;
  }
  .ide-sidebar {
    width: 50px;
    background: var(--ide-topbar);
    border-right: 1px solid var(--border);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 15px;
    gap: 20px;
  }
  .sidebar-icon {
    width: 24px;
    height: 24px;
    opacity: 0.5;
    cursor: pointer;
    transition: 0.2s;
  }
  .sidebar-icon:hover { opacity: 1; }
  .sidebar-icon.active { opacity: 1; border-left: 2px solid #ffffff; padding-left: 2px; }
  
  .ide-editor {
    flex: 1;
    padding: 2rem 3rem;
    line-height: 1.8;
    font-size: 15px;
    font-family: 'Inter', -apple-system, sans-serif;
    color: #d4d4d4;
  }
  
  /* Typography inside IDE */
  .ide-editor h2 {
    color: var(--ide-keyword);
    font-family: Consolas, 'Courier New', monospace;
    font-size: 1.8rem;
    margin-top: 3rem;
    margin-bottom: 1.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid #333;
  }
  .ide-editor h2::before {
    content: 'class ';
    color: var(--ide-keyword);
    opacity: 0.5;
  }
  .ide-editor h3 {
    color: var(--ide-function);
    font-family: Consolas, 'Courier New', monospace;
    font-size: 1.4rem;
    margin-top: 2.5rem;
    margin-bottom: 1rem;
  }
  .ide-editor h3::before {
    content: 'def ';
    color: var(--ide-keyword);
    opacity: 0.5;
  }
  .ide-editor h4 {
    color: var(--ide-string);
    font-family: Consolas, 'Courier New', monospace;
    font-size: 1.1rem;
    margin-top: 2rem;
    margin-bottom: 0.8rem;
  }
  .ide-editor p {
    margin-bottom: 1.5rem;
    word-break: keep-all;
  }
  .ide-editor ul, .ide-editor ol {
    margin-bottom: 1.5rem;
    padding-left: 1.5rem;
  }
  .ide-editor li {
    margin-bottom: 0.8rem;
    word-break: keep-all;
  }
  
  /* Inline code & Blocks */
  .ide-editor code {
    background: rgba(255, 255, 255, 0.08);
    color: var(--ide-variable);
    padding: 0.2rem 0.4rem;
    border-radius: 4px;
    font-family: Consolas, 'Courier New', monospace;
    font-size: 0.9em;
  }
  .ide-editor pre {
    background: #000000 !important;
    border: 1px solid #333;
    border-radius: 6px;
    padding: 1.2rem;
    margin: 1.5rem 0;
    overflow-x: auto;
  }
  .ide-editor pre code {
    background: transparent;
    padding: 0;
    color: #e0e0e0;
  }
  
  /* Blockquote as Comments */
  .ide-editor blockquote {
    border-left: 4px solid var(--ide-comment);
    margin: 1.5rem 0;
    padding: 1rem 1.5rem;
    background: rgba(106, 153, 85, 0.1);
    color: var(--ide-comment);
    font-style: italic;
    border-radius: 0 6px 6px 0;
  }
  
  /* Tables */
  .ide-editor table {
    width: 100%;
    border-collapse: collapse;
    margin: 2rem 0;
    font-family: Consolas, 'Courier New', monospace;
    font-size: 0.9em;
  }
  .ide-editor th, .ide-editor td {
    border: 1px solid #444;
    padding: 1rem;
    text-align: left;
  }
  .ide-editor th {
    background: #252526;
    color: var(--ide-keyword);
  }

  /* TOC (Explorer) style */
  .toc-container {
    background: #252526;
    border: 1px solid #333;
    border-radius: 8px;
    padding: 1.5rem;
    margin-bottom: 3rem;
  }
  .toc-title {
    font-family: Consolas, 'Courier New', monospace;
    color: var(--ide-text);
    font-size: 1.1rem;
    margin-bottom: 1.2rem;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  .toc-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }
  .toc-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: #333;
    color: var(--ide-function);
    width: 48px;
    height: 48px;
    border-radius: 6px;
    text-decoration: none;
    font-family: Consolas, 'Courier New', monospace;
    font-size: 1.2rem;
    font-weight: bold;
    border: 1px solid #444;
    transition: 0.2s ease;
  }
  .toc-btn:hover {
    background: #094771;
    color: #ffffff;
    border-color: #007acc;
    transform: translateY(-2px);
  }
  .toc-btn::before {
    content: '#';
    opacity: 0.5;
    margin-right: 2px;
  }
</style>

<div id="top"></div>
<div class="ide-window">

  <!-- IDE Top Bar -->
  <div class="ide-titlebar">
    <div class="ide-dots">
      <div class="ide-dot dot-red"></div>
      <div class="ide-dot dot-yellow"></div>
      <div class="ide-dot dot-green"></div>
    </div>
    <div class="ide-tabs">
      <a href="#01" class="ide-tab active">
        <span class="tab-icon py-icon">&#9998;</span> python.py
      </a>
      <a href="#02" class="ide-tab">
        <span class="tab-icon py-icon">&#9998;</span> data.py
      </a>
      <a href="#03" class="ide-tab">
        <span class="tab-icon py-icon">&#9998;</span> if.py
      </a>
      <a href="#04" class="ide-tab">
        <span class="tab-icon py-icon">&#9998;</span> function.py
      </a>
      <a href="#05" class="ide-tab">
        <span class="tab-icon py-icon">&#9998;</span> module.py
      </a>
    </div>
  </div>
  
  <!-- IDE Breadcrumb -->
  <div class="ide-breadcrumb">
    workspace > src > <span>python.py</span>
  </div>

  <div class="ide-content">
  
    <!-- IDE Sidebar -->
    <div class="ide-sidebar">
      <!-- Document icon -->
      <svg class="sidebar-icon active" viewBox="0 0 24 24" fill="#fff"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
      <!-- Search icon -->
      <svg class="sidebar-icon" viewBox="0 0 24 24" fill="#fff"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
      <!-- Git icon -->
      <svg class="sidebar-icon" viewBox="0 0 24 24" fill="#fff"><path d="M19 8h-2v3h-3v2h3v3h2v-3h3v-2h-3zM7 8H5v8h2V8zm0-4H5v2h2V4zm0 12H5v2h2v-2zm4-8h-2v8h2V8zm0-4h-2v2h2V4zm0 12h-2v2h2v-2z"/></svg>
    </div>

    <!-- IDE Editor Content -->
    <div class="ide-editor" markdown="1">

<div class="toc-container">
  <div class="toc-title">EXPLORER: OUTLINE</div>
  <div class="toc-buttons">
    <a href="#01" class="toc-btn">01</a>
    <a href="#02" class="toc-btn">02</a>
    <a href="#03" class="toc-btn">03</a>
    <a href="#04" class="toc-btn">04</a>
    <a href="#05" class="toc-btn">05</a>
  </div>
</div>

<a id="01"></a>

## 01. 파이썬이란?

1991년 네덜란드에서 귀도 반 로섬이 발표한 **인터프리터 언어**입니다. 

> 인터프리터 언어란? 소스 코드를 한 줄씩 해석하고 즉시 실행하여 결과를 바로 확인할 수 있는 언어를 말합니다.

공동 작업과 유지보수가 편리하기 때문에 다양한 분야에서 널리 쓰이고 있습니다.

---

<a id="02"></a>

## 02. 자료형과 변수

### 변수 (Variable)

* **정의**: 값을 저장하는 메모리 공간입니다.
* **특징**: 변수 이름(식별자)과 값을 할당하여 생성하며, 프로그램이 실행되는 동안 값이 바뀔 수 있습니다.


### 02-1. 숫자형 (Number)

* **정수형 (`int`)**: 양의 정수, 음의 정수, 0
* **실수형 (`float`)**: 소수점이 포함된 숫자 (예: `-5.0`, `1.23`, `0.0`)
* **8진수 (octal)**: `0o` 또는 `0O`로 시작하는 수
* **16진수 (hexadecimal)**: `0x`로 시작하는 수

#### 연산자

* **사칙연산**: `+`, `-`, `*`, `/`
* **특수연산**: 제곱 (`**`), 나머지 (`%`), 몫 (`//`)
* **복합 대입 연산자**: `+=`, `-=`, `*=`, `/=`, `//=`, `%=`, `**=`
  > 예: `a += 1`은 `a = a + 1`과 완벽히 같습니다.


### 02-2. 문자열 (String, `str`)

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


### 시퀀스 자료형 비교

| 자료형 | 기호 | 예시 | 특징 |
| :--- | :---: | :--- | :--- |
| **리스트 (List)** | `[]` | `[1, 2, 3]` | 순서 있음, 수정 가능 |
| **튜플 (Tuple)** | `()` | `(1, 2, 3)` | 순서 있음, 수정 불가능 |
| **문자열 (String)** | `''`, `""` | `'Hello'` | 순서 있음, 수정 불가능 |


### 02-3. 리스트 (List)

순서가 있고 언제든지 값을 변경할 수 있는 자료형입니다.

* **생성**: `my_list = [10, 20, 30]`, 빈 리스트는 `my_list = []`
* **리스트 함수**:
  * **수정**: 인덱싱으로 직접 접근 후 대입 (`a[2] = 5`)
  * **삭제**: `del a[0]`
  * `.append(x)`: 맨 뒤에 요소 추가 (리스트 자체를 추가할 수도 있음)
  * `.sort()`: 오름차순 정렬
  * `.reverse()`: 리스트 뒤집기
  * `.insert(인덱스, 값)`: 원하는 위치에 값 삽입
  * `.remove(값)`: 첫 번째로 나오는 특정 값 제거
  * `.pop(인덱스)`: 해당 위치의 요소를 반환하고 삭제 (인덱스 생략 시 맨 뒤 요소)
  * `.extend(리스트)`: 기존 리스트에 다른 리스트를 더해 확장


### 02-4. 튜플 (Tuple)

리스트와 유사하지만, 값을 변경하거나 삭제할 수 없는 자료형입니다.

* **특징**:
  * 소(원)괄호 `()`를 사용합니다.
  * 요소를 1개만 가질 때는 반드시 뒤에 쉼표를 붙여야 합니다 (예: `my_tuple = (10,)`).
* **불가능한 작업**: 
  * 값의 수정 및 삭제가 불가능하므로 `.sort()`, `.insert()`, `.remove()`, `.pop()` 등의 메서드는 사용할 수 없습니다.


### 02-5. 딕셔너리 (Dictionary)

Key(키)와 Value(값)의 쌍을 데이터로 저장하는 연관 배열 구조입니다.

* **특징**: 순서가 없으며, **Key는 고유해야 합니다.** (Key가 중복되면 나머지 값은 무시됨)
* **기본 문법**: `{Key1: Value1, Key2: Value2, ...}`
* **주요 메서드**:
  * `.keys()`: Key 리스트 얻기
  * `.values()`: Value 리스트 얻기
  * `.items()`: Key와 Value의 쌍(Tuple) 리스트 얻기
  * `.clear()`: 딕셔너리 안의 모든 쌍 지우기
  * `.get(Key)`: Key를 통해 Value 안전하게 얻기


### 02-6. 집합 자료형 (Set)

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


### 02-7. 불 자료형 (Boolean)

참(`True`)과 거짓(`False`)을 나타내는 자료형입니다. **반드시 첫 글자는 대문자로 작성해야 합니다.**

* **참과 거짓의 규칙**:
  * 값이 비어 있거나 (`""`, `[]`, `()`, `{}`), 숫자 `0`, 또는 객체 `None`은 **거짓(`False`)**으로 취급됩니다.
  * 비어있지 않은 모든 값은 **참(`True`)**입니다.
* **비교 연산자**: `==`, `!=`, `<`, `>`, `>=`, `<=`
* **논리 연산자**:
  * `and`: 둘 다 참일 때만 `True`
  * `or`: 하나라도 참이면 `True`
  * `not`: 참과 거짓을 반대로 변경


### 02-8. 변수와 명명 규칙

* 파이썬에서 모든 자료형(데이터)은 **객체**이며, 변수는 객체가 저장된 메모리의 주소를 가리킵니다.
* **리스트 복사**: 리스트를 그냥 대입하면 주소만 복사되므로 별도의 객체로 복사하려면 슬라이싱 `[:]` 또는 `from copy import copy`를 사용해야 합니다.

#### 변수명 작성 규칙

* 영문자, 숫자, 언더스코어(`_`)만 사용 가능합니다.
* 숫자로 시작할 수 없습니다.
* 대소문자를 엄격하게 구분합니다.
* 파이썬 예약어(예: `False`, `None`, `True`, `and`, `break`, `class`, `def`, `if`, `else` 등)는 사용할 수 없습니다.
* **권장사항**: 의미가 명확해야 하며, 단어 사이를 언더스코어로 연결하는 **snake_case** 스타일을 권장합니다.

---

<a id="03"></a>

## 03. 제어문

### 03-1. if 조건문

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

#### 조건문 작성 예시 및 원리

"나는 `year = 2024` 이렇게 만들고 싶어"

* `if` 조건이 참인 경우 (예: `if score >= 90: print("A")`)
* `elif` `if`가 거짓이고 다른 조건을 평가할 때 (예: `elif score >= 80: print("B")`)
* `else` 위 조건이 모두 거짓인 경우 (예: `else: print("C")`)

**예시**: 사용자에게 문자를 입력받아 입력받은 문자가 'a'인지 판별하기

> **주의!** `if` 문은 들여쓰기가 필수입니다.  
> 들여쓰기 하지 않고 `if`, `else`와 같은 선상에 쓰면 조건문과 관계없는 별개의 문장으로 인식되어 그냥 `print`가 실행되어 버립니다.


#### 3-1 if 문 상세 구조

주어진 조건을 판단한 후 그 상황에 맞게 처리해야 할 경우가 생겼을 때 사용합니다.

```python
money = True

if money:
    print("택시")
else:
    print("다리")
```

**실행 흐름:**
* 시작 $\rightarrow$ `money = True` $\rightarrow$ 참(True) $\rightarrow$ "택시" 출력 $\rightarrow$ 종료

#### 비교 연산자

* `x < y`: x가 y보다 작다.
* `x > y`: x가 y보다 크다.
* `x == y`: x와 y가 같다.
* `x != y`: x와 y가 같지 않다.
* `x >= y`: x가 y보다 크거나 같다.
* `x <= y`: x가 y보다 작거나 같다.

#### 논리 연산자 (and, or, not)

* `x or y`: x와 y 둘 중 하나만 참이어도 참이다.
* `x and y`: x와 y 모두 참이어야 참이다.
* `not x`: x가 거짓이면 참이다.

#### in / not in 연산자

문자열, 리스트, 튜플 등 시퀀스 자료형에 원하는 원소가 있는지 확인하는 연산자이며 있으면 `True`, 없으면 `False`를 반환합니다.

* `x in 리스트` / `x not in 리스트`
* `x in 튜플` / `x not in 튜플`
* `x in 문자열` / `x not in 문자열`

**예시:**
```python
1 in [9, 1, 3] # True 반환
1 not in [9, 1, 2] # False 반환
```

#### elif 의 활용

`if`와 `else` 만으로는 다양한 조건을 판단하기 어렵기 때문에 `elif`를 사용합니다.


### 3-2. While 반복문

주어진 조건이 참인 동안 특정 코드를 반복적으로 실행합니다. (들여쓰기가 매우 중요합니다)

```python
while 조건문:
    수행문장
```
조건문이 참인 동안 while 문에 속한 문장들을 반복해서 수행합니다.

* **강제로 빠져나가기 (`break`)**: while 문을 조건과 관계없이 강제로 탈출하는 명령어
* **맨 처음으로 돌아가기 (`continue`)**: 아래의 문장을 무시하고 다음 루프를 실행시키는 코드 (조건문과 같이 연결해주면 무시하고 다음 것부터 실행함)
* **무한루프**: 무한히 반복합니다. 빠져나가는 방법은 단축키 `Ctrl + C` 입니다.
* **while - else 문**: 정상적으로 종료되었을 때 (break로 빠져나가지 않았을 때) else 절이 실행됩니다. break 문으로 빠져나가면 else 절은 실행되지 않습니다.
* **중첩된 while 문**: while 문 안에 또 다른 while 문을 사용할 수 있습니다. 중첩된 while 문에서 break나 continue를 사용할 때는 가장 가까운 while 문에만 영향을 준다는 점에 주의해야 합니다.

**코드 분석 예시:**

```python
num = 1
while num <= 5:
    print(num)
    num += 1
print("while문이 종료된후 num은 %d 입니다" % num)
```

1. 첫 번째: `num = 1`, `1 <= 5` (참) $\rightarrow$ `print(1)` 실행 $\rightarrow$ `num` 은 2 가 됨
2. 두 번째: `num = 2`, `2 <= 5` (참) $\rightarrow$ `print(2)` 실행 $\rightarrow$ `num` 은 3 이 됨
3. 세 번째: `num = 3`, `3 <= 5` (참) $\rightarrow$ `print(3)` 실행 $\rightarrow$ `num` 은 4 가 됨
4. 네 번째: `num = 4`, `4 <= 5` (참) $\rightarrow$ `print(4)` 실행 $\rightarrow$ `num` 은 5 가 됨
5. 다섯 번째: `num = 5`, `5 <= 5` (참) $\rightarrow$ `print(5)` 실행 $\rightarrow$ `num` 은 6 이 됨
6. 여섯 번째: `num = 6`, `6 <= 5` (거짓) $\rightarrow$ 반복 종료


### 03-3. for 반복문

주어진 시퀀스의 요소에 대해 특정 코드를 여러 번 실행합니다.  
while 문과 비슷하게 진행되지만 더 직관적입니다.

**기본 구조:**
```python
for 변수 in 리스트(또는 튜플, 문자열):
    print(변수)
```
리스트나 튜플, 문자열의 첫 번째 요소부터 마지막 요소까지 차례로 변수에 대입되어 `print`가 실행됩니다.

**예시:** 1부터 5까지의 숫자를 출력
```python
for i in [1, 2, 3, 4, 5]: 
    print(i)
```

#### for 문과 함께 쓰이는 문장

* **continue 문**: for 문 안의 문장을 수행하는 도중 continue 문을 만나면 for 문의 처음으로 돌아갑니다.
* **range 함수**: 숫자 리스트를 자동으로 만들어주는 함수입니다.
  `range(시작번호, 마지막번호, step)` 구조를 가지며 `step` 생략이 가능합니다. 단, 마지막 번호는 포함하지 않습니다.
* **break**: for 문을 강제로 빠져나가고 싶을 때 사용합니다.
* **else 절**: for 문이 정상적으로 종료되었을 때 (break로 빠져나가지 않았을 때) 실행됩니다.

> 참고: `num += 1` 과 `num = num + 1` 은 똑같은 코드입니다.

---

<a id="04"></a>

## 04. 함수 (function)

특정한 기능, 즉 입력값에 따라 기능에 맞는 출력값을 내어 놓는 것입니다. 코드 블록들을 미리 정의하고 반복되는 부분이 있을 경우에 사용하기 좋습니다.

**기본 구조:**
```python
def 함수_이름(매개변수):
    수행문장
    return 반환값
```
* `def`: 함수 만들 때 사용하는 예약어
* `함수이름`: 만드는 사람이 임의로 정할 수 있습니다.
* `매개변수`: 함수의 입력으로 전달되는 값을 받는 변수
* `return`: 결과값을 반환하는 명령어

**`add` 함수 예시:**
```python
def add(a, b):
    return a + b

a = 10
b = 5
c = add(a, b)
print(c)  # 15가 출력됨
```
함수 내부에서 `a`, `b` 변수를 사용하지만 직접 입력받는 게 아니라 외부에서 값을 가져와 사용합니다. `return`을 지우면 반환값이 없어져서 `None`이라고 뜹니다.

함수는 기능이랑 사용법을 알면 누구든 쉽게 재사용이 가능합니다.

#### 매개변수와 인수

* **매개변수 (Parameter)**: 매개가 되는 변수. 함수는 한 번 만들면 언제든지 불러올 수 있고, 이는 임시 변수입니다. 
* **인수 (Argument)**: 함수를 호출할 때 전달받는 실제 입력값입니다.
  > 위 `add(a, b)` 함수에서 `a`, `b`는 **매개변수**이고 호출할 때 넣는 `10`, `5`는 **인수**입니다.

* **지역변수**: 함수 내부에서 만들어진 변수
* **전역변수**: 프로그램 어디서든 호출 가능한 변수


#### 입력값과 반환값

구조: `입력값 ---> 함수 ---> 리턴값`

1. **일반적인 함수**: 입력값이 있고 반환값이 있는 함수
2. **입력값이 없는 함수**: `def 함수이름():` 형태로 만들고 호출 시에도 `함수이름()`으로 씁니다.
3. **반환값이 없는 함수**: 결과로 `None`을 반환합니다.
4. **입력값도 반환값도 없는 함수**: 기능만 수행하고 끝납니다.

#### 매개변수를 지정하여 호출하기 (키워드 인수)

```python
def sub(a, b):
    return a - b

result = sub(a=10, b=5) # a에 10, b에 5를 전달 -> 결과: 5
result = sub(b=5, a=10) # 순서가 바뀌어도 동일하게 동작
```
장점: 순서에 상관없이 명확하게 사용할 수 있습니다.

#### 가변 키워드 매개변수 (`kwargs`)
* `kwargs = keyword arguments` 의 약자입니다.
* 키워드 = 값 형태로 매개변수 앞에 별 2개(`**`)를 붙여야 합니다.

#### 초깃값 미리 설정
매개변수에 초깃값을 미리 설정해 주는 경우입니다.
```python
def hi_me(name, age=20):
    print("저의 이름은 %s 입니다." % name) 
    print("나이는 %d살입니다." % age) 

hi_me("김영훈", 27) # 이렇게 2개를 주면 각각 대입됩니다.
```

#### 함수 안에서 선언한 변수의 효력 범위
함수 안에서 사용하는 매개변수는 함수 안에서만 사용하는 '함수만의 변수'입니다. 함수 안의 변수 `a`와 밖의 변수 `a`는 전혀 상관없습니다.

함수 안에서 함수 밖의 변수를 변경하는 2가지 방법:
1. `return`을 사용한다.
2. `global` 명령어를 사용한다.

> 함수는 독립적으로 존재하는 것이 좋고 외부 변수에 종속적인 함수는 좋은 함수가 아니기 때문에 `return`을 사용하는 것이 권장됩니다.

#### lambda (람다) 예약어
`def`와 동일한 역할을 하며, 한 줄로 간결하게 만들 때 사용합니다. `def`를 사용할 수 없는 곳에 주로 쓰입니다.
```python
함수_이름 = lambda 매개변수1, 매개변수2: 표현식
```

#### Docstring
함수에 대한 설명을 문서화하는 방법입니다. 첫 번째 줄에 삼중 따옴표(`"""`)로 둘러싼 문자열을 작성하면 됩니다.

#### 메서드 (method)
* 특정 객체에서 호출하여 객체의 상태를 변경하거나 동작을 수행합니다.
* 클래스의 인스턴스에 종속되어 사용됩니다.
* 객체 이름 뒤에 점(`.`)을 붙이고 이름을 써서 호출합니다. (예: `list.append('a')`)


### 04-2. 사용자의 입출력

#### 사용자 입력 (`input`)
사용자가 키보드로 입력한 모든 것을 문자열로 저장합니다.
* **사용법**: `input("안내_문구")`
* **입력값을 숫자로 변환**: `input`은 기본적으로 문자열을 반환하므로 숫자 계산을 위해서는 변환해야 합니다.
  * 정수 변환: `int(입력값)`
  * 실수 변환: `float(입력값)`
  * 타입 확인: `print(type(변수명))`

#### 출력 (`print`)
데이터를 출력하는 명령어입니다.

* **큰따옴표로 둘러싸인 문자열 연산 (`+`)**:  
  `print("i" "like" "grape")` 는 `print("i"+"like"+"grape")` 와 같습니다.
* **문자열 띄어쓰기는 쉼표 (`,`)**:  
  `print("i", "like", "grape")` 처럼 `,`를 사용하면 공백이 자동으로 추가됩니다.
* **`sep` 옵션을 사용하여 구분자 설정**:  
  `print("i", "like", "grape", sep=" yum ")`  
  $\rightarrow$ `i yum like yum grape`

#### 함수와 메서드의 장단점
* **장점**: 코드 재사용성이 높아 개발 시간 단축, 가독성 향상, 유지보수 향상. 복잡성이 줄고 관리가 용이합니다.
* **단점**: 너무 많아지면 코드 관리가 어렵고, 오류가 전체 프로그램에 영향을 줄 수 있습니다. 복잡한 함수는 이해하기 어려워지고 디버깅이 힘들어집니다.

---

<a id="05"></a>

## 05. 모듈 및 패키지

### 05-2. 모듈 (module)

관련된 함수, 클래스, 변수 등을 하나의 파이썬 파일(`.py`)로 모아 놓은 것입니다. 파이썬 프로그램에서 외부 기능으로 불러올 수 있습니다.

#### 만들기
코드 작성 후 확장자를 `.py`로 저장하면 그 파일 자체가 모듈이 됩니다.

#### 불러오기
```python
import 모듈이름
from 모듈이름 import 모듈함수
```
* **2개 이상 함수 불러오기**: 쉼표로 나눕니다. (`from 모듈이름 import 함수1, 함수2`)
* **모든 것 불러오기**: 별(`*`) 문자를 사용합니다. (`from 모듈이름 import *`)

독립적인 모듈(일반적으로 많이 만드는 방식)은 다른 모듈에 영향을 미치지 않고 개발 및 수정이 가능합니다.


### 05-3. 패키지 (package)

관련된 모듈을 하나의 디렉터리(계층적 폴더 구조)로 모아 놓은 것입니다.

* 폴더 안에 `__init__.py` 파일이 포함되어 있어야 비로소 파이썬에서 패키지 디렉터리로 인식합니다. (단, 최신 파이썬 버전에서는 없어도 작동하지만 호환성을 위해 포함하는 것이 좋습니다.)
* 사용 시 코드의 구조화와 조직화가 매우 용이해집니다.

    </div>
  </div>
</div>

<!-- Scroll to Top Button -->
<a href="#top" class="scroll-top-btn" title="맨 위로">&#8679;</a>
