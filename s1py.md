---
layout: docs
title: Python Developer Documentation
---

<div id="introduction"></div>

# Introduction

파이썬(Python)은 간결하고 읽기 쉬운 문법을 가진 강력한 프로그래밍 언어입니다. 본 문서는 개발자를 위한 핵심 문법과 코딩 감성을 담은 예제들을 정리합니다.

> "Life is short, you need Python."

<div id="syntax"></div>

# Core Syntax

파이썬의 가장 큰 특징은 **들여쓰기(Indentation)**를 통한 코드 블록 구분입니다. 이는 가독성을 극대화하며 팀 협업에 최적화된 구조를 제공합니다.

```python
# 변수 선언 및 기본 출력
message = "HELLO SONJIHEE"
level = 100

if level >= 100:
    print(f"[SYSTEM] {message}: Access Granted")
else:
    print("[ERROR] Authorization Failed")
```

<div id="functions"></div>

# Functions

재사용 가능한 코드 블록을 정의하여 논리적이고 세련된 구조를 설계합니다.

```python
def create_ripple(x, y, intensity=1.0):
    """
    파동 효과를 생성하는 함수
    :param x: 좌표 X
    :param y: 좌표 Y
    :param intensity: 강도
    """
    status = "Active" if intensity > 0.5 else "Stable"
    return f"Ripple generated at ({x}, {y}) with status: {status}"

# 함수 호출 예시
print(create_ripple(150, 320, 0.8))
```

<div id="automation"></div>

# Automation

강력한 라이브러리 생태계를 활용하여 복잡한 작업을 자동화합니다.

```python
import os
import time

def scan_workspace(path):
    print(f"Scanning: {path} ...")
    files = [f for f in os.listdir(path) if os.path.isfile(os.path.join(path, f))]
    for file in files:
        time.sleep(0.1) # 감성적인 딜레이
        print(f"[FOUND] {file}")

scan_workspace("./assets")
```

<div id="conclusion"></div>

# Conclusion

파이썬은 단순한 언어를 넘어, 생각을 현실로 만드는 가장 빠른 도구입니다. 지속적인 학습과 실험을 통해 자신만의 **ASSET**을 구축해 보세요.

---
*Last updated: 2026.05.14*
