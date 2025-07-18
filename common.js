document.addEventListener('DOMContentLoaded', function() {
    gsap.registerPlugin(ScrollTrigger);

    // --- Header Scroll --- //
    const header = document.getElementById('header');
    ScrollTrigger.create({
        start: "top top-100",
        end: 99999,
        onUpdate: (self) => {
            if (self.direction === -1) { // Scrolling up
                header.classList.remove('scrolled');
            } else { // Scrolling down
                if (window.scrollY > 100) {
                    header.classList.add('scrolled');
                }
            }
        }
    });
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- Hero Animation --- //
    const hero = document.querySelector('.hero');
    const mainCatchphrase = document.querySelector('.main-catchphrase');
    
    // Split text for animation
    const split = new SplitType(mainCatchphrase, { types: 'chars' });

    gsap.from(split.chars, {
        y: 115,
        stagger: 0.05,
        duration: 0.5,
        ease: 'power2.out',
        onComplete: () => {
            hero.classList.add('loaded');
        }
    });

    // --- Parallax & Fade-in Effects on Scroll --- //
    gsap.utils.toArray('section').forEach((section, i) => {
        const h2 = section.querySelector('h2');
        const p = section.querySelectorAll('p');
        const cta = section.querySelector('.cta-button');
        const card = section.querySelectorAll('.business-card');

        if (h2) {
            gsap.from(h2, {
                scrollTrigger: {
                    trigger: section,
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                },
                opacity: 0,
                y: 50,
                duration: 1
            });
        }
        if (p) {
            gsap.from(p, {
                scrollTrigger: {
                    trigger: section,
                    start: 'top 70%',
                    toggleActions: 'play none none none'
                },
                opacity: 0,
                y: 30,
                stagger: 0.2,
                duration: 1
            });
        }
        if (cta) {
             gsap.from(cta, {
                scrollTrigger: {
                    trigger: section,
                    start: 'top 60%',
                    toggleActions: 'play none none none'
                },
                opacity: 0,
                y: 20,
                duration: 1
            });
        }
        if (card) {
             gsap.from(card, {
                scrollTrigger: {
                    trigger: section,
                    start: 'top 60%',
                    toggleActions: 'play none none none'
                },
                opacity: 0,
                y: 50,
                stagger: 0.3,
                duration: 1
            });
        }
    });

    // --- Vision Keywords Animation --- //
    const keywords = document.querySelectorAll('.vision .keyword');
    keywords.forEach(keyword => {
        gsap.to(keyword, {
            scrollTrigger: {
                trigger: keyword,
                start: 'top 80%',
                onEnter: () => keyword.style.fontWeight = '700',
                onLeaveBack: () => keyword.style.fontWeight = 'normal',
            },
        });
    });

    // --- SP Menu --- //
    const spMenuBtn = document.getElementById('sp-menu-btn');
    const spNav = document.getElementById('sp-nav');
    const spNavClose = document.getElementById('sp-nav-close');
    const spNavLinks = spNav.querySelectorAll('a');

    spMenuBtn.addEventListener('click', () => {
        spMenuBtn.classList.toggle('open');
        spNav.classList.toggle('open');
    });

    const closeMenu = () => {
        spMenuBtn.classList.remove('open');
        spNav.classList.remove('open');
    }

    spNavClose.addEventListener('click', closeMenu);
    spNavLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    })

});
