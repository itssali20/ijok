/* Shared by index.html and product.html: packshots, catalogue, announcement, header, overlays and the persistent bag with the buy-more-save-more discount. */
/* ===== Packshot placeholders, modelled on the real ljörk packaging (white airless bottles, silver caps, red wordmark). Replace with photography in Squarespace. ===== */
const C={
  white:{b:['#C9CDD1','#FFFFFF','#F3F4F5','#FFFFFF','#CDD1D5'],cap:'metal',ink:'#E30613',t:'#5F5A57'},
  sage:{b:['#8F9B8B','#C9D1C5','#D6DDD2','#E6EBE3','#97A393'],cap:'ivory',ink:'#292725',t:'#3F4A3C'},
  sagejar:{b:['#A9B3A5','#E8ECE5','#F2F4F0','#FFFFFF','#AEB8AA'],cap:'sage',ink:'#292725',t:'#4B5648'},
  burg:{b:['#3A1A1E','#5E2B31','#6E363D','#87505A','#3E1C21'],cap:'bronze',ink:'#F8F5F0',t:'#E8D9C9'},
  bronze:{b:['#6E4E28','#A47A45','#B58B55','#D7B585','#74532C'],cap:'dark',ink:'#F8F5F0',t:'#F8F5F0'}
};
const CAP={
  metal:['#7D8185','#D9DCDF','#A7ABAF','#FFFFFF','#8E9296','#6A6E72'],
  ivory:['#CFC8BE','#F8F5F0','#EDE7DF','#FFFFFF','#D8D1C7','#C2BAAF'],
  sage:['#7E8A7A','#B9C2B5','#A6B0A2','#D3DACF','#8C9888','#76826F'],
  bronze:['#7A5A30','#D2AE7C','#B58B55','#F0D9B3','#94703E','#6E5029'],
  dark:['#141312','#3C3936','#292725','#5A5652','#1E1C1B','#100F0E']
};
let gid=0;
function grad(id,s){const o=s.length===5?[0,.25,.5,.66,1]:[0,.22,.48,.62,.85,1];return `<linearGradient id="${id}" x1="0" x2="1">${s.map((c,i)=>`<stop offset="${o[i]}" stop-color="${c}"/>`).join('')}</linearGradient>`}
function pk(type,c,label,sub='',size=''){
  const k=C[c]||C.white,id='p'+(++gid),cap=CAP[k.cap];
  const defs=`<defs>${grad(id+'b',k.b)}${grad(id+'c',cap)}<filter id="${id}f" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="5"/></filter><linearGradient id="${id}v" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".06"/></linearGradient></defs>`;
  const sh=(w)=>`<ellipse cx="100" cy="334" rx="${w}" ry="5" fill="#000" opacity=".28" filter="url(#${id}f)"/>`;
  const word=(y,fs,ink=k.ink)=>`<text x="100" y="${y}" text-anchor="middle" font-family="Noto Serif Display,Georgia,serif" font-weight="400" font-size="${fs}" fill="${ink}">ljörk</text>`;
  const small=(y,txt,fs=7.2,ls=1.6,op=1)=>`<text x="100" y="${y}" text-anchor="middle" font-family="Hanken Grotesk,Arial,sans-serif" font-weight="600" font-size="${fs}" letter-spacing="${ls}" fill="${k.t}" opacity="${op}">${txt.toUpperCase()}</text>`;
  let s='';
  if(type==='airless'||type==='airless-s'){
    const sm=type==='airless-s', w=sm?60:80, x=100-w/2, top=sm?120:96, capH=sm?62:70;
    s=sh(w*.62)
    +`<rect x="${x}" y="${top+capH-4}" width="${w}" height="${334-(top+capH-4)}" rx="3" fill="url(#${id}b)"/>`
    +`<rect x="${x}" y="${top+capH-4}" width="${w}" height="${334-(top+capH-4)}" rx="3" fill="url(#${id}v)"/>`
    +`<rect x="${x}" y="322" width="${w}" height="12" rx="2" fill="url(#${id}c)"/>`
    +`<rect x="${x-1}" y="${top}" width="${w+2}" height="${capH}" rx="3" fill="url(#${id}c)"/>`
    +`<ellipse cx="100" cy="${top}" rx="${w/2+1}" ry="4" fill="#F4F5F6" opacity=".9"/>`
    +`<rect x="${x-1}" y="${top+capH-8}" width="${w+2}" height="4" fill="#000" opacity=".08"/>`
    +`<line x1="${x+10}" x2="${x+w-10}" y1="${sm?214:196}" y2="${sm?214:196}" stroke="#E30613" stroke-width=".8"/>`
    +word(sm?205:186,sm?17:23)+small(sm?228:212,label,sm?7.5:9,sm?1.4:2.2)+small(sm?239:225,sub,sm?4.4:5.2,1,.75)
    +(size?small(316,size,sm?4.6:5.4,1,.6):'');
  }
  if(type==='tube'){s=sh(36)+`<rect x="70" y="276" width="60" height="58" rx="4" fill="url(#${id}c)"/><path d="M60 40h80l-7 238H67z" fill="url(#${id}b)"/><path d="M60 40h80l-7 238H67z" fill="url(#${id}v)"/><rect x="58" y="34" width="84" height="12" rx="1.5" fill="url(#${id}b)"/><path d="M60 40h80" stroke="#000" stroke-opacity=".1"/>`+word(150,21)+small(168,label,7.4,1.8)+small(180,sub,4.8,1,.75)}
  if(type==='jar'){s=sh(62)+`<rect x="40" y="226" width="120" height="108" rx="16" fill="url(#${id}b)"/><rect x="40" y="226" width="120" height="108" rx="16" fill="url(#${id}v)"/><rect x="36" y="184" width="128" height="46" rx="4" fill="url(#${id}c)"/><ellipse cx="100" cy="184" rx="64" ry="3.5" fill="#fff" opacity=".35"/>`+word(276,20)+small(293,label,6.8,1.6)+small(305,sub,4.6,1,.75)}
  if(type==='dropper'){s=sh(40)+`<path d="M64 168q0-24 22-28h28q22 4 22 28v154a12 12 0 0 1-12 12H76a12 12 0 0 1-12-12z" fill="url(#${id}b)"/><path d="M64 168q0-24 22-28h28q22 4 22 28v154a12 12 0 0 1-12 12H76a12 12 0 0 1-12-12z" fill="url(#${id}v)"/><rect x="80" y="112" width="40" height="30" rx="2" fill="url(#${id}c)"/><path d="M87 112V76a13 13 0 0 1 26 0v36z" fill="url(#${id}c)"/>`+word(238,20)+small(256,label,7,1.6)+small(268,sub,4.6,1,.75)}
  if(type==='bar'){s=sh(70)+`<rect x="28" y="232" width="144" height="102" rx="3" fill="url(#${id}b)"/><path d="M28 232l22-24h100l22 24z" fill="${k.b[0]}" opacity=".55"/>`+word(282,22)+small(299,label,7,1.8)+small(311,sub,4.6,1,.75)}
  return `<svg viewBox="0 0 200 340" preserveAspectRatio="xMidYMax meet" style="width:100%;height:100%" role="img" aria-label="${label} packshot placeholder">${defs}${s}</svg>`;
}

/* ===== Catalogue (real ljork.com names & prices) ===== */
const IMGB=(window.LJ_BASE||'https://cdn.jsdelivr.net/gh/itssali20/ijok@main/')+'assets/p/';
const IMGN={collagel: 12, pepteyes: 7, q10: 8, faceneck: 7, men: 7, sanszit: 6, scar: 5};
const P={
  collagel:{n:'Collagel',d:'Age-defying gel for visible firmness and deep hydration',m:'50 mL',p:49.95,o:104.95,t:'airless',c:'white',l:'Collagel',s:'Ultimate anti-aging gel',z:'50 mL'},
  pepteyes:{n:'Pepteyes',d:'Eye cream for wrinkles, dark circles and under-eye bags',m:'30 mL',p:34.95,o:95.99,t:'airless-s',c:'white',l:'Pepteyes',s:'Rejuvenating eye cream',z:'30 mL'},
  q10:{n:'Q10 Facial Oil',d:'Beauty in a bottle. A nourishing face oil with coenzyme Q10, rosehip, vitamin C and squalane',m:'30 mL',p:35.95,o:45.95,t:'dropper',c:'bronze',l:'Q10',s:'Nourishing face oil',b:'Most loved'},
  faceneck:{n:'Anti-Ageing Moisturising Cream',d:'Deep anti-ageing moisturiser with niacinamide, squalane, hyaluronic acid and vitamins C, A and E',m:'50 g',p:39.95,o:49.95,t:'jar',c:'burg',l:'Anti-ageing',s:'Moisturising cream'},
  men:{n:'Moisturiser for Men',d:'Advanced anti-ageing moisturising cream with vitamins C, A and E, tailored for men\'s skin',m:'50 g',p:34.95,o:49.95,t:'tube',c:'burg',l:'For men',s:'Anti-ageing moisturiser',b:'Best seller'},
  sanszit:{n:'SansZit Anti-Acne Cream',d:'Moisturising anti-acne cream that reduces blemishes, controls sebum and helps prevent scars',m:'25 mL',p:19.99,o:42,t:'tube',c:'sage',l:'SansZit',s:'Anti-acne moisturiser'},
  scar:{n:'Scar Corrector Serum',d:'Skin-brightening serum that helps fade post-acne dark spots and evens skin tone',m:'30 mL',p:24.95,t:'dropper',c:'sage',l:'Scar',s:'Corrector serum'}
};
Object.keys(IMGN).forEach(k=>{P[k].i=Array.from({length:IMGN[k]},(_,n)=>IMGB+k+'-'+(n+1)+'.webp')});
(function(){var st=document.createElement('style');st.textContent='.pk:has(>img.pph){inset:0!important}img.pph{width:100%;height:100%;object-fit:contain;display:block}.card-img:has(img.pph),.card:hover .card-img:has(img.pph),.th:has(img.pph),.step-img:has(img.pph){background:#fff}.spot-vis img.pph{object-fit:cover}.spot-vis:has(img.pph) .light{display:none}';document.head.appendChild(st)})();
const fmt=n=>'A$'+n.toFixed(2);
const pkOf=x=>x.i?`<img class="pph" src="${x.i[0]}" alt="${x.n}" loading="lazy">`:pk(x.t,x.c,x.l,x.s,x.z||'');
/* ===== Ratings & reviews. Saved in this browser (localStorage). To share reviews between visitors, point load/save at a backend or review app. ===== */
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const STAR=`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.6l2.9 6.1 6.7.8-4.9 4.6 1.3 6.6L12 17.4l-5.9 3.3 1.3-6.6L2.5 9.5l6.7-.8z"/></svg>`;
const stars=v=>`<span class="rstars" role="img" aria-label="${v?v.toFixed(1):'No'} out of 5 stars"><span class="st-bg">${STAR.repeat(5)}</span><span class="st-fg" style="width:${v/5*100}%">${STAR.repeat(5)}</span></span>`;
let REV={};try{REV=JSON.parse(localStorage.getItem('ljork-reviews'))||{}}catch(e){}
const revs=id=>REV[id]||[];
const saveRev=()=>{try{localStorage.setItem('ljork-reviews',JSON.stringify(REV))}catch(e){}};
function rating(id){const r=revs(id),n=r.length;return {n,avg:n?r.reduce((a,v)=>a+v.s,0)/n:0}}
function ratingLine(id){const {n,avg}=rating(id);return `<a class="rt" href="product.html?p=${id}#reviews">${stars(avg)}<span>${n?`${avg.toFixed(1)} <i>(${n})</i>`:'No reviews yet'}</span></a>`}
function card(id){const x=P[id];return `<article class="card">
  <div class="card-img">${x.b?`<span class="badge${x.b.startsWith('Save')?' red':''}">${x.b}</span>`:''}${x.sold?'<span class="badge">Back soon</span>':''}<a class="pk" href="product.html?p=${id}" aria-label="${x.n}" tabindex="-1">${pkOf(x)}</a>
  ${x.sold?'<button class="qa" disabled>Notify me when back</button>':`<button class="qa" data-add="${id}">Quick add, ${fmt(x.p)}</button>`}</div>
  <div class="card-b"><div class="card-top"><a class="card-name" href="product.html?p=${id}">${x.n}</a><span class="price">${fmt(x.p)}${x.o?`<s>${fmt(x.o)}</s>`:''}</span></div>
  ${ratingLine(id)}<p class="card-d">${x.d}</p>${x.m?`<p class="card-m">${x.m}</p>`:''}</div></article>`}
/* ===== Announcement ===== */
const MSG=['Buy more, save more: 10% off every additional product','Complimentary shipping across Australia on orders over A$80','Pay in 4 interest-free instalments with Afterpay','<a href="index.html#join">Join the ljörk list for 10% off your first order</a>'];let ai=0;
function ann(d){ai=(ai+d+MSG.length)%MSG.length;const m=document.getElementById('annMsg');m.style.opacity=0;setTimeout(()=>{m.innerHTML=MSG[ai];m.style.opacity=1},250)}
let annT=setInterval(()=>ann(1),5000);

/* ===== Header: hide on scroll down, show on scroll up ===== */
let ly=0;addEventListener('scroll',()=>{const y=scrollY,h=document.getElementById('hdr');h.classList.toggle('hide',y>ly&&y>300);ly=y},{passive:true});

/* ===== Overlays ===== */
const veil=document.getElementById('veil');
function openM(id){closeAll(true);document.getElementById(id).classList.add('open');document.body.classList.add('lock');if(id==='search')setTimeout(()=>document.getElementById('sq').focus(),200)}
function closeAll(keep){['cart','search','quiz','mnav'].forEach(i=>{const e=document.getElementById(i);if(e)e.classList.remove('open')});veil.classList.remove('on');if(!keep)document.body.classList.remove('lock')}
addEventListener('keydown',e=>{if(e.key==='Escape')closeAll()});

/* ===== Bag ===== */
let bag={};try{bag=JSON.parse(localStorage.getItem('ljork-bag'))||{}}catch(e){}
Object.keys(bag).forEach(k=>{if(!P[k])delete bag[k]});
Object.keys(bag).forEach(k=>{if(!P[k]||!(bag[k]>0))delete bag[k]});
const FREE=80,DISC=.1;
/* Buy more, save more: highest-priced unit pays full price, every additional unit is 10% off. Bundles (nd) are already discounted and excluded. Shipping threshold uses the discounted total. */
function discount(b=bag){const u=[];Object.keys(b).forEach(i=>{if(P[i].nd)return;for(let k=0;k<b[i];k++)u.push(P[i].p)});u.sort((a,b)=>b-a);return {units:u.length,amt:u.slice(1).reduce((a,x)=>a+x*DISC,0)}}
function add(id,q=1){bag[id]=Math.max(0,(bag[id]||0)+q);renderBag();}
function renderBag(){
  const ids=Object.keys(bag).filter(i=>bag[i]>0),count=ids.reduce((a,i)=>a+bag[i],0),sub=ids.reduce((a,i)=>a+bag[i]*P[i].p,0);
  const n=document.getElementById('bagN');n.textContent=count;n.classList.toggle('on',count>0);
  try{localStorage.setItem('ljork-bag',JSON.stringify(Object.fromEntries(ids.map(i=>[i,bag[i]]))))}catch(e){}
  const d=discount(),net=sub-d.amt;
  document.getElementById('sub').textContent=fmt(sub);
  document.getElementById('discRow').hidden=d.amt<=0;document.getElementById('disc').textContent='−'+fmt(d.amt);
  document.getElementById('tot').textContent=fmt(net);
  document.getElementById('nudge').textContent=d.units===0?'Buy more, save more: 10% off every additional product.':d.units===1?'Add one more product to save 10% on it.':`You’re saving ${fmt(d.amt)}. Every extra product is 10% off.`;
  const left=FREE-net;document.getElementById('shipTxt').innerHTML=left>0?`You're <b>${fmt(left)}</b> away from free shipping`:'<b>You have free shipping</b>';
  document.getElementById('shipBar').style.width=Math.min(100,net/FREE*100)+'%';
  document.getElementById('cartItems').innerHTML=ids.length?ids.map(i=>`<div class="ci"><div class="th"><div class="pk">${pkOf(P[i])}</div></div><div><strong>${P[i].n}</strong><span style="font-size:13px;color:var(--ink-3)">${P[i].m||''}</span><br><div class="q"><button aria-label="Decrease" onclick="add('${i}',-1)">−</button><span>${bag[i]}</span><button aria-label="Increase" onclick="add('${i}',1)">+</button></div></div><div style="text-align:right;font-size:15px">${fmt(P[i].p*bag[i])}<button class="rm" onclick="bag['${i}']=0;renderBag()">Remove</button></div></div>`).join(''):'<div class="empty"><p>Your bag is empty.</p><a class="btn btn-ghost" href="#shop" onclick="closeAll()">Shop bestsellers</a></div>';
}
function openCart(){openM('cart');veil.classList.add('on')}
document.addEventListener('click',e=>{const b=e.target.closest('[data-add]');if(b){add(b.dataset.add);openCart();}
  const s=e.target.closest('[data-add-set]');if(s){(s.dataset.addSet==='am'?['collagel','pepteyes','faceneck']:['scar','pepteyes','q10']).filter(i=>!P[i].sold).forEach(i=>add(i));openCart();}});
renderBag();



/* ===== Collections, concerns, usage notes ===== */
P.collagel.u='Morning and night, smooth one to two pumps over clean face and neck. Follow with SPF in the morning.';
P.pepteyes.u='Tap a little along the orbital bone, morning and night.';
P.q10.u='Press three drops into clean skin in the evening.';
P.scar.u='Apply to dark marks only.';
const COLL={
  all:{t:'All products',d:'The full ljörk range, formulated by a clinical immunologist.',ids:['men','q10','collagel','faceneck','pepteyes','sanszit','scar']},
  bestsellers:{t:'Bestsellers',d:'The formulas customers come back for, led by Moisturiser for Men and Q10 Facial Oil.',ids:['men','q10','collagel','faceneck','pepteyes']},
  'anti-ageing':{t:'Anti-ageing',d:'Firm, smooth and hydrate. Formulas that support skin\u2019s own repair, for visible results with daily use.',ids:['men','collagel','pepteyes','faceneck','q10']},
  hydration:{t:'Hydration',d:'Moisturisers and oils that nourish and keep skin comfortable.',ids:['q10','faceneck','men','collagel','sanszit']},
  acne:{t:'Acne & blemish',d:'Calm breakouts, then fade the marks they leave. Gentle enough for daily use on acne-prone skin.',ids:['sanszit','scar']},
  hair:{t:'Hair',d:'Our hair range is on its way.',ids:[]}
};
const CONC={
  lines:{t:'Fine lines & wrinkles',d:'Collagel and Anti-Ageing Moisturising Cream for visible firmness and smoother-looking skin.',ids:['collagel','faceneck','men']},
  eyes:{t:'Dark circles & puffiness',d:'Pepteyes for the delicate eye area.',ids:['pepteyes']},
  dry:{t:'Dryness & dullness',d:'Nourishing oils and creams for skin that feels tight or looks flat.',ids:['q10','faceneck','collagel']},
  breakouts:{t:'Breakouts',d:'SansZit Anti-Acne Cream for acne-prone skin.',ids:['sanszit']},
  marks:{t:'Acne marks & scars',d:'Scar Corrector Serum to fade post-acne dark spots.',ids:['scar']},
  hair:{t:'Thinning hair',d:'Our hair range is on its way.',ids:[]}
};

/* ===== Search ===== */
(function(){const sq=document.getElementById('sq'),res=document.getElementById('sres'),sg=document.querySelector('.search-sugg');if(!sq||!res)return;
  const hits=t=>Object.keys(P).filter(i=>(P[i].n+' '+P[i].d+' '+P[i].s+' '+(P[i].m||'')).toLowerCase().includes(t));
  sq.addEventListener('input',()=>{const t=sq.value.trim().toLowerCase();sg.hidden=!!t;
    if(!t){res.innerHTML='';return}
    const h=hits(t);
    res.innerHTML=h.length?h.map(i=>`<a href="product.html?p=${i}"><span class="th"><span class="pk" style="position:absolute;inset:8%;display:block">${pkOf(P[i])}</span></span><span><strong>${P[i].n}</strong><small>${P[i].s||''}${P[i].m?' \u00b7 '+P[i].m:''}</small></span><span>${fmt(P[i].p)}</span></a>`).join(''):`<p class="none">No products found for \u201c${sq.value.replace(/[<>&]/g,'')}\u201d. Try \u201ceye\u201d, \u201cacne\u201d or \u201coil\u201d.</p>`});
  sq.addEventListener('keydown',e=>{if(e.key==='Enter'){const h=hits(sq.value.trim().toLowerCase());if(h.length)location.href='product.html?p='+h[0]}});
})();

/* ===== Newsletter ===== */
(function(){const f=document.getElementById('joinF');if(f)f.onsubmit=e=>{e.preventDefault();document.getElementById('joinMsg').textContent='Subscribed. Your 10% code is on its way to your inbox.';e.target.reset()}})();

/* ===== Scroll reveal ===== */
document.documentElement.classList.add('js');
function reveal(){
  const sel='.head,.pillar,.post,.step,.concern-grid a,.panel,.founder-in>*,.spot-in>*,.duo-in>*,.quizb>*,.card,.val,.phero .wrap>*,.two>*,.band-in>*,.faq-item,.acc details,.art-head>*,.co>*,.acct>*,.minioffer';
  const els=[...document.querySelectorAll(sel)].filter(e=>!e.classList.contains('rv')&&!e.closest('.hero,.search,.cart,.quiz,.mnav,.hdr'));
  if(!('IntersectionObserver' in window)){return}
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{rootMargin:'0px 0px -6% 0px',threshold:.04});
  els.forEach((e,i)=>{e.classList.add('rv');e.style.setProperty('--d',(i%4)*.08+'s');io.observe(e)});
}
document.addEventListener('DOMContentLoaded',reveal);

/* ===== Skin quiz ===== */
const QS=[
  {q:'What would you most like to change?',o:[['lines','Fine lines and firmness','Skin looks less firm or lined'],['eyes','Dark circles and puffiness','Tired-looking eye area'],['dry','Dryness and dullness','Skin feels tight or looks flat'],['acne','Breakouts and marks','Spots, or marks they leave']]},
  {q:'How does your skin usually feel by midday?',o:[['dry','Tight or dry',''],['norm','Comfortable',''],['oily','Shiny or oily',''],['sens','Easily irritated','']]}
];
const REC={lines:['collagel','pepteyes'],eyes:['pepteyes','collagel'],dry:['q10','faceneck'],acne:['sanszit','scar']};
let qa=[];
function openQuiz(){qa=[];renderQ();openM('quiz');veil.classList.add('on')}
function renderQ(){const i=qa.length,b=document.getElementById('qBody');
  if(i<QS.length){const s=QS[i];b.innerHTML=`<p class="qstep">Question ${i+1} of ${QS.length}</p><div class="qbar"><i style="width:${(i+1)/(QS.length+1)*100}%"></i></div><h3 id="qTitle">${s.q}</h3><div class="opts">${s.o.map(o=>`<button class="opt" onclick="qa.push('${o[0]}');renderQ()">${o[1]}${o[2]?`<small>${o[2]}</small>`:''}</button>`).join('')}</div>${i?'<button class="q-back" onclick="qa.pop();renderQ()">Back</button>':''}`}
  else{const r=REC[qa[0]],tot=r.reduce((a,id)=>a+P[id].p,0);b.innerHTML=`<p class="qstep">Your routine</p><div class="qbar"><i style="width:100%"></i></div><h3 id="qTitle">${qa[1]==='sens'?'A gentle routine for reactive skin':'Your ljörk routine'}</h3><div class="rec">${r.map(id=>`<div><div class="card-img"><div class="pk">${pkOf(P[id])}</div></div><div class="card-b"><div class="card-top"><span class="card-name">${P[id].n}</span><span class="price">${fmt(P[id].p)}</span></div><p class="card-d">${P[id].d}</p></div></div>`).join('')}</div><button class="btn btn-dark" style="width:100%" onclick="${r.map(id=>`add('${id}');`).join('')}openCart()">Add routine to bag, ${fmt(tot)}</button><button class="q-back" onclick="qa=[];renderQ()">Start again</button>`}}

