/**
 * DriveCraft Carousel
 * - Arrow buttons, swipe/drag, keyboard navigation
 * - "See More" opens per-slide detail; "View All" closes it
 * - Responsive: recalculates slide width on resize
 */
(() => {
  document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector(".carousel");
    if (carousel) setupCarousel(carousel);
  });

  function setupCarousel(root) {
    const list = root.querySelector(".list");
    const items = Array.from(root.querySelectorAll(".item"));
    const prevBtn = root.querySelector("#prev");
    const nextBtn = root.querySelector("#next");
    const backBtn = root.querySelector("#back");

    if (!list || !items.length) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const animMs = prefersReducedMotion ? 0 : 420;

    let index = 0;
    let slideW = root.getBoundingClientRect().width;

    // Initialize ARIA for slides
    items.forEach((el, i) => {
      el.setAttribute("role", "group");
      el.setAttribute("aria-roledescription", "slide");
      el.setAttribute("aria-label", `Slide ${i + 1} of ${items.length}`);
    });

    // Ensure transition is applied
    list.style.willChange = "transform";
    applyTransition();

    function applyTransition() {
      list.style.transition = animMs ? `transform ${animMs}ms ease` : "none";
    }

    function clamp(n, min, max) {
      return Math.max(min, Math.min(max, n));
    }

    function updateButtons() {
      if (prevBtn) prevBtn.disabled = index === 0;
      if (nextBtn) nextBtn.disabled = index === items.length - 1;
    }

    function updateAria() {
      items.forEach((el, i) => {
        const active = i === index;
        el.setAttribute("aria-hidden", String(!active));
        el.tabIndex = active ? 0 : -1;
      });
    }

    function goto(i, { keepDetail = false } = {}) {
      index = clamp(i, 0, items.length - 1);
      // Snap transform
      list.style.transform = `translate3d(${-index * slideW}px, 0, 0)`;
      if (!keepDetail) items.forEach((el) => el.classList.remove("active"));
      updateButtons();
      updateAria();
    }

    function recalc() {
      slideW = root.getBoundingClientRect().width;
      // Reposition without animating
      const prev = list.style.transition;
      list.style.transition = "none";
      list.style.transform = `translate3d(${-index * slideW}px, 0, 0)`;
      // Force reflow, then restore transition
      void list.offsetHeight;
      list.style.transition = prev || (animMs ? `transform ${animMs}ms ease` : "none");
    }

    // Button controls
    prevBtn?.addEventListener("click", () => goto(index - 1));
    nextBtn?.addEventListener("click", () => goto(index + 1));

    backBtn?.addEventListener("click", () => {
      items.forEach((el) => el.classList.remove("active"));
      root.focus?.();
    });

    // "See More" opens the detail panel on that slide
    root.querySelectorAll(".seeMore").forEach((btn, i) => {
      btn.addEventListener("click", () => {
        items.forEach((el) => el.classList.remove("active"));
        goto(i, { keepDetail: true });
        items[i].classList.add("active");
      });
    });

    // Keyboard navigation
    root.addEventListener("keydown", (e) => {
      // Allow navigation when the carousel or a child has focus
      switch (e.key) {
        case "ArrowRight":
          e.preventDefault();
          goto(index + 1);
          break;
        case "ArrowLeft":
          e.preventDefault();
          goto(index - 1);
          break;
        case "Escape":
          items.forEach((el) => el.classList.remove("active"));
          break;
      }
    });

    // Pointer drag/swipe navigation
    let isPtr = false;
    let startX = 0;
    let startTx = 0;
    let currentTx = 0;

    function onPointerDown(e) {
      if (e.pointerType === "mouse" && e.button !== 0) return;
      isPtr = true;
      startX = e.clientX;
      startTx = -index * slideW;
      currentTx = startTx;
      list.setPointerCapture?.(e.pointerId);
      list.style.transition = "none";
    }

    function onPointerMove(e) {
      if (!isPtr) return;
      const dx = e.clientX - startX;
      currentTx = startTx + dx;
      list.style.transform = `translate3d(${currentTx}px, 0, 0)`;
    }

    function onPointerUp(e) {
      if (!isPtr) return;
      isPtr = false;
      applyTransition();
      const dx = e.clientX - startX;
      const threshold = slideW * 0.18;

      if (dx < -threshold && index < items.length - 1) {
        goto(index + 1);
      } else if (dx > threshold && index > 0) {
        goto(index - 1);
      } else {
        goto(index); // snap back
      }
    }

    list.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    window.addEventListener("pointercancel", onPointerUp);

    // Resize handling
    window.addEventListener("resize", recalc);
    if (typeof ResizeObserver !== "undefined") {
      new ResizeObserver(recalc).observe(root);
    }

    // Init
    updateButtons();
    updateAria();
    goto(0);
  }
})();