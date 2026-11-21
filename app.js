const products = [
 {
    id:1,
    name:"V-MOL Shampoo Desincrustante",
    brand:"VONIXX",
    category:"Limpieza General",
     variants: [
        {
            id: "500ml",
            presentation: "500 ml",
            price: 120
        },
        {
            id: "1.5l",
            presentation: "1.5 L",
            price: 227
        },
        {
            id: "5l",
            presentation: "5 L",
            price: 532
        }
    ],
    desc:"V-MOL es un limpiador automotriz ligeramente alcalino y no agresivo que es ideal para lavar autos, especialmente para eliminar suciedad difícil como barro y aceite.",
    img:"https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?auto=format&fit=crop&w=700&q=85"
},
{
    id:2,
    name:"Citron Shampoo Desengrasante 1.5L",
    brand:"VONIXX",
    category:"Limpieza General",
    price:266,
    desc:"CITRON es un shampoo de alto poder formulado con tensoactivos especiales y solventes naturales extraídos de la cáscara de naranja. Es la solución ideal para lavados pesados, garantizando una limpieza profunda de la pintura automotriz.",
    img:"https://images.unsplash.com/photo-1611599531550-1f3c5e4b6f8e?auto=format&fit=crop&w=700&q=85"
},
{
    id:3,
    name:"Impact Desengrasante Flotante 1.5L",
    brand:"VONIXX",
    category:"Limpieza General",
    price:216,
    desc:"Su fórmula exclusiva promueve una alta eficacia en la eliminación de las manchas producidas por el impacto de los insectos, la grasa y la suciedad. IMPACT es un limpiador universal, respetuoso con el medio ambiente y no corrosivo diseñado para la limpieza dificil de varias superficies.",
    img:"https://images.unsplash.com/photo-1611599531550-1f3c5e4b6f8e?auto=format&fit=crop&w=700&q=85"
},

 
];
let activeCategory="Todos",cart=JSON.parse(localStorage.getItem("sedmaCart")||"{}");
const $=s=>document.querySelector(s), money=n=>n.toLocaleString("es-MX",{style:"currency",currency:"MXN"});

function renderProducts(){
    const q = $("#productSearch").value.trim().toLowerCase();
    const filtered = products.filter(p => {
        return (
            (activeCategory === "Todos" || p.category === activeCategory) &&
            (`${p.name} ${p.brand} ${p.category} ${p.desc}`)
                .toLowerCase()
                .includes(q)
        );
    });
    $("#resultCount").textContent =
        `${filtered.length} productos`;
    $("#productGrid").innerHTML = filtered.map(p => {
        const variants = p.variants || [
            {
                id: "unica",
                presentation: "Presentación única",
                price: p.price
            }
        ];
        return `
        <article class="product-card">
            <div class="product-image">
                <img src="${p.img}" alt="${p.name}">
                <span class="product-category">
                    ${p.category.toUpperCase()}
                </span>
            </div>
            <div class="product-info">
                <span class="product-brand">
                    ${p.brand}
                </span>
                <h3>${p.name}</h3>
                <p>${p.desc}</p>
                <label class="variant-label">
                    PRESENTACIÓN
                </label>
                <select class="variant-select"
                    id="variant-${p.id}">
                    ${variants.map(v => `
                        <option value="${v.id}">
                            ${v.presentation} - ${money(v.price)}
                        </option>
                    `).join("")}
                </select>
                <div class="product-bottom">
                    <span class="product-price"
                        id="price-${p.id}">
                        ${money(variants[0].price)}
                    </span>
                    <button class="add-btn"
                        data-add="${p.id}">
                        + AGREGAR
                    </button>
                </div>
            </div>
        </article>
        `;
    }).join("");
}
$("#productGrid").addEventListener("change", e => {
    if (!e.target.classList.contains("variant-select")) return;
    const productId = Number(
        e.target.id.replace("variant-", "")
    );
    const product = products.find(p => p.id === productId);
    const variants = product.variants || [
        {
            id: "unica",
            presentation: "Presentación única",
            price: product.price
        }
    ];
    const selected = variants.find(
        v => v.id === e.target.value
    );
    $(`#price-${productId}`).textContent =
        money(selected.price);
});
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
$("#productGrid").addEventListener("click", e => {
    const button = e.target.closest("[data-add]");
    if (!button) return;
    const productId = Number(button.dataset.add);
    const product = products.find(
        p => p.id === productId
    );
    const select = $(`#variant-${productId}`);
    const variantId = select.value;
    const key = `${productId}-${variantId}`;
    cart[key] = (cart[key] || 0) + 1;
    saveCart();
    toast("Producto agregado al carrito");
});
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
