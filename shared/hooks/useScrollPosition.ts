import { useState, useEffect } from "react";

export const useScrollPosition = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled((prev) => {
        if (!prev && offset > 100) return true;  // включаем после 50px
        if (prev && offset < 30) return false;  // выключаем после 30px
        return prev;
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrolled;
}