import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHashElement = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 0); // delay ensures route has changed
      }
    }
  }, [hash, pathname]);

  return null;
};

export default ScrollToHashElement;
