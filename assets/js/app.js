const fmt = d => new Date(d+"T12:00:00").toLocaleDateString(undefined,{month:"short",day:"numeric",year:"numeric"});
const daysAgo = d => { const t=new Date(); return Math.max(0,Math.round((Date.UTC(t.getFullYear(),t.getMonth(),t.getDate()) - Date.parse(d))/864e5)); };
const ago = d => { const n = daysAgo(d); return n<=0?"today":n===1?"yesterday":n+" days ago"; };
const esc = s => s; // content is authored here, trusted


PROJECTS.sort((a,b)=> b.releases[0].date.localeCompare(a.releases[0].date));

document.getElementById("overview").innerHTML = PROJECTS.map(p=>{
  const r=p.releases[0], fresh=daysAgo(r.date)<=7;
  const art = p.img ? `<div class="thumb" style="background-image:url('${p.img}')"></div>` : `<div class="thumb ph" style="${phColor(p.id)}"><span>${p.name}</span></div>`;
  return `<div class="ov" role="button" tabindex="0" data-go="${p.id}">${art}
    <h3>${p.name}</h3>
    <div class="latest"><div class="row">${(()=>{const age=daysAgo(p.lastActivity||r.date); return fresh?'<span class="pill new">NEW</span>':age>100?'<span class="pill dormant">DORMANT</span>':age>14?'<span class="pill quiet">QUIET</span>':'<span class="pill recent">RECENT</span>';})()}<span class="pill ver">${r.v}</span><span class="pill">${ago(r.date)}</span></div></div></div>`;
}).join("");

const list = (items)=> items.map(i=>`<li>${i}</li>`).join("");

document.getElementById("projects").innerHTML = PROJECTS.map(p=>{
  const feats = p.features.map(([h,t])=>`<div class="fcard"><h4>${h}</h4><p>${t}</p></div>`).join("");
  const roster = p.roster ? `<div class="roster"><h4>Imported fighters</h4>
     <div class="chips">${p.roster.t7.map(n=>`<span class="chip">${n}</span>`).join("")}${p.roster.t8.map(n=>`<span class="chip t8">${n} · T8</span>`).join("")}</div>
     <div class="missing"><b>Not working yet:</b> ${p.roster.missing}</div></div>` : "";
  const rels = p.releases.map((r,i)=>`
    <details class="rel" ${i===0?"open":""}>
      <summary><span class="pill ver">${r.v}</span><span class="t">${r.title}</span><span class="d">${r.when||fmt(r.date)}</span></summary>
      <div class="rbody">
        <p class="lead">${r.lead}</p>
        <ul>${list(r.highlights)}</ul>
        ${r.perf&&r.perf.length?`<div class="block perf"><h5>⚡ Performance</h5><ul>${list(r.perf)}</ul></div>`:""}
        ${r.heads&&r.heads.length?`<div class="block heads"><h5>Heads up when updating</h5><ul>${list(r.heads)}</ul></div>`:""}
        ${r.fixes&&r.fixes.length?`<details class="fixes"><summary>Bug fixes & small changes (${r.fixes.length})</summary><ul>${list(r.fixes)}</ul></details>`:""}
      </div>
    </details>`).join("");
  return `<section class="project" id="${p.id}">
    <div class="ph"><div><h2>${p.name}</h2><div class="by">${p.game}</div></div>
      <div class="row"><span class="pill ver">${p.releases[0].v}</span><a class="pill" href="${p.link||'https://github.com/'+p.repo}">${p.source||'GitHub'} ↗</a></div></div>
    <p class="blurb">${p.blurb}</p>
    <div class="statusbox">${p.status}</div>
    <div class="tabs"><button class="tab on" data-t="u">Recent updates</button><button class="tab" data-t="f">Main features</button></div>
    <div class="pane" data-p="u">${rels}</div>
    <div class="pane" data-p="f" hidden><div class="feat">${feats}</div>${roster}
      ${p.coming?`<div class="coming"><b>Coming next:</b> ${p.coming}</div>`:""}</div>
  </section>`;
}).join("");

function phColor(id){ const list=PROJECTS.filter(x=>!x.img).map(x=>x.id).sort(); const i=list.indexOf(id);
  const hue=Math.round(150+i*360/Math.max(list.length,1))%360;
  return `background:radial-gradient(120% 140% at 20% 0%,hsl(${hue} 85% 62%) 0%,hsl(${hue} 70% 38%) 45%,hsl(${(hue+25)%360} 65% 16%) 100%)`; }
let current=null;
function place(){
  // put the open panel right after the last card in the clicked card's row
  if(!current) return;
  const grid=document.getElementById("overview"), sec=document.getElementById(current), card=grid.querySelector(`.ov[data-go="${current}"]`);
  if(!sec||!card) return;
  const cards=[...grid.querySelectorAll(".ov")], top=card.offsetTop;
  let last=card; for(const c of cards){ if(Math.abs(c.offsetTop-top)<4) last=c; }
  if(last.nextElementSibling!==sec) last.after(sec);
}
function select(id, scroll){
  if(!PROJECTS.some(p=>p.id===id)) id=null;
  current=id;
  document.querySelectorAll(".ov").forEach(el=>{const on=el.dataset.go===id; el.classList.toggle("sel",on); el.setAttribute("aria-pressed",on);});
  const store=document.getElementById("projects");
  document.querySelectorAll("section.project").forEach(sec=>{ sec.hidden = sec.id!==id; if(sec.id!==id && sec.parentElement!==store) store.appendChild(sec); });
  place();
  if(typeof view==="undefined"||view==="tracker"){ try{ history.replaceState(null,"", id ? "#"+id : location.pathname+location.search); }catch(e){} }
  if(id && scroll){ const card=document.querySelector(`.ov[data-go="${id}"]`); const r=card.getBoundingClientRect(); if(r.top<0||r.bottom>innerHeight) card.scrollIntoView({behavior:"smooth",block:"start"}); }
}
function toggle(id){ select(current===id?null:id,true); }
document.querySelectorAll(".ov").forEach(el=>{
  el.addEventListener("click",()=>toggle(el.dataset.go));
  el.addEventListener("keydown",e=>{ if(e.key==="Enter"||e.key===" "){ e.preventDefault(); toggle(el.dataset.go);} });
});
let rt; window.addEventListener("resize",()=>{ clearTimeout(rt); rt=setTimeout(()=>{ if(current){ document.getElementById("projects").appendChild(document.getElementById(current)); place(); } },120); });

/* ================= NEWSLETTER ================= */
const NEWS = (window.NEWS || []).slice().sort((a,b)=>b.no-a.no);


function nlPic(p){ return p.img ? `background-image:url('${p.img}')` : phColor(p.id); }
function renderNews(id){
  const n = NEWS.find(x=>x.id===id) || NEWS[0];
  const P = Object.fromEntries(PROJECTS.map(p=>[p.id,p]));
  const story = s => { const p=P[s.pid]; return `<article class="nl-story">
      <div class="pic" style="${nlPic(p)}">${p.img?"":p.name}</div>
      <div><div class="kicker">${s.kicker}</div><h4>${s.title}</h4>${s.body}
      <button class="go" data-open="${p.id}">Open ${p.name} in the tracker →</button></div></article>`; };
  document.getElementById("view-news").innerHTML = `<div class="nl">
    <div class="nl-mast">
      <div class="kick">The weekly fan-port dispatch</div>
      <h2>The Memory Card</h2>
      <div class="sub">Everything worth saving from the past week</div>
      <div class="nl-meta"><span>Issue <b>#${n.no}</b></span><span>Covering <b>${fmt(n.from).replace(/, \d{4}$/,"")} – ${fmt(n.to)}</b></span><span>Published <b>${fmt(n.published)}</b></span></div>
      ${NEWS.length>1?`<div class="nl-issues">${NEWS.map(x=>`<button data-issue="${x.id}" class="${x.id===n.id?"on":""}">#${x.no}</button>`).join("")}</div>`:""}
    </div>
    <div class="nl-body">
      <div class="nl-lead"><h3>${n.headline}</h3><div class="deck">${n.deck}</div>${n.lead.map(t=>`<p>${t}</p>`).join("")}</div>
      <div class="nl-stats">${n.stats.map(([b,s])=>`<div class="nl-stat"><b>${b}</b><span>${s}</span></div>`).join("")}</div>
      <div class="nl-h">Headlines</div>
      ${n.stories.map(story).join("")}
      <div class="nl-h">New on the tracker</div>
      <div class="nl-new">${n.newcomers.map(([id,t])=>{const p=P[id];return `<button class="nl-newc" data-open="${id}"><span class="t" style="${nlPic(p)}"></span><span><b>${p.name}</b><span>${t}</span></span></button>`;}).join("")}</div>
      <div class="nl-h">Quick saves</div>
      <ul class="nl-quick">${n.quick.map(q=>`<li>${q}</li>`).join("")}</ul>
      <div class="nl-h">The quiet corner</div>
      <p class="nl-quiet">${n.quiet}</p>
      <div class="nl-h">Watch list for next week</div>
      <ul class="nl-quick">${n.watch.map(q=>`<li>${q}</li>`).join("")}</ul>
      <div class="nl-sign"><b>Save complete</b><br>${n.signoff}</div>
    </div></div>`;
  const v=document.getElementById("view-news");
  v.querySelectorAll("[data-open]").forEach(b=>b.addEventListener("click",()=>{ showView("tracker"); select(b.dataset.open,true); }));
  v.querySelectorAll("[data-issue]").forEach(b=>b.addEventListener("click",()=>{ renderNews(b.dataset.issue); try{history.replaceState(null,"","#news-"+b.dataset.issue.replace("issue-",""));}catch(e){} }));
}
let view="tracker";
function showView(v){
  view=v;
  document.getElementById("view-tracker").hidden = v!=="tracker";
  document.getElementById("view-news").hidden = v!=="news";
  document.querySelector("footer").hidden = v!=="tracker";
  document.querySelectorAll(".views button").forEach(b=>b.classList.toggle("on",b.dataset.v===v));
  if(v==="news"){ select(null); try{history.replaceState(null,"","#news");}catch(e){} window.scrollTo({top:0}); }
  else if(!current){ try{history.replaceState(null,"",location.pathname+location.search);}catch(e){} }
}
document.querySelectorAll(".views button").forEach(b=>b.addEventListener("click",()=>{ showView(b.dataset.v); if(b.dataset.v==="news") b.querySelector(".dot")?.remove(); }));
renderNews(NEWS[0].id);

function route(){ const h=location.hash.slice(1);
  if(h.startsWith("news")){ const m=h.match(/^news-(\d+)/); showView("news"); if(m) renderNews("issue-"+m[1]); }
  else { if(view!=="tracker") showView("tracker"); if(h!==current) select(h); } }
window.addEventListener("hashchange",route);
route();
document.querySelectorAll("section.project").forEach(sec=>{
  sec.querySelectorAll(".tab").forEach(btn=>btn.addEventListener("click",()=>{
    sec.querySelectorAll(".tab").forEach(b=>b.classList.toggle("on",b===btn));
    sec.querySelectorAll(".pane").forEach(pn=>pn.hidden = pn.dataset.p!==btn.dataset.t);
  }));
});

(function(){const fx=document.getElementById("fx"); if(!fx) return; let h="";
for(let i=0;i<28;i++){const sz=(3+Math.random()*9).toFixed(1); h+=`<i style="left:${(Math.random()*100).toFixed(1)}%;width:${sz}px;height:${sz}px;animation-duration:${(10+Math.random()*16).toFixed(1)}s;animation-delay:-${(Math.random()*20).toFixed(1)}s"></i>`;}
fx.innerHTML=h;})();
