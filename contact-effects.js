/* ============================================
   CONTACT PAGE - WOW EFFECTS
   ============================================ */

// ===== TYPING EFFECT FOR CONTACT BANNER =====
document.addEventListener('DOMContentLoaded', () => {
    const contactHeading = document.getElementById('typed-contact-heading');
    if (contactHeading) {
        setTimeout(() => {
            typeWriter(contactHeading, 'Get In Touch With Us', 80);
        }, 500);
    }
});

// ===== CONTACT INFO CARDS STAGGER ANIMATION =====
function animateContactInfoCards() {
    const infoCards = document.querySelectorAll('.contact-info-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.animation = `
                        slideInFromLeft 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards,
                        cardPulse 3s ease-in-out infinite ${index * 0.3}s
                    `;
                }, index * 150);

                // Animate icon
                const icon = entry.target.querySelector('.contact-icon-large');
                if (icon) {
                    setTimeout(() => {
                        icon.style.animation = 'iconSpin 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards 0.3s';
                    }, index * 150);
                }

                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    infoCards.forEach(card => {
        card.style.opacity = '0';
        observer.observe(card);
    });

    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInFromLeft {
            0% {
                opacity: 0;
                transform: translateX(-100px);
            }
            100% {
                opacity: 1;
                transform: translateX(0);
            }
        }

        @keyframes cardPulse {
            0%, 100% {
                box-shadow: 0 0 5px rgba(0, 147, 208, 0.2);
            }
            50% {
                box-shadow: 0 0 20px rgba(0, 147, 208, 0.4);
            }
        }

        @keyframes iconSpin {
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

// Initialize contact info cards animation
document.addEventListener('DOMContentLoaded', animateContactInfoCards);

// ===== CONTACT FORM SLIDE IN =====
function animateContactForm() {
    const formWrapper = document.querySelector('.contact-form-wrapper');

    if (!formWrapper) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = `
                    slideInFromRight 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards,
                    formGlow 4s ease-in-out infinite 1s
                `;
                entry.target.style.opacity = '0';

                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    observer.observe(formWrapper);

    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInFromRight {
            0% {
                opacity: 0;
                transform: translateX(100px) scale(0.9);
            }
            100% {
                opacity: 1;
                transform: translateX(0) scale(1);
            }
        }

        @keyframes formGlow {
            0%, 100% {
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
            }
            50% {
                box-shadow: 0 10px 50px rgba(0, 147, 208, 0.3);
            }
        }
    `;
    document.head.appendChild(style);
}

// Initialize contact form animation
document.addEventListener('DOMContentLoaded', animateContactForm);

// ===== FORM INPUT ANIMATION =====
function formInputAnimations() {
    const inputs = document.querySelectorAll('.contact-form input, .contact-form select, .contact-form textarea');

    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.style.animation = 'inputFocus 0.3s ease-out forwards';
        });

        input.addEventListener('blur', function() {
            if (!this.value) {
                this.style.animation = 'inputBlur 0.3s ease-out forwards';
            }
        });
    });

    const style = document.createElement('style');
    style.textContent = `
        @keyframes inputFocus {
            0% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.02);
            }
            100% {
                transform: scale(1);
            }
        }

        @keyframes inputBlur {
            0% {
                transform: scale(1);
            }
            100% {
                transform: scale(1);
            }
        }
    `;
    document.head.appendChild(style);
}

// Initialize form input animations
document.addEventListener('DOMContentLoaded', formInputAnimations);

// ===== QUICK CONTACT CARDS WAVE ANIMATION =====
function animateQuickContactCards() {
    const quickCards = document.querySelectorAll('.quick-contact-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.animation = `
                        popInScale 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards
                    `;

                    const icon = entry.target.querySelector('.quick-icon');
                    if (icon) {
                        setTimeout(() => {
                            icon.style.animation = 'rotateInIcon 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards 0.2s';
                        }, 100);
                    }
                }, index * 200);

                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    quickCards.forEach(card => {
        card.style.opacity = '0';
        observer.observe(card);
    });

    const style = document.createElement('style');
    style.textContent = `
        @keyframes popInScale {
            0% {
                opacity: 0;
                transform: scale(0) rotateY(90deg);
            }
            100% {
                opacity: 1;
                transform: scale(1) rotateY(0);
            }
        }

        @keyframes rotateInIcon {
            0% {
                transform: rotate(45deg) scale(0);
            }
            100% {
                transform: rotate(45deg) scale(1);
            }
        }
    `;
    document.head.appendChild(style);
}

// Initialize quick contact cards animation
document.addEventListener('DOMContentLoaded', animateQuickContactCards);

// ===== FAQ ACCORDION FUNCTIONALITY =====
function initializeFAQ() {
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.parentElement;
            const wasActive = faqItem.classList.contains('active');

            // Close all FAQ items
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });

            // Open clicked item if it wasn't active
            if (!wasActive) {
                faqItem.classList.add('active');

                // Scroll into view smoothly
                setTimeout(() => {
                    faqItem.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }, 300);
            }
        });
    });
}

// Initialize FAQ accordion
document.addEventListener('DOMContentLoaded', initializeFAQ);

// ===== FAQ ITEMS STAGGER ANIMATION =====
function animateFAQItems() {
    const faqItems = document.querySelectorAll('.faq-item');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.animation = `
                        fadeInUp 0.6s ease-out forwards
                    `;
                }, index * 100);

                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    faqItems.forEach(item => {
        item.style.opacity = '0';
        observer.observe(item);
    });

    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeInUp {
            0% {
                opacity: 0;
                transform: translateY(30px);
            }
            100% {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);
}

// Initialize FAQ items animation
document.addEventListener('DOMContentLoaded', animateFAQItems);

// ===== MAP WRAPPER ANIMATION =====
function animateMapWrapper() {
    const mapWrapper = document.querySelector('.map-wrapper');

    if (!mapWrapper) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = `
                    scaleIn 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards
                `;

                const mapInfo = entry.target.querySelector('.map-info-card');
                if (mapInfo) {
                    setTimeout(() => {
                        mapInfo.style.animation = 'slideUpInfo 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards';
                    }, 400);
                }

                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    observer.observe(mapWrapper);

    const style = document.createElement('style');
    style.textContent = `
        @keyframes scaleIn {
            0% {
                opacity: 0;
                transform: scale(0.8);
            }
            100% {
                opacity: 1;
                transform: scale(1);
            }
        }

        @keyframes slideUpInfo {
            0% {
                opacity: 0;
                transform: translateY(50px);
            }
            100% {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);
}

// Initialize map wrapper animation
document.addEventListener('DOMContentLoaded', animateMapWrapper);

// ===== SOCIAL ICONS LARGE ANIMATION =====
function animateSocialIconsLarge() {
    const socialIcons = document.querySelectorAll('.social-icon-large');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.animation = `
                        bounceIn 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards
                    `;
                }, index * 100);

                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    socialIcons.forEach(icon => {
        icon.style.opacity = '0';
        observer.observe(icon);
    });

    const style = document.createElement('style');
    style.textContent = `
        @keyframes bounceIn {
            0% {
                opacity: 0;
                transform: scale(0) translateY(-100px);
            }
            60% {
                opacity: 1;
                transform: scale(1.1) translateY(0);
            }
            100% {
                opacity: 1;
                transform: scale(1) translateY(0);
            }
        }
    `;
    document.head.appendChild(style);
}

// Initialize social icons animation
document.addEventListener('DOMContentLoaded', animateSocialIconsLarge);

// ===== FORM SUBMISSION HANDLER =====
function handleFormSubmission() {
    const form = document.getElementById('contactForm');

    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const button = form.querySelector('button[type="submit"]');
        const originalText = button.innerHTML;

        // Animate button
        button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        button.disabled = true;
        button.style.animation = 'buttonPulse 1s ease-in-out infinite';

        // Simulate form submission
        setTimeout(() => {
            button.style.animation = 'buttonSuccess 0.5s ease-out forwards';
            button.innerHTML = '<i class="fas fa-check-circle"></i> Message Sent!';

            // Reset form after 2 seconds
            setTimeout(() => {
                form.reset();
                button.disabled = false;
                button.innerHTML = originalText;
                button.style.animation = '';

                // Show success message
                showSuccessMessage();
            }, 2000);
        }, 2000);
    });

    const style = document.createElement('style');
    style.textContent = `
        @keyframes buttonPulse {
            0%, 100% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.05);
            }
        }

        @keyframes buttonSuccess {
            0% {
                background: var(--accent-orange);
                transform: scale(1);
            }
            50% {
                transform: scale(1.1);
            }
            100% {
                background: var(--success-green);
                transform: scale(1);
            }
        }
    `;
    document.head.appendChild(style);
}

// Initialize form submission handler
document.addEventListener('DOMContentLoaded', handleFormSubmission);

// ===== SUCCESS MESSAGE =====
function showSuccessMessage() {
    const message = document.createElement('div');
    message.className = 'success-message';
    message.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <strong>Success!</strong> Your message has been sent. We'll get back to you within 24 hours.
    `;
    message.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(135deg, var(--success-green), #38a169);
        color: white;
        padding: 1.5rem 2rem;
        border-radius: 0;
        box-shadow: 0 10px 30px rgba(72, 187, 120, 0.4);
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 1rem;
        animation: slideInRight 0.5s ease-out forwards, fadeOutRight 0.5s ease-out 3s forwards;
        font-size: 1rem;
    `;

    document.body.appendChild(message);

    setTimeout(() => {
        message.remove();
    }, 3500);

    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            0% {
                opacity: 0;
                transform: translateX(100px);
            }
            100% {
                opacity: 1;
                transform: translateX(0);
            }
        }

        @keyframes fadeOutRight {
            0% {
                opacity: 1;
                transform: translateX(0);
            }
            100% {
                opacity: 0;
                transform: translateX(100px);
            }
        }

        .success-message i {
            font-size: 1.5rem;
        }
    `;
    document.head.appendChild(style);
}

// ===== PHONE/EMAIL LINKS HOVER EFFECT =====
function contactLinksEffect() {
    const links = document.querySelectorAll('.contact-info-card a');

    links.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.animation = 'linkPulse 0.3s ease-in-out';
        });

        link.addEventListener('mouseleave', function() {
            this.style.animation = '';
        });
    });

    const style = document.createElement('style');
    style.textContent = `
        @keyframes linkPulse {
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

// Initialize contact links effect
document.addEventListener('DOMContentLoaded', contactLinksEffect);

console.log('📞 Contact Page WOW Effects Loaded Successfully!');
