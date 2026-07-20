"use client";

import { useEffect, useState } from "react";
import { ArrowUp, ArrowDown } from "lucide-react";

export default function ScrollButton() {
  const [isAtTop, setIsAtTop] = useState(true);

  // Handle scroll position
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > window.innerHeight / 2) {
        setIsAtTop(false);
      } else {
        setIsAtTop(true);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll up or down
  const handleScroll = () => {
    if (isAtTop) {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <button
      onClick={handleScroll}
      className="fixed bottom-[86px] right-[31px] bg-[#00BE5D] text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg hover:bg-[#008C44] hover:scale-110 transition-all duration-300 z-50"
    >
      {isAtTop ? <ArrowDown size={20} /> : <ArrowUp size={20} />}
    </button>
  );
}