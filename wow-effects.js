/* ============================================
   WOW EFFECTS - ADVANCED JAVASCRIPT
   ============================================ */

// ===== TYPING EFFECT =====
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            // Add cursor blink after typing
            element.innerHTML += '<span class="typing-cursor"></span>';
        }
    }

    type();
}

 

// ===== PARTICLES EFFECT =====
function createParticles() {
    const particlesContainer = document.getElementById('particles-js');
    if (!particlesContainer) return;

    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 4 + 1}px;
            height: ${Math.random() * 4 + 1}px;
            background: ${Math.random() > 0.5 ? '#0093D0' : '#FDB813'};
            opacity: ${Math.random() * 0.5 + 0.2};
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${Math.random() * 10 + 10}s linear infinite;
            animation-delay: ${Math.random() * 5}s;
            border-radius: 50%;
            box-shadow: 0 0 10px currentColor;
        `;
        particlesContainer.appendChild(particle);
    }

    // Add particle animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0%, 100% {
                transform: translate(0, 0) scale(1);
                opacity: 0.2;
            }
            50% {
                transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) scale(1.5);
                opacity: 0.8;
            }
        }
    `;
    document.head.appendChild(style);
}

// Initialize particles only if container exists
document.addEventListener('DOMContentLoaded', () => {
    const particlesContainer = document.getElementById('particles-js');
    if (particlesContainer) {
        createParticles();
    }
});

// ===== PARALLAX SCROLLING =====
window.addEventListener('scroll', () => {
    // Désactiver le parallaxe sur mobile pour améliorer les performances
    if (window.innerWidth <= 768) return;
    
    const scrolled = window.pageYOffset;

    // Parallax for elements with data-speed attribute
    document.querySelectorAll('.parallax-layer').forEach(layer => {
        const speed = layer.dataset.speed || 0.5;
        const yPos = -(scrolled * speed);
        layer.style.transform = `translateY(${yPos}px)`;
    });

    // Hero parallax
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.backgroundPositionY = `${scrolled * 0.5}px`;
    }
});

// ===== 3D TILT EFFECT ON CARDS =====
function init3DTilt() {
    const cards = document.querySelectorAll('.feature-card, .service-card, .vm-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
    });
}

// Initialize 3D tilt
document.addEventListener('DOMContentLoaded', init3DTilt);

// ===== ADVANCED SCROLL REVEAL =====
function advancedScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('active');

                    // Add special effects
                    entry.target.style.animation = `
                        revealScale 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards,
                        glowPulse 2s ease-in-out infinite ${index * 0.1}s
                    `;
                }, index * 100);

                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    reveals.forEach(reveal => observer.observe(reveal));

    // Add animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes revealScale {
            0% {
                opacity: 0;
                transform: translateY(50px) scale(0.8) rotateX(-10deg);
            }
            100% {
                opacity: 1;
                transform: translateY(0) scale(1) rotateX(0);
            }
        }

        @keyframes glowPulse {
            0%, 100% {
                filter: drop-shadow(0 0 5px rgba(0, 147, 208, 0.3));
            }
            50% {
                filter: drop-shadow(0 0 20px rgba(0, 147, 208, 0.6));
            }
        }
    `;
    document.head.appendChild(style);
}

// Initialize advanced scroll reveal
document.addEventListener('DOMContentLoaded', advancedScrollReveal);

// ===== MAGNETIC BUTTONS =====
function magneticButtons() {
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            button.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px) scale(1.05)`;
        });

        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translate(0, 0) scale(1)';
        });
    });
}

// Initialize magnetic buttons
document.addEventListener('DOMContentLoaded', magneticButtons);

// ===== COUNTER ANIMATION WITH EASING =====
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.dataset.target);
                const duration = 2000;
                const start = 0;
                const startTime = performance.now();

                function easeOutQuart(t) {
                    return 1 - Math.pow(1 - t, 4);
                }

                function updateCounter(currentTime) {
                    const elapsed = currentTime - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    const easedProgress = easeOutQuart(progress);
                    const current = Math.floor(start + (target - start) * easedProgress);

                    entry.target.textContent = current.toLocaleString();

                    // Add glow effect during count
                    entry.target.style.textShadow = `
                        0 0 20px rgba(253, 184, 19, ${0.5 + easedProgress * 0.5}),
                        0 0 40px rgba(253, 184, 19, ${0.3 + easedProgress * 0.3})
                    `;

                    if (progress < 1) {
                        requestAnimationFrame(updateCounter);
                    } else {
                        entry.target.textContent = target.toLocaleString() + '+';
                    }
                }

                requestAnimationFrame(updateCounter);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
}

// Initialize counters
document.addEventListener('DOMContentLoaded', animateCounters);

// ===== CUSTOM CURSOR TRAIL =====
function createCursorTrail() {
    const trail = [];
    const trailLength = 20;

    for (let i = 0; i < trailLength; i++) {
        const dot = document.createElement('div');
        dot.className = 'cursor-trail';
        dot.style.cssText = `
            position: fixed;
            width: ${10 - i * 0.3}px;
            height: ${10 - i * 0.3}px;
            background: ${i % 2 === 0 ? '#0093D0' : '#FDB813'};
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            opacity: ${1 - i / trailLength};
            transition: all 0.1s ease;
            box-shadow: 0 0 10px currentColor;
            mix-blend-mode: screen;
        `;
        document.body.appendChild(dot);
        trail.push({ element: dot, x: 0, y: 0 });
    }

    let mouseX = 0;
    let mouseY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateTrail() {
        let x = mouseX;
        let y = mouseY;

        trail.forEach((dot, index) => {
            dot.x += (x - dot.x) * 0.3;
            dot.y += (y - dot.y) * 0.3;

            dot.element.style.left = dot.x + 'px';
            dot.element.style.top = dot.y + 'px';

            x = dot.x;
            y = dot.y;
        });

        requestAnimationFrame(animateTrail);
    }

    animateTrail();
}

 

// ===== SMOOTH SCROLL WITH EASING =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - 80;
            const startPosition = window.pageYOffset;
            const distance = targetPosition - startPosition;
            const duration = 1000;
            let start = null;

            function easeInOutCubic(t) {
                return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
            }

            function animation(currentTime) {
                if (start === null) start = currentTime;
                const timeElapsed = currentTime - start;
                const progress = Math.min(timeElapsed / duration, 1);
                const ease = easeInOutCubic(progress);

                window.scrollTo(0, startPosition + distance * ease);

                if (timeElapsed < duration) {
                    requestAnimationFrame(animation);
                }
            }

            requestAnimationFrame(animation);
        }
    });
});

// ===== PROCESS FLOW ANIMATION =====
function animateProcessFlow() {
    const processSteps = document.querySelectorAll('.process-step');
    const arrows = document.querySelectorAll('.process-arrow');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    // Animate step
                    entry.target.style.animation = `
                        slideInScale 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards
                    `;

                    // Animate corresponding arrow
                    if (arrows[index]) {
                        arrows[index].style.animation = `
                            arrowGlow 0.6s ease-in-out forwards ${0.4}s
                        `;
                    }
                }, index * 200);

                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    processSteps.forEach(step => observer.observe(step));

    // Add animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInScale {
            0% {
                opacity: 0;
                transform: translateX(-50px) scale(0.8);
            }
            100% {
                opacity: 1;
                transform: translateX(0) scale(1);
            }
        }

        @keyframes arrowGlow {
            0%, 100% {
                color: var(--secondary-blue);
                filter: drop-shadow(0 0 5px var(--secondary-blue));
            }
            50% {
                color: var(--accent-orange);
                filter: drop-shadow(0 0 20px var(--accent-orange));
                transform: translateX(10px) scale(1.2);
            }
        }
    `;
    document.head.appendChild(style);
}

// Initialize process flow animation
document.addEventListener('DOMContentLoaded', animateProcessFlow);

// ===== INTERACTIVE BACKGROUND ON MOUSE MOVE =====
function interactiveBackground() {
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        section.addEventListener('mousemove', (e) => {
            const rect = section.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;

            section.style.backgroundPosition = `${x}% ${y}%`;
        });
    });
}

 

// ===== HEADER HIDE/SHOW ON SCROLL =====
let wowLastScroll = 0;
const wowHeader = document.querySelector('header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > wowLastScroll && currentScroll > 100) {
        // Scrolling down
        wowHeader.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up
        wowHeader.style.transform = 'translateY(0)';
    }

    wowLastScroll = currentScroll;
});

// ===== IMAGE PARALLAX EFFECT =====
function imageParallax() {
    const images = document.querySelectorAll('.about-image img, .vm-image img');

    window.addEventListener('scroll', () => {
        images.forEach(img => {
            const rect = img.getBoundingClientRect();
            const scrollPercent = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
            const translateY = (scrollPercent - 0.5) * 50;

            img.style.transform = `translateY(${translateY}px) scale(1.1)`;
        });
    });
}

// Initialize image parallax
document.addEventListener('DOMContentLoaded', imageParallax);

console.log('🚀 WOW Effects Loaded Successfully!');
