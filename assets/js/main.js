// SMOOTH SCROLL

const lenis = new Lenis()

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

// CUSTOM CURSOR

const cursor = document.querySelector('.custom-cursor')

window.addEventListener('mousemove', (e) => {

    gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1
    })

})

// HERO INTRO

gsap.from('.svg-text', {
    strokeDasharray: 1200,
    strokeDashoffset: 1200,
    duration: 3,
    ease: 'power4.inOut'
})

gsap.from('.hero-desc', {
    opacity: 0,
    y: 30,
    delay: 1.5,
    duration: 1
})

// LETTER ANIMATION

gsap.from('.letter', {
    opacity: 0,
    y: 100,
    stagger: 0.08,
    duration: 1.2,
    scrollTrigger: {
        trigger: '.alphabet-nav',
        start: 'top 70%'
    }
})

// ORANGE POSTER

gsap.from('.orange-image', {
    scale: 0.5,
    rotate: -20,
    opacity: 0,
    duration: 2,
    scrollTrigger: {
        trigger: '.orange-section',
        start: 'top 70%'
    }
})

gsap.from('.orange-title', {
    y: 200,
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
        trigger: '.orange-section',
        start: 'top 80%'
    }
})

// FULLSCREEN MENU

const menuBtn = document.querySelector('.menu-btn')
const menuClose = document.querySelector('.menu-close')
const menu = document.querySelector('.menu-overlay')

menuBtn.addEventListener('click', () => {

    gsap.to(menu, {
        y: 0,
        duration: 1,
        ease: 'power4.inOut'
    })

})

menuClose.addEventListener('click', () => {

    gsap.to(menu, {
        y: '-100%',
        duration: 1,
        ease: 'power4.inOut'
    })

})

// PAGE TRANSITION

document.querySelectorAll('a').forEach(link => {

    link.addEventListener('click', e => {

        const href = link.getAttribute('href')

        if (
            href &&
            !href.startsWith('#') &&
            !href.startsWith('http')
        ) {

            e.preventDefault()

            gsap.to('body', {
                opacity: 0,
                duration: 0.5,
                onComplete: () => {
                    window.location = href
                }
            })

        }

    })

})

gsap.from('body', {
    opacity: 0,
    duration: 1
})