---
layout: null
---

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">

<style>
    :root {
        --bg-dark: #1a1a1a;
        --coral: #f27474;
        --text-dark: #333333;
        --text-muted: #777777;
    }

    .adv-container * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .adv-container {
        font-family: 'Poppins', sans-serif;
        background-color: #e5e5e5;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        padding: 20px;
    }

    .wrapper {
        width: 100%;
        max-width: 1100px;
        background-color: #ffffff;
        display: grid;
        grid-template-columns: 120px 1fr;
        box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        position: relative;
        overflow: hidden;
    }

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
        font-weight: 600;
        letter-spacing: 2px;
        font-size: 1.1rem;
    }

    .sidebar .info-btn {
        font-size: 0.85rem;
        letter-spacing: 1px;
        cursor: pointer;
        opacity: 0.8;
    }

    .main-content {
        display: flex;
        flex-direction: column;
        position: relative;
    }

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
    }
    .navbar a.active { font-weight: 600; }

    .hero-section {
        height: 380px;
        background: linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0)), 
                    url('C:/Users/user/Desktop/sonjhing.github.io/SEA') center/cover no-repeat;
        position: relative;
        padding: 40px 60px;
    }

    .hero-title {
        font-family: 'Playfair Display', serif;
        font-size: 3.5rem;
        color: #ffffff;
        font-weight: 700;
    }

    .search-box-container {
        position: absolute;
        bottom: 40px;
        left: -60px;
        background-color: var(--coral);
        color: #ffffff;
        width: 320px;
        padding: 25px;
        box-shadow: 5px 5px 15px rgba(0,0,0,0.1);
        z-index: 5;
    }

    .search-input-wrapper {
        display: flex;
        align-items: center;
        border-bottom: 1px solid rgba(255,255,255,0.6);
        padding-bottom: 8px;
        margin-bottom: 15px;
    }

    .search-input-wrapper i { margin-right: 10px; font-size: 0.9rem; opacity: 0.8; }
    .search-input-wrapper input {
        background: none; border: none; outline: none; color: #ffffff; font-size: 0.85rem; width: 100%;
    }
    .search-input-wrapper input::placeholder { color: rgba(255,255,255,0.7); }

    .frequent-searches h4 { font-size: 0.9rem; font-weight: 600; margin-bottom: 5px; }
    .frequent-searches p { font-size: 0.75rem; line-height: 1.4; opacity: 0.9; }

    .bottom-section {
        background-color: #ffffff;
        padding: 40px 40px 30px 100px;
        display: grid;
        grid-template-columns: 1.2fr 1fr 0.5fr;
        gap: 40px;
        align-items: center;
    }

    .content-card {
        background: #ffffff; padding: 12px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        margin-top: -80px; z-index: 4;
    }
    .content-card img { width: 100%; height: 180px; object-fit: cover; display: block; }

    .description-area { display: flex; flex-direction: column; }
    .place-tag {
        font-size: 0.75rem; text-transform: uppercase; letter-spacing: 2px;
        color: var(--text-muted); margin-bottom: 8px; display: flex; align-items: center; gap: 10px;
    }
    .place-tag::before { content: ''; display: inline-block; width: 30px; height: 1px; background-color: var(--text-muted); }

    .description-area h3 { font-family: 'Playfair Display', serif; font-size: 1.4rem; color: var(--text-dark); margin-bottom: 12px; }
    .description-area p { font-size: 0.78rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 20px; }

    .booking-row {
        display: flex; align-items: center; border: 1px solid #e0e0e0;
        justify-content: space-between; padding: 8px 15px; font-size: 0.8rem;
    }
    .book-btn { text-decoration: none; color: var(--text-dark); font-weight: 600; letter-spacing: 1px; }

    .right-thumb { box-shadow: 0 10px 30px rgba(0,0,0,0.1); padding: 10px 0 10px 10px; margin-top: -40px; overflow: hidden; }
    .right-thumb img { width: 120%; height: 180px; object-fit: cover; }

    .footer {
        display: flex; justify-content: space-between; align-items: center;
        padding: 0 40px 30px 100px; background-color: #ffffff;
    }
    .social-links { display: flex; gap: 20px; }
    .social-links a { text-decoration: none; color: var(--text-muted); font-size: 0.75rem; display: flex; align-items: center; gap: 6px; }
    
    .slider-controls { display: flex; align-items: center; gap: 15px; }
    .arrow-btns { display: flex; gap: 10px; color: #b0b0b0; font-size: 0.85rem; }
    .slide-index { font-size: 0.75rem; font-weight: 600; }
    .slide-index span { color: #b0b0b0; font-weight: 400; }
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
                <div class="search-box-container">
                    <div class="search-input-wrapper">
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <input type="text" placeholder="Search a destination">
                    </div>
                    <div class="frequent-searches">
                        <h4>Frequent searches:</h4>
                        <p>Country / Beach / Mountain / Trip / Boat / Sea / Weather</p>
                    </div>
                </div>
            </section>

            <section class="bottom-section">
                <div class="content-card">
                    <img src="C:/Users/user/Desktop/sonjhing.github.io/yum" alt="sea boat">
                </div>

                <div class="description-area">
                    <div class="place-tag">Place Name 01</div>
                    <h3>Lorem ipsum dolor sit amet.</h3>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                    <div class="booking-row">
                        <div class="price-info"><strong>600$</strong> / person</div>
                        <a href="#" class="book-btn">BOOK NOW</a>
                    </div>
                </div>

                <div class="right-thumb">
                    <img src="C:/Users/user/Desktop/sonjhing.github.io/Btouch" alt="next place">
                </div>
            </section>

            <footer class="footer">
                <div class="social-links">
                    <a href="#"><i class="fa-brands fa-facebook-f"></i> /liveadventure</a>
                    <a href="#"><i class="fa-brands fa-instagram"></i> @liveadventure</a>
                    <a href="#"><i class="fa-brands fa-youtube"></i> @live.adventure</a>
                </div>
                <div class="slider-controls">
                    <div class="arrow-btns">
                        <i class="fa-solid fa-caret-left"></i>
                        <i class="fa-solid fa-caret-right"></i>
                    </div>
                    <div class="slide-index">01<span>/05</span></div>
                </div>
            </footer>
        </main>
    </div>
</div>