// ============================================
// CONNECT GLOBE - JAVASCRIPT INTERACTIONS
// ============================================

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const nav = document.getElementById('nav');
const hasDropdown = document.querySelector('.has-dropdown');

if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
        const expanded = hamburger.getAttribute('aria-expanded') === 'true';
        hamburger.setAttribute('aria-expanded', !expanded);
        nav.classList.toggle('open');

        // Fermer le dropdown Services quand on ferme le menu hamburger
        if (!nav.classList.contains('open') && hasDropdown) {
            hasDropdown.classList.remove('open');
        }
    });
}

// Mobile Dropdown Toggle
if (hasDropdown) {
    hasDropdown.addEventListener('click', (e) => {
        if (window.innerWidth < 768) {
            // Only prevent default on mobile when clicking the parent link
            if (e.target.closest('a') && !e.target.closest('.dropdown')) {
                e.preventDefault();
                hasDropdown.classList.toggle('open');
            }
        }
    });
}

// Fermer le dropdown Services quand on clique sur d'autres liens du menu (mobile)
const navLinks = document.querySelectorAll('.nav-list > li > a');

navLinks.forEach(link => {
    // Exclure le lien "Services" lui-même
    if (!link.closest('.has-dropdown')) {
        link.addEventListener('click', () => {
            if (window.innerWidth < 768 && hasDropdown) {
                // Fermer le dropdown Services s'il est ouvert
                hasDropdown.classList.remove('open');
            }
        });
    }
});

// Header Scroll Effect
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// Scroll Reveal Animation
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100 && elementBottom > 0) {
            element.classList.add('active');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Active Navigation Link
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
const navLinksAll = document.querySelectorAll('.nav-list a');

navLinksAll.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
        link.classList.add('active');
    }
});

// Counter Animation for Stats - Optimized
const counters = document.querySelectorAll('.stat-number');
const speed = 200;

const animateCounter = (counter) => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText.replace('+', '');
    const increment = target / speed;

    if (count < target) {
        counter.innerText = Math.ceil(count + increment) + '+';
        setTimeout(() => animateCounter(counter), 1);
    } else {
        counter.innerText = target + '+';
    }
};

const runCounter = () => {
    counters.forEach(animateCounter);
};

// Intersection Observer for Stats
const statsSection = document.querySelector('.stats-section');
let statsAnimated = false;

if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !statsAnimated) {
                runCounter();
                statsAnimated = true;
            }
        });
    }, { threshold: 0.5, rootMargin: '0px 0px -100px 0px' });

    statsObserver.observe(statsSection);
}

// Form Validation
const contactForm = document.querySelector('#contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form values
        const name = document.querySelector('#name').value.trim();
        const email = document.querySelector('#email').value.trim();
        const phone = document.querySelector('#phone').value.trim();
        const message = document.querySelector('#message').value.trim();

        // Simple validation
        if (!name || !email || !message) {
            alert('Please fill in all required fields.');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // Success message
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
}

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed header
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Parallax Effect for Hero Section
const hero = document.querySelector('.hero');

if (hero) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxSpeed = 0.5;
        hero.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
    });
}

// Lazy Loading Images
const lazyImages = document.querySelectorAll('img[data-src]');

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => imageObserver.observe(img));
} else {
    // Fallback for older browsers
    lazyImages.forEach(img => {
        img.src = img.dataset.src;
    });
}

// Add Loading Animation to Buttons
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        // Add ripple effect
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');

        this.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Console Welcome Message
console.log('%c Welcome to Connect Globe! ', 'background: #1e5a96; color: #fff; font-size: 20px; padding: 10px;');
console.log('%c Connecting Industrial Excellence... ', 'color: #ff8c00; font-size: 14px;');
