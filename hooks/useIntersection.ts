import { useState, useEffect, MutableRefObject } from "react";

export const useIntersection = (
  element: MutableRefObject<HTMLDivElement | null>,
  rootMargin: string
) => {
  const [isVisible, setState] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setState(entry.isIntersecting);
      },
      { rootMargin }
    );

    const el = element?.current;
    if (el) {
      observer.observe(el);

      return () => observer.unobserve(el);
    }
  }, [element, rootMargin]);

  return isVisible;
};
