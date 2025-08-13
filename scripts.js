// ==========================
// Typing Animation
// ==========================
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    const timer = setInterval(() => {
        element.innerHTML += text.charAt(i);
        i++;
        if (i >= text.length) clearInterval(timer);
    }, speed);
}

// ==========================
// Loading Screen
// ==========================
function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loadingScreen');
    if (!loadingScreen) return;

    loadingScreen.classList.add('hidden');
    setTimeout(() => {
        loadingScreen.style.display = 'none';
    }, 500);
}

// ==========================
// Scroll Animations for Sections
// ==========================
function initSectionScrollAnimations() {
    const sections = document.querySelectorAll('.section');
    if (!sections.length) return;

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
}

// ==========================
// Smooth Anchor Scrolling
// ==========================
function initSmoothScroll() {
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
}

// ==========================
// Particle Background
// ==========================
function createParticles(count = 20) {
    const body = document.body;

    for (let i = 0; i < count; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: fixed;
            width: 4px;
            height: 4px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            pointer-events: none;
            animation: float 6s ease-in-out infinite;
            left: ${Math.random() * 100}%;
            animation-delay: ${Math.random() * 6}s;
        `;
        body.appendChild(particle);
    }
}

// ==========================
// Initialize EmailJS Contact Form
// ==========================
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;

    const serviceID = "service_6z4w79v";
    const templateID = "template_kbdvoqj";

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        emailjs.sendForm(serviceID, templateID, this)
            .then(() => alert('Message sent successfully!'))
            .catch((error) => {
                console.error('Error sending email:', error);
                alert('Failed to send message. Please try again later.');
            });
    });
}

// ==========================
// Resume Download Placeholder
// ==========================
function initResumeDownload() {
    const downloadResume = document.getElementById('downloadResume');
    if (!downloadResume) return;

    downloadResume.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Resume download feature coming soon! Please contact me directly.');
    });
}

// ==========================
// Initialize all features after DOM loads
// ==========================
document.addEventListener('DOMContentLoaded', function() {
    // Typing animation
    const title = document.querySelector('h1');
    if (title) typeWriter(title, title.textContent, 150);

    // Hide loading screen
    setTimeout(hideLoadingScreen, 1500);

    // Scroll animations
    initSectionScrollAnimations();

    // Smooth scroll
    initSmoothScroll();

    // Particle background
    createParticles();

    // Initialize EmailJS
    emailjs.init("y03GFEWPo7q9tG76z");
    initContactForm();

    // Resume download
    initResumeDownload();
});
