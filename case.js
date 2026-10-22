const $=(s,c=document)=>c.querySelector(s),$$=(s,c=document)=>[...c.querySelectorAll(s)];
function load(box,base,alt){
  const p=document.createElement('picture');
  p.innerHTML=`<source type="image/webp" srcset="${base}-480.webp 480w, ${base}-960.webp 960w" sizes="(min-width:768px) 640px, 90vw">`;
  const i=new Image();i.loading='lazy';i.alt=alt;i.src=base+'-960.webp';
  i.onerror=()=>p.remove();            // нет файла — остаётся градиент-заглушка
  p.append(i);box.append(p);
}
$$('[data-b]').forEach(el=>load(el,el.dataset.b,el.dataset.alt||''));

/* до / после */
const r=$('.ba input');
if(r)r.addEventListener('input',()=>r.parentNode.style.setProperty('--p',r.value+'%'));

/* просмотр фото */
const lb=$('#lb'),lbi=$('.lbi',lb),G=$$('.g');let k=0;
function show(n){
  k=(n+G.length)%G.length;const g=G[k];
  lbi.innerHTML='';lbi.style.cssText=g.style.cssText;
  load(lbi,g.dataset.b,g.dataset.alt);
  $('.cnt',lb).textContent=`${k+1} / ${G.length}`;
}
G.forEach((g,i)=>g.onclick=()=>{show(i);lb.showModal();});
$('.prev',lb).onclick=()=>show(k-1);
$('.next',lb).onclick=()=>show(k+1);
$('.close',lb).onclick=()=>lb.close();
lb.addEventListener('click',e=>{if(e.target===lb)lb.close();});
lb.addEventListener('keydown',e=>{if(e.key==='ArrowLeft')show(k-1);if(e.key==='ArrowRight')show(k+1);});
let x0=0;
lbi.addEventListener('touchstart',e=>x0=e.touches[0].clientX,{passive:true});
lbi.addEventListener('touchend',e=>{const d=e.changedTouches[0].clientX-x0;if(Math.abs(d)>50)show(k+(d<0?1:-1));});
