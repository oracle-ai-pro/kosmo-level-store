// --- КОНФИГУРАЦИЯ ШТАБА ЛМСХ ---

// 1. Список навигации
const NAV_ITEMS = [
    { url: 'index.html', icon: 'home', title: 'Главная' },
    { url: 'kosmogram.html', icon: 'forum', title: 'Kosmogram' },
    { url: 'helper.html', icon: 'psychology', title: 'Помощник' },
    { url: 'about.html', icon: 'info', title: 'О сайте' }
];

// 2. База данных паков
const PACKS_DATA = [
    { id: 'abp_official', category: 'official', title: 'A Better Place', description: 'Скачать или обновить оригинальную игру.', type: 'link' },
    { id: 'bad_guest', category: 'purple', title: 'Не хороший гость', description: 'Пак из серии Purple One Continue. Недоступен.', status: 'locked' },
    { id: 'kl_34', category: 'kosmo', version: '3.4', title: 'Kosmo Level 3.4', type: 'worldpack' },
    { id: 'kl_33', category: 'kosmo', version: '3.3', title: 'Kosmo Level 3.3', type: 'worldpack' },
    { id: 'kl_32', category: 'kosmo', version: '3.2', title: 'Kosmo Level 3.2', type: 'worldpack' },
    { id: 'kl_31', category: 'kosmo', version: '3.1', title: 'Kosmo Level 3.1', type: 'worldpack' },
    { id: 'kl_30', category: 'kosmo', version: '3.0', title: 'Kosmo Level 3.0', type: 'worldpack' },
    { id: 'lore_lumi', category: 'lore', title: 'Как Люми попала сюда?' }
];

function renderNavigation() {
    // 1. Безопасная проверка: есть ли body?
    if (!document.body) {
        console.warn("Body еще не загружен, ждем...");
        return;
    }

    // 2. Если уже есть header — не дублируем
    if (document.querySelector('.nav-header')) return;

    const currentPath = window.location.pathname;
    
    const navHTML = `
        <header class="nav-header">
            <div class="nav-logo">
                <span class="material-symbols-outlined">hub</span>
                <span>Штаб ЛМСХ</span>
            </div>
            <nav class="nav-links">
                ${NAV_ITEMS.map(item => `
                    <a href="${item.url}" class="${currentPath.endsWith(item.url) ? 'active' : ''}">
                        <span class="material-symbols-outlined">${item.icon}</span>
                        ${item.title}
                    </a>
                `).join('')}
            </nav>
        </header>
    `;

    // 3. Вставляем только если body существует
    document.body.insertAdjacentHTML('afterbegin', navHTML);
}
// Запуск только после полной загрузки DOM
document.addEventListener('DOMContentLoaded', () => {
    renderNavigation();
    applyTheme();
});

function applyTheme() {
    const theme = localStorage.getItem('lmsh_theme') || 'dark';
    const accent = localStorage.getItem('lmsh_accent') || 'purple';
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.setAttribute('data-accent', accent);
}
