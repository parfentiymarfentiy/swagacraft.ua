// Particles.js Configuration for SwagaCraft

function initializeParticles() {
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: ['#4CAF50', '#FF9800', '#2196F3', '#9C27B0']
                },
                shape: {
                    type: 'circle',
                    stroke: {
                        width: 0,
                        color: '#000000'
                    },
                    polygon: {
                        nb_sides: 5
                    }
                },
                opacity: {
                    value: 0.5,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 2,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#4CAF50',
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: 'none',
                    random: true,
                    straight: false,
                    out_mode: 'out',
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'grab'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 200,
                        line_linked: {
                            opacity: 0.5
                        }
                    },
                    bubble: {
                        distance: 400,
                        size: 40,
                        duration: 2,
                        opacity: 8,
                        speed: 3
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4
                    },
                    push: {
                        particles_nb: 4
                    },
                    remove: {
                        particles_nb: 2
                    }
                }
            },
            retina_detect: true
        });
    }
}

// Custom Particle System
class SwagaParticleSystem {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.particles = [];
        this.maxParticles = 100;
        this.initialize();
    }

    initialize() {
        this.createParticles();
        this.animate();
    }

    createParticles() {
        for (let i = 0; i < this.maxParticles; i++) {
            this.createParticle();
        }
    }

    createParticle() {
        const particle = document.createElement('div');
        particle.className = 'swaga-particle';
        
        const size = 2 + Math.random() * 4;
        const posX = Math.random() * 100;
        const delay = Math.random() * 20;
        const duration = 10 + Math.random() * 15;
        const color = this.getRandomColor();
        
        particle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: ${color};
            border-radius: 50%;
            left: ${posX}%;
            top: 100%;
            animation: particle-float ${duration}s infinite linear;
            animation-delay: ${delay}s;
            pointer-events: none;
        `;

        this.container.appendChild(particle);
        this.particles.push({
            element: particle,
            speed: 0.5 + Math.random() * 1,
            amplitude: 50 + Math.random() * 100,
            frequency: 0.5 + Math.random() * 1,
            time: Math.random() * Math.PI * 2
        });
    }

    getRandomColor() {
        const colors = [
            '#4CAF50', '#FF9800', '#2196F3', 
            '#9C27B0', '#00BCD4', '#FF5722'
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    animate() {
        this.particles.forEach(particle => {
            particle.time += 0.02;
            const x = parseFloat(particle.element.style.left);
            const y = parseFloat(particle.element.style.top);
            
            const newX = x + Math.sin(particle.time * particle.frequency) * 0.5;
            const newY = y - particle.speed;
            
            particle.element.style.left = `${newX}%`;
            particle.element.style.top = `${newY}%`;
            
            // Reset particle when it goes off screen
            if (newY < -10) {
                particle.element.style.top = '100%';
                particle.element.style.left = `${Math.random() * 100}%`;
            }
        });

        requestAnimationFrame(() => this.animate());
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeParticles();
    
    // Initialize custom particle system
    const customParticles = new SwagaParticleSystem('particles-js');
});