/* Touch-first, progressive enhancements; no effect on desktop layout. */
(() => {
  'use strict';
  const mq = matchMedia('(max-width: 760px)');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)');
  const dockLinks = [...document.querySelectorAll('.mobile-dock a')];
  const sections = dockLinks.map(link => document.querySelector(link.getAttribute('href'))).filter(Boolean);
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      if (!mq.matches) return;
      const candidates = entries.filter(item => item.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      if (!candidates.length) return;
      const id = candidates[0].target.id;
      dockLinks.forEach(a => {
        if (a.getAttribute('href') === `#${id}`) a.setAttribute('aria-current', 'location');
        else a.removeAttribute('aria-current');
      });
    }, {rootMargin:'-25% 0px -56% 0px',threshold:[0,.05,.25,.5]});
    sections.forEach(section => observer.observe(section));
  }
  const gallery = document.querySelector('#selected-projects');
  const counter = document.querySelector('.mobile-swipe-guide .swipe-index');
  const guide = document.querySelector('.mobile-swipe-guide');
  const filters = document.querySelector('.filters');
  const updateCounter = () => {
    if (!gallery || !counter) return;
    if (guide) guide.hidden = gallery.hidden;
    const cards = [...gallery.querySelectorAll(':scope > .project:not([hidden])')];
    if (!cards.length) {counter.textContent='00 / 00';return;}
    const box = gallery.getBoundingClientRect();
    const ref = document.documentElement.dir === 'rtl' ? box.right : box.left;
    const active = cards.reduce((best, card, i) => {
      const r = card.getBoundingClientRect();
      const dist = Math.abs((document.documentElement.dir === 'rtl' ? r.right : r.left) - ref);
      return dist < best.dist ? {dist, i} : best;
    }, {dist:Infinity, i:0});
    counter.textContent = `${String(active.i+1).padStart(2,'0')} / ${String(cards.length).padStart(2,'0')}`;
  };
  gallery?.addEventListener('scroll',updateCounter,{passive:true});
  filters?.addEventListener('click',() => {
    gallery?.scrollTo({left:0,behavior:'instant'});
    requestAnimationFrame(updateCounter);
  });
  window.addEventListener('resize',updateCounter,{passive:true});
  updateCounter();
  const tap = document.querySelector('.mobile-tap-portrait');
  const portrait = document.querySelector('.hero-profile .portrait');
  if (tap && portrait) {
    let timeout;
    tap.addEventListener('click',() => {
      if (!mq.matches || reduce.matches) return;
      portrait.classList.remove('is-wiggling');
      void portrait.offsetWidth;
      portrait.classList.add('is-wiggling');
      clearTimeout(timeout);
      timeout=setTimeout(()=>portrait.classList.remove('is-wiggling'),850);
    });
  }
})();
