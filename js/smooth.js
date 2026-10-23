(function () {
  // Своя анимация: не зависит от CSS и от других скриптов
  const html = document.documentElement;
  const header = document.querySelector('header');

  function smoothTo(targetY, duration = 800) {
    const startY = window.scrollY;
    const dist = targetY - startY;
    let t0 = null;

    html.style.scrollBehavior = 'auto'; // отключаем CSS-плавность на время анимации, чтобы не конфликтовала

    const ease = t => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    function step(ts) {
      if (t0 === null) t0 = ts;
      const p = Math.min((ts - t0) / duration, 1);
      window.scrollTo(0, startY + dist * ease(p));
      if (p < 1) requestAnimationFrame(step);
      else html.style.scrollBehavior = '';
    }
    requestAnimationFrame(step);
  }

  // capture: true — наш обработчик срабатывает раньше остальных
  document.addEventListener('click', function (e) {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;

    const id = a.getAttribute('href');
    const target = id.length > 1 ? document.querySelector(id) : document.body;
    if (!target) return;

    e.preventDefault();
    e.stopImmediatePropagation(); // глушим старые обработчики, которые прыгают мгновенно

    const offset = header ? header.offsetHeight : 0;
    const y = id.length > 1
      ? target.getBoundingClientRect().top + window.scrollY - offset
      : 0;

    smoothTo(Math.max(0, y));
    if (id.length > 1) history.pushState(null, '', id);

    // закрыть мобильное меню
    if (header) header.classList.remove('open');
    const burger = document.querySelector('.burger');
    if (burger) burger.setAttribute('aria-expanded', 'false');
  }, true);
})();