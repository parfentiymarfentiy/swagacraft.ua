// Advanced Animations for SwagaCraft Website

// Animation Controller
class AnimationController {
    constructor() {
        this.animations = new Map();
        this.isAnimating = false;
        this.animationFrameId = null;
    }

    // Initialize all animations
    initialize() {
        this.setupScrollAnimations();
        this.setupHoverAnimations();
        this.setupLoadingAnimations();
        this.setupInteractiveAnimations();
        this.startAnimationLoop();
    }

    // Scroll-based animations
    setupScrollAnimations() {
        // Create Intersection Observer for scroll animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateOnScroll(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        // Observe all scroll-reveal elements
        document.querySelectorAll('.scroll-reveal').forEach(el => {
            observer.observe(el);
        });

        // Parallax scrolling
        this.setupParallaxEffects();
    }

    // Hover animations
    setupHoverAnimations() {
        // Card hover effects
        document.querySelectorAll('.feature-card, .about-card, .staff-card').forEach(card => {
            card.addEventListener('mouseenter', (e) => {
                this.animateCardHover(e.currentTarget);
            });
            
            card.addEventListener('mouseleave', (e) => {
                this.animateCardLeave(e.currentTarget);
            });
        });

        // Button hover effects
        document.querySelectorAll('button').forEach(button => {
            button.addEventListener('mouseenter', (e) => {
                this.animateButtonHover(e.currentTarget);
            });
            
            button.addEventListener('mouseleave', (e) => {
                this.animateButtonLeave(e.currentTarget);
            });
        });
    }

    // Loading animations
    setupLoadingAnimations() {
        // Progress bars animation
        this.animateProgressBars();
        
        // Loading sequences
        this.setupLoadingSequence();
    }

    // Interactive animations
    setupInteractiveAnimations() {
        // Click animations
        this.setupClickAnimations();
        
        // Typing effects
        this.setupTypingEffects();
        
        // Particle interactions
        this.setupParticleInteractions();
    }

    // Main animation loop
    startAnimationLoop() {
        const animate = () => {
            this.updateAnimations();
            this.animationFrameId = requestAnimationFrame(animate);
        };
        animate();
    }

    // Update all running animations
    updateAnimations() {
        this.animations.forEach((animation, element) => {
            if (animation.update) {
                animation.update();
            }
        });
    }

    // Stop animation loop
    stopAnimationLoop() {
        if (this.animationFrameId) {
            cancelAnimationFrame(this.animationFrameId);
        }
    }

    // Add animation to controller
    addAnimation(element, animation) {
        this.animations.set(element, animation);
    }

    // Remove animation from controller
    removeAnimation(element) {
        this.animations.delete(element);
    }
}

// Floating Islands Animation
function animateFloatingIslands() {
    const islands = document.querySelectorAll('.island');
    
    islands.forEach((island, index) => {
        // Create floating animation
        island.style.animation = `float ${6 + index * 2}s ease-in-out infinite`;
        island.style.animationDelay = `${index * 1.5}s`;
        
        // Add glow effect
        setInterval(() => {
            island.style.boxShadow = `
                0 0 ${20 + Math.random() * 30}px 
                rgba(76, 175, 80, ${0.3 + Math.random() * 0.3})
            `;
        }, 2000 + index * 500);
    });
}

// Background Elements Animation
function createBackgroundElements() {
    const animatedBg = document.createElement('div');
    animatedBg.className = 'animated-bg';
    document.body.appendChild(animatedBg);

    // Create multiple background elements
    for (let i = 0; i < 15; i++) {
        const element = document.createElement('div');
        element.className = 'bg-element';
        
        // Random properties
        const size = 20 + Math.random() * 100;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const delay = Math.random() * 20;
        const duration = 15 + Math.random() * 20;
        
        element.style.width = `${size}px`;
        element.style.height = `${size}px`;
        element.style.left = `${posX}%`;
        element.style.top = `${posY}%`;
        element.style.animation = `float ${duration}s infinite linear`;
        element.style.animationDelay = `${delay}s`;
        element.style.opacity = 0.1 + Math.random() * 0.2;
        
        animatedBg.appendChild(element);
    }
}

// Particle System
class ParticleSystem {
    constructor(container) {
        this.container = container;
        this.particles = [];
        this.maxParticles = 50;
        this.createParticles();
    }

    createParticles() {
        for (let i = 0; i < this.maxParticles; i++) {
            this.createParticle();
        }
    }

    createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random properties
        const size = 2 + Math.random() * 4;
        const posX = Math.random() * 100;
        const delay = Math.random() * 20;
        const duration = 10 + Math.random() * 15;
        const color = `hsl(${120 + Math.random() * 60}, 70%, 60%)`;
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}%`;
        particle.style.background = color;
        particle.style.animation = `particle-float ${duration}s infinite linear`;
        particle.style.animationDelay = `${delay}s`;
        
        this.container.appendChild(particle);
        this.particles.push(particle);
    }

    update() {
        // Update particle positions and properties
        this.particles.forEach((particle, index) => {
            // Add interactive behaviors here
        });
    }
}

// Text Animation Effects
function setupTypingEffects() {
    const typingElements = document.querySelectorAll('.typewriter');
    
    typingElements.forEach(element => {
        const text = element.textContent;
        element.textContent = '';
        element.style.borderRight = '3px solid var(--primary)';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            } else {
                // Blinking cursor effect
                setInterval(() => {
                    element.style.borderRightColor = 
                        element.style.borderRightColor === 'transparent' ? 
                        'var(--primary)' : 'transparent';
                }, 500);
            }
        };
        
        // Start typing after a delay
        setTimeout(typeWriter, 1000);
    });
}

// Card Flip Animations
function setupCardFlipAnimations() {
    const flipCards = document.querySelectorAll('.flip-card');
    
    flipCards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('flipped');
        });
    });
}

// Progress Bar Animations
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-bar');
    
    progressBars.forEach(bar => {
        const targetWidth = bar.getAttribute('data-width') || '100%';
        
        // Animate to target width
        setTimeout(() => {
            bar.style.width = targetWidth;
        }, 500);
        
        // Add shimmer effect
        const shimmer = document.createElement('div');
        shimmer.style.cssText = `
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
            animation: shimmer 2s infinite;
        `;
        bar.appendChild(shimmer);
    });
}

// Staggered Animation System
class StaggeredAnimation {
    constructor(elements, options = {}) {
        this.elements = Array.from(elements);
        this.delay = options.delay || 100;
        this.animationClass = options.animationClass || 'animated';
        this.animate();
    }

    animate() {
        this.elements.forEach((element, index) => {
            setTimeout(() => {
                element.classList.add(this.animationClass);
            }, index * this.delay);
        });
    }
}

// Morphing Background Animation
function setupMorphingBackground() {
    const morphingBg = document.createElement('div');
    morphingBg.className = 'morphing-bg';
    document.body.appendChild(morphingBg);

    // Create morphing shapes
    for (let i = 0; i < 5; i++) {
        const shape = document.createElement('div');
        shape.className = 'morph-shape';
        
        const size = 100 + Math.random() * 200;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const delay = Math.random() * 10;
        const duration = 15 + Math.random() * 10;
        
        shape.style.width = `${size}px`;
        shape.style.height = `${size}px`;
        shape.style.left = `${posX}%`;
        shape.style.top = `${posY}%`;
        shape.style.animation = `morph ${duration}s infinite linear`;
        shape.style.animationDelay = `${delay}s`;
        
        morphingBg.appendChild(shape);
    }
}

// Interactive Hover Animations
function setupInteractiveHoverAnimations() {
    // Magnetic button effect
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
    
    buttons.forEach(button => {
        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const angleX = (y - centerY) / 10;
            const angleY = (centerX - x) / 10;
            
            button.style.transform = `
                perspective(1000px) 
                rotateX(${angleX}deg) 
                rotateY(${angleY}deg)
            `;
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        });
    });
}

// Loading Sequence Animation
function setupLoadingSequence() {
    const preloader = document.getElementById('preloader');
    const loaderBlocks = document.querySelectorAll('.mc-block');
    
    // Animate loader blocks sequentially
    loaderBlocks.forEach((block, index) => {
        setTimeout(() => {
            block.style.animation = 'bounce 1.4s infinite ease-in-out';
        }, index * 200);
    });
    
    // Loading progress simulation
    let progress = 0;
    const progressInterval = setInterval(() => {
        progress += Math.random() * 10;
        if (progress >= 100) {
            progress = 100;
            clearInterval(progressInterval);
        }
        
        // Update loading text
        const loadingText = document.querySelector('#preloader p');
        if (loadingText) {
            loadingText.textContent = `Загрузка SwagaCraft... ${Math.round(progress)}%`;
        }
    }, 200);
}

// Ripple Effect Animation
function setupRippleEffects() {
    document.addEventListener('click', function(e) {
        const target = e.target;
        
        if (target.classList.contains('ripple') || 
            target.closest('.ripple') || 
            target.tagName === 'BUTTON') {
            
            const ripple = document.createElement('span');
            const rect = target.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.6);
                transform: scale(0);
                animation: ripple-animation 0.6s linear;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                pointer-events: none;
            `;
            
            target.style.position = 'relative';
            target.style.overflow = 'hidden';
            target.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        }
    });
}

// Add ripple animation to CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// 3D Card Hover Effects
function setup3DCardHovers() {
    const cards3D = document.querySelectorAll('.card-3d');
    
    cards3D.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateY = (x - centerX) / 10;
            const rotateX = (centerY - y) / 10;
            
            card.style.transform = `
                perspective(1000px) 
                rotateX(${rotateX}deg) 
                rotateY(${rotateY}deg)
            `;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        });
    });
}

// Matrix Rain Effect
function setupMatrixRain() {
    const matrixRain = document.createElement('div');
    matrixRain.className = 'matrix-rain';
    document.body.appendChild(matrixRain);
    
    const characters = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const columns = Math.floor(window.innerWidth / 20);
    
    for (let i = 0; i < columns; i++) {
        const column = document.createElement('div');
        column.className = 'matrix-column';
        column.style.left = `${i * 20}px`;
        column.style.animationDelay = `${Math.random() * 5}s`;
        column.style.animationDuration = `${1 + Math.random() * 2}s`;
        
        // Add random characters
        let content = '';
        for (let j = 0; j < 50; j++) {
            content += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        
        column.textContent = content;
        matrixRain.appendChild(column);
    }
}

// Initialize all animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const animationController = new AnimationController();
    animationController.initialize();
    
    // Setup additional animations
    animateFloatingIslands();
    createBackgroundElements();
    setupTypingEffects();
    setupCardFlipAnimations();
    animateProgressBars();
    setupMorphingBackground();
    setupInteractiveHoverAnimations();
    setupLoadingSequence();
    setupRippleEffects();
    setup3DCardHovers();
    setupMatrixRain();
});

// Export for global access
window.AnimationController = AnimationController;
window.StaggeredAnimation = StaggeredAnimation;