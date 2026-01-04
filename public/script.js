// ====================================
// VIBE CODING - Interactive Features
// ====================================

/**
 * Reveal/Hide Text Functionality
 * Handles the "Дэлгэрэнгүй" buttons that expand hidden content
 */
document.querySelectorAll('.reveal-btn').forEach(button => {
    button.addEventListener('click', function() {
        const hiddenText = this.nextElementSibling;
        
        if (hiddenText && hiddenText.classList.contains('hidden-text')) {
            const isVisible = hiddenText.style.display !== 'none';
            
            if (isVisible) {
                hiddenText.style.display = 'none';
                this.textContent = 'Дэлгэрэнгүй ▶';
            } else {
                hiddenText.style.display = 'block';
                this.textContent = 'Нуух ▼';
            }
        }
    });
});

/**
 * Generate Flow Animation
 * Creates a simple button preview based on user input
 */
function generateFlow() {
    const promptInput = document.getElementById('promptInput');
    const generatedCode = document.getElementById('generatedCode');
    const codeOutput = document.getElementById('codeOutput');
    const preview = document.getElementById('preview');
    
    const prompt = promptInput.value.trim();
    
    if (!prompt) {
        alert('Хоосон сэтгэл оруулаарай!');
        return;
    }
    
    // Simple color mapping from Mongolian to CSS
    const colorMap = {
        'цэнхэр': '#70D6FF',
        'розовуу': '#FFB6D9',
        'ногооноо': '#90EE90',
        'шар': '#FFE66D',
        'улаан': '#FF6B6B',
        'ягаан': '#C77DFF',
        'хар': '#333333',
        'бор': '#8B4513'
    };
    
    // Extract color from prompt
    let color = '#FFB6D9'; // default pink
    for (const [mongoColor, cssColor] of Object.entries(colorMap)) {
        if (prompt.toLowerCase().includes(mongoColor)) {
            color = cssColor;
            break;
        }
    }
    
    // Generate HTML code
    const htmlCode = `&lt;button style="background: ${color}"&gt;\n  ${prompt}\n&lt;/button&gt;`;
    
    // Display generated code
    codeOutput.innerHTML = htmlCode;
    
    // Create preview button
    const previewButton = document.createElement('button');
    previewButton.textContent = prompt;
    previewButton.style.background = color;
    previewButton.style.color = 'white';
    previewButton.style.padding = '0.8rem 1.5rem';
    previewButton.style.border = 'none';
    previewButton.style.borderRadius = '8px';
    previewButton.style.cursor = 'pointer';
    previewButton.style.fontSize = '1rem';
    previewButton.style.fontWeight = '600';
    previewButton.style.transition = 'all 0.3s ease';
    
    previewButton.addEventListener('mouseover', () => {
        previewButton.style.transform = 'scale(1.05)';
        previewButton.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
    });
    
    previewButton.addEventListener('mouseout', () => {
        previewButton.style.transform = 'scale(1)';
        previewButton.style.boxShadow = 'none';
    });
    
    previewButton.addEventListener('click', () => {
        alert(`✨ "${prompt}" товчлуур ажилласан!`);
    });
    
    // Update preview
    preview.innerHTML = '';
    preview.appendChild(previewButton);
    
    // Show generated code section
    generatedCode.style.display = 'block';
    
    // Smooth scroll to preview
    setTimeout(() => {
        generatedCode.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
}

/**
 * Intersection Observer for Scroll Animations
 * Animates elements when they come into view
 */
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards for animation
document.querySelectorAll('.card, .tech-card, .process-step, .flow-step-large').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});

/**
 * QR Code Generation
 * Generate QR code that points to the website
 */
function generateQRCode() {
    const qrContainer = document.getElementById('qrCodeContainer');
    const qrUrl = 'https://example.com/vibe-coding';
    
    // Using QR Server API for free QR code generation
    const qrSize = 300;
    const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(qrUrl)}`;
    
    const qrImage = document.createElement('img');
    qrImage.src = qrApiUrl;
    qrImage.alt = 'QR Code';
    qrImage.style.maxWidth = '100%';
    qrImage.style.height = 'auto';
    
    // Handle image load error (offline mode)
    qrImage.addEventListener('error', () => {
        qrContainer.innerHTML = `
            <div style="
                width: 300px;
                height: 300px;
                background: linear-gradient(45deg, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%, #ddd),
                            linear-gradient(45deg, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%, #ddd);
                background-size: 30px 30px;
                background-position: 0 0, 15px 15px;
                background-color: #f0f0f0;
                border: 2px solid #ccc;
                border-radius: 8px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #666;
                font-weight: bold;
                text-align: center;
                padding: 20px;
            ">
                QR Code<br>(offline mode)
            </div>
        `;
    });
    
    qrContainer.innerHTML = '';
    qrContainer.appendChild(qrImage);
}

// Initialize QR code when page loads
document.addEventListener('DOMContentLoaded', () => {
    generateQRCode();
    initSmoothScrolling();
});

/**
 * Smooth Scrolling Navigation
 * Handles navigation link clicks for smooth scroll
 */
function initSmoothScrolling() {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
}

/**
 * Active Navigation Link Highlighting
 * Highlights the current section in navigation
 */
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('.section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.style.background = '#FFD9E8';
            link.style.color = '#FF69B4';
        } else {
            link.style.background = '';
            link.style.color = '';
        }
    });
});

/**
 * Keyboard Navigation Support
 * Allow keyboard shortcuts for accessibility
 */
document.addEventListener('keydown', (e) => {
    // Press "?" to show help
    if (e.key === '?') {
        showHelp();
    }
    
    // Arrow keys for navigation
    if (e.key === 'ArrowDown') {
        const nextSection = document.querySelector('.section:not(:target)');
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
});

/**
 * Interactive Demo - Enhanced with more features
 */
const promptInput = document.getElementById('promptInput');
if (promptInput) {
    // Allow Enter key to generate
    promptInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            generateFlow();
        }
    });
    
    // Add some fun autocomplete suggestions
    promptInput.addEventListener('focus', () => {
        promptInput.placeholder = 'Жишээ: "цэнхэр товчлуур", "ногооноо товчлуур"';
    });
}

/**
 * Animate numbers for educational impact
 */
function animateCounter(element, target, duration = 1000) {
    let current = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current);
    }, 16);
}

/**
 * Enhanced accessibility features
 */
function initAccessibility() {
    // Add skip to main content link
    const skipLink = document.createElement('a');
    skipLink.href = '#internet';
    skipLink.textContent = 'Skip to main content';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 0;
        background: #FF69B4;
        color: white;
        padding: 8px;
        text-decoration: none;
        z-index: 100;
    `;
    
    skipLink.addEventListener('focus', () => {
        skipLink.style.top = '0';
    });
    
    skipLink.addEventListener('blur', () => {
        skipLink.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
}

// Initialize accessibility features
initAccessibility();

/**
 * Mobile Touch Support
 * Enhance touch interactions for mobile devices
 */
if (window.innerWidth <= 768) {
    document.addEventListener('touchstart', function() {}, false);
    
    // Add touch feedback to buttons
    document.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('touchstart', function() {
            this.style.opacity = '0.8';
        });
        
        btn.addEventListener('touchend', function() {
            this.style.opacity = '1';
        });
    });
}

/**
 * Page Load Analytics (for educational purposes)
 */
window.addEventListener('load', () => {
    console.log('🌈 Vibe Coding - сурах цэцэрлэг ачаалагдлаа!');
    console.log('💡 Сайтын сурах материалуудыг сонирхож үзээрэй!');
});

/**
 * Social Sharing Features
 * Allow users to share their generated code
 */
function shareCode() {
    const codeOutput = document.getElementById('codeOutput');
    const code = codeOutput.textContent;
    
    if (navigator.share) {
        navigator.share({
            title: 'Vibe Coding',
            text: 'Миний үүсгэсэн код:',
            url: window.location.href
        });
    } else {
        // Fallback: copy to clipboard
        const textarea = document.createElement('textarea');
        textarea.value = code;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        alert('Код копи хийгдлээ!');
    }
}

/**
 * Parallax Scroll Effect
 * Creates depth effect on hero section
 */
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero-illustration');
    if (hero) {
        hero.style.transform = `translateY(${window.scrollY * 0.5}px)`;
    }
});

/**
 * Cookie/LocalStorage for User Progress (if extended)
 * Track which sections user has viewed
 */
const trackProgress = () => {
    const viewedSections = JSON.parse(localStorage.getItem('viewedSections')) || [];
    const currentSection = document.querySelector('.section:in-viewport');
    
    if (currentSection && !viewedSections.includes(currentSection.id)) {
        viewedSections.push(currentSection.id);
        localStorage.setItem('viewedSections', JSON.stringify(viewedSections));
    }
};

// Optional: Track progress periodically
setInterval(trackProgress, 1000);

/**
 * Error Handling
 * Gracefully handle any runtime errors
 */
window.addEventListener('error', (event) => {
    console.error('⚠️ Алдаа үүсч байна:', event.error);
    // Don't show error to user - just log it
});

// Prevent console errors from breaking the site
window.addEventListener('unhandledrejection', event => {
    event.preventDefault();
    console.error('Promise rejection:', event.reason);
});
