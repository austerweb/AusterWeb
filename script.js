// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    navMenu.classList.remove('active');
    navToggle.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(10, 10, 10, 0.98)';
        navbar.style.backdropFilter = 'blur(20px)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    }
});

// FAQ Toggle
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        const isActive = faqItem.classList.contains('active');
        
        // Close all FAQ items
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
        });
        
        // Open clicked item if it wasn't active
        if (!isActive) {
            faqItem.classList.add('active');
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
            entry.target.classList.add('animate');
            
            // Special handling for service cards
            if (entry.target.classList.contains('service-card')) {
                const delay = Array.from(entry.target.parentElement.children).indexOf(entry.target) * 200;
                setTimeout(() => {
                    entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
                }, delay);
            }
            
            // Special handling for tech items
            if (entry.target.classList.contains('tech-item')) {
                const delay = Array.from(entry.target.parentElement.children).indexOf(entry.target) * 100;
                setTimeout(() => {
                    entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
                }, delay);
            }
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.service-card, .tech-item, .feature-item, .contact-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    observer.observe(el);
});

// Parallax effect for floating shapes
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const shapes = document.querySelectorAll('.shape');
    
    shapes.forEach((shape, index) => {
        const speed = 0.5 + (index * 0.1);
        const yPos = -(scrolled * speed);
        shape.style.transform = `translateY(${yPos}px)`;
    });
});

// Typing animation for hero section
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing animation when page loads
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.title-gradient');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        setTimeout(() => {
            typeWriter(heroTitle, originalText, 150);
        }, 1000);
    }
});

// Counter animation for statistics (if you want to add numbers later)
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        element.textContent = Math.floor(current);
        
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        }
    }, 16);
}

// Particle effect for hero section
function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.cssText = `
        position: absolute;
        width: 4px;
        height: 4px;
        background: linear-gradient(135deg, #8b45c4, #c45cff);
        border-radius: 50%;
        pointer-events: none;
        opacity: 0.7;
        animation: particleFloat 4s linear infinite;
    `;
    
    // Random position
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = '100%';
    
    document.querySelector('.hero-background').appendChild(particle);
    
    // Remove particle after animation
    setTimeout(() => {
        particle.remove();
    }, 4000);
}

// Create particles periodically
setInterval(createParticle, 300);

// Add CSS for particle animation
const style = document.createElement('style');
style.textContent = `
    @keyframes particleFloat {
        from {
            transform: translateY(0) rotate(0deg);
            opacity: 0.7;
        }
        to {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
    
    .animate {
        opacity: 1 !important;
        transform: translateY(0) !important;
        transition: all 0.8s ease-out;
    }
`;
document.head.appendChild(style);

// Mouse follower effect
let mouseX = 0, mouseY = 0;
let followerX = 0, followerY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateFollower() {
    const diffX = mouseX - followerX;
    const diffY = mouseY - followerY;
    
    followerX += diffX * 0.1;
    followerY += diffY * 0.1;
    
    const follower = document.querySelector('.mouse-follower');
    if (follower) {
        follower.style.left = followerX + 'px';
        follower.style.top = followerY + 'px';
    }
    
    requestAnimationFrame(animateFollower);
}

// Create mouse follower
const mouseFollower = document.createElement('div');
mouseFollower.className = 'mouse-follower';
mouseFollower.style.cssText = `
    position: fixed;
    width: 20px;
    height: 20px;
    background: radial-gradient(circle, rgba(196, 92, 255, 0.3), transparent);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    mix-blend-mode: screen;
    transition: transform 0.2s ease;
`;
document.body.appendChild(mouseFollower);
animateFollower();

// Button hover effects
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mouseenter', function(e) {
        const follower = document.querySelector('.mouse-follower');
        follower.style.transform = 'scale(2)';
        follower.style.background = 'radial-gradient(circle, rgba(196, 92, 255, 0.5), transparent)';
    });
    
    btn.addEventListener('mouseleave', function(e) {
        const follower = document.querySelector('.mouse-follower');
        follower.style.transform = 'scale(1)';
        follower.style.background = 'radial-gradient(circle, rgba(196, 92, 255, 0.3), transparent)';
    });
});

// Service card tilt effect
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    });
});

// Scroll progress indicator
const scrollProgress = document.createElement('div');
scrollProgress.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 0%;
    height: 3px;
    background: linear-gradient(90deg, #8b45c4, #c45cff);
    z-index: 10000;
    transition: width 0.1s ease;
`;
document.body.appendChild(scrollProgress);

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset;
    const docHeight = document.body.offsetHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    scrollProgress.style.width = scrollPercent + '%';
});

// Text reveal animation - DISABLED to prevent letter-by-letter rendering
/*
function revealText(element) {
    const text = element.textContent;
    element.innerHTML = '';
    
    text.split('').forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char === ' ' ? '\u00A0' : char;
        span.style.opacity = '0';
        span.style.transform = 'translateY(20px)';
        span.style.transition = `all 0.05s ease ${index * 0.02}s`;
        element.appendChild(span);
        
        setTimeout(() => {
            span.style.opacity = '1';
            span.style.transform = 'translateY(0)';
        }, 100);
    });
}

// Apply text reveal to section titles when they come into view
const textRevealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('revealed')) {
            revealText(entry.target);
            entry.target.classList.add('revealed');
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.section-title').forEach(title => {
    textRevealObserver.observe(title);
});
*/

// Loading animation
window.addEventListener('load', () => {
    // Hide any loading screen if present
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => loader.remove(), 500);
    }
    
    // Start entrance animations
    document.body.style.overflow = 'visible';
});

// Performance optimization: Throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Replace direct scroll listeners with throttled versions
const throttledScrollHandler = throttle(() => {
    // Parallax and other scroll effects here
}, 16); // ~60fps

window.addEventListener('scroll', throttledScrollHandler);
