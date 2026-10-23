(function () {
  const btn = document.querySelector('.to-top');
  if (!btn) return;

  const bar = btn.querySelector('.ring-bar');
  const R = 21, C = 2 * Math.PI * R;           // длина окружности для кольца прогресса
  bar.style.strokeDasharray = C;

  let waiting = false;

  function update() {
    waiting = false;
    const y = window.scrollY;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const progress = max > 0 ? Math.min(y / max, 1) : 0;

    btn.classList.toggle('show', y > 500);     // показываем после 500px прокрутки
    bar.style.strokeDashoffset = C * (1 - progress);
  }

  window.addEventListener('scroll', () => {
    if (!waiting) { waiting = true; requestAnimationFrame(update); }
  }, { passive: true });
  window.addEventListener('resize', update);

  btn.addEventListener('click', () => {
    const still = matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: still ? 'auto' : 'smooth' });
  });

  update();
})();
