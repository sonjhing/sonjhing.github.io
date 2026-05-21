---
layout: null
---

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Noto+Sans+KR:wght@400;600&display=swap" rel="stylesheet">

<style>
:root {
  --bg: #1a1b1e;
  --panel: #ffffff;
  --accent: #0d9488;
  --accent-light: #14b8a6;
  --dark: #111827;
  --muted: #6b7280;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Outfit', 'Noto Sans KR', sans-serif;
  background: var(--bg);
  color: var(--dark);
}

/* ── Container ── */
.adv-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  perspective: 1200px;
}

/* ── Wrapper – 3D depth ── */
.wrapper {
  width: 100%;
  max-width: 1300px;
  border-radius: 32px;
  overflow: hidden;
  display: grid;
  grid-template-columns: 100px 1fr;
  background: var(--panel);
  box-shadow:
    0 2px 4px rgba(0,0,0,0.04),
    0 8px 16px rgba(0,0,0,0.06),
    0 24px 48px rgba(0,0,0,0.10),
    0 48px 80px rgba(0,0,0,0.14);
  border: 1px solid rgba(255,255,255,0.15);
  transform: rotateX(1deg);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}
.wrapper:hover {
  transform: rotateX(0deg) translateY(-4px);
  box-shadow:
    0 4px 8px rgba(0,0,0,0.05),
    0 12px 24px rgba(0,0,0,0.08),
    0 32px 64px rgba(0,0,0,0.12),
    0 56px 100px rgba(0,0,0,0.18);
}

/* ── Sidebar ── */
.sidebar {
  background: linear-gradient(180deg, #111827, #1e293b);
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 36px 14px;
}
.sidebar .logo {
  font-size: 0.85rem;
  letter-spacing: 2px;
  font-weight: 700;
  writing-mode: vertical-rl;
  text-orientation: mixed;
}
.sidebar .home-btn {
  width: 40px;
  height: 200px;
  border-radius: 50%;
  background: rgba(255,255,255,0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #fff;
  font-size: 1rem;
  transition: background 0.3s;
}
.sidebar .home-btn:hover {
  background: rgba(255,255,255,0.25);
}

/* ── Main ── */
.main-content {
  display: flex;
  flex-direction: column;
  position: relative;
}

/* ── Navbar ── */
.navbar {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 28px;
  height: 60px;
  padding: 0 36px;
  background: #ffffff;
  border-bottom: 1px solid #f0f0f0;
}
.navbar a {
  text-decoration: none;
  color: var(--muted);
  font-size: 0.82rem;
  font-weight: 500;
  transition: color 0.3s;
}
.navbar a.active {
  font-weight: 700;
  color: var(--dark);
}
.navbar a:hover {
  color: var(--accent);
}

/* ── Hero Section ── */
.hero-section {
  position: relative;
  min-height: 380px;
  padding: 50px 56px 80px;
  background:
    linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.05)),
    url('SEA.avif') center/cover no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.hero-section::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(17,24,39,0.25) 0%, rgba(17,24,39,0.05) 100%);
  pointer-events: none;
}

/* ── Hero Text – no overlap ── */
.hero-text {
  position: relative;
  z-index: 2;
}
.hero-subtitle {
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  color: rgba(255,255,255,0.85);
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-bottom: 12px;
}
.hero-title {
  font-family: 'Playfair Display', serif;
  font-size: 2.8rem;
  color: #ffffff;
  line-height: 1.15;
  margin-bottom: 8px;
  text-shadow: 0 2px 20px rgba(0,0,0,0.3);
}
.hero-highlight {
  font-family: 'Playfair Display', serif;
  font-size: 3.6rem;
  font-weight: 700;
  color: #ffffff;
  line-height: 1.1;
  text-shadow: 0 2px 30px rgba(0,0,0,0.35);
  background: linear-gradient(135deg, #ffffff, #e0f2fe);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* ── Search Box – teal gradient ── */
.search-box {
  position: relative;
  margin: 20px auto 0;
  width: 350px;
  background: linear-gradient(135deg, #0d9488, #0891b2);
  border-radius: 24px;
  padding: 26px 28px;
  z-index: 10;
  box-shadow:
    0 8px 20px rgba(13,148,136,0.25),
    0 20px 50px rgba(13,148,136,0.15);
  border: 1px solid rgba(255,255,255,0.15);
  backdrop-filter: blur(4px);
}
.search-row {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 16px;
}
.search-row i {
  color: rgba(255,255,255,0.9);
  font-size: 0.95rem;
}
.search-row input {
  flex: 1;
  border: none;
  background: transparent;
  border-bottom: 1px solid rgba(255,255,255,0.35);
  padding: 10px 0;
  color: #ffffff;
  font-size: 0.9rem;
  outline: none;
  transition: border-color 0.3s;
}
.search-row input:focus {
  border-bottom-color: rgba(255,255,255,0.8);
}
.search-row input::placeholder {
  color: rgba(255,255,255,0.65);
}
.search-box h4 {
  color: #ffffff;
  font-size: 0.88rem;
  margin-bottom: 8px;
  font-weight: 600;
}
.search-box p {
  color: rgba(255,255,255,0.85);
  font-size: 0.78rem;
  line-height: 1.7;
}

/* ── Bottom Content – photos left & right ── */
.bottom-content {
  padding: 56px 44px 36px;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

/* Info row */
.info-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 0 20px;
}
.info-tag {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 16px;
  background: #f1f5f9;
  border-radius: 20px;
  font-size: 0.78rem;
  color: var(--muted);
  font-weight: 500;
}
.info-tag i {
  color: var(--accent);
  font-size: 0.7rem;
}

/* Photos grid – left & right split */
.photos-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 28px;
  padding: 0 20px;
}
.photo-card {
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  box-shadow:
    0 4px 12px rgba(0,0,0,0.06),
    0 16px 40px rgba(0,0,0,0.10);
  border: 1px solid rgba(0,0,0,0.04);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}
.photo-card.left {
  height: 260px;
}
.photo-card.right {
  height: 180px;
}
.photo-card img {
  height: 100%;
  object-fit: cover;
}
.photo-card:hover {
  transform: translateY(-6px) scale(1.08);
  box-shadow:
    0 8px 20px rgba(0,0,0,0.08),
    0 24px 56px rgba(0,0,0,0.14);
}
.photo-label {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 16px 20px;
  background: linear-gradient(transparent, rgba(0,0,0,0.55));
  color: #ffffff;
  font-size: 0.82rem;
  font-weight: 500;
  letter-spacing: 0.5px;
}

/* Description block */
.desc-block {
  text-align: center;
  padding: 8px 40px 0;
}
.desc-block .place-tag {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  color: var(--muted);
  margin-bottom: 14px;
}
.desc-block .place-tag::before,
.desc-block .place-tag::after {
  content: '';
  display: inline-block;
  width: 24px;
  height: 1px;
  background: #d1d5db;
}
.desc-block p {
  color: var(--muted);
  font-size: 0.88rem;
  line-height: 1.8;
  max-width: 560px;
  margin: 0 auto;
}

/* ── Footer ── */
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 44px 28px;
  border-top: 1px solid #f0f0f0;
  margin-top: 8px;
}
.footer-left {
  font-size: 0.78rem;
  color: var(--muted);
  letter-spacing: 1px;
}
.slider {
  display: inline-flex;
  align-items: center;
  gap: 14px;
  color: var(--muted);
  font-size: 0.82rem;
  font-weight: 700;
}
.slider i {
  cursor: pointer;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f1f5f9;
  transition: background 0.3s, color 0.3s;
}
.slider i:hover {
  background: var(--accent);
  color: #fff;
}

/* ── Responsive ── */
@media (max-width: 900px) {
  .wrapper {
    grid-template-columns: 1fr;
    transform: none;
  }
  .sidebar {
    display: none;
  }
  .photos-grid {
    grid-template-columns: 1fr;
  }
  .hero-highlight {
    font-size: 2.4rem;
  }
  .hero-title {
    font-size: 2rem;
  }
  .search-box {
    position: relative;
    right: auto;
    bottom: auto;
    margin: 20px 0 0;
    width: 100%;
  }
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


      <section class="bottom-content">
        <div class="info-row">
          <span class="info-tag"><i class="fa-solid fa-plane"></i> 필리핀</span>
          <span class="info-tag"><i class="fa-solid fa-calendar"></i> 겨울 방학</span>
          <span class="info-tag"><i class="fa-solid fa-clock"></i> 한 달</span>
        </div>
          <div class="search-box">
            <div class="search-row">
              <i class="fa-solid fa-magnifying-glass"></i>
              <input type="text" placeholder="검색어를 입력하세요">
            </div>
            <h4>자주 찾는 검색어:</h4>
            <p>어학연수 / 필리핀 / 여행 / 공부 / 추억</p>
          </div>
        <div class="photos-grid">
<div class="photo-card left">
            <img src="Btouch.jpg" alt="비행기 만져보기">
            <div class="photo-label"><i class="fa-solid fa-camera" style="margin-right:6px;font-size:0.7rem;"></i> 비행기 만져보기</div>
          </div>
<div class="photo-card right">
            <img src="yum.jpg" alt="가서 먹은 음식">
            <div class="photo-label"><i class="fa-solid fa-utensils" style="margin-right:6px;font-size:0.7rem;"></i> 가서 먹은 음식</div>
          </div>
        </div>
        <div class="desc-block">
          <span class="place-tag">어학연수 이야기</span>
          <p>대학교 1학년 겨울 방학 동안 한 달간 필리핀에서 어학연수를 다녀왔습니다. 새로운 경험과 추억이 가득한 시간이었습니다.</p>
        </div>
      </section>
      <footer class="footer">
        <div class="footer-left">2026 PORTFOLIO</div>
        <div class="slider">
          <i class="fa-solid fa-caret-left"></i>
          <span>01</span>
          <i class="fa-solid fa-caret-right"></i>
        </div>
      </footer>
    </main>
  </div>
</div>