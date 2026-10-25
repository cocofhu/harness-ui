import type { ObjectDirective } from "vue";

export const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const revealObservers = new WeakMap<HTMLElement, IntersectionObserver>();
export const vReveal: ObjectDirective<HTMLElement> = {
  beforeMount(el) {
    el.dataset.revealed = prefersReducedMotion() ? "true" : "false";
  },
  mounted(el) {
    if (prefersReducedMotion() || !("IntersectionObserver" in window)) {
      el.dataset.revealed = "true";
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          el.dataset.revealed = "true";
          observer.disconnect();
        }
      },
      { threshold: 0.06, rootMargin: "0px 0px 45px 0px" },
    );
    observer.observe(el);
    revealObservers.set(el, observer);
  },
  beforeUnmount(el) {
    revealObservers.get(el)?.disconnect();
    revealObservers.delete(el);
  },
};

/** Keep departing grid cards at their measured size while their siblings flow into place. */
export function freezeLeavingCard(element: Element) {
  const el = element as HTMLElement;
  const { width, height } = el.getBoundingClientRect();
  el.style.width = `${width}px`;
  el.style.height = `${height}px`;
  el.style.left = `${el.offsetLeft}px`;
  el.style.top = `${el.offsetTop}px`;
  el.inert = true;
}
