---
layout: docs
title: Python Developer Documentation
---

<style>
  :root {
    --bg-color: #0f1115;
    --text-main: #c9d1d9;
    --text-muted: #8b949e;
    --accent: #58a6ff;
    --border: #30363d;
    --card-bg: #161b22;
    --btn-hover: #1f6feb;
  }
  body {
    background-color: var(--bg-color) !important;
    color: var(--text-main) !important;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    line-height: 1.6;
  }
  .portfolio-wrapper {
    max-width: 900px;
    margin: 0 auto;
    padding: 2rem 1rem;
  }
  .hero-section {
    text-align: center;
    margin-bottom: 4rem;
  }
  .hero-title {
    font-size: 2.5rem;
    font-weight: 800;
    color: #ffffff;
    margin-bottom: 1rem;
    letter-spacing: -0.5px;
  }
  .hero-subtitle {
    color: var(--text-muted);
    font-size: 1.1rem;
  }
  .toc-container {
    background: var(--card-bg);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 2rem;
    margin-bottom: 4rem;
    box-shadow: 0 8px 24px rgba(0,0,0,0.2);
  }
  .toc-title {
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--text-main);
    margin-bottom: 1.5rem;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  .toc-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }
  .toc-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 56px;
    height: 56px;
    background: #21262d;
    border: 1px solid var(--border);
    border-radius: 14px;
    color: var(--text-main);
    font-size: 1.25rem;
    font-weight: 700;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
  }
  .toc-btn:hover {
    background: var(--btn-hover);
    color: #ffffff;
    border-color: var(--btn-hover);
    transform: translateY(-3px);
    box-shadow: 0 6px 16px rgba(88, 166, 255, 0.2);
  }
  .section-container {
    position: relative;
    background: var(--card-bg);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 3rem 2.5rem;
    margin-bottom: 3rem;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  }
  .section-anchor {
    position: absolute;
    top: -80px;
  }
  .section-badge {
    display: inline-block;
    background: rgba(88, 166, 255, 0.1);
    color: var(--accent);
    font-size: 1rem;
    font-weight: 700;
    padding: 0.4rem 1rem;
    border-radius: 20px;
    margin-bottom: 1.5rem;
    border: 1px solid rgba(88, 166, 255, 0.2);
  }
  .section-title {
    font-size: 2rem;
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 2rem;
    border-bottom: 1px solid var(--border);
    padding-bottom: 1rem;
  }
  
  .section-content h3 {
    font-size: 1.4rem;
    color: #ffffff;
    margin-top: 2.5rem;
    margin-bottom: 1rem;
  }
  .section-content h4 {
    font-size: 1.1rem;
    color: var(--text-main);
    margin-top: 1.5rem;
    margin-bottom: 0.8rem;
  }
  .section-content p {
    margin-bottom: 1rem;
  }
  .section-content ul, .section-content ol {
    padding-left: 1.5rem;
    margin-bottom: 1.5rem;
  }
  .section-content li {
    margin-bottom: 0.5rem;
  }
  .section-content code {
    background: rgba(110, 118, 129, 0.4);
    padding: 0.2em 0.4em;
    border-radius: 6px;
    font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace;
    font-size: 85%;
    color: #ff7b72;
  }
  .section-content pre {
    background: #0d1117 !important;
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 1rem;
    overflow-x: auto;
    margin-bottom: 1.5rem;
  }
  .section-content pre code {
    background: transparent;
    padding: 0;
    color: #c9d1d9;
  }
  .section-content table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 1.5rem;
  }
  .section-content th, .section-content td {
    border: 1px solid var(--border);
    padding: 0.75rem 1rem;
    text-align: left;
  }
  .section-content th {
    background: #21262d;
    color: #ffffff;
  }
  .section-content blockquote {
    border-left: 4px solid var(--accent);
    padding-left: 1rem;
    color: var(--text-muted);
    margin: 1.5rem 0;
    background: rgba(88, 166, 255, 0.05);
    padding: 1rem;
    border-radius: 0 8px 8px 0;
  }
</style>

<div id="introduction"></div>

<div class="portfolio-wrapper">

<div class="hero-section">
  <div class="hero-title">파이썬 핵심 요약 정리</div>
  <div class="hero-subtitle">Python Core Reference</div>
</div>

<div class="toc-container">
  <div class="toc-title">Table of Contents</div>
  <div class="toc-buttons">
    <a href="#01" class="toc-btn">01</a>
    <a href="#02" class="toc-btn">02</a>
    <a href="#03" class="toc-btn">03</a>
    <a href="#04" class="toc-btn">04</a>
    <a href="#05" class="toc-btn">05</a>
  </div>
</div>

<!-- Section 01 -->
<div class="section-container">
  <a id="01" class="section-anchor"></a>
  <div class="section-badge">01</div>
  <h2 class="section-title">파이썬이란?</h2>
  <div class="section-content">
1991년 네덜란드에서 귀도 반 로섬이 발표한 **인터프리터 언어**(소스 코드를 한 줄씩 해석하고 즉시 실행하여 결과를 바로 확인할 수 있는 언어)입니다. 공동 작업과 유지보수가 편리하기 때문에 다양한 분야에서 널리 쓰입니다.
  </div>
</div>

<!-- Section 02 -->
<div class="section-container">
  <a id="02" class="section-anchor"></a>
  <div class="section-badge">02</div>
  <h2 class="section-title">자료형과 변수</h2>
  <div class="section-content">

### 변수 (Variable)
* **정의**: 값을 저장하는 메모리 공간입니다.
* **특징**: 변수 이름(식별자)과 값을 할당하여 생성하며, 프로그램이 실행되는 동안 값이 바뀔 수 있습니다.

### 02-1. 숫자형 (Number)
* **정수형 (int)**: 양의 정수, 음의 정수, 0
* **실수형 (float)**: 소수점이 포함된 숫자 (예: `-5.0`, `1.23`, `0.0`)
* **8진수 (octal)**: `0o` 또는 `0O`로 시작하는 수
* **16진수 (hexadecimal)**: `0x`로 시작하는 수

#### 연산자
* **사칙연산**: `+`, `-`, `*`, `/`
* **특수연산**: 제곱 (`**`), 나머지 (`%`), 몫 (`//`)
* **복합 대입 연산자**: `+=`, `-=`, `*=`, `/=`, `//=`, `%=`, `**=`
  > 예: `a += 1`은 `a = a + 1`과 같습니다.

<hr style="border-color:var(--border); margin:2rem 0;">

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

<hr style="border-color:var(--border); margin:2rem 0;">

### 시퀀스 자료형 비교
| 자료형 | 기호 | 예시 | 특징 |
| :--- | :---: | :--- | :--- |
| **리스트 (List)** | `[]` | `[1, 2, 3]` | 순서 있음, 수정 가능 |
| **튜플 (Tuple)** | `()` | `(1, 2, 3)` | 순서 있음, 수정 불가능 |
| **문자열 (String)** | `''`, `""` | `'Hello'` | 순서 있음, 수정 불가능 |

<hr style="border-color:var(--border); margin:2rem 0;">

### 02-3. 리스트 (List)
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

<hr style="border-color:var(--border); margin:2rem 0;">

### 02-4. 튜플 (Tuple)
리스트와 유사하지만, 값을 변경하거나 삭제할 수 없는 자료형입니다.
* **특징**:
  * 소(원)괄호 `()`를 사용합니다.
  * 요소를 1개만 가질 때는 반드시 뒤에 쉼표를 붙여야 합니다 (예: `my_tuple = (10,)`).
* **불가능한 작업**: 값의 수정 및 삭제가 불가능하므로 `.sort()`, `.insert()`, `.remove()`, `.pop()` 등의 메서드는 사용할 수 없습니다.

<hr style="border-color:var(--border); margin:2rem 0;">

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

<hr style="border-color:var(--border); margin:2rem 0;">

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

<hr style="border-color:var(--border); margin:2rem 0;">

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

<hr style="border-color:var(--border); margin:2rem 0;">

### 02-8. 변수와 명명 규칙
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
<div class="section-container">
  <a id="03" class="section-anchor"></a>
  <div class="section-badge">03</div>
  <h2 class="section-title">제어문</h2>
  <div class="section-content">

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

장 제어문
나는 year = 2024 이렇게 만들고싶어

if 조건이 참인경우 if score >=90: print ("a")

else if가 거짓인경우 elif score >=80: print b

elif(elseif) if 거짓 다른 조건 평가 elif score >=70: print c

예시

사용자에게 문자를 입력받아 입력받은 문자가 a인지 판별

if 문 들여쓰기 하면 if else문에 포함된 문장 들여쓰기 안하고 if else랑 같은 선상에 쓰면 관계 없어서 그냥 print함

#### 3-1 if 문

주어진 조건을 판단한 후 그 상황에 맞게 처리해야 할 경우가 생겼을때 사용한다.

money = True

if money:
print("택시")
else:
print("다리")

시작 

money = True

참 T money ㄱ 거짓

택시 다리 
종료

#### if else 조건문

if 조건문:
    수행문장1
else:
    수행문장A
들여쓰기를 꼭 해야 오류가 발생하지 않는다.

#### 비교연산자
x < y x가 y보다 작다.
x > y x가 y보다 크다.
x == y x와 y가 같다.
x != y x와 y가 같지 않다.
x >= y x가 y보다 크거나 같다.
x <= y x가 y보다 작거나 같다.

#### and or not
x or y x와 y 둘 중 하나만 참이어도 참이다.
x and y x와 y 모두 참이어야 참이다.
not x x가 거짓이면 참이다.

#### in 연산자
문자열 리스트 튜플 등 시퀀스 자료형에 원하는 원소가 있는지 확인하는 연산자이며 있으면 true 없으면 false 이다.
x in 리스트 x not in 리스트
x in 튜플 x not in 튜플
x in 문자열 x not in 문자열

#### not in
있으면 false 없으면 true
1 in [9, 1, 3] >> True
1 not in [9, 1, 2] >> False

#### elif
if else 만으로는 다양한 조건을 판단하기 어렵기 때문에 else를 사용한다.
if 조건문: 수행문장1 elif 조건문: 수행문장1 else

<hr style="border-color:var(--border); margin:2rem 0;">

### 3-2 While 반복문 (들여 쓰기 중요)

주어진 조건이 참인 동안 특정 코드를 반복적으로 실행

while 조건문:
    수행문장
조건문이 참인 동안 while 문에 속한 문장들을 반복해서 수행한다.

#### 강제로 빠져나가기
while 문을 조건과 관계없이 강제로 탈출하는 명령어

#### 맨처음으로 돌아가기
while 문을 빠져나가지 않고 처음으로 돌아가게 한다.
continue 아래의 문장을 무시하고 다음 루프를 실행시키는 코드이다.
조건문과 contnue 를 같이 연결해주면 무시하고 다음꺼부터 실행한다.

#### 무한루프
무한히 반복한다. 빠져나가는 방법은 ctrl + c 이다 .

#### while else 문
정상적으로 종료되었을 때(break로 빠져나가지 않았을 때) else 절이 실행된다.
break 문으로 while 문을 빠져나가면 else 절은 실행되지 않는다.

#### 중첩된 while 문
while 문 안에 또 다른 while 문을 사용할 수 있다
중첩된 while 문에서 break나 continue를 사용할 때는 가장 가까운 while 문에만 영향을 준다는 점에 주의해야한다.

코드

num = 1
while num <= 5:
    print(num)
    num += 1
print ("while문이 종료된후 num은 %d 입니다", %num)

첫번째 num = 1 1<=5 참 print(num) 실행 num(1)+1 = 2
두번째 num = 2 2<=5참 print(num)실행 num(2)+1=3
세번째 num = 3 3<=5참 print(num)실행 num(3)+1=4
네번째 num = 4 4<=5참 print(num)실행 num(4)+1=5
다섯번째 num = 5 5<=5참 print(num)실행 num(5)+1=6
여섯번째 num = 6 6<=5거짓 print(num)실행 num(6)+1=7

<hr style="border-color:var(--border); margin:2rem 0;">

### 03-3 for 반복문

주어진 시퀀스의 요소에 대해 특정코드를 여러번 실행한다.
while 문과 비슷하게 진행되지만 더 직관적이다.

1부터 4까지의 숫자를 출력 for i in [1,2,3,4,5] : print("i")

for 변수 in 리스트(또는 튜플, 문자열):
    print(변수) 
리스트나 튜플, 문자열의 첫 번째 요소부터 마지막 요소까지 차례로 변수에 대입되어 print 가 실행된다.

#### for 문과 함께 쓰이는 문장

**continue 문**
for 문 안의 문장을 수행하는 도중 continue 문을 만나면 for 문의 처음으로 돌아간다.

**range 함수**
숫자 리스트를 자동으로 만들어주는 함수
range (시작번호,마지막번호, step) step 생략이 가능하다. 시작, 마지막 번호는 미포함한다.

**break**
for 문을 강제로 빠져나가고 싶을 때 사용한다. (while 문과 비슷하다)

num += 1 둘다 똑같은거 num = num+1

**else 절**
for 문이 정상적으로 종료되었을 때 (break로 빠져나가지 않았을 때) else 절이 실행된다.

  </div>
</div>

<!-- Section 04 -->
<div class="section-container">
  <a id="04" class="section-anchor"></a>
  <div class="section-badge">04</div>
  <h2 class="section-title">함수 function</h2>
  <div class="section-content">

특정한 기능 입력값에 따라 기능에 맞는 출력값을 내어 놓는것이다. 반복되는 부분이 있을 경우에 사용하기 좋다.

구조
```python
def 함수_이름 (매개변수) :
    수행문장
    return 반환값
```
def 함수 만들 때 사용하는 예약어

함수이름은 만드는 사람이 임의로 정할 수 있다. 매개뱐수 함수의 입력으로 전달되는 값을 받는 변수 return 결과값을 반환하는 명령어

add함수 예시
def add(a,b)
return a+b
a = 10 b = 5 c=add(a,b) print(c) >> 7

for while 처럼 특정한 기능
코드 블록들을 미리 정의하고 내용들을 입력하면 바로 구할 수 있음 내부의 기능을 압축하고 보완해서 사용의 편리를 위함이다.

def add(a,b): 함수 내부에서 a,b 변수를 사용 근데 값을 함수에서 직접 입력받는게 아니라 외부에서 가져와 사용한다.
c = a+b
return c 값을 외부로 다시 반환 지우면 아무것도 없다고 none 이라고 뜬다.

num1 = 10
num2 = 20
함수는 기능이랑 사용법을 알면 누구든 사용이 가능하다.

#### 매개변수
매개가 되는 변수 함수는 한번 만들면 언제든지 불러올수있고 임시 변수이며,
인수는 함수를 호출할 때 전달받는 입력값이다.
위에 함수에서 a ,b는 매개변수 이고 10 이랑 5 는 인수이다.
지역변수 : 함수 내부에서 만들어진 애들 전역변수 : 프로그램 어디서든 호출 가능
선언 def 키워드 사용하여 선언한다.

#### 입력값과 반환값
입력값 ---> 함수 ---> 리턴값

**일반적인 함수**
입력값이 있고 반환값이 있는 함수

**입력값이 없는 함수**
def 함수이름 =() ;
return '반환하고 싶은 값'
사용시
반환받을 변수 = 함수 이름
print(반환받을 변수) >> 반환하고 싶은 값 으로 나온다

**반환값이 없는 함수**
none을 반환한다. = 반환값이 없다는 것이다.

**입력 값도 반환값도 없는 함수**
함수_이름( )

#### 매개변수를 지정하여 호출하기
빼기의 예 def sub(a, b): return a - b
result = sub(a=10, b=5) >> a에 7, b에 3을 전달 print(result) >> 5
result = sub(b=4, a=10) >> b에 5, a에 3을 전달 print(result) >> - 6
장점 : 순서에 상관없이 사용할 수 있다.

#### 키워드 매개변수 
kwargs = keyword arguments 의 약자
키워드 = 값 매개변수 앞에 별 ** 2개를 붙여야한다.

#### 초깃값 미리 설정
매개변수에 초깃값을 미리 설정해주는 경우이다.
def hi_me(name, age):
    print("저의 이름은 %s 입니다." % name) 
    print("나이는 %d살입니다." % age) 
hi_me ("김영훈", 27) 입력값으로 2개를 주면 각각으로 대입이 가능하다.

#### 함수 안에서 선언한 변수의 효력 범위
함수 안에서 사용하는 매개변수는 함수 안에서만 사용하는 '함수만의 변수'이다.
입력값을 전달받는 매개변수 a는 함수 안에서만 사용하는 변수일 뿐, 함수 밖의 변수 a와는 전혀 상관없다.

함수 안에서 함수 밖의 변수를 변경하는 방법 2가지
return을 사용한다.
global 명령어를 사용한다.

함수는 독립적으로 존재하는 것이 좋고 외부 변수에 종속적인 함수는 좋은 함수가 아니기 때문에 return 방법을 사용하는게 좋다.

#### lambda 예약어 
def 와 동일한 역할을 한다. 한줄로 간결하게 만들때 사용한다. def 사용할 수 없는 곳에 주로 쓰인다.

#### docstring
함수에 대한 설명을 문서화하는 방법이다.
첫번째 줄에 삼중 따옴표로 둘러싼 문자열을 작성하면 된다.
함수_이름 = lambda 매개변수1, 매개변수2

#### 매서드 method
특정 객체에서 호출 객체의 상태를 변경하거나 동작 수행한다.
특정 객ㄱ체 클래스의 인스턴스에 종속되어 사용
객체 이름 뒤에 . 점을 붙이로 이름을 써서 호출
ex) list.append('a')

<hr style="border-color:var(--border); margin:2rem 0;">

### 04-2 사용자의 입출력

#### 사용자 입력

**input**
사용자가 키보드로 입력한 모든 것을 문자열로 저장한다.
방법 : input("안내_문구")

**입력값을 숫자로 변환**
input은 문자열을 반환하므로 숫자 계산을 위해서는 변환해야한다
정수 함수이름 = int ( 함수이름 )
실수 함수이름 = float ( 함수이름 )
한번에 변경하기 print( type ( 함수이름 ))

**print**
데이터를 출력하는 것이다.
큰따옴표로 둘러싸인 문자열 = + 연산
print("i" "like" "grape") = print("i"+"like"+"grape")

문자열 띄어쓰기는 쉼표
print("i" , "like" , "grape")
, 를 사용하면 공백이 자동으로 추가 된다.

sep 를 사용하여 구분자 설정하기
print("i" , "like" , "grape", sep "yum') i yum like yum grape

#### 함수와 메서드
장점 코드 재사용성이 높아 개발시간 단축 가독성 유지보수 향상 복잡성 줄고 관리가 용이하다
단점 넘 많아지면 코드 관리 어려움 오류 전체 프로그램에 영향 복잡한 함수 이해하기 어려줘지고 디버깅이 어렵다.

  </div>
</div>

<!-- Section 05 -->
<div class="section-container">
  <a id="05" class="section-anchor"></a>
  <div class="section-badge">05</div>
  <h2 class="section-title">모듈 및 패키지</h2>
  <div class="section-content">

### 05-2 모듈

#### 모듈 module
관련된 함수 클래스 변수 등을 하나의 파일로 모아 놓은 파이썬 파일이다. 파이썬 프로그램에서 불러올수있다.

**만들기**
그냥 저장하면 된다. 확장자 .py 로 그게 모듈이다.

**불러오기**
import 파일이름 입력하면 된다.
from 모듈이름 import 모듈함수

2개의 이상 파일 불러오기 쉼표로 나누기
from 모듈이름 import 모듈함수1, 모듈함수2 * 문자를 사용하기 (* = 모든것)
from 모듈이름 import *

독립적인 모듈(일반적으로 많이 만든다)은 다른 모듈에 영향을 미치지 않고 개발 및 수정이 가능하다

<hr style="border-color:var(--border); margin:2rem 0;">

### 05-3 패키지 package
관련된 모듈을 하나의 디렉터리(계층적으)로 모아 놓은것이다.
init.py 파일이 포함되어 있어야하며 디렉터리 패키지가 된다.
사용시 코드의 구조화와 조직화가 용이하다.

  </div>
</div>

</div>