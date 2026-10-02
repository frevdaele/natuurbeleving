// Natuurbeleving: mobiel menu, soortenlijst (tabs + filter)
document.addEventListener('DOMContentLoaded', () => {
  // mobiel menu
  const menu = document.querySelector('.menu');
  const knop = document.querySelector('.menu-knop');
  if (menu && knop) {
    knop.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      knop.setAttribute('aria-expanded', String(open));
    });
  }

  const lijst = document.querySelector('.soortenlijst');
  if (!lijst) return;

  // op smalle schermen de lijst standaard dichtklappen
  const details = lijst.querySelector('details');
  if (details && window.matchMedia('(max-width: 600px)').matches) details.open = false;

  // tabs families / alfabetisch (keuze onthouden)
  const tabs = lijst.querySelectorAll('[data-tab]');
  const panelen = lijst.querySelectorAll('[data-paneel]');
  const kies = (naam) => {
    tabs.forEach((t) => t.setAttribute('aria-selected', String(t.dataset.tab === naam)));
    panelen.forEach((p) => { p.hidden = p.dataset.paneel !== naam; });
    try { localStorage.setItem('nb-lijst', naam); } catch (e) { /* geen opslag */ }
  };
  tabs.forEach((t) => t.addEventListener('click', () => kies(t.dataset.tab)));
  try { const k = localStorage.getItem('nb-lijst'); if (k) kies(k); } catch (e) { /* geen opslag */ }

  // huidige soort in beeld scrollen binnen de lijst
  const huidig = lijst.querySelector('[data-paneel]:not([hidden]) a[aria-current="page"]');
  if (huidig && window.matchMedia('(min-width: 601px)').matches) {
    huidig.scrollIntoView({ block: 'center' });
    window.scrollTo(0, 0);
  }

  // filter: toont de alfabetische lijst gefilterd
  const filter = lijst.querySelector('.filter');
  const az = lijst.querySelector('[data-paneel="az"]');
  if (!filter || !az) return;
  const items = [...az.querySelectorAll('li')];
  const norm = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
  let leeg = null;
  filter.addEventListener('input', () => {
    const q = norm(filter.value.trim());
    if (q) kies('az');
    let n = 0;
    items.forEach((li) => {
      const hit = !q || norm(li.textContent).includes(q);
      li.hidden = !hit;
      if (hit) n++;
    });
    if (!leeg) { leeg = document.createElement('p'); leeg.className = 'leeg'; az.appendChild(leeg); }
    leeg.textContent = n ? '' : 'Geen soort gevonden.';
  });
  filter.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const eerste = items.find((li) => !li.hidden);
      if (eerste) eerste.querySelector('a').click();
    }
  });
});
