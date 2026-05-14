---
layout: docs
title: Python Developer Documentation
---

<div id="introduction"></div>

# Introduction

파이썬(Python)은 1991년 귀도 반 로섬(Guido van Rossum)이 발표한 언어로, "인생은 짧으니 파이썬이 필요하다(Life is short, you need Python)"라는 모토처럼 생산성을 극대화하는 데 초점을 맞추고 있습니다.

### 핵심 철학
*   **아름다운 것이 추한 것보다 낫다.**
*   **명시적인 것이 암시적인 것보다 낫다.**
*   **단순한 것이 복잡한 것보다 낫다.**

<div id="syntax"></div>

# Core Syntax

파이썬은 세미콜론(;) 대신 줄바꿈을 사용하며, 중괄호({}) 대신 **들여쓰기(Whitespace)**를 사용하여 코드 블록을 정의합니다.

### 1. Data Types
파이썬은 동적 타이핑 언어입니다. 변수 선언 시 타입을 명시할 필요가 없습니다.

| Type | Example | Description |
| :--- | :--- | :--- |
| **int** | `x = 10` | 정수형 데이터 |
| **float** | `y = 3.14` | 실수형 데이터 |
| **str** | `name = "SONJIHEE"` | 문자열 데이터 |
| **list** | `[1, 2, 3]` | 변경 가능한 리스트 |

```python
# 고급 리스트 표현식 (List Comprehension)
numbers = [1, 2, 3, 4, 5]
squares = [n**2 for n in numbers if n % 2 == 0]
print(f"Squares of even numbers: {squares}")
```

<div id="functions"></div>

# Functions

파이썬의 함수는 일급 객체(First-class object)로 취급되어 변수에 할당하거나 인자로 전달할 수 있습니다.

```python
def developer_info(name, role="Full Stack", **tech_stack):
    """
    개발자 정보를 출력하는 고급 함수
    """
    print(f"--- [ {name} ] ---")
    print(f"Main Role: {role}")
    
    for tech, level in tech_stack.items():
        bar = "█" * (level // 10)
        print(f"{tech.upper():<10} : {bar} {level}%")

# 가변 인자를 활용한 호출
developer_info("SONJIHEE", role="AI Engineer", python=95, javascript=80, react=75)
```

<div id="automation"></div>

# Automation & Library

파이썬은 'Batteries Included' 언어라고 불릴 만큼 강력한 표준 라이브러리와 외부 패키지(PyPI)를 보유하고 있습니다.

### 주요 라이브러리 스택
1.  **Pandas**: 데이터 분석 및 처리
2.  **Requests**: HTTP 통신 자동화
3.  **BeautifulSoup**: 웹 크롤링
4.  **Selenium**: 브라우저 자동화

```python
# 간단한 웹 요청 자동화 예제
import requests

def check_status(urls):
    for url in urls:
        try:
            response = requests.get(url)
            print(f"[CHECK] {url} -> {response.status_code}")
        except Exception as e:
            print(f"[ERROR] {url} -> {str(e)}")

sites = ["https://sonjhing.github.io", "https://google.com"]
check_status(sites)
```

<div id="conclusion"></div>

# Conclusion

파이썬 개발의 핵심은 **"Pythonic"**한 코드를 작성하는 것입니다. 간결함 속에 숨겨진 강력한 논리를 이해할 때 진정한 파이썬 개발자로 거듭날 수 있습니다.

---
*Last updated: 2026.05.14*
*Author: SONJIHEE*
