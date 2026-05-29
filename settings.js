const NAV_ITEMS = [
    { url: 'index.html', icon: 'home', title: 'Главная' },
    { url: 'kosmogram.html', icon: 'forum', title: 'Kosmogram' },
    { url: 'helper.html', icon: 'psychology', title: 'Помощник' },
    { url: 'about.html', icon: 'info', title: 'О сайте' }
];

const OracleEngine = {
    getChats: () => JSON.parse(localStorage.getItem('oracle_chats') || '[]'),
    
    init: function() {
        if (document.getElementById('oracle-trigger')) return;
        const btn = document.createElement('div');
        btn.id = 'oracle-trigger';
        btn.innerHTML = '<span class="material-symbols-outlined">psychology</span> Спроси у ИИ';
        btn.onclick = () => this.openWindow();
        document.body.appendChild(btn);
    },

    openWindow: function() {
        const modal = document.createElement('div');
        modal.id = 'oracle-modal';
        modal.innerHTML = `
            <div class="oracle-content">
                <div class="oracle-header">
                    <h3>Оракул 1.1</h3>
                    <button onclick="document.getElementById('oracle-modal').remove()">✕</button>
                </div>
                <div id="chat-list"></div>
                <button id="new-chat-btn"><span class="material-symbols-outlined">add</span> Новый чат</button>
            </div>
        `;
        document.body.appendChild(modal);
        this.renderList();
    },

    renderList: function() {
        const list = document.getElementById('chat-list');
        const chats = this.getChats();
        list.innerHTML = chats.map((chat, i) => `
            <div class="chat-item">
                <span>${chat.title}</span>
                <button onclick="OracleEngine.deleteChat(${i})">
                    <span class="material-symbols-outlined">more_vert</span>
                </button>
            </div>
        `).join('');
    },

    deleteChat: function(i) {
        if (confirm("Удалить этот чат из памяти Штаба?")) {
            let c = this.getChats();
            c.splice(i, 1);
            localStorage.setItem('oracle_chats', JSON.stringify(c));
            this.renderList();
        }
    }
};

function renderNavigation() {
    if (document.querySelector('.nav-header')) return;
    const nav = document.createElement('header');
    nav.className = 'nav-header';
    nav.innerHTML = `<nav class="nav-links">${NAV_ITEMS.map(i => `<a href="${i.url}">${i.title}</a>`).join('')}</nav>`;
    document.body.prepend(nav);
}

document.addEventListener('DOMContentLoaded', () => {
    renderNavigation();
    OracleEngine.init();
});
