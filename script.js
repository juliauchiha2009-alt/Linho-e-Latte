// script.js - pesquisa e filtros para roupas.html

document.addEventListener('DOMContentLoaded', function () {
  const inputSearch = document.getElementById('searchInput');
  const selectType = document.getElementById('filterType');
  const selectAge = document.getElementById('filterAge');
  const selectCondition = document.getElementById('filterCondition');
  const cards = Array.from(document.querySelectorAll('.product-card'));

  function applyFilters() {
    const q = inputSearch.value.trim().toLowerCase();
    const type = selectType.value;
    const age = selectAge.value;
    const cond = selectCondition.value;

    cards.forEach(card => {
      const name = card.dataset.name.toLowerCase();
      const t = card.dataset.type;
      const a = card.dataset.age;
      const c = card.dataset.condition;

      let visible = true;

      if (q && !name.includes(q)) visible = false;
      if (type !== 'all' && t !== type) visible = false;
      if (age !== 'all' && a !== age) visible = false;
      if (cond !== 'all' && c !== cond) visible = false;

      card.classList.toggle('hidden', !visible);
    });
  }

  // event listeners
  inputSearch.addEventListener('input', applyFilters);
  selectType.addEventListener('change', applyFilters);
  selectAge.addEventListener('change', applyFilters);
  selectCondition.addEventListener('change', applyFilters);

  // optional: fast apply on load
  applyFilters();
});
