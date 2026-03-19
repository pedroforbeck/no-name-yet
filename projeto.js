const cursor        = document.getElementById('cursor');
const trailContainer = document.getElementById('cursor-trail-container');
let lastTrail = 0;

document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top  = e.clientY + 'px';

  const now = Date.now();
  if (now - lastTrail > 40) {
    lastTrail = now;
    const dot = document.createElement('div');
    dot.className = 'trail-dot';
    dot.style.left   = e.clientX + 'px';
    dot.style.top    = e.clientY + 'px';
    const size = Math.random() * 5 + 3 + 'px';
    dot.style.width  = size;
    dot.style.height = size;
    trailContainer.appendChild(dot);
    setTimeout(() => dot.remove(), 420);
  }
});

/* add hover nos cards etc */
document.querySelectorAll('a, .sprite, button').forEach(el => {
  el.addEventListener('mouseenter', () => cursor.classList.add('hovering'));
  el.addEventListener('mouseleave', () => cursor.classList.remove('hovering'));
});

/* cor do cursor nos spritess @ */
document.getElementById('sprite-p1').addEventListener('mouseenter', () => cursor.style.background = 'var(--yellow)');
document.getElementById('sprite-p1').addEventListener('mouseleave', () => cursor.style.background = '');
document.getElementById('sprite-p2').addEventListener('mouseenter', () => cursor.style.background = '#2a6de8');
document.getElementById('sprite-p2').addEventListener('mouseleave', () => cursor.style.background = '');


/* vamos ver como vai ficar hero zoom */
const heroEl    = document.getElementById('hero');
const heroTitle = document.getElementById('hero-title');
const heroSub   = document.querySelector('.hero-subtitle');
const scrollHint = document.querySelector('.hero-scroll-hint');


function revealHero() {
  heroTitle.style.transition = 'opacity .9s cubic-bezier(.16,1,.3,1), transform .9s cubic-bezier(.16,1,.3,1)';
  heroTitle.style.opacity    = '1';
  heroTitle.style.transform  = 'scale(1.6)';
  setTimeout(() => { heroTitle.style.transition = 'none'; }, 950);

  heroSub.style.transition = 'opacity .6s .2s';
  heroSub.style.opacity    = '1';
  setTimeout(() => { heroSub.style.transition = 'none'; }, 850);

  scrollHint.style.transition = 'opacity .6s .6s';
  scrollHint.style.opacity    = '1';
  setTimeout(() => { scrollHint.style.transition = 'none'; }, 1300);
}


heroTitle.style.opacity   = '0';
heroTitle.style.transform = 'scale(1.6)';
heroSub.style.opacity     = '0';
scrollHint.style.opacity  = '0';
setTimeout(revealHero, 200);