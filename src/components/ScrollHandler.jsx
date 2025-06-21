import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollHandler = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Remove '#' from hash to get id
      const id = hash.replace("#", "");
      // Use a small delay to wait for the element to be in DOM
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 0);
    } else {
      // No hash, scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollHandler;
