---
layout: null
---

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.css"/>

<style>
:root {
    --bg-dark: #1a1a1a;
    --coral: #f27474;
    --text-dark: #222;
    --text-muted: #777;
}

/* RESET */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Pretendard', sans-serif;
}

/* =========================
   PAGE SCROLL SYSTEM
========================= */
html, body {
    height: 100%;
    scroll-behavior: smooth;
}

.adv-container {
    height: 100vh;
    overflow-y: scroll;
    scroll-snap-type: y mandatory;
}

/* each page */
.page {
    height: 100vh;
    scroll-snap-align: start;
}

/* =========================
   ANIMATION SYSTEM
========================= */
@keyframes fadeUp {
    from {
        opacity: 0;
        transform: translateY(40px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.anim {
    opacity: 0;
    animation: fadeUp 1s ease forwards;
}

.delay-1 { animation-delay: 0.2s; }
.delay-2 { animation-delay: 0.4s; }
.delay-3 { animation-delay: 0.6s; }
.delay-4 { animation-delay: 0.8s; }

/* =========================
   TYPING EFFECT
========================= */
@keyframes typing {
    from { width: 0; }
    to { width: 100%; }
}

@keyframes blink {
    50% { border-color: transparent; }
}

.typing {
    width: 0;
    white-space: nowrap;
    overflow: hidden;
    border-right: 2px solid rgba(255,255,255,0.7);
    animation: typing 2.2s steps(30, end) forwards,
               blink 0.7s infinite;
}

/* =========================
   LAYOUT
========================= */
.wrapper {
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: 120px 1fr;
}

/* sidebar */
.sidebar {
    background: #1a1a1a;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 40px 0;
}

.sidebar .logo {
    font-weight: 700;
}

.sidebar .home-btn {
    color: white;
    opacity: 0.7;
}

/* =========================
   NAV
========================= */
.navbar {
    display: flex;
    gap: 25px;
    padding: 20px;
    font-size: 0.85rem;
}

.navbar a {
    text-decoration: none;
    color: #333;
}

.navbar a:hover {
    color: var(--coral);
}

/* =========================
   HERO
========================= */
.hero-section {
    height: 380px;
    background: linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.05)),
                url('SEA.avif') center/cover;
    background-attachment: fixed;
    padding: 40px;
    color: white;
}

.hero-title {
    font-family: 'Playfair Display', serif;
    font-size: 3.2rem;
}

/* search box */
.search-box-container {
    margin-top: 40px;
    background: var(--coral);
    padding: 20px;
    width: 320px;
    color: white;
}

/* =========================
   PAGE 2 CONTENT
========================= */
.bottom-section {
    display: grid;
    grid-template-columns: 1fr 1.2fr 1fr;
    gap: 30px;
    padding: 60px;
    align-items: center;
}

.photo-card {
    transition: 0.8s cubic-bezier(0.2,0.8,0.2,1);
}

.photo-card:hover {
    transform: translateY(-10px) scale(1.05);
}

.photo-card img {
    width: 100%;
    display: block;
}

/* text */
.description-area h3 {
    font-size: 1.4rem;
    margin: 10px 0;
}

.description-area p {
    color: var(--text-muted);
    max-width: 420px;
    line-height: 1.6;
}

/* tags */
.info-tags span {
    display: inline-block;
    font-size: 0.75rem;
    padding: 4px 10px;
    background: #f1f1f1;
    margin-right: 5px;
}

/* footer */
.footer {
    display: flex;
    justify-content: space-between;
    padding: 40px;
    font-size: 0.8rem;
    color: #777;
}

/* =========================
   RESPONSIVE
========================= */
@media (max-width: 900px) {
    .wrapper {
        grid-template-columns: 1fr;
    }

    .sidebar {
        display: none;
    }

    .bottom-section {
        grid-template-columns: 1fr;
    }
}
</style>

<div class="adv-container">

<!-- PAGE 1 -->
<section class="page">
<div class="wrapper">

    <aside class="sidebar">
        <div class="logo">EDU</div>
        <a class="home-btn"><i class="fa-solid fa-house"></i></a>
    </aside>

    <main>

        <nav class="navbar anim delay-1">
            <a href="#">Home</a>
            <a href="#">Stories</a>
            <a href="#">Journeys</a>
            <a href="#">Places</a>
        </nav>

        <section class="hero-section">
            <h1 class="hero-title typing">Winter, rewritten abroad</h1>

            <div class="search-box-container anim delay-2">
                <b>Popular searches</b>
                <p>Language / Philippines / Travel / Memory</p>
            </div>
        </section>

    </main>

</div>
</section>

<!-- PAGE 2 -->
<section class="page">
<div class="wrapper">

    <aside class="sidebar"></aside>

    <main>

        <section class="bottom-section">

            <div class="photo-card anim delay-2">
                <img src="Btouch.jpg">
                <p>Airport moment</p>
            </div>

            <div class="description-area anim delay-3">
                <div class="info-tags">
                    <span>Philippines</span>
                    <span>Winter</span>
                    <span>1 Month</span>
                </div>

                <h3>A winter semester abroad</h3>

                <p>
                    A one-month language program in the Philippines.
                    Between unfamiliar streets and long afternoons, everything became memory.
                </p>
            </div>

            <div class="photo-card anim delay-4">
                <img src="yum.jpg">
                <p>Local food</p>
            </div>

        </section>

        <footer class="footer anim delay-4">
            <div>EDITORIAL ARCHIVE 2026</div>
            <div>01 / 03</div>
        </footer>

    </main>

</div>
</section>

</div>

<script>
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
        }
    });
});

document.querySelectorAll('.anim').forEach(el => observer.observe(el));
</script>