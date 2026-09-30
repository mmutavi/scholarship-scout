const KEY='scout.scholarships.v2', $=s=>document.querySelector(s);
let rows=read();
function read(){try{const v=JSON.parse(localStorage.getItem(KEY)||localStorage.getItem('scout.scholarships.v1')||'[]');return Array.isArray(v)?v.map((x,i)=>({...x,id:x.id||`legacy-${i}`})):[]}catch{return[]}}
function esc(s){return String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function safeUrl(v){try{const u=new URL(v);return ['http:','https:'].includes(u.protocol)?u.href:''}catch{return''}}
function money(v){return new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',maximumFractionDigits:0}).format(Number(v)||0)}