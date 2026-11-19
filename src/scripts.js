const filters = document.querySelectorAll('.works-filter input');
const cards = document.querySelectorAll('.work-card');
filters.forEach((filter) => {
  filter.addEventListener('change', () => {
    cards.forEach((card) => {
      card.hidden = filter.value !== 'all' && card.dataset.category !== filter.value;
    });
  });
});

const loadMore = document.querySelector('#load-more');
loadMore?.addEventListener('click', () => {
  cards.forEach((card) => card.classList.add('work-card--loaded'));
  loadMore.textContent = 'All works loaded';
  loadMore.disabled = true;
});


const menuToggle = document.querySelector('#menu-toggle');
const menuLinks = document.querySelectorAll('#main-menu a');

if (menuToggle) {
  // Закривати меню після натискання на посилання
  menuLinks.forEach((link) => {
    link.addEventListener('click', () => {
      menuToggle.checked = false;
    });
  });

  // Закривати меню під час скролу
  window.addEventListener(
    'scroll',
    () => {
      menuToggle.checked = false;
    },
    { passive: true },
  );
}
