/* Трёхъязычность: RU / UZ (латиница) / EN.
   Ключ перевода — русский текст ровно так, как он написан в HTML или JS.
   Чтобы добавить фразу, добавьте строку [ "русский", "o'zbekcha", "english" ] в ROWS. */
(function () {
  const LANGS = ["ru", "uz", "en"];

  const ROWS = [
    /* ---- head ---- */
    ["Ремонт, строительство и управление недвижимостью под ключ | НАЗВАНИЕ",
     "Taʼmirlash, qurilish va koʻchmas mulkni boshqarish: kalitgacha toʻliq xizmat | НАЗВАНИЕ",
     "Turnkey renovation, construction and property management | НАЗВАНИЕ"],
    ["Дизайн интерьера, ремонт под ключ, ландшафт, аренда и управление недвижимостью, клининг и обслуживание. Один подрядчик вместо десяти.",
     "Interyer dizayni, kalitga tayyor taʼmir, landshaft, ijara va koʻchmas mulkni boshqarish, tozalash va xizmat koʻrsatish. Oʻnta pudratchi oʻrniga bitta.",
     "Interior design, turnkey renovation, landscaping, rental and property management, cleaning and maintenance. One contractor instead of ten."],
    ["Создаем, ремонтируем и управляем недвижимостью под ключ",
     "Koʻchmas mulkni yaratamiz, taʼmirlaymiz va boshqaramiz: kalitgacha",
     "We build, renovate and manage property, turnkey"],
    ["Полный цикл «в одно окно»: от проекта до сдачи в аренду и обслуживания.",
     "“Yagona oyna” tamoyilida toʻliq sikl: loyihadan ijaraga topshirish va xizmat koʻrsatishgacha.",
     "A full cycle through a single point of contact: from design to leasing and maintenance."],

    /* ---- шапка и меню ---- */
    ["Язык сайта", "Sayt tili", "Site language"],
    ["Открыть меню", "Menyuni ochish", "Open menu"],
    ["Основная навигация", "Asosiy navigatsiya", "Main navigation"],
    ["Услуги", "Xizmatlar", "Services"],
    ["Почему мы", "Nega biz", "Why us"],
    ["Проекты", "Loyihalar", "Projects"],
    ["Этапы", "Bosqichlar", "Process"],
    ["Вопросы", "Savollar", "FAQ"],
    ["Контакты", "Aloqa", "Contacts"],
    ["Включить тёмную тему", "Qorongʻi mavzuni yoqish", "Switch to dark theme"],
    ["Включить светлую тему", "Yorugʻ mavzuni yoqish", "Switch to light theme"],

    /* ---- hero ---- */
    ["J-STROY Мы", "J-STROY Biz", "J-STROY We"],
    ["Проект, ремонт, аренда и обслуживание «в одно окно». Один подрядчик отвечает за весь результат.",
     "Loyiha, taʼmir, ijara va xizmat koʻrsatish — “yagona oyna” orqali. Butun natija uchun bitta pudratchi javob beradi.",
     "Design, renovation, rental and maintenance through a single point of contact. One contractor is responsible for the whole result."],
    ["Получить консультацию", "Maslahat olish", "Get a consultation"],
    ["Смотреть проекты", "Loyihalarni koʻrish", "View projects"],

    /* ---- услуги ---- */
    ["Три направления, один договор", "Uchta yoʻnalish, bitta shartnoma", "Three services, one contract"],
    ["Берите одно направление или весь цикл целиком.",
     "Bitta yoʻnalishni yoki butun siklni birgalikda tanlang.",
     "Choose a single service or the entire cycle."],
    ["Проектирование и ремонт", "Loyihalash va taʼmirlash", "Design and renovation"],
    ["Дизайн интерьера", "Interyer dizayni", "Interior design"],
    ["Генеральный план", "Bosh reja", "Master plan"],
    ["Ремонт под ключ", "Kalitga tayyor taʼmir", "Turnkey renovation"],
    ["Ландшафтный дизайн", "Landshaft dizayni", "Landscape design"],
    ["Декор", "Dekor", "Decor"],
    ["Подробнее", "Batafsil", "Learn more"],
    ["Управление и аренда", "Boshqaruv va ijara", "Management and rental"],
    ["Поиск арендаторов для коммерческой недвижимости",
     "Tijorat koʻchmas mulki uchun ijarachilar qidirish",
     "Finding tenants for commercial property"],
    ["Сдача в аренду", "Ijaraga berish", "Leasing"],
    ["Взаимодействие с управляющими компаниями",
     "Boshqaruv kompaniyalari bilan hamkorlik",
     "Working with property management companies"],
    ["Обслуживание и клининг", "Xizmat koʻrsatish va tozalash", "Maintenance and cleaning"],
    ["Клининг", "Tozalash (klining)", "Cleaning"],
    ["Техническое обслуживание объектов", "Obyektlarga texnik xizmat koʻrsatish", "Technical maintenance of properties"],
    ["Обслуживание оборудования", "Uskunalarga xizmat koʻrsatish", "Equipment servicing"],

    /* ---- почему мы ---- */
    ["Почему выбирают нас", "Nega bizni tanlashadi", "Why choose us"],
    ["Один подрядчик вместо десяти", "Oʻnta oʻrniga bitta pudratchi", "One contractor instead of ten"],
    ["Не нужно искать дизайнера, бригаду, клининг и управляющего по отдельности.",
     "Dizayner, brigada, tozalash xizmati va boshqaruvchini alohida qidirish shart emas.",
     "No need to look for a designer, a crew, a cleaning service and a manager separately."],
    ["Полный контроль", "Toʻliq nazorat", "Full control"],
    ["Личный менеджер, понятная смета и отчёт по каждому этапу.",
     "Shaxsiy menejer, tushunarli smeta va har bir bosqich boʻyicha hisobot.",
     "A personal manager, a clear estimate and a report on every stage."],
    ["Гарантия", "Kafolat", "Warranty"],
    ["Письменная гарантия на работы и обслуживание после сдачи объекта.",
     "Obyekt topshirilgandan keyin ishlar va xizmat uchun yozma kafolat.",
     "A written warranty on the work and on maintenance after handover."],

    /* ---- портфолио ---- */
    ["Наши проекты", "Bizning loyihalar", "Our projects"],
    ["Фильтр проектов", "Loyihalar filtri", "Project filter"],
    ["Все", "Hammasi", "All"],
    ["Дизайн", "Dizayn", "Design"],
    ["Ремонт", "Taʼmir", "Renovation"],
    ["Ландшафт", "Landshaft", "Landscape"],
    ["Коммерция", "Tijorat", "Commercial"],
    ["Галерея проектов, листайте вбок", "Loyihalar galereyasi, yonga suring", "Project gallery, scroll sideways"],
    ["Квартира 78 м²", "78 m² kvartira", "78 m² apartment"],
    ["Дом 140 м²", "140 m² uy", "140 m² house"],
    ["Участок 12 соток", "12 sotix uchastka", "12-sotka plot"],
    ["Офис 320 м²", "320 m² ofis", "320 m² office"],
    ["Студия 34 м²", "34 m² studiya", "34 m² studio"],
    ["Кафе 90 м²", "90 m² kafe", "90 m² café"],
    ["Коммерческая недвижимость", "Tijorat koʻchmas mulki", "Commercial property"],
    ["Назад", "Orqaga", "Back"],
    ["Вперёд", "Oldinga", "Next"],

    /* ---- этапы ---- */
    ["Как мы работаем", "Biz qanday ishlaymiz", "How we work"],
    ["От заявки до ключей или первого дохода от аренды.",
     "Arizadan kalitlargacha yoki ijaradan birinchi daromadgacha.",
     "From request to keys, or to your first rental income."],
    ["Заявка и консультация", "Ariza va maslahat", "Request and consultation"],
    ["Обсуждаем задачу и бюджет, назначаем замер.",
     "Vazifa va byudjetni muhokama qilamiz, oʻlchov belgilaymiz.",
     "We discuss the task and budget and schedule a measurement visit."],
    ["Проект и смета", "Loyiha va smeta", "Design and estimate"],
    ["Готовим дизайн или план работ и фиксируем стоимость в договоре.",
     "Dizayn yoki ish rejasini tayyorlaymiz va narxni shartnomada qayd etamiz.",
     "We prepare the design or work plan and fix the price in the contract."],
    ["Ремонт и строительство", "Taʼmir va qurilish", "Renovation and construction"],
    ["Ведём объект, вы видите отчёты и фото каждую неделю.",
     "Obyektni yuritamiz, siz har hafta hisobot va suratlarni koʻrasiz.",
     "We run the site and you see reports and photos every week."],
    ["Сдача объекта", "Obyektni topshirish", "Handover"],
    ["Приёмка, гарантия, передача ключей.",
     "Qabul qilish, kafolat, kalitlarni topshirish.",
     "Acceptance, warranty, handing over the keys."],
    ["Аренда и управление", "Ijara va boshqaruv", "Rental and management"],
    ["Находим арендаторов, работаем с УК, собираем платежи.",
     "Ijarachilarni topamiz, boshqaruv kompaniyalari bilan ishlaymiz, toʻlovlarni yigʻamiz.",
     "We find tenants, work with the management company and collect payments."],
    ["Обслуживание", "Xizmat koʻrsatish", "Maintenance"],
    ["Клининг и техническая поддержка, чтобы объект приносил доход.",
     "Obyekt daromad keltirishi uchun tozalash va texnik yordam.",
     "Cleaning and technical support so that the property keeps earning."],

    /* ---- FAQ ---- */
    ["Частые вопросы", "Koʻp beriladigan savollar", "Frequently asked questions"],
    ["Сколько времени занимает ремонт?", "Taʼmir qancha vaqt oladi?", "How long does a renovation take?"],
    ["Сроки зависят от площади и объёма работ. Точные даты мы фиксируем в договоре после замера и согласования проекта. Квартира среднего размера обычно занимает от 2 до 4 месяцев.",
     "Muddat maydon va ishlar hajmiga bogʻliq. Aniq sanalarni oʻlchovdan va loyiha kelishilgandan soʻng shartnomada belgilaymiz. Oʻrtacha kvartira odatda 2 oydan 4 oygacha vaqt oladi.",
     "The timeline depends on the area and the scope of work. We fix exact dates in the contract after measuring and approving the design. An average-sized apartment usually takes 2 to 4 months."],
    ["Можно заказать только одну услугу?", "Faqat bitta xizmatga buyurtma berish mumkinmi?", "Can I order just one service?"],
    ["Да. Вы можете взять любое направление отдельно: например, только дизайн-проект или только клининг. Весь цикл удобнее, потому что за результат отвечает один подрядчик.",
     "Ha. Istalgan yoʻnalishni alohida olishingiz mumkin: masalan, faqat dizayn-loyiha yoki faqat tozalash. Butun sikl qulayroq, chunki natija uchun bitta pudratchi javob beradi.",
     "Yes. You can take any service separately, for example only the design project or only cleaning. The full cycle is more convenient because one contractor is responsible for the result."],
    ["Как формируется стоимость?", "Narx qanday shakllanadi?", "How is the price determined?"],
    ["После замера и обсуждения задач мы готовим подробную смету по этапам. Цена в договоре фиксируется, и о любых изменениях мы договариваемся с вами заранее.",
     "Oʻlchov va vazifalarni muhokama qilgandan soʻng bosqichlar boʻyicha batafsil smeta tayyorlaymiz. Narx shartnomada qayd etiladi, har qanday oʻzgarishlar oldindan kelishiladi.",
     "After measuring and discussing the tasks, we prepare a detailed estimate by stage. The price is fixed in the contract, and we agree any changes with you in advance."],
    ["Какая гарантия на работы?", "Ishlarga qanday kafolat beriladi?", "What warranty do you give on the work?"],
    ["Мы даём письменную гарантию на выполненные работы и материалы. Срок и условия прописаны в договоре, а гарантийные обращения мы принимаем и после сдачи объекта.",
     "Bajarilgan ishlar va materiallarga yozma kafolat beramiz. Muddat va shartlar shartnomada koʻrsatilgan, kafolat murojaatlarini obyekt topshirilgandan keyin ham qabul qilamiz.",
     "We give a written warranty on completed work and materials. The term and conditions are set out in the contract, and we accept warranty claims after the property is handed over."],
    ["Вы работаете с коммерческой недвижимостью?", "Tijorat koʻchmas mulki bilan ishlaysizmi?", "Do you work with commercial property?"],
    ["Да. Мы делаем ремонт офисов и торговых помещений, подбираем арендаторов, ведём договоры и общаемся с управляющей компанией от вашего имени.",
     "Ha. Ofis va savdo xonalarini taʼmirlaymiz, ijarachilar tanlaymiz, shartnomalarni yuritamiz va boshqaruv kompaniyasi bilan sizning nomingizdan muloqot qilamiz.",
     "Yes. We renovate offices and retail spaces, find tenants, manage contracts and communicate with the management company on your behalf."],
    ["Как проходит сдача объекта в аренду?", "Obyekt ijaraga qanday topshiriladi?", "How does leasing work?"],
    ["Мы оцениваем объект, готовим его к показам, ищем арендаторов, проверяем их и оформляем договор. Дальше можем взять на себя платежи и обслуживание.",
     "Obyektni baholaymiz, koʻrsatuvlarga tayyorlaymiz, ijarachilarni qidiramiz, ularni tekshiramiz va shartnoma rasmiylashtiramiz. Keyin toʻlovlar va xizmat koʻrsatishni oʻz zimmamizga olishimiz mumkin.",
     "We assess the property, prepare it for viewings, find and vet tenants and draw up the contract. After that we can handle payments and maintenance."],

    /* ---- контакты и форма ---- */
    ["Получите консультацию", "Maslahat oling", "Request a consultation"],
    ["Оставьте заявку, и мы свяжемся с вами в течение рабочего дня.",
     "Ariza qoldiring, biz ish kuni davomida siz bilan bogʻlanamiz.",
     "Leave a request and we will contact you within one business day."],
    ["Ташкент, ул. Слонима, 9", "Toshkent, Slonim koʻchasi, 9", "9 Slonim St., Tashkent"],
    ["Имя", "Ism", "Name"],
    ["Телефон", "Telefon", "Phone"],
    ["Услуга", "Xizmat", "Service"],
    ["Выберите услугу", "Xizmatni tanlang", "Select a service"],
    ["Другое", "Boshqa", "Other"],
    ["Отправить заявку", "Arizani yuborish", "Send request"],
    ["Введите имя (от 2 символов)", "Ismingizni kiriting (kamida 2 belgi)", "Enter your name (at least 2 characters)"],
    ["Введите телефон, например +998 90 000 00 00",
     "Telefon raqamini kiriting, masalan +998 90 000 00 00",
     "Enter a phone number, e.g. +998 90 000 00 00"],
    ["Отправляем…", "Yuborilmoqda…", "Sending…"],
    ["Заявка отправлена. Мы свяжемся с вами в течение рабочего дня.",
     "Ariza yuborildi. Ish kuni davomida siz bilan bogʻlanamiz.",
     "Request sent. We will contact you within one business day."],
    ["Не удалось отправить. Позвоните нам или напишите в мессенджер.",
     "Yuborib boʻlmadi. Bizga qoʻngʻiroq qiling yoki messenjerda yozing.",
     "Could not send. Please call us or write in a messenger."],

    /* ---- подвал, кнопка мессенджеров, модальное окно ---- */
    ["НАЗВАНИЕ. Все права защищены.", "НАЗВАНИЕ. Barcha huquqlar himoyalangan.", "НАЗВАНИЕ. All rights reserved."],
    ["Написать нам", "Bizga yozing", "Message us"],
    ["Написать в мессенджер", "Messenjerda yozish", "Write in a messenger"],
    ["Закрыть", "Yopish", "Close"],
    ["Наверх", "Yuqoriga", "Back to top"],
    ["Дизайн-проект интерьера", "Interyer dizayn-loyihasi", "Interior design project"],
    ["Генеральный план участка", "Uchastkaning bosh rejasi", "Site master plan"],
    ["Декор и комплектация", "Dekor va butlash", "Decor and furnishing"],
    ["Работа с управляющими компаниями", "Boshqaruv kompaniyalari bilan ishlash", "Working with management companies"],
    ["Отчёты владельцу", "Egasiga hisobotlar", "Reports to the owner"],
    ["Регулярный и генеральный клининг", "Muntazam va umumiy tozalash", "Regular and deep cleaning"],
    ["Аварийный выезд", "Avariya chaqiruvi", "Emergency call-out"]
  ];

  /* ---------- словари ---------- */
  const DICT = {}, REV = {};
  ROWS.forEach(([ru, uz, en]) => {
    DICT[ru] = { ru, uz, en };
    REV[uz] = ru;      // обратный поиск: любой перевод -> русский ключ
    REV[en] = ru;
  });

  const pick = (s, l) => {
    const ru = REV[s] || s;
    const e = DICT[ru];
    return e ? e[l] : s;
  };

  const root = document.documentElement;
  let lang = 'ru';
  const t = s => pick(s, lang);

  /* ---------- перевод страницы ---------- */
  const SKIP = 'script,style,noscript,textarea,[data-i18n-skip],.dynamic-word';

  function translatePage() {
    // текстовые узлы (пробелы по краям сохраняем)
    const w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(n) {
        if (!n.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        const p = n.parentElement;
        return !p || p.closest(SKIP) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
      }
    });
    let n;
    while ((n = w.nextNode())) {
      const m = n.nodeValue.match(/^(\s*)([\s\S]*?)(\s*)$/);
      const next = pick(m[2], lang);
      if (next !== m[2]) n.nodeValue = m[1] + next + m[3];
    }

    // атрибуты
    document.querySelectorAll('[aria-label],[placeholder],[title],[alt]').forEach(el => {
      if (el.closest('[data-i18n-skip]')) return;
      ['aria-label', 'placeholder', 'title', 'alt'].forEach(a => {
        if (!el.hasAttribute(a)) return;
        const v = el.getAttribute(a), nv = pick(v, lang);
        if (nv !== v) el.setAttribute(a, nv);
      });
    });

    // title и meta
    document.title = pick(document.title.trim(), lang);
    ['meta[name="description"]', 'meta[property="og:title"]', 'meta[property="og:description"]'].forEach(sel => {
      const m = document.querySelector(sel);
      if (m) m.content = pick(m.content, lang);
    });

    // alt у фото в портфолио берётся из подписи
    document.querySelectorAll('.case').forEach(c => {
      const img = c.querySelector('img'), cap = c.querySelector('figcaption');
      if (img && cap) img.alt = [...cap.querySelectorAll('a,small')].map(x => x.textContent).join(', ');
    });
  }

  /* ---------- переключатель ---------- */
  const box = document.querySelector('.lang');
  const btn = box && box.querySelector('.lang-btn');
  const menu = box && box.querySelector('.lang-menu');

  function openMenu(open) {
    if (!menu) return;
    menu.hidden = !open;
    btn.setAttribute('aria-expanded', open);
  }

  function setLang(l, save) {
    if (!LANGS.includes(l)) l = 'ru';
    lang = l;
    root.lang = l;
    translatePage();

    if (box) {
      box.querySelector('.lang-cur').textContent = l.toUpperCase();
      menu.querySelectorAll('[data-lang]').forEach(b =>
        b.setAttribute('aria-checked', b.dataset.lang === l));
    }
    if (save) { try { localStorage.setItem('lang', l); } catch (e) {} }
    document.dispatchEvent(new CustomEvent('langchange', { detail: l }));
  }

  if (box) {
    btn.addEventListener('click', e => { e.stopPropagation(); openMenu(menu.hidden); });
    menu.addEventListener('click', e => {
      const b = e.target.closest('[data-lang]');
      if (!b) return;
      setLang(b.dataset.lang, true);
      openMenu(false);
      btn.focus();
    });
    document.addEventListener('click', e => { if (!box.contains(e.target)) openMenu(false); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') openMenu(false); });
  }

  /* ---------- начальный язык: ?lang= → сохранённый → язык браузера ---------- */
  const fromUrl = new URLSearchParams(location.search).get('lang');
  let saved = null;
  try { saved = localStorage.getItem('lang'); } catch (e) {}
  const nav = (navigator.language || 'ru').toLowerCase();
  const guess = nav.startsWith('uz') ? 'uz' : nav.startsWith('en') ? 'en' : 'ru';

  setLang(LANGS.includes(fromUrl) ? fromUrl : LANGS.includes(saved) ? saved : guess, !!fromUrl);

  window.i18n = { t, setLang, get lang() { return lang; } };
})();
