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
            id: "1.5L",
            presentation: "1.5 L",
            price: 227
        },
        {
            id: "5L",
            presentation: "5 L",
            price: 532
        }
    ],
    desc:"V-MOL es un limpiador automotriz ligeramente alcalino y no agresivo que es ideal para lavar autos, especialmente para eliminar suciedad difícil como barro y aceite.",
    img:"https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?auto=format&fit=crop&w=700&q=85"
},
{
    id:2,
    name:"CITRON Shampoo Desengrasante",
    brand:"VONIXX",
    category:"Limpieza General",
    variants: [
        {
            id: "1.5L",
            presentation: "1.5 L",
            price: 266
        },
    ],
    desc:"CITRON es un shampoo de alto poder formulado con tensoactivos especiales y solventes naturales extraídos de la cáscara de naranja. Es la solución ideal para lavados pesados, garantizando una limpieza profunda de la pintura automotriz.",
    img:"https://images.unsplash.com/photo-1611599531550-1f3c5e4b6f8e?auto=format&fit=crop&w=700&q=85"
},
{
    id:3,
    name:"IMPACT Desengrasante Flotante",
    brand:"VONIXX",
    category:"Limpieza General",
    price:216,
    variants: [
        {
            id: "1.5L",
            presentation: "1.5 L",
            price: 216
        },
    ],
    desc:"Su fórmula exclusiva promueve una alta eficacia en la eliminación de las manchas producidas por el impacto de los insectos, la grasa y la suciedad. IMPACT es un limpiador universal, respetuoso con el medio ambiente y no corrosivo diseñado para la limpieza dificil de varias superficies.",
    img:"https://images.unsplash.com/photo-1611599531550-1f3c5e4b6f8e?auto=format&fit=crop&w=700&q=85"
},
{
    id:4,
    name:"V-FLOC Shampoo Concentrado",
    brand:"VONIXX",
    category:"Limpieza General",
    variants: [
        {
            id: "500ml",
            presentation: "500 ml",
            price: 140
        },
        {
            id: "1.5L",
            presentation: "1.5 L",
            price: 308
        },
        {
            id: "5l",
            presentation: "5 L",
            price: 697
        }
    ],
    desc:"V-FLOC es un shampoo de pH neutro diseñado para un lavado suave y de alta eficiencia. Su fórmula avanzada con acondicionadores especiales ofrece un alto grado de lubricación, reduciendo significativamente la fricción y el riesgo de micro-rayas durante el proceso de limpieza.",
    img:"https://images.unsplash.com/photo-1611599531550-1f3c5e4b6f8e?auto=format&fit=crop&w=700&q=85"
},
{
    id:5,
    name:"HYDROX WASH",
    brand:"VONIXX",
    category:"Limpieza General",
    variants: [
        {
            id: "500ml",
            presentation: "500 ml",
            price: 468
        },
    ],
    desc:"Vonixx Hydrox Wash es un innovador shampoo automotriz que combina limpieza profunda y protección cerámica en un solo paso. Su fórmula avanzada con Si02 simplifica el mantenimiento del vehículo, proporcionando un acabado de alto nivel con una durabilidad de hasta 4 meses.",
    img:"https://images.unsplash.com/photo-1611599531550-1f3c5e4b6f8e?auto=format&fit=crop&w=700&q=85"
},
{
    id:6,
    name:"V-ECO FAST",
    brand:"VONIXX",
    category:"Limpieza General",
    variants: [
        {
            id: "500ml",
            presentation: "500 ml",
            price: 148
        },
    ],
    desc:"V-ECO FAST es un producto para el lavado ecológico de vehículos, biodegradable y respetuoso con el medio ambiente. Contiene en Su composición tensioactivos, solventes ecológicos y cera de carnauba que actúan juntos para una limpieza más eficaz y con menos posibilidades de riesgos en la pintura. V-ECO FAST promueve el brillo y la protección ligera.",
    img:"https://images.unsplash.com/photo-1611599531550-1f3c5e4b6f8e?auto=format&fit=crop&w=700&q=85"
},
{
    id:7,
    name:"V-ECO PRO",
    brand:"VONIXX",
    category:"Limpieza General",
    variants: [
        {
            id: "1.5L",
            presentation: "1.5 L",
            price: 412
        },
    ],
    desc:"V-ECO PRO es una solución avanzada de limpieza en seco, ecológica y biodegradable. Su fórmula combina tensioactivos, solventes ecológicos y cera de carnauba, permitiendo una limpieza profunda y segura que minimiza el riesgo de rayaduras, mientras aporta un brillo renovado y protección duradera.",
    img:"https://images.unsplash.com/photo-1611599531550-1f3c5e4b6f8e?auto=format&fit=crop&w=700&q=85"
},
{
    id:8,
    name:"ALUMAX",
    brand:"VINTEX",
    category:"Limpieza General",
    variants: [
        {
            id: "20L",
            presentation: "20L",
            price: 2143
        },
    ],
    desc:"Alumax es un desincrustante de carácter ácido, desarrollado para la limpieza de llantas, chasis, motores, compartimientos de aluminio, carrocerías de acero inoxidable y madera.",
    img:"https://images.unsplash.com/photo-1611599531550-1f3c5e4b6f8e?auto=format&fit=crop&w=700&q=85"
},
{
    id:9,
    name:"REMOVEX",
    brand:"VINTEX",
    category:"Limpieza General",
    variants: [
        {
            id: "20L",
            presentation: "20L",
            price: 1722
        },
    ],
    desc:"Alumax es un desincrustante de carácter ácido, desarrollado para la limpieza de llantas, chasis, motores, compartimientos de aluminio, carrocerías de acero inoxidable y madera.",
    img:"https://images.unsplash.com/photo-1611599531550-1f3c5e4b6f8e?auto=format&fit=crop&w=700&q=85"
},
{
    id:10,
    name:"IZER Removedor de Óxidos",
    brand:"VONIXX",
    category:"Limpieza General",
    variants: [
        {
            id: "500ml",
            presentation: "500 ml",
            price: 202
        },
        {
            id: "1.5L",
            presentation: "1.5 L",
            price: 401
        },
    ],
    desc:"IZER es un potente descontaminante de pH neutro diseñado para  eliminar la oxidación de materiales ferrosos en diversas partes del vehículo. Su fórmula actúa profundamente eliminando el hollín de freno en las ruedas y la contaminación ferrosa en la pintura y otras superficies externas.",
    img:"https://images.unsplash.com/photo-1611599531550-1f3c5e4b6f8e?auto=format&fit=crop&w=700&q=85"
},
{
    id:11,
    name:"REZET Revelador de Hologramas y Descontaminante de Pintura500ml",
    brand:"ZACS",
    category:"Limpieza General",
    price: 198,
    desc:"Rezet es un limpiador de alto rendimiento para uso posterior al pulido. Su función es eliminar aceites y residuos de compuestos para revelar el estado real de la superficie (hologramas e imperfecciones). ",
    img:"https://images.unsplash.com/photo-1611599531550-1f3c5e4b6f8e?auto=format&fit=crop&w=700&q=85"
},
{
    id:12,
    name:"STRIKE Removedor de Alquitrán y Adhesivos",
    brand:"VONIXX",
    category:"Limpieza General",
    variants: [
        {
            id: "500ml",
            presentation: "500 ml",
            price: 335
        },
        {
            id: "1.5L",
            presentation: "1.5 L",
            price: 743
        },
    ],
    desc:"STRIKE es un producto de fórmula equilibrada diseñado específicamente para la eliminación de contaminantes difíciles. Su composición permite una limpieza segura y eficaz sin dañar las superficies. ",
    img:"https://images.unsplash.com/photo-1611599531550-1f3c5e4b6f8e?auto=format&fit=crop&w=700&q=85"
},
{
    id:13,
    name:"VEXUS Ruedas y Motores 500ml",
    brand:"VONIXX",
    category:"Limpieza General",
    variants: [
        {
            id: "500ml",
            presentation: "500 ml",
            price: 140
        },
    ],
    desc:"VEXUS es un limpiador de alto rendimiento, desarrollado especialmente para la limpieza de ruedas y motores. EI producto elimina la suciedad sin dañar las ruedas y las piezas del motor, ya sea plástico, pintura, goma o metal.",
    img:"https://images.unsplash.com/photo-1611599531550-1f3c5e4b6f8e?auto=format&fit=crop&w=700&q=85"
},
{
    id:14,
    name:"FLEXUS Limpiador y Acondicionador",
    brand:"VONIXX",
    category:"Limpieza General",
    variants: [
        {
            id: "500ml",
            presentation: "500 ml",
            price: 264
        },
    ],
    desc:"Limpiador y acondicionador 2 en 1 para plásticos interiores que limpia, protege y renueva en una sola etapa. Con Si02 en su fórmula, ofrece un acabado seco al tacto, mantiene la apariencia original y garantiza protección hasta por 3 meses.",
    img:"https://images.unsplash.com/photo-1611599531550-1f3c5e4b6f8e?auto=format&fit=crop&w=700&q=85"
},
{
    id:15,
    name:"FLEXUS Limpiador y Acondicionador",
    brand:"VONIXX",
    category:"Limpieza General",
    variants: [
        {
            id: "500ml",
            presentation: "500 ml",
            price: 264
        },
    ],
    desc:"Limpiador y acondicionador 2 en 1 para plásticos interiores que limpia, protege y renueva en una sola etapa. Con Si02 en su fórmula, ofrece un acabado seco al tacto, mantiene la apariencia original y garantiza protección hasta por 3 meses.",
    img:"https://images.unsplash.com/photo-1611599531550-1f3c5e4b6f8e?auto=format&fit=crop&w=700&q=85"
},
{
    id:16,
    name:"SINTRA Pro",
    brand:"VONIXX",
    category:"Limpieza General",
    variants: [
        {
            id: "500ml",
            presentation: "500 ml",
            price: 265
        },
        {
            id: "1.5L",
            presentation: "1.5L",
            price: 510
        },
    ],
    desc:"SINTRA PRO es un multi limpiador, bactericida y germicida de pH alcalino y ultra concentrado, indicado para la limpieza de paneles, laterales y esquinas de puertas, encimeras de Cuero, alfombras y tapicería. Promueve un alto poder de eliminación de manchas de grasa y diversas suciedades.",
    img:"https://images.unsplash.com/photo-1611599531550-1f3c5e4b6f8e?auto=format&fit=crop&w=700&q=85"
},
{
    id:17,
    name:"EXTRACTUS",
    brand:"VONIXX",
    category:"Extracción",
    variants: [
        {
            id: "500ml",
            presentation: "500 ml",
            price: 190
        },
        {
            id: "1.5L",
            presentation: "1.5L",
            price: 400
        },
    ],
    desc:"Extractus es un limpiador ultra concentrado de alto rendimiento y bajo contenido de espuma, desarrollado para la limpieza profesional de tapicería y alfombras.",
    img:"https://images.unsplash.com/photo-1611599531550-1f3c5e4b6f8e?auto=format&fit=crop&w=700&q=85"
},
{
    id:18,
    name:"BACTRAN",
    brand:"VONIXX",
    category:"Extracción",
    variants: [
        {
            id: "500ml",
            presentation: "500 ml",
            price: 200
        },
        {
            id: "1.5L",
            presentation: "1.5L",
            price: 410
        },
    ],
    desc:"Bactran es un limpiador bactericida y fungicida 7 en 1 ultra concentrado para la limpieza profesional de tapicerías y tejidos. Su fórmula de pH ácido elimina eficazmente manchas difíciles siendo ideal para su uso con máquinas extractoras.",
    img:"https://images.unsplash.com/photo-1611599531550-1f3c5e4b6f8e?auto=format&fit=crop&w=700&q=85"
},
{
    id:19,
    name:"SANITIZANTE",
    brand:"VONIXX",
    category:"Extracción",
    variants: [
        {
            id: "500ml",
            presentation: "500 ml",
            price: 210
        },
        {
            id: "1.5L",
            presentation: "1.5L",
            price: 427
        },
    ],
    desc:"EI Sanitizante Vonixx es un producto 4 en 1, desarrollado exclusivamente para la última fase de limpieza de tapicería y alfombras. Su fórmula elimina gérmenes, bacterias y deja un residuo activo con efecto bacteriostático, reduciendo las probabilidades de crecimiento germinal hasta por 3 meses.",
    img:"https://images.unsplash.com/photo-1611599531550-1f3c5e4b6f8e?auto=format&fit=crop&w=700&q=85"
},
{
    id:20,
    name:"DELET",
    brand:"VONIXX",
    category:"Neumáticos",
    variants: [
        {
            id: "500ml",
            presentation: "500 ml",
            price: 190
        },
        {
            id: "5L",
            presentation: "5L",
            price: 538
        },
    ],
    desc:"DELET es un limpiador de alto rendimiento formulado exclusivamente para eliminar la suciedad y la grasa de los neumáticos y las piezas de goma, devolviendo un color original limpio sin aspecto grisáceo. Ayudará a mejorar el rendimiento de los productos acondicionadores de neumáticos.",
    img:"https://images.unsplash.com/photo-1611599531550-1f3c5e4b6f8e?auto=format&fit=crop&w=700&q=85"
},
{
    id:21,
    name:"REVOX",
    brand:"VONIXX",
    category:"Neumáticos",
    variants: [
        {
            id: "500ml",
            presentation: "500 ml",
            price: 236
        },
    ],
    desc:"REVOX es un sellador de neumáticos sintético, formulado para proteger y renovar su aspecto, además de un acabado satinado.  REVOX es extremadamente resistente al barro y a la lluvia, dejando el neumático limpio durante más tiempo.",
    img:"https://images.unsplash.com/photo-1611599531550-1f3c5e4b6f8e?auto=format&fit=crop&w=700&q=85"
},
{
    id:22,
    name:"REXER",
    brand:"VONIXX",
    category:"Neumáticos",
    variants: [
        {
            id: "500ml",
            presentation: "500 ml",
            price: 316
        },
    ],
    desc:"REXER es un restaurador de neumáticos pigmentado de alta durabilidad diseñado para ofrecer un acabado impecable y duradero. Su fórmula avanzada permite obtener resultados profesionales en un solo paso.",
    img:"https://images.unsplash.com/photo-1611599531550-1f3c5e4b6f8e?auto=format&fit=crop&w=700&q=85"
},
{
    id:23,
    name:"SHINY",
    brand:"VONIXX",
    category:"Neumáticos",
    variants: [
        {
            id: "500ml",
            presentation: "500 ml",
            price: 306
        },
    ],
    desc:"SHINY es un producto diseñado para renovar y proteger los neumáticos, proporcionando un brillo intenso y duradero. Su fórmula de alta resistencia mantiene un aspecto impecable incluso en condiciones adversas. EI producto no sale al entrar en contacto con agua, y puede durar hasta 60 días manteniendo la apariencia de brillo húmedo.",
    img:"https://images.unsplash.com/photo-1611599531550-1f3c5e4b6f8e?auto=format&fit=crop&w=700&q=85"
},
{
    id:24,
    name:"OPTY",
    brand:"VONIXX",
    category:"Vidrios",
    variants: [
        {
            id: "24Oml",
            presentation: "240 ml",
            price: 600
        },
    ],
    desc:"OPTY es un compuesto de alto rendimiento exclusivamente para el tratamiento de superficies vítrea. Su fórmula especializada permite restaurar la claridad y transparencia del cristal con máxima eficiencia.",
    img:"https://images.unsplash.com/photo-1611599531550-1f3c5e4b6f8e?auto=format&fit=crop&w=700&q=85"
},
{
    id:25,
    name:"GLAZY",
    brand:"VONIXX",
    category:"Vidrios",
    variants: [
        {
            id: "500ml",
            presentation: "500 ml",
            price: 183
        },
        {
            id: "5L",
            presentation: "5L",
            price: 688
        },
    ],
    desc:"Desarrollado para vidrio en general que limpia, protege, acondiciona y actúa como reductor d riesgos. Reduce las posibilidades de rayones causados por los limpiaparabrisas.",
    img:"https://images.unsplash.com/photo-1611599531550-1f3c5e4b6f8e?auto=format&fit=crop&w=700&q=85"
},
{
    id:26,
    name:"PRIZM",
    brand:"VONIXX",
    category:"Vidrios",
    variants: [
        {
            id: "500ml",
            presentation: "500 ml",
            price: 176
        },
    ],
    desc:"PRIZM restaura la transparencia en vidrios de automóviles y remueve marcas de agua incrustada, impurezas y contaminantes que no salen con la limpieza convencional. EI producto actúa químicamente contra manchas y suciedad, removiéndolas fácilmente del parabrisas, vidrios laterales y traseros",
    img:"https://images.unsplash.com/photo-1611599531550-1f3c5e4b6f8e?auto=format&fit=crop&w=700&q=85"
},
{
    id:27,
    name:"FOCUS",
    brand:"VONIXX",
    category:"Vidrios",
    variants: [
        {
            id: "240ml",
            presentation: "240 ml",
            price: 241
        },
    ],
    desc:"FOCUS es un potente eliminador de marcas de agua para vidrios y espejos. EI producto elimina eficazmente las marcas de agua de vidrios de automóviles, mamparas de ducha, espejos y cualquier tipo de vidrio, sin riesgo de dejar manchas.",
    img:"https://images.unsplash.com/photo-1611599531550-1f3c5e4b6f8e?auto=format&fit=crop&w=700&q=85"
},
{
    id:28,
    name:"VERSE",
    brand:"VONIXX",
    category:"Plásticos",
    variants: [
        {
            id: "500ml",
            presentation: "500 ml",
            price: 373
        },
    ],
    desc:"VERSE es un renovador y acondicionador base agua diseñado para proteger una amplia variedad de superficies contra los daños causados por los rayos IJV. Su fórmula versátil es ideal tanto para el cuidado estético como para el mantenimiento mecánico.",
    img:"https://images.unsplash.com/photo-1611599531550-1f3c5e4b6f8e?auto=format&fit=crop&w=700&q=85"
},
{
    id:29,
    name:"TRYON",
    brand:"VONIXX",
    category:"Plásticos",
    variants: [
        {
            id: "500ml",
            presentation: "500 ml",
            price: 260
        },
    ],
    desc:"Tryon es un acondicionador de plásticos 3 en 1, desarrollado para restaurar plásticos y gomas internos y externos. EI producto es a base de agua y contiene Si02 en su fórmula, 10 que proporciona una gran durabilidad. Protege los plásticos internos hasta durante 12 meses, los plásticos exteriores hasta 3 meses y los gomas hasta 6 meses. EI producto ofrece renovación y repelencia al agua, manteniendo la superficie protegida.",
    img:"https://images.unsplash.com/photo-1611599531550-1f3c5e4b6f8e?auto=format&fit=crop&w=700&q=85"
},
{
    id:30,
    name:"RESTAURAX AEROSOL",
    brand:"VONIXX",
    category:"Plásticos",
    variants: [
        {
            id: "400ml",
            presentation: "400 ml",
            price: 241
        },
    ],
    desc:"RESTAURAX renueva y restaura superficies de plástico como parachoques, paneles y laterales de las puertas. Su fórmula contiene polímeros especiales que también protegen las partes contra las acciones del tiempo, evitando la degradación temprana del material.",
    img:"https://images.unsplash.com/photo-1611599531550-1f3c5e4b6f8e?auto=format&fit=crop&w=700&q=85"
},
{
    id:31,
    name:"RESTAURAX",
    brand:"VONIXX",
    category:"Plásticos",
    variants: [
        {
            id: "500ml",
            presentation: "500 ml",
            price: 349
        },
    ],
    desc:"RESTAURAX renueva y restaura superficies de plástico como parachoques, paneles y laterales de las puertas. Su fórmula contiene polímeros especiales que también protegen las partes contra las acciones del tiempo, evitando la degradación temprana del material.",
    img:"https://images.unsplash.com/photo-1611599531550-1f3c5e4b6f8e?auto=format&fit=crop&w=700&q=85"
},
{
    id:32,
    name:"INTENSE",
    brand:"VONIXX",
    category:"Plásticos",
    variants: [
        {
            id: "500ml",
            presentation: "500 ml",
            price: 191
        },
    ],
    desc:"INTENSE es un renovador de plástico con protección UV, cuya fórmula equilibrada promueve el acabado natural y el tacto seco, con una durabilidad de 6 meses. EI producto debe utilizarse específicamente en el interior del coche, en superficies como el vinilo y los plásticos en general.",
    img:"https://images.unsplash.com/photo-1611599531550-1f3c5e4b6f8e?auto=format&fit=crop&w=700&q=85"
},
{
    id:33,
    name:"HIGICOURO",
    brand:"VONIXX",
    category:"Piel",
    variants: [
        {
            id: "500ml",
            presentation: "500 ml",
            price: 153
        },
    ],
    desc:"HIGICOURO es un producto desarrollado para la limpieza segura de superficies de piel. Su fórmula permite eliminar impurezas con extrema facilidad, garantizando el cuidado del material sin causar daños. Limpia con seguridad asientos y otras superficies, renueva impurezas con extrema facilidad, sin agredir el material y renovando su aspecto.",
    img:"https://images.unsplash.com/photo-1611599531550-1f3c5e4b6f8e?auto=format&fit=crop&w=700&q=85"
},
{
    id:34,
    name:"HIDRACOURO",
    brand:"VONIXX",
    category:"Piel",
    variants: [
        {
            id: "500ml",
            presentation: "500 ml",
            price: 239
        },
    ],
    desc:"HIDRACOURO es una solución especializada para hidratar y proteger asientos de piel. Su fórmula avanzada ayuda a conservar la flexibilidad y el acabado natural de la piel, prolongando su vida útil. Su fórmula en base de lanolina evita el resecamiento del material, manteniéndolo con aspecto a nuevo",
    img:"https://images.unsplash.com/photo-1611599531550-1f3c5e4b6f8e?auto=format&fit=crop&w=700&q=85"
},

{
    id:29,
    name:"",
    brand:"VONIXX",
    category:"Piel",
    variants: [
        {
            id: "500ml",
            presentation: "500 ml",
            price: 1
        },
        {
            id: "5L",
            presentation: "5L",
            price: 1
        },
    ],
    desc:"",
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
function cartProducts() {
    return Object.entries(cart).map(([key, qty]) => {
        const [productId, variantId] = key.split("-");
        const product = products.find(
            p => p.id === Number(productId)
        );
        if (!product) return null;
        const variants = product.variants || [{
            id: "unica",
            presentation: "Presentación única",
            price: product.price
        }];
        const variant = variants.find(
            v => v.id === variantId
        );
        if (!variant) return null;
        return {
            ...product,
            variantId,
            presentation: variant.presentation,
            price: variant.price,
            qty,
            cartKey: key
        };
    }).filter(Boolean);
}
function renderCart() {
    const items = cartProducts();
    const count = items.reduce(
        (s, p) => s + p.qty, 0
    );
    const subtotal = items.reduce(
        (s, p) => s + p.price * p.qty, 0
    );
    $("#cartCount").textContent = count;
    $("#drawerCount").textContent = `(${count})`;
    $("#cartSubtotal").textContent = money(subtotal);
    $("#checkoutTotal").textContent = money(subtotal);
    $("#checkoutBtn").disabled = !count;
    $("#cartItems").innerHTML = items.length
        ? items.map(p => `
            <div class="cart-row">
                <img src="${p.img}" alt="${p.name}">
                <div>
                    <h4>${p.name}</h4>
                    <small>
                        ${p.presentation}
                    </small>
                    <small>
                        ${money(p.price)}
                    </small>
                    <div class="qty-controls">
                        <button
                            data-qty="${p.cartKey}"
                            data-delta="-1">
                            −
                        </button>
                        <span>${p.qty}</span>
                        <button
                            data-qty="${p.cartKey}"
                            data-delta="1">
                            +
                        </button>
                    </div>
                </div>
                <button
                    class="remove-item"
                    data-remove="${p.cartKey}"
                    aria-label="Eliminar">
                    ×
                </button>
            </div>
        `).join("")
        : `
            <div class="empty-cart">
                Tu carrito está vacío.<br>
                <span>Agrega productos para comenzar.</span>
            </div>
        `;
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
$("#cartItems").addEventListener("click", e => {
    const quantityButton = e.target.closest("[data-qty]");
    const removeButton = e.target.closest("[data-remove]");
    if (quantityButton) {
        const key = quantityButton.dataset.qty;
        cart[key] = (cart[key] || 0) +
            Number(quantityButton.dataset.delta);
        if (cart[key] <= 0) {
            delete cart[key];
        }
        saveCart();
    }
    if (removeButton) {
        const key = removeButton.dataset.remove;
        delete cart[key];
        saveCart();
    }
});
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
