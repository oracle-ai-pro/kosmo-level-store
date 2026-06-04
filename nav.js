// --- NAV.JS: Король навигации ЛМСХ (Финальная версия) ---

(function() {
    // 1. Внедряем стили (Material Design 3 Style)
    const style = document.createElement('style');
    style.innerHTML = `
        .nav-header { 
            display: flex !important; align-items: center !important; justify-content: space-between !important; 
            background-color: var(--md-sys-color-surface, #211f26) !important; 
            padding: 12px 24px !important; box-shadow: 0 2px 4px rgba(0,0,0,0.1) !important; 
            position: sticky !important; top: 0 !important; z-index: 9999 !important; 
            width: 100% !important; box-sizing: border-box !important;
        }
        .nav-logo { font-size: 20px !important; font-weight: 600 !important; color: var(--md-sys-color-primary, #d0bcff) !important; display: flex !important; align-items: center !important; gap: 8px !important; }
        .nav-links { display: flex !important; gap: 16px !important; }
        .nav-links a { 
            color: var(--md-sys-color-on-surface-variant, #cac4d0) !important; 
            text-decoration: none !important; padding: 8px 16px !important; border-radius: 20px !important; 
            display: flex !important; align-items: center !important; gap: 6px !important; 
            font-weight: 500 !important; transition: 0.2s !important;
        }
        .nav-links a:hover, .nav-links a.active { 
            background-color: var(--md-sys-color-surface-variant, #49454f) !important; 
            color: var(--md-sys-color-primary, #d0bcff) !important; 
        }
    `;
    document.head.appendChild(style);

    // 2. Логика вставки меню
    function initNav() {
        if (document.querySelector('.nav-header')) return; // Защита от дублей

        const nav = document.createElement('header');
        nav.className = 'nav-header';
        
        // Список страниц
        const pages = [
            { name: 'Главная', url: 'index.html' },
            { name: 'Оракул', url: 'helper.html' },
            { name: 'Настройки', url: 'about.html' }
        ];

        // Определяем текущую страницу для подсветки
        const currentPath = window.location.pathname;

        nav.innerHTML = `
            <div class="nav-logo">Штаб ЛМСХ</div>
            <nav class="nav-links">
                ${pages.map(p => `
                    <a href="${p.url}" class="${currentPath.endsWith(p.url) ? 'active' : ''}">
                        ${p.name}
                    </a>
                `).join('')}
            </nav>
        `;
        document.body.prepend(nav);
    }

    // Запуск после загрузки DOM
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initNav);
    } else {
        initNav();
    }
})();
