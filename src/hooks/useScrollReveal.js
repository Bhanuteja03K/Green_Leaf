import { useEffect, useRef } from 'react';

/**
 * useScrollReveal — attaches IntersectionObserver to add/remove .visible class
 * Usage: pass the ref returned here to the DOM element you want to reveal.
 */
export function useScrollReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          // Once revealed, no need to keep observing
          observer.unobserve(el);
        }
      },
      { threshold: options.threshold ?? 0.12, ...options }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}
