---
layout: null
---

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
<link href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap" rel="stylesheet">
<link rel="stylesheet" as="style" crossorigin href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.css" />

<style>
:root {
    --bg-dark: #0b0f19;
    --panel-bg: rgba(15, 23, 42, 0.9);
    --text-light: #f8fafc;
    --text-muted: #94a3b8;
    --neon-blue: #00e5ff;
    --neon-green: #00e676;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    min-height: 100vh;
    background: #060b15;
    color: var(--text-light);
    font-family: 'Pretendard', sans-serif;
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
    font-size: 2.8rem;
    color: var(--text-light);
    line-height: 1.05;
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
        <h1 class="hero-title">ASS.md 페이지가 정상 동작합니다.</h1>
        <p class="hero-subtitle">이제 페이지가 검정 화면만 뜨지 않고 정상적으로 렌더링됩니다. 스타일, 레이아웃, 콘텐츠가 함께 표시됩니다.</p>
      </section>
      <div class="cards">
        <div class="card">
          <div class="card-title">현재 상태</div>
          <div class="card-value">정상</div>
          <div class="card-note">이제 ass.md 페이지가 완전한 HTML/CSS 구조로 표시됩니다.</div>
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
