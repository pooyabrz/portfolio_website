function toggleNav() {
  const el = document.getElementById('navmobile');
  el.classList.toggle('open');
  el.setAttribute('aria-hidden', !el.classList.contains('open'));
}
