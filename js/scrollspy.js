(function () {
  const header = document.querySelector('header');
  const links = [...document.querySelectorAll('nav a[href^="#"]')];
  const sections = links
    .map(a => document.querySelector(a.getAttribute('href')))
    .filter(Boolean);

  if (!sections.length) return;

  function updateActive() {
    const line = (header ? header.offsetHeight : 0) + 20; // линия чуть ниже шапки
    let current = null;

    sections.forEach(s => {
      if (s.getBoundingClientRect().top <= line) current = s;
    });

    // если долистали до самого низа, активна последняя секция
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
      current = sections[sections.length - 1];
    }

    links.forEach(a => {
      const on = current && a.getAttribute('href') === '#' + current.id;
      a.classList.toggle('active', !!on);
    });
  }

  window.addEventListener('scroll', updateActive, { passive: true });
  window.addEventListener('resize', updateActive);
  updateActive();
})();