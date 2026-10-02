const KEY='scout.scholarships.v2', $=s=>document.querySelector(s);
let rows=read();
function read(){try{const v=JSON.parse(localStorage.getItem(KEY)||localStorage.getItem('scout.scholarships.v1')||'[]');return Array.isArray(v)?v.map((x,i)=>({...x,id:x.id||`legacy-${i}`})):[]}catch{return[]}}
function esc(s){return String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function safeUrl(v){try{const u=new URL(v);return ['http:','https:'].includes(u.protocol)?u.href:''}catch{return''}}
function money(v){return new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',maximumFractionDigits:0}).format(Number(v)||0)}
function date(v){if(!v)return 'No date';return new Date(`${v}T12:00:00`).toLocaleDateString(undefined,{month:'short',day:'numeric',year:'numeric'})}
function daysLeft(v){return Math.ceil((new Date(`${v}T23:59:59`)-new Date())/86400000)}
function save(){localStorage.setItem(KEY,JSON.stringify(rows));render()}
function render(){