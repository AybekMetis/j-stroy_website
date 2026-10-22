"""Генератор страниц проектов: python3 build.py
Добавьте проект в список P, положите фото в img/<slug>/1-480.webp, 1-960.webp, 2-480.webp ... и запустите скрипт."""
import html
SITE='https://example.com'
P=[
 dict(slug='kvartira-78',title='Квартира 78 м²: дизайн-проект и ремонт',cat='Дизайн интерьера',a='#4b6a8f',b='#16263d',
  facts=[('Тип','Квартира'),('Площадь','78 м²'),('Срок','4 месяца'),('Город','Ташкент'),('Год','2025')],
  task='Семья из трёх человек купила квартиру в новостройке и хотела светлое функциональное пространство с отдельной рабочей зоной.',
  works=['Обмеры и дизайн-проект','Планировка и перенос перегородок','Электрика, сантехника, отделка','Мебель и декор под ключ'],
  result='Объект сдан в срок и в рамках утверждённой сметы. Клиенты заехали в готовую квартиру с мебелью и декором.',
  review=('Всё сделали в срок и без лишних вопросов. Мы только выбирали цвета.','Азиза, владелица'),ba=False,n=6),
 dict(slug='dom-140',title='Дом 140 м²: ремонт под ключ',cat='Ремонт под ключ',a='#8f7a4b',b='#3d3216',
  facts=[('Тип','Частный дом'),('Площадь','140 м²'),('Срок','6 месяцев'),('Город','Ташкент'),('Год','2025')],
  task='Дом требовал полной замены коммуникаций и отделки, при этом владелец жил за границей и хотел контролировать процесс удалённо.',
  works=['Замена электрики и отопления','Черновая и чистовая отделка','Кровля и фасад','Еженедельные фотоотчёты'],
  result='Владелец принимал работы по фотоотчётам и видеозвонкам и приехал на готовый объект.',
  review=('Каждую неделю получал отчёт и понимал, что происходит на объекте.','Рустам, владелец'),ba=True,n=8),
 dict(slug='uchastok-12-sotok',title='Участок 12 соток: ландшафтный дизайн',cat='Ландшафтный дизайн',a='#4b8f6a',b='#16402b',
  facts=[('Тип','Участок'),('Площадь','12 соток'),('Срок','3 месяца'),('Город','Ташкент область'),('Год','2024')],
  task='Нужно было превратить пустой участок в место для отдыха семьи с садом, зоной барбекю и автоматическим поливом.',
  works=['Генеральный план участка','Дорожки, террасы, освещение','Посадка растений и газон','Автоматический полив'],
  result='Участок готов к использованию, система полива работает без ручного обслуживания.',
  review=('Участок стал любимым местом семьи, дети не заходят домой.','Дильшод, владелец'),ba=True,n=6),
 dict(slug='ofis-320',title='Офис 320 м²: ремонт и аренда',cat='Коммерческая недвижимость',a='#8f4b5e',b='#3d1623',
  facts=[('Тип','Офис'),('Площадь','320 м²'),('Срок','3 месяца'),('Город','Ташкент'),('Год','2025')],
  task='Собственник хотел быстро подготовить помещение к сдаче и найти надёжного арендатора.',
  works=['Ремонт и зонирование','Согласование с управляющей компанией','Поиск и проверка арендаторов','Оформление договора'],
  result='Арендатор найден ещё во время ремонта, помещение сдано сразу после приёмки.',
  review=('Не пришлось самому общаться ни с УК, ни с подрядчиками.','Собственник офиса'),ba=False,n=6),
 dict(slug='studiya-34',title='Студия 34 м²: дизайн интерьера',cat='Дизайн интерьера',a='#6a4b8f',b='#2b1640',
  facts=[('Тип','Студия'),('Площадь','34 м²'),('Срок','2 месяца'),('Город','Ташкент'),('Год','2024')],
  task='Компактная студия под сдачу в аренду: нужен практичный интерьер, который понравится жильцам.',
  works=['Дизайн-проект','Встроенная мебель','Ремонт и декор','Передача в аренду'],
  result='Студию сдали в аренду через неделю после завершения ремонта.',
  review=('Квартира окупает ремонт быстрее, чем я рассчитывал.','Камола, владелица'),ba=False,n=6),
 dict(slug='kafe-90',title='Кафе 90 м²: ремонт под ключ',cat='Ремонт под ключ',a='#4b8f8a',b='#16403d',
  facts=[('Тип','Кафе'),('Площадь','90 м²'),('Срок','2,5 месяца'),('Город','Ташкент'),('Год','2025')],
  task='Помещение под кафе нужно было открыть к сезону, соблюдая требования по вентиляции и инженерным сетям.',
  works=['Проект и согласования','Вентиляция и электрика','Отделка и мебель','Клининг перед открытием'],
  result='Кафе открылось в запланированную дату, обслуживание помещения мы взяли на себя.',
  review=('Открылись вовремя, а это в нашем бизнесе главное.','Владелец кафе'),ba=True,n=6),
]
e=html.escape
def page(p):
    sl=p['slug'];st=f"--a:{p['a']};--b:{p['b']}"
    facts=''.join(f'<div><dt>{e(k)}</dt><dd>{e(v)}</dd></div>' for k,v in p['facts'])
    works=''.join(f'<li>{e(w)}</li>' for w in p['works'])
    gal=''.join(f'<button class="ph g" style="{st}" data-b="../img/{sl}/{i}" data-alt="{e(p["title"])}, фото {i}" aria-label="Открыть фото {i}"></button>' for i in range(2,p['n']+1))
    ba=f'''<h2>До и после</h2>
  <div class="ba"><div class="ph" style="--a:#7d8590;--b:#4a505a" data-b="../img/{sl}/after" data-alt="После"></div>
   <div class="ph before" style="--a:#bfc5cc;--b:#8a919b" data-b="../img/{sl}/before" data-alt="До"></div>
   <input type="range" min="0" max="100" value="50" aria-label="Сравнить до и после"><span class="tag l">До</span><span class="tag r">После</span></div>''' if p['ba'] else ''
    more=''.join(f'<a class="card" href="{o["slug"]}.html"><h3>{e(o["title"].split(":")[0])}</h3><span>{e(o["cat"])}</span></a>' for o in P if o is not p)
    desc=e(p['task'][:150])
    return f'''<!DOCTYPE html>
<html lang="ru"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{e(p['title'])} | НАЗВАНИЕ</title>
<meta name="description" content="{desc}">
<link rel="canonical" href="{SITE}/projects/{sl}.html">
<meta property="og:type" content="article"><meta property="og:title" content="{e(p['title'])}"><meta property="og:description" content="{desc}">
<meta property="og:url" content="{SITE}/projects/{sl}.html"><meta property="og:image" content="{SITE}/img/{sl}/1-960.webp">
<meta name="theme-color" content="#16263d"><link rel="stylesheet" href="../style.css"></head>
<body>
<header><div class="wrap bar"><a class="logo" href="../index.html">НАЗВАНИЕ</a><a class="btn" href="../index.html#contact">Консультация</a></div></header>
<main class="cs wrap">
 <nav class="crumbs" aria-label="Навигация"><a href="../index.html">Главная</a> / <a href="../index.html#portfolio">Проекты</a> / {e(p['title'].split(':')[0])}</nav>
 <article>
  <p>{e(p['cat'])}</p><h1>{e(p['title'])}</h1>
  <div class="ph hero-img" style="{st}" data-b="../img/{sl}/1" data-alt="{e(p['title'])}"></div>
  <dl class="facts">{facts}</dl>
  <h2>Задача</h2><p>{e(p['task'])}</p>
  <h2>Что мы сделали</h2><ul class="works">{works}</ul>
  <h2>Результат</h2><p>{e(p['result'])}</p>
  {ba}
  <h2>Фотографии</h2><div class="gal">{gal}</div>
  <h2>Отзыв клиента</h2><blockquote><p>{e(p['review'][0])}</p><footer>{e(p['review'][1])}</footer></blockquote>
  <div class="cta-band"><h2 style="margin:0">Хотите так же?</h2><p>Расскажите о своём объекте, и мы подготовим предложение.</p><a class="btn" href="../index.html#contact">Получить консультацию</a></div>
 </article>
 <section class="more" aria-labelledby="hm"><h2 id="hm">Другие проекты</h2><div class="grid c3">{more}</div></section>
</main>
<footer style="margin-top:56px"><div class="wrap">© НАЗВАНИЕ. Все права защищены.</div></footer>
<dialog id="lb" aria-label="Просмотр фото"><div class="lbi ph"></div>
 <div class="bar2"><button class="prev" aria-label="Предыдущее">←</button><span class="cnt"></span><button class="next" aria-label="Следующее">→</button><button class="close" aria-label="Закрыть">×</button></div></dialog>
<script src="case.js"></script>
</body></html>'''
for p in P: open(f"projects/{p['slug']}.html",'w',encoding='utf-8').write(page(p))
print('ok',len(P))
