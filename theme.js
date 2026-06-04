(function() {
    function applyStyles() {
        const theme = localStorage.getItem('lmsh_theme') || 'dark';
        const accent = localStorage.getItem('lmsh_accent') || 'purple';
        document.documentElement.setAttribute('data-theme', theme);
        document.documentElement.setAttribute('data-accent', accent);
    }
    applyStyles();
    window.updateSystemTheme = applyStyles;
})();
