// Запись настройки
function saveSetting(key, value) {
    localStorage.setItem(`lmsh_${key}`, value);
    applySettings(); // Сразу обновляем интерфейс
}

// Чтение настройки (с дефолтным значением)
function getSetting(key, defaultValue) {
    return localStorage.getItem(`lmsh_${key}`) || defaultValue;
}

// Применение настроек на странице
function applySettings() {
    const theme = getSetting('theme', 'dark');
    document.documentElement.setAttribute('data-theme', theme);
    
    const devMode = getSetting('dev_mode', 'false');
    if (devMode === 'true') {
        document.body.classList.add('dev-layout');
    } else {
        document.body.classList.remove('dev-layout');
    }
}

// Запускаем при загрузке любой страницы
document.addEventListener('DOMContentLoaded', applySettings);
