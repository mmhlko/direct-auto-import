import { useState, useEffect } from "react";

export const useScrollPosition = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      const shouldBeScrolled = window.scrollY > 100;
      setScrolled((prev) => (prev !== shouldBeScrolled ? shouldBeScrolled : prev));
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrolled;
};