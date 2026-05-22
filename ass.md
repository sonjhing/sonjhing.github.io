---
layout: null
---

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
<link href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap" rel="stylesheet">
<link rel="stylesheet" as="style" crossorigin href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.css" />

<style>
:root {
    --bg-dark: #060614;
    --panel-bg: rgba(8, 10, 18, 0.75);
    --text-light: #f4f9fb;
    --text-muted: #9aa7b8;
    --neon-cyan: #00e5ff;
    --neon-pink: #ff3ec7;
    --neon-purple: #8a2be2;
    --neon-green: #00ff9f;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    min-height: 100vh;
    color: var(--text-light);
    font-family: 'Pretendard', sans-serif;
    background:
      radial-gradient(1200px 600px at 10% 10%, rgba(138,43,226,0.06), transparent 8%),
      linear-gradient(180deg, rgba(0,0,0,0.6), rgba(2,6,12,0.9)),
      url('SEA.avif') center/cover fixed no-repeat;
}

.invest-container {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px 20px;
    background: radial-gradient(circle at top, #111827 0%, #0b1220 100%);
}

.wrapper {
    width: 100%;
    max-width: 1150px;
    display: grid;
    grid-template-columns: 260px 1fr;
    gap: 24px;
    background: rgba(10, 18, 31, 0.95);
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 22px;
    box-shadow: 0 35px 70px rgba(0,0,0,0.45);
    overflow: hidden;
    position: relative;
}

.sidebar {
    background: linear-gradient(180deg, #0b0f19 0%, #020617 100%);
    padding: 34px 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: var(--text-muted);
}

.logo {
    font-family: 'Share Tech Mono', monospace;
    font-size: 1.2rem;
    letter-spacing: 1px;
    font-weight: 700;
    color: var(--neon-blue);
    margin-bottom: 18px;
}

.sidebar p {
    line-height: 1.8;
    color: #cbd5e1;
}

.nav-links {
    display: grid;
    gap: 14px;
    margin: 28px 0;
}

.nav-links a {
    color: var(--text-muted);
    text-decoration: none;
    font-size: 0.95rem;
    transition: color 0.25s ease;
}

.nav-links a:hover,
.nav-links a.active {
    color: var(--text-light);
}

.home-btn {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 12px 16px;
    border-radius: 14px;
    border: 1px solid rgba(255,255,255,0.12);
    color: var(--text-muted);
    text-decoration: none;
    transition: all 0.25s ease;
}

.home-btn:hover {
    color: var(--neon-blue);
    border-color: rgba(0,229,255,0.3);
}

.main-content {
    padding: 32px 34px 32px 32px;
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.navbar {
    display: flex;
    flex-wrap: wrap;
    gap: 18px;
}

.navbar a {
    color: var(--text-muted);
    text-decoration: none;
    font-size: 0.88rem;
    transition: color 0.25s ease;
}

.navbar a.active,
.navbar a:hover {
    color: var(--neon-blue);
}

.hero-section {
    padding: 36px 32px;
    border-radius: 20px;
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.08);
    min-height: 260px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
}

.hero-title {
    font-family: 'Share Tech Mono', monospace;
    font-size: 3rem;
    color: var(--text-light);
    line-height: 1.05;
    text-shadow: 0 0 12px rgba(0,229,255,0.12), 0 0 28px rgba(255,62,199,0.06);
    filter: drop-shadow(0 6px 18px rgba(0,0,0,0.6));
}

.hero-subtitle {
    color: var(--text-muted);
    font-size: 1rem;
    max-width: 720px;
    line-height: 1.8;
}

.cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 18px;
}

.card {
    padding: 24px;
    border-radius: 18px;
    background: rgba(15, 23, 42, 0.85);
    border: 1px solid rgba(255,255,255,0.08);
}

/* Neon signs and cyberpunk accents */
.neon-layer {
    position: absolute;
    inset: 0;
    pointer-events: none;
    mix-blend-mode: screen;
}
.neon-sign {
    position: absolute;
    font-family: 'Share Tech Mono', monospace;
    color: var(--neon-cyan);
    text-transform: uppercase;
    letter-spacing: 0.12em;
    padding: 8px 14px;
    border-radius: 6px;
    border: 1px solid rgba(255,255,255,0.08);
    box-shadow: 0 0 18px rgba(0,229,255,0.12), 0 6px 30px rgba(0,0,0,0.6);
    backdrop-filter: blur(6px);
    transform: translateZ(0);
    animation: neon-flicker 3s infinite alternate;
}
.neon-sign.pink { color: var(--neon-pink); box-shadow: 0 0 20px rgba(255,62,199,0.18); }
.neon-sign.purple { color: var(--neon-purple); box-shadow: 0 0 20px rgba(138,43,226,0.18); }
.vertical-sign {
    writing-mode: vertical-rl;
    font-size: 1.14rem;
    padding: 10px 8px;
    border-radius: 8px;
}
@keyframes neon-flicker {
    0% { opacity: 1; filter: drop-shadow(0 0 14px rgba(0,229,255,0.25)); }
    30% { opacity: 0.85; }
    45% { opacity: 0.96; }
    60% { opacity: 0.7; filter: none; }
    100% { opacity: 1; }
}

.holo-grid {
    position: absolute;
    inset: 0;
    background-image: linear-gradient(transparent 60%, rgba(255,255,255,0.02) 61%), linear-gradient(90deg, rgba(255,255,255,0.02) 60%, transparent 61%);
    background-size: 100% 60px, 60px 100%;
    opacity: 0.06;
}

.card-title {
    color: var(--text-muted);
    font-size: 0.85rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    margin-bottom: 12px;
}

.card-value {
    font-size: 2rem;
    color: var(--text-light);
    margin-bottom: 10px;
}

.card-note {
    color: #cbd5e1;
    line-height: 1.7;
    font-size: 0.95rem;
}

.highlight {
    color: var(--neon-green);
}
</style>

<div class="invest-container">
  <div class="wrapper">
        <div class="neon-layer">
            <div class="neon-sign pink vertical-sign" style="left:12px;top:40px;">资
                产
            </div>
            <div class="neon-sign purple" style="right:28px;top:28px;">ASSET INVEST</div>
            <div class="neon-sign" style="right:140px;top:110px;">HONG KONG</div>
            <div class="holo-grid"></div>
        </div>
    <aside class="sidebar">
      <div>
        <div class="logo">ASS DASHBOARD</div>
        <p>이제 ass.md 파일은 정상적인 페이지 형태로 렌더링됩니다. 검정 화면 대신 내용을 볼 수 있습니다.</p>
      </div>
      <nav class="nav-links">
        <a class="active" href="#overview">Overview</a>
        <a href="#stats">Stats</a>
        <a href="#insights">Insights</a>
      </nav>
      <a class="home-btn" href="../index.html"><i class="fa-solid fa-house"></i>홈으로</a>
    </aside>
    <main class="main-content">
      <div class="navbar">
        <a class="active" href="#overview">Overview</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#news">News</a>
      </div>
            <section class="hero-section">
                <h1 class="hero-title">ASS Dashboard — Asset Investment</h1>
                <p class="hero-subtitle">실시간 포트폴리오 뷰와 시그널 기반 인사이트로 자산 투자 흐름을 시각화합니다. 네온 간판과 사이버펑크 테마로 홍콩 밤거리를 연상시킵니다.</p>
            </section>
      <div class="cards">
                <div class="card">
                    <div class="card-title">포트폴리오 가치</div>
                    <div class="card-value highlight">₿ 1.182M</div>
                    <div class="card-note">실시간 합산 자산 가치 — 네온 인디케이터로 시각화됩니다.</div>
                </div>
        <div class="card">
          <div class="card-title">테마</div>
          <div class="card-value highlight">네온 금융</div>
          <div class="card-note">어두운 배경에 밝은 포인트 색이 어우러진 디자인입니다.</div>
        </div>
        <div class="card">
          <div class="card-title">링크</div>
          <div class="card-value">클릭 가능</div>
          <div class="card-note">홈 버튼을 클릭하면 사이트의 메인 페이지로 이동합니다.</div>
        </div>
      </div>
    </main>
  </div>
</div>
