const k=new URLSearchParams(location.search).get('k'),v=PK[k]||PK.love,its=v.items.map(id=>({id,q:1}));
document.documentElement.style.setProperty('--a',v.a);document.documentElement.style.setProperty('--bgp',v.bg);document.body.style.background=v.bg;document.body.style.minHeight='100vh';
tg.textContent='Gift package';ti.innerHTML=v.n.replace(/(\w+)$/,'<i>$1</i>');tt.textContent=v.t;
ls.innerHTML=its.map(x=>`<div class=row><span>${it(x.id).n}</span><span class=price>${etb(it(x.id).p)}</span></div>`).join('');tp.textContent=etb(price(its));
ad.onclick=()=>addCart({name:v.n+' package',price:price(its)});cu.href='custom.html?k='+k;
