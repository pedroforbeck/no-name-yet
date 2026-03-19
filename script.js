// cursor animado
// falta os efeitos de hover
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

//algumas scripts pros sprites mais tarde
document.querySelectorAll('a, .sprite, button').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hovering'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('hovering'));
});

document.getElementById('sprite-p1').addEventListener('mouseenter', () => cursor.style.background = 'var(--yellow)');
document.getElementById('sprite-p1').addEventListener('mouseleave', () => cursor.style.background = '');
document.getElementById('sprite-p2').addEventListener('mouseenter', () => cursor.style.background = '#2a6de8');
document.getElementById('sprite-p2').addEventListener('mouseleave', () => cursor.style.background = '');
