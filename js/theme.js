(function () {
  const root = document.documentElement;
  const btn = document.querySelector('.theme-toggle');
  const mq = matchMedia('(prefers-color-scheme: dark)');

  const saved = () => { try { return localStorage.getItem('theme'); } catch (e) { return null; } };

  function apply(theme) {
    root.dataset.theme = theme;
    if (!btn) return;
    const dark = theme === 'dark';
    btn.setAttribute('aria-pressed', dark);
    const T = s => (window.i18n ? window.i18n.t(s) : s);
    btn.setAttribute('aria-label', T(dark ? 'Включить светлую тему' : 'Включить тёмную тему'));
  }

  apply(root.dataset.theme || (mq.matches ? 'dark' : 'light'));

  if (btn) {
    btn.addEventListener('click', () => {
      const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
      root.classList.add('theme-anim');                       // плавная смена цветов
      apply(next);
      try { localStorage.setItem('theme', next); } catch (e) {}
      setTimeout(() => root.classList.remove('theme-anim'), 450);
    });
  }

  // если пользователь сам не выбирал, следуем за системной темой
  mq.addEventListener('change', e => { if (!saved()) apply(e.matches ? 'dark' : 'light'); });

  // при смене языка обновляем подпись кнопки
  document.addEventListener('langchange', () => apply(root.dataset.theme));
})();