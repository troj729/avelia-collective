function r(){const c=S.g('cart',[]);cl.innerHTML=c.map((x,i)=>`<div class=ci><span>${x.name}</span><span class=price>${etb(x.price)}</span><button data-i=${i}>Remove</button></div>`).join('')||'<p>Nothing here yet.</p>';ct.textContent=etb(c.reduce((s,x)=>s+x.price,0))}
cl.onclick=e=>{const b=e.target.closest('button');if(!b)return;const c=S.g('cart',[]);c.splice(b.dataset.i,1);S.s('cart',c);r();draw()};
co.onclick=()=>{const u=me(),c=S.g('cart',[]);if(!c.length)return toast('Cart is empty');if(!u)return location.href='login.html?next=cart.html';
const P=S.g('pubs',[]);c.forEach(x=>{const p=P.find(y=>y.id==x.pid);if(p){p.sales++;if(p.by!=u.email)p.earned+=x.price*.02}});S.s('pubs',P);S.s('cart',[]);r();draw();toast('Order placed — payment is a demo')};r();
