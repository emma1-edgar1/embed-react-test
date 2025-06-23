// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Welcome to my website! 🎉');
    
    // Get the welcome button
    const welcomeBtn = document.getElementById('welcome-btn');
    const heroSection = document.querySelector('.hero-section');
    
    // Add click event to the welcome button
    welcomeBtn.addEventListener('click', function() {
        // Change button text temporarily
        const originalText = welcomeBtn.textContent;
        welcomeBtn.textContent = 'Thanks for clicking! 🎉';
        welcomeBtn.style.background = 'linear-gradient(45deg, #4CAF50, #45a049)';
        
        // Add a fun animation to the hero section
        heroSection.style.transform = 'scale(1.02)';
        heroSection.style.transition = 'transform 0.3s ease';
        
        // Reset after 2 seconds
        setTimeout(() => {
            welcomeBtn.textContent = originalText;
            welcomeBtn.style.background = 'linear-gradient(45deg, #667eea, #764ba2)';
            heroSection.style.transform = 'scale(1)';
        }, 2000);
        
        // Show a welcome message
        showWelcomeMessage();
    });
    
    // Add hover effects to feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add smooth scrolling for any anchor links
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
    
    // Add a typing effect to the welcome title
    typeWriter();
    
    // Add some dynamic content updates
    updateTime();
    setInterval(updateTime, 1000);
});

// Function to show a welcome message
function showWelcomeMessage() {
    // Create a temporary message element
    const message = document.createElement('div');
    message.textContent = 'Welcome to our amazing website! 🚀';
    message.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(45deg, #667eea, #764ba2);
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        z-index: 1000;
        animation: slideInRight 0.5s ease-out;
        font-weight: 500;
    `;
    
    document.body.appendChild(message);
    
    // Remove the message after 3 seconds
    setTimeout(() => {
        message.style.animation = 'slideOutRight 0.5s ease-out';
        setTimeout(() => {
            if (message.parentNode) {
                message.parentNode.removeChild(message);
            }
        }, 500);
    }, 3000);
}

// Function to create a typing effect
function typeWriter() {
    const title = document.querySelector('.welcome-title');
    const originalText = title.textContent;
    title.textContent = '';
    
    let i = 0;
    const typeSpeed = 100; // milliseconds per character
    
    function type() {
        if (i < originalText.length) {
            title.textContent += originalText.charAt(i);
            i++;
            setTimeout(type, typeSpeed);
        }
    }
    
    // Start typing after a short delay
    setTimeout(type, 1000);
}

// Function to update time
function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    
    // You can add this to the page if you want to show current time
    // For now, we'll just log it to console
    console.log(`Current time: ${timeString}`);
}

// Add CSS animations for the notification
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Add some console fun
console.log(`
╔══════════════════════════════════════════════════════════════╗
║                    Welcome to My Website!                    ║
║                                                              ║
║  This page was built with:                                   ║
║  • HTML5 for structure                                       ║
║  • CSS3 for beautiful styling                                ║
║  • Vanilla JavaScript for interactivity                      ║
║                                                              ║
║  Enjoy exploring! 🎉                                         ║
╚══════════════════════════════════════════════════════════════╝
`); 