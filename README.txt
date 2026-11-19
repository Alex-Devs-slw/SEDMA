SEDMA — Prototipo de sitio web
================================

ARCHIVOS
- index.html: estructura de la página.
- styles.css: diseño adaptable a escritorio, tablet y celular.
- app.js: catálogo, buscador, filtros, carrito y checkout demostrativo.
- assets/logo-sedma.jpg: logotipo proporcionado, recortado para su uso en el sitio.

CÓMO ABRIR
1. Extrae el archivo ZIP.
2. Abre index.html en un navegador actualizado.
3. Se requiere conexión a internet para cargar las fotografías remotas y las fuentes.

FUNCIONES INCLUIDAS
- Navegación entre Inicio, Servicios, Tienda, Nosotros y Contacto.
- Servicio COMO NUEVO con precio de $1,200 MXN y lista de lo incluido.
- Catálogo de ejemplo con búsqueda por texto y filtros por categoría.
- Agregar artículos, cambiar cantidades y eliminar productos del carrito.
- Persistencia del carrito en el navegador mediante localStorage.
- Formulario de compra demostrativo que genera un folio ficticio.

IMPORTANTE
Este es un prototipo visual/funcional, no una tienda real. No procesa pagos, no envía pedidos al negocio ni calcula envíos. Los seis productos, imágenes, precios, datos de contacto y servicios adicionales son ilustrativos. Sustituirlos por información real antes de publicar. El botón de WhatsApp usa un enlace genérico wa.me y debe configurarse con el número oficial.


NUEVA ESTRUCTURA (v2)
=====================
- index.html: inicio, nosotros, resumen de servicios, tienda y contacto.
- servicios.html: página de servicios de detallado, abre con un video que avanza al deslizar.
- scroll-video.js: lógica del video controlado por scroll (solo se carga en servicios.html).
- assets/video/detallado.mp4: AQUÍ VA EL VIDEO (no incluido). Sin él se muestra una foto de respaldo.
- El carrito se comparte entre ambas páginas (localStorage).

PREPARAR EL VIDEO (importante para que avance fluido)
-----------------------------------------------------
Un MP4 normal se traba al "arrastrarlo" con el scroll porque solo tiene un fotograma completo cada varios segundos.
Expórtalo con TODOS los fotogramas clave:

  ffmpeg -i original.mp4 -an -vf "scale=1280:-2,fps=30" -c:v libx264 -g 1 -crf 24 -pix_fmt yuv420p -movflags +faststart assets/video/detallado.mp4

Recomendaciones: duración de 5 a 10 segundos, ancho 1280 px, peso final menor a 15 MB. Por celular conviene un archivo más ligero.
El servidor donde se publique debe permitir solicitudes Range (la mayoría lo hace).

AJUSTES
-------
- Cuánto hay que deslizar para recorrer el video: variable --sv-length en styles.css (clase .scrollvideo).
- Textos que aparecen sobre el video: bloques .sv-caption en servicios.html (data-from / data-to = tramo 0 a 1 del video).
