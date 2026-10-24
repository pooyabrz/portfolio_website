(() => {
  'use strict';
  const root = document.documentElement;
  const body = document.body;
  const media = window.matchMedia('(prefers-color-scheme: dark)');
  const themeButton = document.querySelector('.theme-toggle');
  const themeMeta = document.querySelector('#theme-color');
  let chosenTheme = null;
  function currentTheme() {
    return chosenTheme || (media.matches ? 'dark' : 'light');
  }
  function applyTheme() {
    root.dataset.theme = currentTheme();
    themeButton.setAttribute('aria-label', currentTheme() === 'dark' ? body.dataset.themeLight : body.dataset.themeDark);
    themeMeta.content = currentTheme() === 'dark' ? '#101d1b' : '#f7f7f0';
  }
  try { chosenTheme = localStorage.getItem('pb-theme'); } catch { /* Storage is optional. */ }
  if (!['dark', 'light'].includes(chosenTheme)) chosenTheme = null;
  themeButton.addEventListener('click', () => {
    chosenTheme = currentTheme() === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem('pb-theme', chosenTheme); } catch { /* Storage is optional. */ }
    applyTheme();
  });
  media.addEventListener?.('change', () => { if (!chosenTheme) applyTheme(); });
  themeButton.hidden = false;
  applyTheme();

  const menu = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#navigation');
  const mobile = window.matchMedia('(max-width: 760px)');
  function closeMenu(returnFocus = false) {
    nav.removeAttribute('data-open');
    menu.setAttribute('aria-expanded', 'false');
    if (returnFocus) menu.focus();
  }
  menu.addEventListener('click', () => {
    const open = menu.getAttribute('aria-expanded') !== 'true';
    menu.setAttribute('aria-expanded', String(open));
    nav.toggleAttribute('data-open', open);
  });
  nav.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') closeMenu(true);
  });
  document.addEventListener('click', event => {
    if (!event.target.closest('.site-header')) closeMenu();
  });
  mobile.addEventListener?.('change', () => closeMenu());
  root.classList.add('js');

  const controls = document.querySelector('.project-controls');
  const cards = [...document.querySelectorAll('[data-project]')];
  const filters = [...document.querySelectorAll('[data-filter]')];
  const count = document.querySelector('#project-count');
  const number = new Intl.NumberFormat(root.lang === 'fa' ? 'fa-IR' : 'en-US');
  filters.forEach(button => button.addEventListener('click', () => {
    const category = button.dataset.filter;
    filters.forEach(filter => filter.setAttribute('aria-pressed', String(filter === button)));
    let shown = 0;
    cards.forEach(card => {
      card.hidden = category !== 'all' && category !== card.dataset.category;
      if (!card.hidden) shown += 1;
    });
    count.textContent = `${number.format(shown)} ${body.dataset.resultsLabel}`;
  }));
  controls.hidden = false;

  const copyButton = document.querySelector('.copy-email');
  const copyStatus = document.querySelector('.copy-status');
  copyButton.hidden = false;
  copyButton.addEventListener('click', async () => {
    try {
      if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(copyButton.dataset.email);
      copyStatus.textContent = body.dataset.copied;
    } catch {
      const range = document.createRange();
      range.selectNodeContents(document.querySelector('.email-address'));
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      copyStatus.textContent = body.dataset.copyFailed;
    }
  });
})();
