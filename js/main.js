// Main JavaScript File for SwagaCraft Website

// Server Configuration
const SERVER_CONFIG = {
    ip: 'play.swagacraft.ru',
    version: '1.16.5 - 1.20.1',
    discord: 'https://discord.gg/swagacraft',
    vk: 'https://vk.com/swagacraft',
    email: 'support@swagacraft.ru'
};

// Features Data
const FEATURES = [
    {
        icon: 'fas fa-gamepad',
        title: 'Уникальные моды',
        description: 'Более 50 кастомных модов, созданных специально для SwagaCraft',
        color: '#4CAF50'
    },
    {
        icon: 'fas fa-shield-alt',
        title: 'Античит система',
        description: 'Мощная защита от читеров и гриферов',
        color: '#FF9800'
    },
    {
        icon: 'fas fa-rocket',
        title: 'Высокий TPS',
        description: 'Стабильные 20 TPS даже при 1000+ игроков онлайн',
        color: '#2196F3'
    },
    {
        icon: 'fas fa-coins',
        title: 'Экономика',
        description: 'Развитая экономическая система с аукционами и магазинами',
        color: '#9C27B0'
    },
    {
        icon: 'fas fa-crown',
        title: 'Клановые войны',
        description: 'Система кланов и регулярные PvP сражения',
        color: '#FF5722'
    },
    {
        icon: 'fas fa-sync-alt',
        title: 'Ежедневные события',
        description: 'Ежедневные ивенты и мини-игры для всех игроков',
        color: '#00BCD4'
    }
];

// Staff Members Data
const STAFF_MEMBERS = [
    {
        name: 'Parfentiy',
        role: '👑 Император (Владелец Сервера)',
        avatar: 'P',
        color: '#FF5722',
        since: '2025'
    },
    {
        name: 'Zefix',
        role: '⚜️ Август (Со-Владелец Сервера)',
        avatar: 'Z',
        color: '#9C27B0',
        since: '2025'
    },
    {
        name: 'Ventura',
        role: '🎭 Владыка (Со-Владелец Сервера, Пиар-Менеджер)',
        avatar: 'V',
        color: '#2196F3',
        since: '2025'
    }
];

// Rules Data
const RULES = {
    'Основные правила': [
        'Запрещено использование читов и стороннего ПО',
        'Запрещено мошенничество и воровство',
        'Уважайте других игроков и администрацию',
        'Запрещен неадекватное поведение в чате'
    ],
    'PvP правила': [
        'Разрешено PvP только в специальных зонах, и в открытом мире',
        'Запрещено кемпить спавн точки',
        'Уважайте соперников в PvP битвах'
    ],
    'Экономика': [
        'Запрещены махинации с экономикой',
        'Разрешена только честная торговля',
        'Цены на товары должны быть адекватными и соответствующим их настоящей цене'
    ]
};

// Vote Sites Data
const VOTE_SITES = [
    { name: 'Minecraft-Servers', url: '#', icon: 'fas fa-vote-yea' },
    { name: 'TopG', url: '#', icon: 'fas fa-star' },
    { name: 'Minecraft-MP', url: '#', icon: 'fas fa-medal' },
    { name: 'PlanetMinecraft', url: '#', icon: 'fas fa-globe' }
];

// Shop Items Data
const SHOP_ITEMS = [
        {
        name: '🗡️ Воин из Колизея 🗡️ ',
        price: 149,
        currency: '₽',
        features: ['Префикс в чате', 'Доступ к /fly', 'Авторитет на сервере среди игроков'],
        popular: false
    },
    {
        name: '🔥 Непобежденный (Invictus) 🔥',
        price: 299,
        currency: '₽',
        features: ['Префикс в чате', 'Доступ к /fly', 'Авторитет на сервере среди игроков'],
        popular: false
    },
    {
        name: '👑 Любимец Цезаря 👑',
        price: 799,
        currency: '₽',
        features: ['Все из Базового', 'Доступ к множеству команд', 'Доступ к /kit advanced'],
        popular: true
    },
    {
        name: '⚔ Павший Герой ⚔',
        price: 1499,
        currency: '₽',
        features: ['Все из Продвинутого', 'Доступ к /kit vip','Цветной ник'],
        popular: false
    },
    {
        name: '🔱 Гладиатор 🔱',
        price: 2999,
        currency: '₽',
        features: ['Все из VIP', 'Уникальный префикс','Все эффекты'],
        popular: false
    },
    {
        name: '🏛 Сенатор Арены 🏛',
        price: 4999,
        currency: '₽',
        features: ['Все из Легенда', 'Уникальный префикс','Все эффекты', "Все доступные /kit на сервере"],
        popular: false
    },
    {
        name: '⚡ Бог (Ланиста) ⚡',
        price: 6499,
        currency: '₽',
        features: ['Все из Легенда', 'Уникальный префикс','Все эффекты', "Все доступные /kit на сервере"],
        popular: false
    }
];

// Global Variables
let currentSection = 'home';
let isModalOpen = false;

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
    loadFeatures();
    loadStaff();
    loadRules();
    loadVoteSites();
    loadShopItems();
    setupEventListeners();
    startAnimations();
});

// Initialize Website
function initializeWebsite() {
    console.log('🚀 SwagaCraft Website Initialized');
    
    // Hide preloader after 2 seconds
    setTimeout(() => {
        document.getElementById('preloader').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('preloader').style.display = 'none';
        }, 500);
    }, 2000);

    // Initialize particles
    initializeParticles();
    
    // Initialize 3D scene
    initialize3DScene();
    
    // Initialize custom cursor
    initializeCustomCursor();
}

// Load Features
function loadFeatures() {
    const featuresGrid = document.querySelector('.features-grid');
    
    FEATURES.forEach((feature, index) => {
        const featureCard = document.createElement('div');
        featureCard.className = 'feature-card scroll-reveal';
        featureCard.style.animationDelay = `${index * 0.1}s`;
        
        featureCard.innerHTML = `
            <div class="card-icon" style="background: ${feature.color}">
                <i class="${feature.icon}"></i>
            </div>
            <h3>${feature.title}</h3>
            <p>${feature.description}</p>
            <div class="progress-bar" style="width: 0%"></div>
        `;
        
        featuresGrid.appendChild(featureCard);
    });
}

// Load Staff Members
function loadStaff() {
    const staffGrid = document.querySelector('.staff-grid');
    
    STAFF_MEMBERS.forEach((staff, index) => {
        const staffCard = document.createElement('div');
        staffCard.className = 'staff-card scroll-reveal';
        staffCard.style.animationDelay = `${index * 0.1}s`;
        
        staffCard.innerHTML = `
            <div class="staff-avatar" style="background: ${staff.color}">
                ${staff.avatar}
            </div>
            <h3>${staff.name}</h3>
            <p class="staff-role">${staff.role}</p>
            <p class="staff-since">С ${staff.since}</p>
            <div class="social-links">
                <a href="https://vk.com/filatovww" class="social-link"><i class="fab fa-vk"></i></a>
            </div>
        `;
        
        staffGrid.appendChild(staffCard);
    });
}

// Load Rules
function loadRules() {
    const rulesContent = document.querySelector('.rules-content');
    
    for (const [category, rules] of Object.entries(RULES)) {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'rule-category scroll-reveal';
        
        let rulesHTML = `
            <h3>${category}</h3>
            <ul class="rule-list">
        `;
        
        rules.forEach(rule => {
            rulesHTML += `<li>${rule}</li>`;
        });
        
        rulesHTML += '</ul>';
        categoryDiv.innerHTML = rulesHTML;
        rulesContent.appendChild(categoryDiv);
    }
}

// Load Vote Sites
function loadVoteSites() {
    const voteGrid = document.querySelector('.vote-grid');
    
    VOTE_SITES.forEach((site, index) => {
        const voteBtn = document.createElement('button');
        voteBtn.className = 'vote-btn scroll-reveal';
        voteBtn.style.animationDelay = `${index * 0.1}s`;
        
        voteBtn.innerHTML = `
            <i class="${site.icon}"></i>
            ${site.name}
        `;
        
        voteBtn.addEventListener('click', () => voteForServer(site.name));
        voteGrid.appendChild(voteBtn);
    });
}

// Load Shop Items
function loadShopItems() {
    const shopGrid = document.querySelector('.shop-grid');
    
    SHOP_ITEMS.forEach((item, index) => {
        const shopItem = document.createElement('div');
        shopItem.className = `shop-item scroll-reveal ${item.popular ? 'featured' : ''}`;
        shopItem.style.animationDelay = `${index * 0.1}s`;
        
        let featuresHTML = '';
        item.features.forEach(feature => {
            featuresHTML += `<li>${feature}</li>`;
        });
        
        shopItem.innerHTML = `
            ${item.popular ? '<div class="badge">Популярный</div>' : ''}
            <h3>${item.name}</h3>
            <div class="shop-price">${item.price}${item.currency}</div>
            <ul class="pricing-features">
                ${featuresHTML}
            </ul>
            <button class="btn-buy" onclick="buyItem('${item.name}')">
                <i class="fas fa-shopping-cart"></i>
                Купить сейчас
            </button>
        `;
        
        shopGrid.appendChild(shopItem);
    });
}

// Setup Event Listeners
function setupEventListeners() {
    // Navigation
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

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
                
                // Close mobile menu
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            }
        });
    });

    // Modal functionality
    const modal = document.getElementById('connectionModal');
    const closeBtn = document.querySelector('.close');
    
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        isModalOpen = false;
    });
    
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            isModalOpen = false;
        }
    });

    // Scroll events
    window.addEventListener('scroll', handleScroll);
    
    // Resize events
    window.addEventListener('resize', handleResize);
}

// Handle Scroll Events
function handleScroll() {
    // Navbar background
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(26, 26, 26, 0.98)';
        navbar.style.backdropFilter = 'blur(20px)';
    } else {
        navbar.style.background = 'rgba(26, 26, 26, 0.95)';
        navbar.style.backdropFilter = 'blur(20px)';
    }
    
    // Back to top button
    const backToTop = document.querySelector('.back-to-top');
    if (window.scrollY > 500) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
    
    // Scroll reveal animations
    const scrollReveals = document.querySelectorAll('.scroll-reveal');
    scrollReveals.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('revealed');
        }
    });
    
    // Parallax effects
    handleParallax();
}

// Handle Resize
function handleResize() {
    // Update any layout-dependent elements
    updateLayout();
}

// Start Animations
function startAnimations() {
    // Initial reveal animations
    setTimeout(() => {
        document.querySelectorAll('.scroll-reveal').forEach((el, index) => {
            setTimeout(() => {
                el.classList.add('revealed');
            }, index * 100);
        });
    }, 500);
    
    // Floating islands animation
    animateFloatingIslands();
    
    // Background elements animation
    createBackgroundElements();
}

// Connection Functions
function connectToServer() {
    const modal = document.getElementById('connectionModal');
    modal.style.display = 'block';
    isModalOpen = true;
    
    // Add entrance animation
    const modalContent = document.querySelector('.modal-content');
    modalContent.style.animation = 'modalSlideIn 0.3s ease';
}

function copyIP() {
    const ip = document.getElementById('serverIp').textContent;
    navigator.clipboard.writeText(ip).then(() => {
        showNotification('IP адрес скопирован в буфер обмена!', 'success');
    }).catch(() => {
        showNotification('Не удалось скопировать IP адрес', 'error');
    });
}

// Vote Function
function voteForServer(siteName) {
    showNotification(`Голосование на ${siteName}...`, 'info');
    
    // Simulate voting process
    setTimeout(() => {
        showNotification('Спасибо за ваш голос!', 'success');
    }, 2000);
}

// Shop Functions
function buyItem(itemName) {
    showNotification(`Покупка "${itemName}"...`, 'info');
    
    // Simulate purchase process
    setTimeout(() => {
        showNotification(`Успешно приобретен "${itemName}"!`, 'success');
    }, 1500);
}

// Notification System
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas fa-${getNotificationIcon(type)}"></i>
        ${message}
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

function getNotificationIcon(type) {
    const icons = {
        success: 'check-circle',
        error: 'exclamation-circle',
        warning: 'exclamation-triangle',
        info: 'info-circle'
    };
    return icons[type] || 'info-circle';
}

// Utility Functions
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

function updateLayout() {
    // Update any layout-specific calculations
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

function handleParallax() {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.parallax');
    
    parallaxElements.forEach(element => {
        const speed = element.dataset.speed || 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
}

// Initialize Custom Cursor
function initializeCustomCursor() {
    const cursor = document.createElement('div');
    const cursorFollower = document.createElement('div');
    
    cursor.className = 'custom-cursor';
    cursorFollower.className = 'cursor-follower';
    
    document.body.appendChild(cursor);
    document.body.appendChild(cursorFollower);
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        setTimeout(() => {
            cursorFollower.style.left = e.clientX + 'px';
            cursorFollower.style.top = e.clientY + 'px';
        }, 100);
    });
    
    // Add hover effects
    const hoverElements = document.querySelectorAll('button, a, .hover-effect');
    hoverElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(1.5)';
            cursorFollower.style.transform = 'scale(1.2)';
        });
        
        element.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            cursorFollower.style.transform = 'scale(1)';
        });
    });
}

// Back to Top Functionality
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add back to top button
document.addEventListener('DOMContentLoaded', () => {
    const backToTopBtn = document.createElement('button');
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
    backToTopBtn.addEventListener('click', scrollToTop);
    document.body.appendChild(backToTopBtn);
});

// Export functions for global access
window.connectToServer = connectToServer;
window.copyIP = copyIP;
window.scrollToSection = scrollToSection;
window.buyItem = buyItem;
window.scrollToTop = scrollToTop;