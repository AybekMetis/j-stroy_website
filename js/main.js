document.addEventListener("DOMContentLoaded", () => {
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const T = s => (window.i18n ? window.i18n.t(s) : s);

  // 1. Установка текущего года в футере
  const yearEl = $('#y');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // 2. Мобильное меню
  const header = $('header'), burger = $('.burger');
  const setMenu = open => {
    header.classList.toggle('open', open);
    if (burger) {
      burger.setAttribute('aria-expanded', open);
      burger.textContent = open ? '✕' : '☰';
    }
  };
  if (burger) {
    burger.onclick = () => setMenu(!header.classList.contains('open'));
  }
  addEventListener('keydown', e => e.key === 'Escape' && setMenu(false));
  document.addEventListener('click', e => {
    if (header && !header.contains(e.target)) setMenu(false);
  });

  // 3. Плавный переход по якорям (с надежным расчетом отступа)
  const still = matchMedia('(prefers-reduced-motion: reduce)').matches;
  $$('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const targetId = a.getAttribute('href');
      const t = $(targetId);
      if (!t) return;
      e.preventDefault();
      setMenu(false);

      const headerHeight = header ? header.offsetHeight : 0;
      const y = targetId === '#top' ? 0 : t.getBoundingClientRect().top + scrollY - headerHeight - 1;
      
      window.scrollTo({ 
        top: Math.max(0, y), 
        behavior: 'smooth' 
      });
      history.replaceState(null, '', targetId);
    });
  });

 

  // 5. Динамический перекат слов в хиро-секции (только один экземпляр)
   const WORDS = {
    ru: ["создаем", "ремонтируем", "управляем"],
    uz: ["yaratamiz", "taʼmirlaymiz", "boshqaramiz"],
    en: ["create", "renovate", "manage"]
  };
  const getWords = () => WORDS[document.documentElement.lang] || WORDS.ru;
  let currentIndex = 0;
  const wordElement = document.querySelector(".dynamic-word");

  if (wordElement) {
    wordElement.textContent = getWords()[0];
    document.addEventListener('langchange', () => {
      currentIndex = 0;
      wordElement.textContent = getWords()[0];
    });
    setInterval(() => {
      wordElement.classList.add("fade-out");
      setTimeout(() => {
        currentIndex = (currentIndex + 1) % getWords().length;
        wordElement.textContent = getWords()[currentIndex];
        wordElement.classList.remove("fade-out");
        wordElement.classList.add("prepare-in");
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            wordElement.classList.remove("prepare-in");
          });
        });
      }, 400);
    }, 3500);
  }

  // 6. Плавающая кнопка мессенджеров
  const fab = $('#fab');
  if (fab) {
    const fabBtn = $('button', fab);
    if (fabBtn) {
      fabBtn.onclick = () => fabBtn.setAttribute('aria-expanded', fab.classList.toggle('open'));
    }
  }

  // 7. Модальные окна
  const INFO = {
    design: ['Проектирование и ремонт', ['Дизайн-проект интерьера', 'Генеральный план участка', 'Ремонт под ключ', 'Ландшафтный дизайн', 'Декор и комплектация']],
    rent: ['Управление и аренда', ['Поиск арендаторов для коммерческой недвижимости', 'Сдача в аренду', 'Работа с управляющими компаниями', 'Отчёты владельцу']],
    service: ['Обслуживание и клининг', ['Регулярный и генеральный клининг', 'Техническое обслуживание объектов', 'Обслуживание оборудования', 'Аварийный выезд']]
  };
  const modal = $('#modal');
  if (modal) {
    $$('[data-modal]').forEach(b => {
      b.onclick = () => {
        const data = INFO[b.dataset.modal];
        if (!data) return;
        const [t, items] = data;
        $('#m-title').textContent = T(t);
        $('#m-body').innerHTML = '<ul>' + items.map(i => `<li>${T(i)}</li>`).join('') + '</ul>';
        modal.showModal();
      };
    });
    const closeBtn = $('.x', modal);
    if (closeBtn) closeBtn.onclick = () => modal.close();
    const ctaBtn = $('#m-cta');
    if (ctaBtn) ctaBtn.onclick = () => modal.close();
    modal.onclick = e => { if (e.target === modal) modal.close(); };
  }

  // 8. Портфолио: WebP, фильтры, слайдер
  $$('.case[data-img]').forEach(c => {
    const base = c.dataset.img, p = document.createElement('picture');
    p.innerHTML = `<source type="image/webp" srcset="${base}-480.webp 480w, ${base}-960.webp 960w" sizes="(min-width:1024px) 360px, 85vw">`;
    const img = new Image();
    img.loading = 'lazy'; 
    const figcaption = $('figcaption', c);
    if (figcaption) img.alt = figcaption.textContent; 
    img.src = base + '-960.webp';
    img.onerror = () => p.remove();
    const ph = $('.ph', c);
    if (ph) {
      p.append(img);
      ph.append(p);
    }
  });

 const track = $('.track');
  $$('.filters button').forEach(b => {
    b.onclick = () => {
      $$('.filters button').forEach(x => x.setAttribute('aria-pressed', x === b));
      const cases = $$('.case');

      // 1) плавно гасим текущие карточки
      cases.forEach(c => c.classList.add('out'));

      setTimeout(() => {
        // 2) переключаем видимость и запускаем анимацию появления заново
        cases.forEach(c => {
          c.hidden = b.dataset.f !== 'all' && c.dataset.cat !== b.dataset.f;
          c.classList.remove('out');
          c.style.animation = 'none';
          void c.offsetWidth;          // перезапуск анимации
          c.style.animation = '';
        });
        if (track) track.scrollTo({ left: 0, behavior: 'smooth' });
      }, 200);
    };
  });

  let sliding = false;
  const easeInOut = t => t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

  function slideTo(left, duration = 600) {
    const start = track.scrollLeft;
    const dist = left - start;
    if (Math.abs(dist) < 1) return;

    sliding = true;
    track.style.scrollSnapType = 'none';   // выключаем примагничивание на время анимации
    track.style.scrollBehavior = 'auto';   // чтобы CSS-плавность не мешала кадрам
    let t0 = null;

    function step(ts) {
      if (t0 === null) t0 = ts;
      const p = Math.min((ts - t0) / duration, 1);
      track.scrollLeft = start + dist * easeInOut(p);
      if (p < 1) {
        requestAnimationFrame(step);
      } else {
        track.style.scrollSnapType = '';
        track.style.scrollBehavior = '';
        sliding = false;
      }
    }
    requestAnimationFrame(step);
  }

  $$('.arrows button').forEach(b => {
    b.onclick = () => {
      if (!track || sliding) return;
      const cards = $$('.case:not([hidden])', track);
      if (!cards.length) return;

      const dir = Number(b.dataset.dir);
      const step = cards[0].offsetWidth + 16;                  // ширина карточки + gap
      const max = track.scrollWidth - track.clientWidth;
      const index = Math.round(track.scrollLeft / step) + dir; // ближайшая карточка + шаг
      const target = Math.min(Math.max(index * step, 0), max);

      slideTo(target);
    };
  });

  // 9. Валидация и отправка формы
  const form = $('#lead'), status = $('#status');
  if (form) {
    const rules = {
      name: v => v.trim().length >= 2 || 'Введите имя (от 2 символов)',
      phone: v => /^\+?[\d\s()-]{9,18}$/.test(v.trim()) && v.replace(/\D/g, '').length >= 9 || 'Введите телефон, например +998 90 000 00 00',
      service: v => !!v || 'Выберите услугу'
    };

    function validate(el) {
      if (!rules[el.name]) return true;
      const res = rules[el.name](el.value), ok = res === true;
      el.setAttribute('aria-invalid', !ok);
      const errSpan = $(`[data-for="${el.name}"]`);
      if (errSpan) errSpan.textContent = ok ? '' : T(res);
      return ok;
    }

    Object.keys(rules).forEach(n => {
      if (form[n]) form[n].addEventListener('blur', e => validate(e.target));
    });

    form.addEventListener('submit', async e => {
      e.preventDefault();
      if (form.website && form.website.value) return; 
      
      const isValid = Object.keys(rules).map(n => form[n] ? validate(form[n]) : true).every(Boolean);
      if (!isValid) {
        form.classList.remove('shake'); 
        void form.offsetWidth; 
        form.classList.add('shake'); 
        return;
      }

      const btn = $('button[type=submit]', form), d = Object.fromEntries(new FormData(form));
      d.lang = document.documentElement.lang;
      if (btn) btn.disabled = true; 
      if (status) status.textContent = T('Отправляем…');

      try {
        if (window.CONFIG && window.CONFIG.endpoint) {
          const r = await fetch(window.CONFIG.endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(d) });
          if (!r.ok) throw new Error('proxy');
        } else if (window.CONFIG && window.CONFIG.botToken && window.CONFIG.chatId) {
          const r = await fetch(`https://api.telegram.org/bot${window.CONFIG.botToken}/sendMessage`, {
            method: 'POST', headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ chat_id: window.CONFIG.chatId, text: `Новая заявка\nИмя: ${d.name}\nТелефон: ${d.phone}\nУслуга: ${d.service}\nЯзык: ${d.lang}` })
          });
          if (!r.ok) throw new Error('telegram');
        } else {
          await new Promise(res => setTimeout(res, 800));
        }

        form.reset(); 
        if (status) status.textContent = T('Заявка отправлена. Мы свяжемся с вами в течение рабочего дня.');
      } catch {
        if (status) status.textContent = T('Не удалось отправить. Позвоните нам или напишите в мессенджер.');
      } finally { 
        if (btn) btn.disabled = false; 
      }
    });
  }

  // 10. Изменение шапки при скролле
  addEventListener('scroll', () => {
    if (header) header.classList.toggle('scrolled', scrollY > 8);
  }, { passive: true });
});


// FAQ Аккордеон (плавный)
document.querySelectorAll('.faq details').forEach(d => {
  const summary = d.querySelector('summary');
  const DURATION = 350;
  let anim = null;

  function animate(from, to, onDone) {
    if (anim) anim.cancel();
    d.style.overflow = 'hidden';
    anim = d.animate(
      { height: [from + 'px', to + 'px'] },
      { duration: DURATION, easing: 'ease' }
    );
    anim.onfinish = anim.oncancel = () => {
      d.style.overflow = '';
      anim = null;
      if (onDone) onDone();
    };
  }

  function openIt() {
    const from = d.offsetHeight;
    d.open = true;
    const to = summary.offsetHeight + d.querySelector('.ans').offsetHeight + 4; // + рамка 2px*2
    animate(from, to);
  }

  function closeIt() {
    const from = d.offsetHeight;
    const to = summary.offsetHeight + 4;
    animate(from, to, () => { d.open = false; });
  }

  summary.addEventListener('click', e => {
    e.preventDefault();                 // отключаем мгновенное поведение браузера
    if (d.open && !(anim && d.dataset.closing !== '1')) {
      d.dataset.closing = '1';
      closeIt();
    } else if (d.open && anim) {
      // клик во время открытия — закрываем
      d.dataset.closing = '1';
      closeIt();
    } else {
      d.dataset.closing = '';
      // закрываем остальные (по одному открытому)
      document.querySelectorAll('.faq details[open]').forEach(o => {
        if (o !== d) o.querySelector('summary').click();
      });
      openIt();
    }
  });
});