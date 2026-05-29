const NAV_ITEMS = [
    { url: 'index.html', icon: 'home', title: 'Главная' },
    { url: 'https://oracle-ai-pro.github.io/kosmogram', icon: 'forum', title: 'Kosmogram' },
    { url: 'helper.html', icon: 'psychology', title: 'Помощник' },
    { url: 'about.html', icon: 'info', title: 'О сайте' }
];

const PACKS_DATA = [
    { id: 'abp_official', title: 'A Better Place', desc: 'Оригинальная игра' },
    { id: 'kl_34', title: 'Kosmo Level 3.4', desc: 'Worldpack' }
];

const OracleEngine = {
    init: function() {
        if (document.getElementById('oracle-trigger')) return;
        const btn = document.createElement('div');
        btn.id = 'oracle-trigger';
        btn.innerHTML = '<span class="material-symbols-sharp">chat</span> Спроси у ИИ';
        btn.onclick = () => this.createOracleWindow();
        document.body.appendChild(btn);
    },

    createOracleWindow: function() {
        if (document.getElementById('oracle-window')) return;
        const win = document.createElement('div');
        win.id = 'oracle-window';
        win.className = 'oracle-win';
        win.innerHTML = `
            <div class="oracle-header" id="oracle-header">
                <span class="material-symbols-sharp">menu</span>
                <span>Оракул 1.1</span>
                <span class="material-symbols-sharp" onclick="document.getElementById('oracle-window').remove()">close</span>
            </div>
            <div style="padding:15px">
                <button onclick="alert('Новый чат создан')"><span class="material-symbols-sharp">add</span> Новый чат</button>
                <div id="chat-list"></div>
            </div>
        `;
        document.body.appendChild(win);
        this.makeDraggable(win);
    },

    makeDraggable: function(el) {
        let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        el.querySelector('.oracle-header').onmousedown = (e) => {
            e.preventDefault();
            pos3 = e.clientX; pos4 = e.clientY;
            document.onmouseup = () => document.onmousemove = null;
            document.onmousemove = (e) => {
                pos1 = pos3 - e.clientX; pos2 = pos4 - e.clientY;
                pos3 = e.clientX; pos4 = e.clientY;
                el.style.top = (el.offsetTop - pos2) + "px";
                el.style.left = (el.offsetLeft - pos1) + "px";
            };
        };
    }
};

function renderNavigation() {
    const nav = document.createElement('header');
    nav.className = 'nav-header';
    nav.style.padding = '20px';
    nav.innerHTML = NAV_ITEMS.map(i => `<a href="${i.url}" style="margin-right:15px; color:white; text-decoration:none">${i.title}</a>`).join('');
    document.body.prepend(nav);
}

document.addEventListener('DOMContentLoaded', () => {
    renderNavigation();
    OracleEngine.init();
    const grid = document.getElementById('packs-grid');
    if (grid) grid.innerHTML = PACKS_DATA.map(p => `<div class="card"><h3>${p.title}</h3><p>${p.desc}</p></div>`).join('');
});
