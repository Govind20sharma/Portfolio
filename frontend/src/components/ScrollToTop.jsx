// src/components/ScrollToTop.jsx
import React, { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="btn btn-primary position-fixed bottom-0 end-0 m-4"
        style={{ zIndex: 999 }}
        aria-label="Scroll to top"
      >
        ↑
      </button>
    )
  );
};

export default ScrollToTop;
