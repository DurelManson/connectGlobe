/* ============================================
   ABOUT US PAGE - WOW EFFECTS
   ============================================ */

 

// ===== MISSION/VISION CARD STAGGER ANIMATION =====
function animateMissionVisionCards() {
    const mvCards = document.querySelectorAll('.mission-vision-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.animation = `
                        slideInFromSide 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards,
                        cardGlow 3s ease-in-out infinite ${index * 0.5}s
                    `;

                    // Animate the icon inside
                    const icon = entry.target.querySelector('.mv-icon');
                    if (icon) {
                        icon.style.animation = 'rotateIn 1s ease-out forwards 0.3s';
                    }
                }, index * 200);

                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    mvCards.forEach(card => observer.observe(card));

    // Add animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInFromSide {
            0% {
                opacity: 0;
                transform: translateX(-100px) rotateY(-20deg);
            }
            100% {
                opacity: 1;
                transform: translateX(0) rotateY(0);
            }
        }

        @keyframes cardGlow {
            0%, 100% {
                box-shadow: 0 0 20px rgba(0, 147, 208, 0.2);
            }
            50% {
                box-shadow: 0 0 40px rgba(0, 147, 208, 0.4);
            }
        }

        @keyframes rotateIn {
            0% {
                opacity: 0;
                transform: rotate(45deg) scale(0);
            }
            100% {
                opacity: 1;
                transform: rotate(45deg) scale(1);
            }
        }
    `;
    document.head.appendChild(style);
}

// Initialize Mission/Vision animation
document.addEventListener('DOMContentLoaded', animateMissionVisionCards);

// ===== CEO IMAGE PARALLAX & BADGE ANIMATION =====
function ceoBadgeAnimation() {
    const ceoImage = document.querySelector('.ceo-image');
    const ceoBadge = document.querySelector('.ceo-badge');

    if (!ceoImage || !ceoBadge) return;

    // Badge entrance animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                ceoBadge.style.animation = 'badgeSlideIn 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards 0.5s';
                ceoBadge.style.opacity = '0';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    observer.observe(ceoImage);

    // Badge hover pulse
    ceoBadge.addEventListener('mouseenter', () => {
        ceoBadge.style.animation = 'badgePulse 0.6s ease-in-out';
    });

    const style = document.createElement('style');
    style.textContent = `
        @keyframes badgeSlideIn {
            0% {
                opacity: 0;
                transform: translateX(-50px) scale(0.8);
            }
            100% {
                opacity: 1;
                transform: translateX(0) scale(1);
            }
        }

        @keyframes badgePulse {
            0%, 100% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.1);
            }
        }
    `;
    document.head.appendChild(style);
}

// Initialize CEO badge animation
document.addEventListener('DOMContentLoaded', ceoBadgeAnimation);

// ===== BUSINESS GROW HIGHLIGHTS COUNTER =====
function animateGrowthHighlights() {
    const growthItems = document.querySelectorAll('.growth-item');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.animation = `
                        popIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards
                    `;

                    const icon = entry.target.querySelector('i');
                    if (icon) {
                        icon.style.animation = 'iconBounce 1s ease-in-out infinite';
                    }
                }, index * 150);

                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    growthItems.forEach(item => observer.observe(item));

    const style = document.createElement('style');
    style.textContent = `
        @keyframes popIn {
            0% {
                opacity: 0;
                transform: scale(0) rotate(-180deg);
            }
            100% {
                opacity: 1;
                transform: scale(1) rotate(0);
            }
        }

        @keyframes iconBounce {
            0%, 100% {
                transform: translateY(0);
            }
            50% {
                transform: translateY(-10px);
            }
        }
    `;
    document.head.appendChild(style);
}

// Initialize growth highlights animation
document.addEventListener('DOMContentLoaded', animateGrowthHighlights);

// ===== SERVICE ITEMS CASCADE ANIMATION =====
function animateServiceItems() {
    const serviceItems = document.querySelectorAll('.service-item');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.animation = `
                        slideInLeft 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards
                    `;
                }, index * 100);

                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    serviceItems.forEach(item => {
        item.style.opacity = '0';
        observer.observe(item);
    });
}

// Initialize service items animation
document.addEventListener('DOMContentLoaded', animateServiceItems);

// ===== DECORATIVE CORNERS ANIMATION =====
function animateDecorativeCorners() {
    const corners = document.querySelectorAll('.image-decorative-corner');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.animation = 'cornerDraw 1s ease-out forwards';
                }, index * 200);

                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    corners.forEach(corner => {
        corner.style.opacity = '0';
        observer.observe(corner);
    });

    const style = document.createElement('style');
    style.textContent = `
        @keyframes cornerDraw {
            0% {
                opacity: 0;
                transform: scale(0);
            }
            100% {
                opacity: 1;
                transform: scale(1);
            }
        }
    `;
    document.head.appendChild(style);
}

// Initialize decorative corners animation
document.addEventListener('DOMContentLoaded', animateDecorativeCorners);

// ===== WHO WE ARE IMAGE TILT EFFECT =====
function whoWeAreImageTilt() {
    const image = document.querySelector('.who-we-are-image');

    if (!image) return;

    image.addEventListener('mousemove', (e) => {
        const rect = image.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;

        const img = image.querySelector('img');
        if (img) {
            img.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        }
    });

    image.addEventListener('mouseleave', () => {
        const img = image.querySelector('img');
        if (img) {
            img.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        }
    });
}

// Initialize who we are image tilt
document.addEventListener('DOMContentLoaded', whoWeAreImageTilt);

// ===== FINAL CTA BANNER PARTICLE EFFECT =====
function ctaBannerParticles() {
    const ctaBanner = document.querySelector('.final-cta-banner');

    if (!ctaBanner) return;

    const particleCount = 30;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'cta-particle';
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 3 + 1}px;
            height: ${Math.random() * 3 + 1}px;
            background: ${Math.random() > 0.5 ? '#FDB813' : '#0093D0'};
            opacity: ${Math.random() * 0.6 + 0.2};
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: ctaFloat ${Math.random() * 8 + 8}s ease-in-out infinite;
            animation-delay: ${Math.random() * 5}s;
            border-radius: 50%;
            pointer-events: none;
            z-index: 1;
        `;
        ctaBanner.appendChild(particle);
    }

    const style = document.createElement('style');
    style.textContent = `
        @keyframes ctaFloat {
            0%, 100% {
                transform: translate(0, 0) scale(1);
                opacity: 0.2;
            }
            50% {
                transform: translate(${Math.random() * 50 - 25}px, ${Math.random() * 50 - 25}px) scale(1.5);
                opacity: 0.8;
            }
        }
    `;
    document.head.appendChild(style);
}

// Initialize CTA banner particles
document.addEventListener('DOMContentLoaded', ctaBannerParticles);

// ===== WHY CHOOSE CARDS WAVE ANIMATION =====
function whyChooseWaveAnimation() {
    const featureCards = document.querySelectorAll('.why-choose-section .feature-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Calculate position in grid (3 columns)
                const row = Math.floor(index / 3);
                const col = index % 3;
                const delay = (row * 100) + (col * 100);

                setTimeout(() => {
                    entry.target.style.animation = `
                        waveIn 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards
                    `;
                }, delay);

                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    featureCards.forEach(card => {
        card.style.opacity = '0';
        observer.observe(card);
    });

    const style = document.createElement('style');
    style.textContent = `
        @keyframes waveIn {
            0% {
                opacity: 0;
                transform: translateY(100px) scale(0.8);
            }
            100% {
                opacity: 1;
                transform: translateY(0) scale(1);
            }
        }
    `;
    document.head.appendChild(style);
}

// Initialize why choose wave animation
document.addEventListener('DOMContentLoaded', whyChooseWaveAnimation);

// ===== EMPHASIS TEXT TYPING EFFECT =====
function emphasisTextEffect() {
    const emphasisText = document.querySelector('.emphasis-text');

    if (!emphasisText) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = `
                    emphasisGlow 2s ease-in-out infinite,
                    slideInLeft 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards
                `;

                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    observer.observe(emphasisText);

    const style = document.createElement('style');
    style.textContent = `
        @keyframes emphasisGlow {
            0%, 100% {
                border-left-color: var(--secondary-blue);
                box-shadow: 0 0 5px rgba(0, 147, 208, 0.3);
            }
            50% {
                border-left-color: var(--accent-orange);
                box-shadow: 0 0 20px rgba(0, 147, 208, 0.6);
            }
        }
    `;
    document.head.appendChild(style);
}

// Initialize emphasis text effect
document.addEventListener('DOMContentLoaded', emphasisTextEffect);

// ===== CEO INFO BOX SLIDE IN =====
function ceoInfoAnimation() {
    const ceoInfo = document.querySelector('.ceo-info');

    if (!ceoInfo) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = `
                    slideInRight 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards 0.3s,
                    infoGlow 3s ease-in-out infinite 1s
                `;
                entry.target.style.opacity = '0';

                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    observer.observe(ceoInfo);

    const style = document.createElement('style');
    style.textContent = `
        @keyframes infoGlow {
            0%, 100% {
                border-left-color: var(--accent-orange);
            }
            50% {
                border-left-color: var(--secondary-blue);
                box-shadow: -5px 0 20px rgba(253, 184, 19, 0.4);
            }
        }
    `;
    document.head.appendChild(style);
}

// Initialize CEO info animation
document.addEventListener('DOMContentLoaded', ceoInfoAnimation);

// ===== FINAL CTA ICON ROTATION =====
function ctaIconRotation() {
    const ctaIcon = document.querySelector('.final-cta-content .cta-icon');

    if (!ctaIcon) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = `
                    float 3s ease-in-out infinite,
                    ctaIconSpin 1s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards
                `;

                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    observer.observe(ctaIcon);

    const style = document.createElement('style');
    style.textContent = `
        @keyframes ctaIconSpin {
            0% {
                transform: rotate(45deg) scale(0);
                opacity: 0;
            }
            100% {
                transform: rotate(45deg) scale(1);
                opacity: 1;
            }
        }
    `;
    document.head.appendChild(style);
}

// Initialize CTA icon rotation
document.addEventListener('DOMContentLoaded', ctaIconRotation);

console.log('🎨 About Us Page WOW Effects Loaded Successfully!');
