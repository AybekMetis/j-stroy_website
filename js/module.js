const T = (window.i18n && window.i18n.t) || window.T || (str => str);

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

const INFO = {
  design: {
    tag: 'J-STROY / НАПРАВЛЕНИЕ 01',
    title: 'Проектирование и ремонт',
    subtitle: 'От идеи до полностью готового пространства.',
    image: 'images/jstroy_service_design_remont.jpg',
    sectionsTitle: 'Что входит в услугу',
    sections: [
      {
        icon: '',
        heading: 'Дизайн-проект интерьера',
        items: [
          'Разработка концепции и стилистики интерьера',
          'Планировочные решения',
          '3D-визуализация',
          'Рабочая документация и чертежи',
          'Подбор отделочных материалов, освещения и оборудования'
        ]
      },
      {
        icon: '',
        heading: 'Архитектурное проектирование',
        items: [
          'Проектирование частных домов',
          'Разработка архитектурных решений',
          'Планировка и функциональное зонирование',
          'Разработка генерального плана участка'
        ]
      },
      {
        icon: '',
        heading: 'Ремонт и строительство под ключ',
        items: [
          'Демонтажные и подготовительные работы',
          'Общестроительные и отделочные работы',
          'Электромонтажные и сантехнические работы',
          'Монтаж инженерных систем',
          'Авторский и технический контроль реализации'
        ]
      },
      {
        icon: '',
        heading: 'Комплектация и обустройство',
        items: [
          'Подбор и поставка строительных и отделочных материалов',
          'Изготовление и подбор мебели',
          'Комплектация бытовой техникой',
          'Текстиль, освещение и предметы декора',
          'Финальное оформление пространства',
          'Подготовка объекта к заселению'
        ]
      }
    ],
    approach: {
      heading: 'Почему J-STROY',
      text: 'Вы можете заказать отдельную услугу или доверить нам весь цикл работ. Мы координируем процессы, контролируем исполнение и помогаем довести проект до готового результата.'
    },
    slogan: 'J-STROY — пространство, готовое к жизни.'
  },
  rent: {
    tag: 'J-STROY / НАПРАВЛЕНИЕ 02',
    title: 'Управление и аренда недвижимости',
    subtitle: 'Стабильный доход и контроль объекта без лишних хлопот.',
    image: 'images/jstroy_service_upravlenie_arenda-1.jpg',
    intro: [
      'Недвижимость должна приносить доход, а не становиться дополнительной работой.',
      'Мы помогаем собственникам эффективно распоряжаться жилой и коммерческой недвижимостью: от подготовки объекта и поиска арендаторов до сопровождения аренды и текущего контроля.'
    ],
    sectionsTitle: 'Что входит в услугу',
    sections: [
      {
        icon: '',
        heading: 'Подготовка недвижимости к аренде',
        items: [
          'Оценка состояния объекта',
          'Рекомендации по подготовке и комплектации',
          'Организация необходимых ремонтных работ',
          'Меблировка и оснащение',
          'Подготовка объекта к показам'
        ]
      },
      {
        icon: '',
        heading: 'Поиск и заселение арендаторов',
        items: [
          'Поиск потенциальных арендаторов',
          'Организация просмотров',
          'Согласование условий аренды',
          'Сопровождение заключения договора',
          'Организация заселения'
        ]
      },
      {
        icon: '',
        heading: 'Управление недвижимостью',
        items: [
          'Взаимодействие с арендаторами',
          'Контроль состояния объекта',
          'Координация вопросов по эксплуатации',
          'Взаимодействие с управляющими компаниями',
          'Контроль арендных обязательств'
        ]
      },
      {
        icon: '',
        heading: 'Консультации для собственников и инвесторов',
        items: [
          'Оценка потенциала объекта для сдачи в аренду',
          'Рекомендации по повышению привлекательности недвижимости',
          'Консультации по подготовке объекта к инвестиционному использованию',
          'Сопровождение вопросов, связанных с арендой и управлением'
        ]
      }
    ],
    approach: {
      heading: 'Почему J-STROY',
      text: 'Мы стремимся сделать владение недвижимостью максимально комфортным для собственника. Берём на себя организационные вопросы, взаимодействие с арендаторами и контроль объекта, помогая сохранить его состояние и обеспечить стабильную эксплуатацию.'
    },
    slogan: 'J-STROY — ваша недвижимость под профессиональным управлением.'
  },
  service: {
    tag: 'J-STROY / НАПРАВЛЕНИЕ 03',
    title: 'Обслуживание и клининг',
    subtitle: 'Чистота, порядок и техническая исправность каждый день.',
    image: 'images/jstroy_service_obsluzhivanie_klining.jpg',
    intro: [
      'Заботимся о пространстве после завершения ремонта.',
      'Работа с недвижимостью не заканчивается после сдачи объекта. Мы обеспечиваем чистоту, техническое состояние и комфортную эксплуатацию жилых и коммерческих помещений.'
    ],
    sectionsTitle: 'Что входит в услугу',
    sections: [
      {
        icon: '',
        heading: 'Постремонтное обслуживание',
        items: [
          'Уборка после строительных и ремонтных работ',
          'Удаление строительной пыли и загрязнений',
          'Очистка поверхностей, окон и напольных покрытий',
          'Подготовка помещений к заселению или открытию'
        ]
      },
      {
        icon: '',
        heading: 'Профессиональный клининг',
        items: [
          'Генеральная уборка',
          'Регулярная поддерживающая уборка',
          'Уборка жилых и коммерческих помещений',
          'Уборка после арендаторов',
          'Подготовка объектов к новым заселениям'
        ]
      },
      {
        icon: '',
        heading: 'Мелкий ремонт и техническое обслуживание',
        items: [
          'Устранение бытовых неисправностей',
          'Сантехнические и электромонтажные работы в рамках текущего обслуживания',
          'Мелкие отделочные и ремонтные работы',
          'Проверка состояния оборудования',
          'Организация необходимых ремонтных работ'
        ]
      },
      {
        icon: '',
        heading: 'Обслуживание объектов на постоянной основе',
        items: [
          'Регулярный контроль состояния помещений',
          'Организация планового обслуживания',
          'Координация специалистов',
          'Контроль выполнения работ',
          'Взаимодействие с собственниками и управляющими компаниями'
        ]
      }
    ],
    approach: {
      heading: 'Почему J-STROY',
      text: 'Предлагаем разовые услуги и комплексное обслуживание на постоянной основе. Формируем перечень работ с учётом назначения объекта, его состояния и потребностей собственника.'
    },
    slogan: 'J-STROY — порядок, комфорт и забота о каждом метре.'
  }
};

const modal = $('#modal');
if (modal) {
  $$('[data-modal]').forEach(b => {
    b.onclick = () => {
      const data = INFO[b.dataset.modal];
      if (!data) return;

      if (Array.isArray(data)) {
        const [t, items] = data;
        $('#m-title').textContent = T(t);
        $('#m-body').innerHTML = '<ul>' + items.map(i => `<li>${T(i)}</li>`).join('') + '</ul>';
      } else {
        $('#m-title').textContent = T(data.title);

        const heroHtml = `
          <div class="m-hero">
            ${data.tag ? `<span class="m-tag">${T(data.tag)}</span>` : ''}
            ${data.subtitle ? `<p class="m-sub">${T(data.subtitle)}</p>` : ''}
            ${(data.intro || []).map(p => `<p class="m-intro">${T(p)}</p>`).join('')}
            ${data.image ? `<img class="m-cover" src="${data.image}" alt="${T(data.title)}">` : ''}
          </div>
        `;

        const sectionsTitleHtml = data.sectionsTitle
          ? `<h3 class="m-group-title">${T(data.sectionsTitle)}</h3>`
          : '';

        const sectionsHtml = (data.sections || []).length
          ? `<div class="m-grid">` + data.sections.map(sec => `
              <div class="m-sec">
                <div class="m-sec-head">
                  ${sec.icon ? `<span class="m-icon">${sec.icon}</span>` : ''}
                  <h4>${T(sec.heading)}</h4>
                </div>
                <ul>${sec.items.map(i => `<li>${T(i)}</li>`).join('')}</ul>
              </div>
            `).join('') + `</div>`
          : '';

        const approachHtml = data.approach ? `
          <div class="m-approach">
            <h4>${T(data.approach.heading)}</h4>
            <p>${T(data.approach.text)}</p>
          </div>
        ` : '';

        const sloganHtml = data.slogan
          ? `<p class="m-slogan"><strong>${T(data.slogan)}</strong></p>`
          : '';

        $('#m-body').innerHTML = heroHtml + sectionsTitleHtml + sectionsHtml + approachHtml + sloganHtml;
      }

      modal.showModal();
    };
  });

  const closeBtn = $('.x', modal);
  if (closeBtn) closeBtn.onclick = () => modal.close();

  const ctaBtn = $('#m-cta', modal) || $('#m-cta');
  if (ctaBtn) {
    ctaBtn.addEventListener('click', e => {
      e.preventDefault();
      e.stopPropagation();
      modal.close();
      if (typeof setMenu === 'function') setMenu(false);

      const target = $('#contact');
      if (target) {
        const headerHeight = header ? header.offsetHeight : 0;
        const y = target.getBoundingClientRect().top + scrollY - headerHeight - 1;
        window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
        history.replaceState(null, '', '#contact');
      }
    });
  }

  modal.onclick = e => { if (e.target === modal) modal.close(); };
}


const PROCESS_DATA = {
  design: {
    num: '01',
    title: 'Проектирование и ремонт',
    subtitle: 'От идеи до полностью готового пространства.',
    shortDesc: 'Создаём продуманные интерьеры и реализуем ремонт под ключ с контролем качества.',
    image: 'images/process1.png',
    steps: [
      { title: 'Заявка и консультация', text: 'Обсуждаем ваши задачи, пожелания, бюджет и сроки.' },
      { title: 'Проектирование и смета', text: 'Разрабатываем дизайн-проект или работаем по готовому. Составляем смету и согласовываем условия.' },
      { title: 'Реализация проекта', text: 'Организуем ремонтные и строительные работы, контролируем качество и сроки, предоставляем фотоотчёты.' },
      { title: 'Сдача объекта', text: 'Проверяем выполненные работы, комплектуем пространство и передаём готовый объект заказчику.' }
    ]
  },
  rent: {
    num: '02',
    title: 'Управление и аренда',
    subtitle: 'Стабильный доход и контроль объекта без лишних хлопот.',
    shortDesc: 'Помогаем получать стабильный доход от недвижимости.',
    image: 'images/process2.png',
    steps: [
      { title: 'Подготовка объекта', text: 'Оцениваем состояние, даём рекомендации по комплектации и подготовке к показам.' },
      { title: 'Поиск арендаторов', text: 'Подбираем надёжных арендаторов, проводим показы и сопровождаем договор.' },
      { title: 'Управление и контроль', text: 'Взаимодействуем с арендаторами и управляющей компанией, следим за состоянием объекта.' },
      { title: 'Отчётность и доход', text: 'Контролируем платежи и регулярно отчитываемся собственнику.' }
    ]
  },
  service: {
    num: '03',
    title: 'Обслуживание и клининг',
    subtitle: 'Чистота, порядок и техническая исправность каждый день.',
    shortDesc: 'Сохраняем комфорт и безупречное состояние вашего объекта.',
    image: 'images/process3.png',
    steps: [
      { title: 'Оценка и регламент', text: 'Определяем задачи по уборке и техническому обслуживанию под тип объекта.' },
      { title: 'Уборка и клининг', text: 'Проводим генеральную, поддерживающую и постремонтную уборку.' },
      { title: 'Техническое обслуживание', text: 'Устраняем мелкие бытовые неисправности и проверяем инженерные системы.' },
      { title: 'Постоянный контроль', text: 'Поддерживаем порядок на регулярной основе и оперативно реагируем на запросы.' }
    ]
  }
};

(() => {
  const section = $('#process');
  const panel = $('#proc-panel', section);
  const otherList = $('#proc-other-list', section);
  if (!section || !panel || !otherList) return;

  const tabs = $$('.proc-tab', section);
  const keys = Object.keys(PROCESS_DATA);
  let activeKey = 'design';

  function initProcAccordion() {
    otherList.querySelectorAll('.proc-other-item').forEach(d => {
      const summary = d.querySelector('summary');
      const body = d.querySelector('.proc-other-body');
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
        const to = summary.offsetHeight + body.offsetHeight + 4;
        animate(from, to);
      }

      function closeIt() {
        const from = d.offsetHeight;
        const to = summary.offsetHeight + 4;
        animate(from, to, () => { d.open = false; });
      }

      summary.addEventListener('click', e => {
        e.preventDefault();
        if (d.open && !(anim && d.dataset.closing !== '1')) {
          d.dataset.closing = '1';
          closeIt();
        } else if (d.open && anim) {
          d.dataset.closing = '1';
          closeIt();
        } else {
          d.dataset.closing = '';
          otherList.querySelectorAll('.proc-other-item[open]').forEach(o => {
            if (o !== d) o.querySelector('summary').click();
          });
          openIt();
        }
      });
    });
  }

  function renderActive() {
    const item = PROCESS_DATA[activeKey] || PROCESS_DATA.design;

    tabs.forEach(tab => {
      const isAct = tab.dataset.proc === activeKey;
      tab.classList.toggle('is-active', isAct);
      tab.setAttribute('aria-selected', isAct);
    });

    panel.innerHTML = `
      <div class="proc-head">
        <span class="proc-num">${T(item.num)}</span>
        <h3>${T(item.title)}</h3>
        <p class="proc-sub">${T(item.subtitle)}</p>
      </div>
      <div class="proc-body">
        <ol class="proc-steps">
          ${item.steps.map((st, idx) => `
            <li class="proc-step">
              <span class="proc-step-idx">${idx + 1}</span>
              <div>
                <h4>${T(st.title)}</h4>
                <p>${T(st.text)}</p>
              </div>
            </li>
          `).join('')}
        </ol>
        <div class="proc-media">
          <img src="${item.image}" alt="${T(item.title)}">
        </div>
      </div>
    `;

const restKeys = keys.filter(k => k !== activeKey);
    otherList.innerHTML = restKeys.map(k => {
      const other = PROCESS_DATA[k];
      return `
        <details class="proc-other-item" data-key="${k}">
          <summary>
            <span class="proc-sum-main">
              <strong>${T(other.title)}</strong>
              <small>${T(other.shortDesc)}</small>
            </span>
          </summary>
          <div class="proc-other-body">
            <ul>
              ${other.steps.map(s => `<li><strong>${T(s.title)}:</strong> ${T(s.text)}</li>`).join('')}
            </ul>
            <button type="button" class="proc-switch-btn" data-select="${k}">${T('Перейти к направлению')}</button>
          </div>
        </details>
      `;
    }).join('');

    initProcAccordion();
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      activeKey = tab.dataset.proc;
      renderActive();
    });
  });

  otherList.addEventListener('click', e => {
    const switchBtn = e.target.closest('[data-select]');
    if (!switchBtn) return;
    activeKey = switchBtn.dataset.select;
    renderActive();
    panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });

  document.addEventListener('langchange', renderActive);
  renderActive();
})();