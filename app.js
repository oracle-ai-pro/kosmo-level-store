// Простая логика: если в запланированных пусто, можно добавить инфо
console.log("Prestige HQ Dashboard Initialized");

// Здесь можно будет подтягивать JSON с данными о паках
const packs = ["Kosmo Level 3.4", "Kosmo Level 3.3"];
const container = document.getElementById('packs-container');

packs.forEach(pack => {
    container.innerHTML += `<div class="pack-card"><h3>${pack}</h3></div>`;
});
