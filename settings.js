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
    { id: 'bad_guest', category: 'purple', title: 'Не хороший гость', description: 'Пак из серии Purple One Continue. На данный момент недоступен для загрузки.', status: 'locked' },
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
    { id: 'kl_281', category: 'preview', title: 'Kosmo Level 2.8.1' },
    { id: 'tl_22', category: 'preview', title: 'Traitor Level 2.2' },
    { id: 'tl_21', category: 'preview', title: 'Traitor Level 2.1' },
    { id: 'tl_20', category: 'preview', title: 'Traitor Level 2.0' },
    { id: 'lore_lumi', category: 'lore', title: 'Как Люми попала сюда?' },
    { id: 'lore_flight', category: 'lore', title: 'Летание' }
];

// 3. Функция сборки навигации
function renderNavigation() {
    const navHTML = `
        <header class="nav-header">
            <div class="nav-logo">
                <span class="material-symbols-outlined">hub</span>
                <span>Штаб ЛМСХ</span>
            </div>
            <nav class="nav-links">
                ${NAV_ITEMS.map(item => `
                    <a href="${item.url}" class="${window.location.pathname.includes(item.url) ? 'active' : ''}">
                        <span class="material-symbols-outlined">${item.icon}</span>
                        ${item.title}
                    </a>
                `).join('')}
            </nav>
        </header>
    `;
    document.body.insertAdjacentHTML('afterbegin', navHTML);
}

// Запуск при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    renderNavigation();
});
