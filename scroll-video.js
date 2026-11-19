/* SEDMA · Video que avanza con el scroll
   Marcado: <section data-scroll-video> con .sv-stage > video, .sv-caption[data-from][data-to] y .sv-progress > i
   El alto de la sección (variable --sv-length en styles.css) define cuánto hay que deslizar para recorrer todo el video. */
(() => {
  const clamp = (n, a = 0, b = 1) => Math.min(b, Math.max(a, n));
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

  document.querySelectorAll("[data-scroll-video]").forEach(sec => {
    const stage = sec.querySelector(".sv-stage");
    const video = sec.querySelector("video");
    const bar = sec.querySelector(".sv-progress i");
    const caps = [...sec.querySelectorAll(".sv-caption")];

    // Accesibilidad: si la persona pidió menos movimiento, no se enlaza el video al scroll
    if (reduceMotion) { sec.classList.add("sv-static"); return; }

    let duration = 0, target = 0, current = 0, raf = 0;

    // Si el archivo de video no existe, se muestra la foto de respaldo del CSS
    const markMissing = () => sec.classList.add("sv-novideo");
    video.querySelector("source")?.addEventListener("error", markMissing);
    addEventListener("load", () => { if (video.error || video.networkState === 3) markMissing(); });

    // Progreso 0..1 según cuánto se ha recorrido la sección mientras el escenario está fijo
    const progress = () => {
      const top = parseFloat(getComputedStyle(stage).top) || 0;
      const travel = sec.offsetHeight - stage.offsetHeight;
      return travel > 0 ? clamp((top - sec.getBoundingClientRect().top) / travel) : 0;
    };

    // Suavizado: el video persigue al scroll en lugar de saltar
    const draw = () => {
      raf = 0;
      current += (target - current) * 0.15;
      if (Math.abs(target - current) < 0.0004) current = target;
      let pending = current !== target;
      if (duration) {
        const t = current * Math.max(0, duration - 0.1);
        if (!video.seeking && Math.abs(video.currentTime - t) > 0.01) video.currentTime = t;
        pending = pending || Math.abs(video.currentTime - t) > 0.06;
      }
      if (pending) raf = requestAnimationFrame(draw);
    };
    const kick = () => { if (!raf) raf = requestAnimationFrame(draw); };

    const onMeta = () => {
      duration = video.duration || 0;
      // iOS/Safari no pinta fotogramas hasta que el video se reproduce una vez
      video.play().then(() => video.pause()).catch(() => {});
      kick();
    };
    video.readyState >= 1 ? onMeta() : video.addEventListener("loadedmetadata", onMeta, { once: true });

    const onScroll = () => {
      target = progress();
      if (bar) bar.style.width = (target * 100).toFixed(1) + "%";
      caps.forEach(c => c.classList.toggle("on", target >= +c.dataset.from && target < +c.dataset.to));
      sec.classList.toggle("sv-started", target > 0.02);
      kick();
    };
    addEventListener("scroll", onScroll, { passive: true });
    addEventListener("resize", onScroll);
    onScroll();
  });
})();
