// --- NAV.JS: Король навигации Штаба ЛМСХ ---

const NAV_ITEMS = [
    { url: 'index.html', icon: 'home', title: 'Главная' },
    { url: 'https://oracle-ai-pro.github.io/kosmogram', icon: 'forum', title: 'Kosmogram' },
    { url: 'helper.html', icon: 'psychology', title: 'Помощник' },
    { url: 'about.html', icon: 'info', title: 'О сайте' }
];

const OracleEngine = {
    init: function() {
        if (document.getElementById('oracle-trigger')) return;
        const btn = document.createElement('div');
        btn.id = 'oracle-trigger';
        btn.innerHTML = '<span class="material-symbols-sharp">chat</span>';
        btn.onclick = () => this.createOracleWindow();
        document.body.appendChild(btn);
    },
    // ... остальная логика Оракула ...
};

function renderNavigation() {
    if (document.querySelector('.nav-header')) return;
    
    const nav = document.createElement('header');
    nav.className = 'nav-header';
    nav.innerHTML = `
        <div class="nav-logo">
            <span class="material-symbols-outlined">hub</span> <span>Штаб ЛМСХ</span>
        </div>
        <nav class="nav-links">
            ${NAV_ITEMS.map(i => `<a href="${i.url}">${i.title}</a>`).join('')}
        </nav>
    `;
    document.body.prepend(nav);
}

document.addEventListener('DOMContentLoaded', () => {
    renderNavigation();
    OracleEngine.init();
});
