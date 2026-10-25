let activeCleanup: (() => void) | undefined;

/** Match the original ghost scrollbar: show while scrolling, then fade idle. */
export function setupScrollbars(): () => void {
  if (activeCleanup) return activeCleanup;
  const timers = new Map<HTMLElement, ReturnType<typeof setTimeout>>();
  const onScroll = (event: Event) => {
    const target = event.target === document
      ? document.scrollingElement
      : event.target;
    if (!(target instanceof HTMLElement)) return;
    clearTimeout(timers.get(target));
    target.classList.add("is-scrolling");
    timers.set(target, setTimeout(() => {
      target.classList.remove("is-scrolling");
      timers.delete(target);
    }, 650));
  };
  document.addEventListener("scroll", onScroll, { capture: true, passive: true });
  const cleanup = () => {
    document.removeEventListener("scroll", onScroll, true);
    timers.forEach((timer, element) => {
      clearTimeout(timer);
      element.classList.remove("is-scrolling");
    });
    timers.clear();
    if (activeCleanup === cleanup) activeCleanup = undefined;
  };
  activeCleanup = cleanup;
  return cleanup;
}
