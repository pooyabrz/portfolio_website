function toggleNav() {
  const el = document.getElementById('navmobile');
  el.classList.toggle('open');
  el.setAttribute('aria-hidden', !el.classList.contains('open'));
}

const roles = [
  "Computer Science Student",
  "AI Developer",
  "Full-Stack Enthusiast",
  "C++ & Python Developer"
];
let i = 0, j = 0, forward = true;
const typingEl = document.getElementById("typing");

function tick() {
  const full = roles[i];
  typingEl.textContent = full.slice(0, j);
  if (forward) {
    j++;
    if (j > full.length) {
      forward = false;
      setTimeout(tick, 900);
      return;
    }
  } else {
    j--;
    if (j === 0) {
      forward = true;
      i = (i + 1) % roles.length;
    }
  }
  setTimeout(tick, 80);
}
tick();
