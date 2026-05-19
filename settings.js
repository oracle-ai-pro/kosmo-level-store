/**
 * settings.js — Единый конфигурационный центр инфраструктуры ЛМСХ
 * Отвечает за localStorage, темы Material You и сквозную навигацию.
 */

// Список всех страниц для автоматической генерации меню
const NAV_ITEMS = [
    { url: 'index.html', icon: 'home', title: 'Главная' },
    { url: 'kosmogram.html', icon: 'forum', title: 'Kosmogram' },
    { url: 'helper.html', icon: 'support_agent', title: 'Помощник' },
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
// База данных паков и контента Штаба ЛМСХ
const PACKS_DATA = [
    // --- ОФИЦИАЛЬНЫЕ РЕЛИЗЫ ---
    {
        id: 'abp_official',
        category: 'official',
        title: 'A Better Place',
        description: 'Скачать или обновить оригинальную игру на официальных площадках.',
        links: {
            playmarket: 'https://play.google.com/store/...', // тут будут ссылки
            appstore: '#',
            steam: '#'
        }
    },
    // --- PURPLE ONE CONTINUE ---
    {
        id: 'bad_guest',
        category: 'purple',
        title: 'Не хороший гость',
        description: 'Пак из серии Purple One Continue. На данный момент недоступен для загрузки.',
        status: 'locked' // заблокирован для скачивания
    },
    // --- ПАКI KOSMO LEVEL (Генерируются по твоей маске пути) ---
    // Версии: 3.4, 3.3, 3.2, 3.1, 3.0, 2.9, 2.8, 2.5, 2.2, 2.0, 1.0
    { id: 'kl_34', category: 'kosmo', version: '3.4', title: 'Kosmo Level 3.4', type: 'worldpack' },
    { id: 'kl_33', category: 'kosmo', version: '3.3', title: 'Kosmo Level 3.3', type: 'worldpack' },
    { id: 'kl_32', category: 'kosmo', version: '3.2', title: 'Kosmo Level 3.2', type: 'worldpack' },
    { id: 'kl_31', category: 'kosmo', version: '3.1', title: 'Kosmo Level 3.1', type: 'worldpack' },
    { id: 'kl_30', category: 'kosmo', version: '3.0', title: 'Kosmo Level 3.0', type: 'worldpack' },
    { id: 'kl_29', category: 'kosmo', version: '2.9', title: 'Kosmo Level 2.9', type: 'worldpack' },
    { id: 'kl_28', category: 'kosmo', version: '2.8', title: 'Kosmo Level 2.8', type: 'worldpack' },
    { id: 'kl_25', category: 'kosmo', version: '2.5', title: 'Kosmo Level 2.5', type: 'worldpack' },
    { id: 'kl_22', category: 'kosmo', version: '2.2', title: 'Kosmo Level 2.2', type: 'worldpack' },
    { id: 'kl_20', category: 'kosmo', version: '2.0', title: 'Kosmo Level 2.0', type: 'worldpack' },
    { id: 'kl_10', category: 'kosmo', version: '1.0', title: 'Kosmo Level 1.0', type: 'worldpack' },

    // --- ПРЕДВАРИТЕЛЬНЫЕ ПАКИ (Аналоги) ---
    { id: 'kl_281', category: 'preview', title: 'Kosmo Level 2.8.1', description: 'Частично связанный или аналоговый пак.' },
    { id: 'tl_22', category: 'preview', title: 'Traitor Level 2.2', description: 'Аналоговый пак серии Traitor.' },
    { id: 'tl_21', category: 'preview', title: 'Traitor Level 2.1', description: 'Аналоговый пак серии Traitor.' },
    { id: 'tl_20', category: 'preview', title: 'Traitor Level 2.0', description: 'Аналоговый пак серии Traitor.' },

    // --- КНИГИ / ИСТОРИИ ---
    { id: 'lore_lumi', category: 'lore', title: 'Как Люми попала сюда?', type: 'story' },
    { id: 'lore_flight', category: 'lore', title: 'Летание', type: 'story' }
];
