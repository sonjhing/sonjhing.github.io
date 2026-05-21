---
layout: null
---

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
<link href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap" rel="stylesheet">
<link rel="stylesheet" as="style" crossorigin href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.css" />

<style>
    :root {
        --bg-dark: #0b0f19;        /* 금융 이미지의 깊은 차콜 네이비 베이스 */
        --neon-blue: #00e5ff;      /* 사이버네틱 블루 라이트 포인트 */
        --neon-green: #00e676;     /* 주식 우상향 상승 포인트 */
        --text-light: #ffffff;
        --text-muted: #64748b;
        --panel-bg: rgba(15, 23, 42, 0.8);
    }

    /* 초기화 및 Pretendard + Share Tech Mono 폰트 혼용 */
    .invest-container * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
    }

    .invest-container {
        background-color: #0f172a;
        background-image: radial-gradient(circle at 50% 50%, #1e293b 0%, #0f172a 100%);
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        padding: 40px 20px;
    }

    /* 전체 레이아웃 입체감 및 전면 흰색 테두리 적용 */
    .wrapper {
        width: 100%;
        max-width: 1150px;
        background-color: var(--bg-dark);
        display: grid;
        grid-template-columns: 120px 1fr;
        box-shadow: 0 30px 70px rgba(0, 0, 0, 0.6), 0 0 40px rgba(0, 229, 255, 0.1); 
        border: 4px solid #ffffff; /* 흰색 테두리 유지 */
        border-radius: 16px;
        position: relative;
        overflow: hidden;
    }

    /* ── 1. 좌측 블랙 사이드바 (금융/지표 스타일 변형) ── */
    .sidebar {
        background: linear-gradient(180deg, #0b0f19 0%, #020617 100%);
        color: #ffffff;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding: 40px 0;
        z-index: 10;
        border-right: 1px solid rgba(255, 255, 255, 0.05);
    }

    .sidebar .logo {
        font-family: 'Share Tech Mono', monospace;
        font-weight: 700;
        letter-spacing: 1px;
        font-size: 1.2rem;
        color: var(--neon-blue);
        text-shadow: 0 0 10px rgba(0, 229, 255, 0.5);
    }

    .sidebar .home-btn {
        text-decoration: none;
        color: rgba(255, 255, 255, 0.5);
        font-size: 1.3rem;
        transition: all 0.3s ease;
    }
    .sidebar .home-btn:hover {
        color: var(--neon-blue);
        transform: scale(1.15);
        text-shadow: 0 0 8px var(--neon-blue);
    }

    /* ── 2. 우측 메인 영역 ── */
    .main-content {
        display: flex;
        flex-direction: column;
        position: relative;
        background: #0b0f19;
    }

    /* 상단 네비게이션 */
    .navbar {
        background-color: rgba(11, 15, 25, 0.9);
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 60px;
        width: 75%;
        align-self: flex-start;
        padding: 0 20px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    }

    .navbar a {
        text-decoration: none;
        color: #94a3b8;
        font-size: 0.85rem;
        font-weight: 500;
        transition: color 0.3s;
    }
    .navbar a:hover { color: var(--neon-blue); }
    .navbar a.active { color: #ffffff; font-weight: 700; }

    /* 📈 히어로 섹션 (내 주식 투자 사진 ju.jpg 배경 세팅) */
    .hero-section {
        height: 380px;
        background: linear-gradient(to bottom, rgba(11,15,25,0.4), rgba(11,15,25,0.8)), 
                    url('ju.jpg') center/cover no-repeat; /* 👈 내 주식 사진 파일명 매핑 */
        position: relative;
        padding: 40px 60px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }

    .hero-title {
        font-family: 'Share Tech Mono', monospace;
        font-size: 3.2rem;
        color: #ffffff;
        font-weight: 700;
        letter-spacing: -1px;
        text-shadow: 0 4px 20px rgba(0,0,0,0.6);
    }
    
    .hero-title span {
        color: var(--neon-green);
    }

    /* 미래지향적 네온 검색창 박스 (사이드바에 걸치는 형태 유지) */
    .search-box-container {
        position: absolute;
        bottom: 40px;
        left: -60px;
        background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%);
        color: #ffffff;
        width: 340px;
        padding: 25px;
        box-shadow: 0 20px 40px rgba(2, 132, 199, 0.3);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 8px;
        z-index: 5;
    }

    .search-input-wrapper {
        display: flex;
        align-items: center;
        border-bottom: 1px solid rgba(255,255,255,0.6);
        padding-bottom: 8px;
        margin-bottom: 15px;
    }

    .search-input-wrapper i {
        margin-right: 10px;
        font-size: 0.9rem;
        color: var(--neon-blue);
    }

    .search-input-wrapper input {
        background: none;
        border: none;
        outline: none;
        color: #ffffff;
        font-size: 0.85rem;
        width: 100%;
    }
    .search-input-wrapper input::placeholder { color: rgba(255,25