/**
 * settings.js — Единый конфигурационный центр инфраструктуры ЛМСХ
 * Отвечает за localStorage, темы Material You и сквозную навигацию.
 */

// Список всех страниц для автоматической генерации меню
const NAV_ITEMS = [
    { url: 'index.html', icon: 'home', title: 'Главная' },
    { url: 'kosmogram.html', icon: 'forum', title: 'Kosmogram' },
    { url: 'helper.html', icon: 'support_agent', title: 'Helper' },
    { url: 'oracle.html', icon: 'psychology', title: 'Оракул' },
    { url: 'about.html', icon: 'info', title: 'О сайте' }
];

document.addEventListener('DOMContentLoaded', () => {
    // 1. Инициализация и применение глобального интерфейса
    applyGlobalSettings();

    // 2. Автоматическая сборка современной навигации
    renderNavigation();
});

// Функция применения настроек из LocalStorage
function applyGlobalSettings() {
    const savedTheme = localStorage.getItem('lmsh_theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);

    const savedAccent = localStorage.getItem('lmsh_accent') || 'purple';
    document.documentElement.setAttribute('data-accent', savedAccent);
}

// Функция сборки и вставки навигационной панели
function renderNavigation() {
    // Находим или создаем элемент header в самом начале body
    let header = document.querySelector('.nav-header');
    if (!header) {
        header = document.createElement('header');
        header.className = 'nav-header';
        document.body.insertBefore(header, document.body.firstChild);
    }

    // Логотип Штаба
    const logoDiv = document.createElement('div');
    logoDiv.className = 'nav-logo';
    logoDiv.innerHTML = `<span class="material-symbols-outlined">hub</span><span>Штаб ЛМСХ</span>`;
    header.appendChild(logoDiv);

    // Контейнер для ссылок
    const navBar = document.createElement('nav');
    navBar.className = 'nav-links';

    // Текущее имя файла страницы (например, 'about.html')
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';

    // Заполняем навигацию ссылками
    NAV_ITEMS.forEach(item => {
        const link = document.createElement('a');
        link.href = item.url;
        link.innerHTML = `<span class="material-symbols-outlined">${item.icon}</span>${item.title}`;
        
        // Если страница текущая — делаем её активной
        if (currentPath === item.url) {
            link.className = 'active';
        }
        navBar.appendChild(link);
    });

    header.appendChild(navBar);
}
