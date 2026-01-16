/* ============================================
   SERVICES PAGE - WOW EFFECTS
   ============================================ */

 

// ===== SERVICE IMAGES ZOOM ON SCROLL =====
function animateServiceImages() {
    const serviceImages = document.querySelectorAll('.service-image img');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'zoomInImage 1s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    serviceImages.forEach(img => {
        img.style.opacity = '0';
        img.style.transform = 'scale(0.8)';
        observer.observe(img);
    });

    const style = document.createElement('style');
    style.textContent = `
        @keyframes zoomInImage {
            0% {
                opacity: 0;
                transform: scale(0.8) rotate(-5deg);
            }
            100% {
                opacity: 1;
                transform: scale(1) rotate(0);
            }
        }
    `;
    document.head.appendChild(style);
}

// Initialize service images animation
document.addEventListener('DOMContentLoaded', animateServiceImages);

// ===== SERVICE BADGE ROTATION =====
function animateServiceBadges() {
    const badges = document.querySelectorAll('.service-badge');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = `
                    badgeRotateIn 1s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards,
                    badgePulse 2s ease-in-out infinite 1s
                `;
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    badges.forEach(badge => observer.observe(badge));

    const style = document.createElement('style');
    style.textContent = `
        @keyframes badgeRotateIn {
            0% {
                opacity: 0;
                transform: rotate(45deg) scale(0);
            }
            100% {
                opacity: 1;
                transform: rotate(45deg) scale(1);
            }
        }

        @keyframes badgePulse {
            0%, 100% {
                box-shadow: 0 0 30px var(--blue-glow);
            }
            50% {
                box-shadow: 0 0 50px rgba(0, 147, 208, 0.6);
            }
        }
    `;
    document.head.appendChild(style);
}

// Initialize service badges animation
document.addEventListener('DOMContentLoaded', animateServiceBadges);

// ===== COUNTER ANIMATION FOR CASE STUDY STATS =====
function animateCaseStudyCounters() {
    const statNumbers = document.querySelectorAll('.stat-number');

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

                    entry.target.textContent = current;

                    // Add glow effect
                    entry.target.style.textShadow = `
                        0 0 20px rgba(253, 184, 19, ${0.3 + easedProgress * 0.5}),
                        0 0 40px rgba(253, 184, 19, ${0.2 + easedProgress * 0.3})
                    `;

                    if (progress < 1) {
                        requestAnimationFrame(updateCounter);
                    } else {
                        entry.target.textContent = target + '+';
                    }
                }

                requestAnimationFrame(updateCounter);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    statNumbers.forEach(number => observer.observe(number));
}

// Initialize case study counters
document.addEventListener('DOMContentLoaded', animateCaseStudyCounters);

// ===== FEATURE ITEMS STAGGER ANIMATION =====
function animateFeatureItems() {
    const serviceFeatures = document.querySelectorAll('.service-features');

    serviceFeatures.forEach(container => {
        const items = container.querySelectorAll('.feature-item');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    items.forEach((item, index) => {
                        setTimeout(() => {
                            item.style.animation = 'slideInLeft 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards';
                        }, index * 100);
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });

        observer.observe(container);
    });
}

// Initialize feature items animation
document.addEventListener('DOMContentLoaded', animateFeatureItems);

// ===== CASE STUDY INLINE REVEAL =====
function animateCaseStudies() {
    const caseStudies = document.querySelectorAll('.case-study-inline');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = `
                    caseStudySlideUp 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards,
                    caseStudyGlow 3s ease-in-out infinite 1s
                `;
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    caseStudies.forEach(study => {
        study.style.opacity = '0';
        study.style.transform = 'translateY(50px)';
        observer.observe(study);
    });

    const style = document.createElement('style');
    style.textContent = `
        @keyframes caseStudySlideUp {
            0% {
                opacity: 0;
                transform: translateY(50px);
            }
            100% {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes caseStudyGlow {
            0%, 100% {
                border-color: var(--border-color);
            }
            50% {
                border-color: var(--secondary-blue);
                box-shadow: 0 0 20px rgba(0, 147, 208, 0.3);
            }
        }
    `;
    document.head.appendChild(style);
}

// Initialize case studies animation
document.addEventListener('DOMContentLoaded', animateCaseStudies);

// ===== VERTICAL TIMELINE ANIMATION =====
function animateVerticalTimeline() {
    const timelineLine = document.querySelector('.timeline-line');
    const processSteps = document.querySelectorAll('.process-step-vertical');

    if (!timelineLine) return;

    // Animate timeline line drawing
    const lineObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'drawTimeline 1.5s ease-out forwards';
                lineObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    timelineLine.style.height = '0';
    lineObserver.observe(timelineLine);

    // Animate each step sequentially
    processSteps.forEach((step, index) => {
        const stepObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        // Animate step marker
                        const numberBox = step.querySelector('.step-number-box');
                        const iconBox = step.querySelector('.step-icon-box');
                        const content = step.querySelector('.step-content');

                        if (numberBox) {
                            numberBox.style.animation = 'numberBoxFadeIn 0.6s ease-out forwards';
                        }

                        if (iconBox) {
                            setTimeout(() => {
                                iconBox.style.animation = 'iconBoxRotateIn 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards';
                            }, 200);
                        }

                        if (content) {
                            setTimeout(() => {
                                content.style.animation = 'stepContentSlideIn 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards';
                            }, 400);
                        }

                        stepObserver.unobserve(entry.target);
                    }, index * 300);
                }
            });
        }, { threshold: 0.2 });

        // Set initial state
        const numberBox = step.querySelector('.step-number-box');
        const iconBox = step.querySelector('.step-icon-box');
        const content = step.querySelector('.step-content');

        if (numberBox) {
            numberBox.style.opacity = '0';
            numberBox.style.transform = 'scale(0)';
        }
        if (iconBox) {
            iconBox.style.opacity = '0';
            iconBox.style.transform = 'rotate(45deg) scale(0)';
        }
        if (content) {
            content.style.opacity = '0';
            content.style.transform = 'translateX(-30px)';
        }

        stepObserver.observe(step);
    });

    // Add keyframes
    const style = document.createElement('style');
    style.textContent = `
        @keyframes drawTimeline {
            0% {
                height: 0;
            }
            100% {
                height: calc(100% - 80px);
            }
        }

        @keyframes numberBoxFadeIn {
            0% {
                opacity: 0;
                transform: scale(0);
            }
            60% {
                transform: scale(1.2);
            }
            100% {
                opacity: 1;
                transform: scale(1);
            }
        }

        @keyframes iconBoxRotateIn {
            0% {
                opacity: 0;
                transform: rotate(45deg) scale(0);
            }
            100% {
                opacity: 1;
                transform: rotate(45deg) scale(1);
            }
        }

        @keyframes stepContentSlideIn {
            0% {
                opacity: 0;
                transform: translateX(-30px);
            }
            100% {
                opacity: 1;
                transform: translateX(0);
            }
        }
    `;
    document.head.appendChild(style);
}

// Initialize vertical timeline animation
document.addEventListener('DOMContentLoaded', animateVerticalTimeline);

// ===== DECORATIVE SEPARATOR ANIMATION =====
function animateDecorativeSeparators() {
    const separators = document.querySelectorAll('.decorative-separator');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'separatorSlide 1s ease-out forwards';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    separators.forEach(separator => {
        separator.style.opacity = '0';
        separator.style.transform = 'scaleX(0)';
        observer.observe(separator);
    });

    const style = document.createElement('style');
    style.textContent = `
        @keyframes separatorSlide {
            0% {
                opacity: 0;
                transform: scaleX(0);
            }
            100% {
                opacity: 0.3;
                transform: scaleX(1);
            }
        }
    `;
    document.head.appendChild(style);
}

// Initialize decorative separators animation
document.addEventListener('DOMContentLoaded', animateDecorativeSeparators);

// ===== IMAGE DECORATIVE FRAME DRAW EFFECT =====
function animateDecorativeFrames() {
    const frames = document.querySelectorAll('.image-decorative-frame');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'frameDraw 1s ease-out forwards 0.5s';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    frames.forEach(frame => {
        frame.style.opacity = '0';
        frame.style.transform = 'scale(0.9)';
        observer.observe(frame);
    });

    const style = document.createElement('style');
    style.textContent = `
        @keyframes frameDraw {
            0% {
                opacity: 0;
                transform: scale(0.9);
            }
            100% {
                opacity: 1;
                transform: scale(1);
            }
        }
    `;
    document.head.appendChild(style);
}

// Initialize decorative frames animation
document.addEventListener('DOMContentLoaded', animateDecorativeFrames);

// ===== SERVICE CONTENT TEXT REVEAL =====
function animateServiceContent() {
    const serviceContents = document.querySelectorAll('.service-content');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const elements = entry.target.querySelectorAll('h2, p, .service-subtitle');

                elements.forEach((el, index) => {
                    setTimeout(() => {
                        el.style.animation = 'textReveal 0.6s ease-out forwards';
                    }, index * 100);
                });

                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    serviceContents.forEach(content => {
        const elements = content.querySelectorAll('h2, p, .service-subtitle');
        elements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateX(-20px)';
        });
        observer.observe(content);
    });

    const style = document.createElement('style');
    style.textContent = `
        @keyframes textReveal {
            0% {
                opacity: 0;
                transform: translateX(-20px);
            }
            100% {
                opacity: 1;
                transform: translateX(0);
            }
        }
    `;
    document.head.appendChild(style);
}

// Initialize service content animation
document.addEventListener('DOMContentLoaded', animateServiceContent);

// ===== CTA ICON FLOAT ANIMATION =====
function animateCTAIcon() {
    const ctaIcon = document.querySelector('.cta-icon-large');

    if (!ctaIcon) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = `
                    ctaIconSpinIn 1s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards,
                    float 3s ease-in-out infinite 1s
                `;
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    observer.observe(ctaIcon);

    const style = document.createElement('style');
    style.textContent = `
        @keyframes ctaIconSpinIn {
            0% {
                opacity: 0;
                transform: rotate(45deg) scale(0) rotate(180deg);
            }
            100% {
                opacity: 1;
                transform: rotate(45deg) scale(1) rotate(0);
            }
        }
    `;
    document.head.appendChild(style);
}

// Initialize CTA icon animation
document.addEventListener('DOMContentLoaded', animateCTAIcon);

console.log('✨ Services Page WOW Effects Loaded Successfully!');
