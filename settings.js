// --- КОНФИГУРАЦИЯ ШТАБА ЛМСХ ---

const NAV_ITEMS = [
    { url: 'index.html', icon: 'home', title: 'Главная' },
    { url: 'kosmogram.html', icon: 'forum', title: 'Kosmogram' },
    { url: 'helper.html', icon: 'psychology', title: 'Помощник' },
    { url: 'about.html', icon: 'info', title: 'О сайте' }
];

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
    // Если header уже есть — не плодим дубли
    if (document.querySelector('.nav-header')) return;

    const currentPath = window.location.pathname;
    
    const navHTML = `
        <header class="nav-header">
            <div class="nav-logo">
                <span class="material-symbols-outlined">hub</span>
                <span>Штаб ЛМСХ</span>
            </div>
            <nav class="nav-links">
                ${NAV_ITEMS.map(item => {
                    // Условие активности: полное совпадение или корень сайта
                    const isActive = currentPath.endsWith(item.url) || (currentPath === '/' && item.url === 'index.html');
                    return `
                        <a href="${item.url}" class="${isActive ? 'active' : ''}">
                            <span class="material-symbols-outlined">${item.icon}</span>
                            ${item.title}
                        </a>
                    `;
                }).join('')}
            </nav>
        </header>
    `;

    // Вставляем строго в начало body
    document.body.insertAdjacentHTML('afterbegin', navHTML);
}

function applyTheme() {
    const theme = localStorage.getItem('lmsh_theme') || 'dark';
    const accent = localStorage.getItem('lmsh_accent') || 'purple';
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.setAttribute('data-accent', accent);
}

// Запускаем всё ОДИН раз, когда HTML полностью построен
document.addEventListener('DOMContentLoaded', () => {
    renderNavigation();
    applyTheme();
});
