(() => {
  'use strict';
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  // Only hide for reveals after the observer is successfully set up.
  if ('IntersectionObserver' in window && !reduced.matches) {
    const visible = [...document.querySelectorAll('.section-heading, .project, .research-entry, .timeline-item, .learning-note, .industry-grid article, .about-copy, .toolkit, .contact-grid')];
    const obs = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('in-view');
        obs.unobserve(entry.target);
      }
    }, { threshold: .06, rootMargin: '0px 0px 60px 0px' });
    for (const el of visible) {
      el.classList.add('reveal-item');
      obs.observe(el);
    }
    document.documentElement.classList.add('motion-ready');
  }
  // Pointer-responsive poster tilt, intentionally disabled on touch and reduced motion.
  if (window.matchMedia('(hover:hover) and (pointer:fine)').matches && !reduced.matches) {
    for (const card of document.querySelectorAll('.project:not(.featured)')) {
      card.dataset.tilt = '';
      card.addEventListener('pointermove', event => {
        if (card.contains(document.activeElement) && document.activeElement.matches('summary,button,a')) return;
        const box = card.getBoundingClientRect();
        const x = (event.clientX - box.left) / box.width - .5;
        const y = (event.clientY - box.top) / box.height - .5;
        card.style.setProperty('--tilt-y', `${(x * 3).toFixed(2)}deg`);
        card.style.setProperty('--tilt-x', `${(-y * 3).toFixed(2)}deg`);
      }, { passive:true });
      card.addEventListener('pointerleave', () => {
        card.style.setProperty('--tilt-x', '0deg');
        card.style.setProperty('--tilt-y', '0deg');
      });
    }
  }
})();
