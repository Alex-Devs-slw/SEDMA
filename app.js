const products = [
 {id:1,name:"Shampoo pH neutro",brand:"SEDMA CARE",category:"Lavado",price:289,desc:"Limpieza segura para el lavado frecuente.",img:"https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?auto=format&fit=crop&w=700&q=85"},
 {id:2,name:"Limpiador multiusos APC",brand:"SEDMA CARE",category:"Interior",price:249,desc:"Para superficies interiores y zonas de uso diario.",img:"https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=700&q=85"},
 {id:3,name:"Cera líquida protectora",brand:"SEDMA CARE",category:"Protección",price:359,desc:"Realza el brillo y facilita el mantenimiento.",img:"https://images.unsplash.com/photo-1632823471565-1ecdf5c2a5b9?auto=format&fit=crop&w=700&q=85"},
 {id:4,name:"Toalla de microfibra",brand:"SEDMA ACCESSORIES",category:"Accesorios",price:139,desc:"Textura suave para secado y limpieza delicada.",img:"https://images.unsplash.com/photo-1603712725038-e9334ae8f39f?auto=format&fit=crop&w=700&q=85"},
 {id:5,name:"Limpiador de interiores",brand:"SEDMA CARE",category:"Interior",price:219,desc:"Ayuda a retirar polvo y suciedad de interiores.",img:"https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=700&q=85"},
 {id:6,name:"Protector para plásticos",brand:"SEDMA CARE",category:"Protección",price:319,desc:"Acabado renovado para plásticos interiores y exteriores.",img:"https://images.unsplash.com/photo-1605164599901-5c6b8e5f8b2f?auto=format&fit=crop&w=700&q=85"}
];
let activeCategory="Todos",cart=JSON.parse(localStorage.getItem("sedmaCart")||"{}");
const $=s=>document.querySelector(s), money=n=>n.toLocaleString("es-MX",{style:"currency",currency:"MXN"});
function renderProducts(){
 if(!$("#productGrid"))return;
 const q=$("#productSearch").value.trim().toLowerCase();
 const filtered=products.filter(p=>(activeCategory==="Todos"||p.category===activeCategory)&&(`${p.name} ${p.brand} ${p.category} ${p.desc}`).toLowerCase().includes(q));
 $("#resultCount").textContent=`${filtered.length} ${filtered.length===1?"producto":"productos"}`;
 $("#productGrid").innerHTML=filtered.length?filtered.map(p=>`<article class="product-card"><div class="product-image"><img src="${p.img}" alt="${p.name}" loading="lazy"><span class="product-category">${p.category.toUpperCase()}</span></div><div class="product-info"><span class="product-brand">${p.brand}</span><h3>${p.name}</h3><p>${p.desc}</p><div class="product-bottom"><span class="product-price">${money(p.price)}</span><button class="add-btn" data-add="${p.id}">+ AGREGAR</button></div></div></article>`).join(""):`<div class="no-results">No encontramos productos con esa búsqueda. Intenta con otro término.</div>`;
}
function saveCart(){localStorage.setItem("sedmaCart",JSON.stringify(cart));renderCart()}
function cartProducts(){return Object.entries(cart).map(([id,qty])=>({...products.find(p=>p.id===Number(id)),qty})).filter(p=>p.id)}
function renderCart(){
 const items=cartProducts(),count=items.reduce((s,p)=>s+p.qty,0),subtotal=items.reduce((s,p)=>s+p.price*p.qty,0);
 $("#cartCount").textContent=count;$("#drawerCount").textContent=`(${count})`;$("#cartSubtotal").textContent=money(subtotal);$("#checkoutTotal").textContent=money(subtotal);$("#checkoutBtn").disabled=!count;
 $("#cartItems").innerHTML=items.length?items.map(p=>`<div class="cart-row"><img src="${p.img}" alt=""><div><h4>${p.name}</h4><small>${money(p.price)}</small><div class="qty-controls"><button data-qty="${p.id}" data-delta="-1">−</button><span>${p.qty}</span><button data-qty="${p.id}" data-delta="1">+</button></div></div><button class="remove-item" data-remove="${p.id}" aria-label="Eliminar">×</button></div>`).join(""):`<div class="empty-cart">Tu carrito está vacío.<br><span>Agrega productos para comenzar.</span></div>`;
}
function toast(msg){const t=$("#toast");t.textContent=msg;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),2300)}
function openCart(){ $("#cartDrawer").classList.add("open");$("#drawerBackdrop").classList.add("show");document.body.style.overflow="hidden"}
function closeCart(){ $("#cartDrawer").classList.remove("open");$("#drawerBackdrop").classList.remove("show");document.body.style.overflow=""}
$("#productGrid")?.addEventListener("click",e=>{const b=e.target.closest("[data-add]");if(!b)return;const id=Number(b.dataset.add);cart[id]=(cart[id]||0)+1;saveCart();toast("Producto agregado al carrito")});
$("#cartItems").addEventListener("click",e=>{const q=e.target.closest("[data-qty]"),r=e.target.closest("[data-remove]");if(q){const id=q.dataset.qty;cart[id]=(cart[id]||0)+Number(q.dataset.delta);if(cart[id]<=0)delete cart[id];saveCart()}if(r){delete cart[r.dataset.remove];saveCart()}});
$("#categoryTabs")?.addEventListener("click",e=>{const b=e.target.closest("button[data-category]");if(!b)return;activeCategory=b.dataset.category;document.querySelectorAll("#categoryTabs button").forEach(x=>x.classList.toggle("active",x===b));renderProducts()});
$("#productSearch")?.addEventListener("input",renderProducts);$("#searchBtn")?.addEventListener("click",renderProducts);
$("#openCart").addEventListener("click",openCart);$("#closeCart").addEventListener("click",closeCart);$("#drawerBackdrop").addEventListener("click",closeCart);
$("#checkoutBtn").addEventListener("click",()=>{$("#checkoutBackdrop").classList.add("show")});
$("#closeCheckout").addEventListener("click",()=>$("#checkoutBackdrop").classList.remove("show"));
$("#checkoutBackdrop").addEventListener("click",e=>{if(e.target.id==="checkoutBackdrop")e.currentTarget.classList.remove("show")});
$("#checkoutForm").addEventListener("submit",e=>{e.preventDefault();const data=Object.fromEntries(new FormData(e.target));const order=Math.random().toString(36).slice(2,8).toUpperCase();$("#checkoutBackdrop").classList.remove("show");closeCart();cart={};saveCart();e.target.reset();toast(`Pedido de prueba ${order} generado. ¡Gracias, ${data.name.split(" ")[0]}!`)});
$("#menuToggle").addEventListener("click",()=>$("#mainNav").classList.toggle("open"));
document.querySelectorAll("#mainNav a").forEach(a=>a.addEventListener("click",()=>$("#mainNav").classList.remove("open")));
renderProducts();renderCart();
