---
layout: null
---

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&display=swap" rel="stylesheet">
<link rel="stylesheet" as="style" crossorigin href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.css" />

<style>
    :root {
        --bg-dark: #1a1a1a;
        --coral: #f27474; /* 원본 이미지의 산호색/주홍색 반영 */
        --text-dark: #333333;
        --text-muted: #777777;
    }

    /* 초기화 및 한글 가독성이 뛰어난 Pretendard 폰트 적용 */
    .adv-container * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, Roboto, sans-serif;
    }

    .adv-container {
        background-color: #fff5f5;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        padding: 40px 20px;
    }

    /* 전체 레이아웃 입체감 및 흰색 테두리(border) 추가 */
    .wrapper {
        width: 100%;
        max-width: 1100px;
        background-color: #ffffff;
        display: grid;
        grid-template-columns: 120px 1fr; /* 좌측 블랙 바 + 우측 메인 영역 */
        box-shadow: 0 30px 60px rgba(0,0,0,0.2); /* 입체감을 위한 강한 그림자 */
        border: 4px solid #ffffff; /* 전체적인 흰색 테두리 */
        border-radius: 12px;
        position: relative;
        overflow: hidden;
    }

    /* ── 1. 좌측 블랙 사이드바 ── */
    .sidebar {
        background-color: var(--bg-dark);
        color: #ffffff;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding: 40px 0;
        z-index: 10;
    }

    .sidebar .logo {
        font-weight: 700;
        letter-spacing: 2px;
        font-size: 1.1rem;
    }

    .sidebar .home-btn {
        text-decoration: none;
        color: rgba(255, 255, 255, 0.7);
        font-size: 1.2rem;
        transition: color 0.3s, transform 0.3s;
    }
    .sidebar .home-btn:hover {
        color: #ffffff;
        transform: scale(1.1);
    }

    /* ── 2. 우측 메인 영역 ── */
    .main-content {
        display: flex;
        flex-direction: column;
        position: relative;
        background: #ffffff;
    }

    /* 상단 네비게이션 (원본 이미지 레이아웃 반영) */
    .navbar {
        background-color: #ffffff;
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 60px;
        width: 75%;
        align-self: flex-start;
        padding: 0 20px;
    }

    .navbar a {
        text-decoration: none;
        color: var(--text-dark);
        font-size: 0.85rem;
        font-weight: 500;
        transition: color 0.3s;
    }
    .navbar a:hover { color: var(--coral); }
    .navbar a.active { font-weight: 700; }

    /* 히어로 섹션 (SEA 배경 이미지 적용) */
    .hero-section {
        height: 380px;
        background: linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0)), 
                    url('SEA.avif') center/cover no-repeat;
        position: relative;
        padding: 40px 60px;
    }

    .hero-title {
        font-family: 'Playfair Display', serif;
        font-size: 3.5rem;
        color: #ffffff;
        font-weight: 700;
        text-shadow: 0 2px 10px rgba(0,0,0,0.2);
    }

    /* 원본 참고: 주홍색 검색창 위치 레이아웃 (좌측 사이드바에 걸치도록 설정) */
    .search-box-container {
        position: absolute;
        bottom: 40px;
        left: -60px;
        background-color: var(--coral);
        color: #ffffff;
        width: 320px;
        padding: 25px;
        box-shadow: 0 15px 35px rgba(242,116,116,0.3);
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
        opacity: 0.8;
    }

    .search-input-wrapper input {
        background: none;
        border: none;
        outline: none;
        color: #ffffff;
        font-size: 0.85rem;
        width: 100%;
    }
    .search-input-wrapper input::placeholder { color: rgba(255,255,255,0.7); }

    .frequent-searches h4 {
        font-size: 0.9rem;
        font-weight: 600;
        margin-bottom: 5px;
    }

    .frequent-searches p {
        font-size: 0.75rem;
        line-height: 1.4;
        opacity: 0.9;
    }

    /* ── 3. 하단 컨텐츠 섹션 (비대칭 좌우 사진 배치) ── */
    .bottom-section {
        background-color: #ffffff;
        padding: 40px 40px 30px 100px; /* 검색박스 공간 고려 */
        display: grid;
        grid-template-columns: 1.2fr 1fr 0.5fr; /* 좌측카드 / 설명 / 우측카드(일부노출) */
        gap: 40px;
        align-items: center;
    }

    /* 📸 마우스 오버 효과: 10% 확대(scale 1.1), 살짝 이동, 그림자 강화 */
    .photo-card {
        background: #ffffff;
        padding: 12px;
        box-shadow: 0 10px 25px rgba(0,0,0,0.08);
        transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.4s ease;
        cursor: pointer;
        position: relative;
    }

    /* 왼쪽 카드 위로 띄우기 (원본 레이아웃) */
    .photo-card.left {
        margin-top: -80px; 
        z-index: 4;
    }

    /* 오른쪽 카드 살짝 띄우기 */
    .photo-card.right {
        margin-top: -40px;
        padding: 10px 0 10px 10px;
        overflow: hidden;
    }

    .photo-card img {
        width: 100%;
        display: block;
        transition: transform 0.4s ease;
    }
    
    .photo-card.right img {
        width: 120%; /* 원본처럼 우측으로 잘린 연출 */
    }

    /* ⚡ 마우스 오버 액션 합치기 (살짝 위로 이동 + 10% 확대 + 그림자 깊게) */
    .photo-card:hover {
        transform: translateY(-12px) scale(1.1); /* 10% 확대 및 상단 이동 */
        box-shadow: 0 30px 60px rgba(0,0,0,0.22); /* 그림자 대폭 강화 */
        z-index: 6;
    }

    .photo-label {
        font-size: 0.8rem;
        font-weight: 600;
        color: var(--text-dark);
        margin-top: 8px;
        display: flex;
        align-items: center;
        gap: 6px;
    }

    .photo-card.right .photo-label {
        padding-left: 5px;
    }

    /* 중앙 설명 텍스트 구역 */
    .description-area {
        display: flex;
        flex-direction: column;
    }

    .place-tag {
        font-size: 0.75rem;
        text-transform: uppercase;
        letter-spacing: 2px;
        color: var(--text-muted);
        margin-bottom: 8px;
        display: flex;
        align-items: center;
        gap: 10px;
    }
    .place-tag::before {
        content: '';
        display: inline-block;
        width: 30px;
        height: 1px;
        background-color: var(--text-muted);
    }

    .description-area h3 {
        font-size: 1.3rem;
        font-weight: 700;
        color: var(--text-dark);
        margin-bottom: 12px;
    }

    .description-area p {
        font-size: 0.85rem;
        color: var(--text-muted);
        line-height: 1.7;
        margin-bottom: 20px;
    }

    /* 인포 태그 행 추가 (필리핀 / 겨울방학 등) */
    .info-tags {
        display: flex;
        gap: 8px;
        margin-bottom: 15px;
    }
    .info-tags span {
        font-size: 0.75rem;
        padding: 4px 10px;
        background: #f1f5f9;
        border-radius: 4px;
        color: var(--text-dark);
        font-weight: 500;
    }

    /* ── 4. 푸터 영역 ── */
    .footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 40px 30px 100px;
        background-color: #ffffff;
    }

    .footer-left {
        font-size: 0.8rem;
        color: var(--text-muted);
        font-weight: 600;
        letter-spacing: 1px;
    }

    .slider-controls {
        display: flex;
        align-items: center;
        gap: 15px;
    }

    .arrow-btns {
        display: flex;
        gap: 12px;
    }

    .arrow-btns i {
        cursor: pointer;
        font-size: 0.9rem;
        color: #b0b0b0;
        transition: color 0.3s;
    }
    .arrow-btns i:hover { color: var(--bg-dark); }

    .slide-index {
        font-size: 0.8rem;
        font-weight: 700;
    }
    .slide-index span {
        color: #b0b0b0;
        font-weight: 400;
    }

    /* 반응형 레이아웃 처리 */
    @media (max-width: 900px) {
        .wrapper { grid-template-columns: 1fr; border: none; }
        .sidebar { display: none; }
        .bottom-section { grid-template-columns: 1fr; padding: 40px 20px; }
        .photo-card.left, .photo-card.right { margin-top: 0; }
        .search-box-container { position: relative; left: 0; bottom: 0; width: 100%; margin-top: 20px; }
    }
</style>

<div class="adv-container">
    <div class="wrapper">
        <aside class="sidebar">
            <div class="logo">교육</div>
            <a href="index.html" class="home-btn" title="홈으로">
                <i class="fa-solid fa-house"></i>
            </a>
        </aside>

        <main class="main-content">
            <nav class="navbar">
                <a href="#" class="active">Home</a>
                <a href="#">Services</a>
                <a href="#">Gallery</a>
                <a href="#">Places</a>
                <a href="#">Contact</a>
            </nav>

            <section class="hero-section">
                <h1 class="hero-title">Live the adventure</h1>
                
                <div class="search-box-container">
                    <div class="search-input-wrapper">
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <input type="text" placeholder="검색어를 입력하세요">
                    </div>
                    <div class="frequent-searches">
                        <h4>자주 찾는 검색어:</h4>
                        <p>어학연수 / 필리핀 / 여행 / 공부 / 추억</p>
                    </div>
                </div>
            </section>

            <section class="bottom-section">
                <div class="photo-card left">
                    <img src="Btouch.jpg" alt="비행기 만져보기">
                    <div class="photo-label">
                        <i class="fa-solid fa-camera"></i> 비행기 만져보기
                    </div>
                </div>

                <div class="description-area">
                    <div class="place-tag">어학연수 이야기</div>
                    <div class="info-tags">
                        <span><i class="fa-solid fa-plane"></i> 필리핀</span>
                        <span><i class="fa-solid fa-calendar"></i> 겨울 방학</span>
                        <span><i class="fa-solid fa-clock"></i> 한 달</span>
                    </div>
                    <h3>대학교 1학년 겨울 방학의 기록</h3>
                    <p>대학교 1학년 겨울 방학 동안 한 달간 필리핀에서 어학연수를 다녀왔습니다. 새로운 환경 속에서 공부하며 부딪혔던 경험들과 평생 잊지 못할 소중한 추억들이 가득했던 시간입니다.</p>
                </div>

                <div class="photo-card right">
                    <img src="yum.jpg" alt="가서 먹은 음식">
                    <div class="photo-label">
                        <i class="fa-solid fa-utensils"></i> 가서 먹은 음식
                    </div>
                </div>
            </section>

            <footer class="footer">
                <div class="footer-left">2026 PORTFOLIO</div>

                <div class="slider-controls">
                    <div class="arrow-btns">
                        <i class="fa-solid fa-caret-left"></i>
                        <i class="fa-solid fa-caret-right"></i>
                    </div>
                    <div class="slide-index">01<span>/div>
                </div>
            </footer>
        </main>
    </div>
</div>