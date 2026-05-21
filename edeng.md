---
layout: null
---

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">

<style>
:root {
  --bg: #f3f4f6;
  --panel: #ffffff;
  --accent: #f27474;
  --dark: #111827;
  --muted: #6b7280;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Poppins', sans-serif;
  background: var(--bg);
  color: var(--dark);
}
.adv-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
}
.wrapper {
  width: 100%;
  max-width: 1140px;
  border-radius: 28px;
  overflow: hidden;
  display: grid;
  grid-template-columns: 120px 1fr;
  box-shadow: 0 30px 80px rgba(17,24,39,0.12);
  background: var(--panel);
}
.sidebar {
  background: #111827;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 40px 18px;
}
.sidebar .logo {
  font-size: 0.95rem;
  letter-spacing: 2px;
  font-weight: 700;
}
.sidebar .info-btn {
  font-size: 0.85rem;
  letter-spacing: 1px;
  opacity: 0.82;
  cursor: pointer;
}
.main-content {
  display: flex;
  flex-direction: column;
  position: relative;
}
.navbar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 70px;
  padding: 0 30px;
  background: #ffffff;
  border-bottom: 1px solid #e5e7eb;
}
.navbar a {
  text-decoration: none;
  color: var(--dark);
  font-size: 0.9rem;
  font-weight: 500;
}
.navbar a.active {
  font-weight: 700;
}
.hero-section {
  position: relative;
  min-height: 430px;
  padding: 46px 60px 70px;
  background: linear-gradient(to bottom, rgba(0,0,0,0.15), rgba(0,0,0,0)), url('SEA.avif') center/cover no-repeat;
}
.hero-section::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(17,24,39,0.18), rgba(17,24,39,0.08));
}
.hero-title {
  position: relative;
  font-family: 'Playfair Display', serif;
  font-size: 3.4rem;
  color: #ffffff;
  line-height: 1.05;
  max-width: 520px;
}
.search-box {
  position: absolute;
  left: 48px;
  bottom: -28px;
  width: 340px;
  background: var(--accent);
  border-radius: 22px;
  padding: 26px;
  box-shadow: 0 22px 45px rgba(17,24,39,0.18);
}
.search-row {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 18px;
}
.search-row i {
  color: rgba(255,255,255,0.9);
}
.search-row input {
  flex: 1;
  border: none;
  background: transparent;
  border-bottom: 1px solid rgba(255,255,255,0.45);
  padding: 10px 0;
  color: #ffffff;
  font-size: 0.95rem;
  outline: none;
}
.search-row input::placeholder {
  color: rgba(255,255,255,0.75);
}
.search-box h4 {
  color: #ffffff;
  font-size: 0.95rem;
  margin-bottom: 10px;
}
.search-box p {
  color: rgba(255,255,255,0.9);
  font-size: 0.82rem;
  line-height: 1.7;
}
.bottom-content {
  padding: 40px 44px 44px;
  display: grid;
  grid-template-columns: 1.4fr 1fr 0.6fr;
  gap: 34px;
}
.card {
  border-radius: 22px;
  overflow: hidden;
  box-shadow: 0 30px 60px rgba(17,24,39,0.08);
}
.card img {
  width: 100%;
  height: 100%;
  min-height: 240px;
  object-fit: cover;
}
.description {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 18px 0;
}
.place-tag {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 1.8px;
  color: var(--muted);
}
.place-tag::before {
  content: '';
  display: inline-block;
  width: 30px;
  height: 1px;
  background: var(--muted);
}
.description h3 {
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  color: #111827;
  margin: 18px 0 14px;
  line-height: 1.25;
}
.description p {
  color: var(--muted);
  font-size: 0.92rem;
  line-height: 1.75;
}
.booking {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #e5e7eb;
  padding-top: 18px;
}
.booking strong {
  font-size: 0.98rem;
}
.book-btn {
  color: var(--dark);
  text-decoration: none;
  font-weight: 700;
  letter-spacing: 0.08em;
}
.right-thumb {
  border-radius: 22px;
  overflow: hidden;
  box-shadow: 0 30px 60px rgba(17,24,39,0.08);
}
.right-thumb img {
  width: 100%;
  height: 100%;
  min-height: 100%;
  object-fit: cover;
}
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 44px 32px;
}
.social-links {
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
}
.social-links a {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--muted);
  font-size: 0.82rem;
  text-decoration: none;
}
.slider {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  color: var(--muted);
  font-size: 0.82rem;
  font-weight: 700;
}
.slider i {
  cursor: pointer;
}
</style>

<div class="adv-container">
  <div class="wrapper">
    <aside class="sidebar">
      <div class="logo">LOGO</div>
      <div class="info-btn">+ INFO</div>
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
        <div class="search-box">
          <div class="search-row">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Search a destination">
          </div>
          <h4>Frequent searches:</h4>
          <p>Country / Beach / Mountain / Trip / Boat / Sea / Weather</p>
        </div>
      </section>
      <section class="bottom-content">
        <div class="card">
          <img src="yum.jpg" alt="sea boat">
        </div>
        <div class="description">
          <span class="place-tag">Place Name 01</span>
          <h3>Lorem ipsum dolor sit amet.</h3>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
          <div class="booking">
            <strong>600$ / person</strong>
            <a href="#" class="book-btn">BOOK NOW</a>
          </div>
        </div>
        <div class="right-thumb">
          <img src="Btouch.jpg" alt="next place">
        </div>
      </section>
      <footer class="footer">
        <div class="social-links">
          <a href="#"><i class="fa-brands fa-facebook-f"></i> /liveadventure</a>
          <a href="#"><i class="fa-brands fa-instagram"></i> @liveadventure</a>
          <a href="#"><i class="fa-brands fa-youtube"></i> @live.adventure</a>
        </div>
        <div class="slider">
          <i class="fa-solid fa-caret-left"></i>
          <span>01</span>
          <span>/05</span>
          <i class="fa-solid fa-caret-right"></i>
        </div>
      </footer>
    </main>
  </div>
</div>