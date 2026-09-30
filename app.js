const KEY='scout.scholarships.v2', $=s=>document.querySelector(s);
let rows=read();
function read(){try{const v=JSON.parse(localStorage.getItem(KEY)||localStorage.getItem('scout.scholarships.v1')||'[]');return Array.isArray(v)?v.map((x,i)=>({...x,id:x.id||`legacy-${i}`})):[]}catch{return[]}}
function esc(s){return String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}