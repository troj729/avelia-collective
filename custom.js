const q={};list.innerHTML=ITEMS.map(i=>`<div class=it><b>${i.n}</b><span class=price>${etb(i.p)}</span><div class=qt><button data-i=${i.id} data-d=-1>−</button><em id=q${i.id}>0</em><button data-i=${i.id} data-d=1>+</button></div><small>${i.c}</small></div>`).join('');
const sel=()=>Object.entries(q).filter(e=>e[1]>0).map(([id,n])=>({id:+id,q:n})),upd=()=>{ITEMS.forEach(i=>document.getElementById('q'+i.id).textContent=q[i.id]||0);total.textContent=etb(price(sel()))};
list.onclick=e=>{const b=e.target.closest('button');if(!b)return;const i=b.dataset.i;q[i]=Math.max(0,(q[i]||0)+ +b.dataset.d);upd()};
const k=new URLSearchParams(location.search).get('k');if(PK[k]){PK[k].items.forEach(i=>q[i]=1);nm.value=PK[k].n+' remix';upd()}
function ok(){if(!sel().length){toast('Pick at least one item');return 0}return 1}
add.onclick=()=>{if(ok())addCart({name:nm.value||'Custom package',price:price(sel())})};
pub.onclick=()=>{if(!ok())return;const u=me();if(!u){toast('Login to publish');return setTimeout(()=>location.href='login.html?next=custom.html',900)}
if(!nm.value.trim())return toast('Name your package');const P=S.g('pubs',[]);P.push({id:'p'+Date.now(),name:nm.value,by:u.email,byN:u.name,items:sel(),sales:0,earned:0});S.s('pubs',P);toast('Published!');setTimeout(()=>location.href='creative.html',900)};
