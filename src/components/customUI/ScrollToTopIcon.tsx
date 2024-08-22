"use client";

import { useEffect, useState } from "react";

const ScrollToTopIcon = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsVisible(scrollTop > window.innerHeight - 50); // Adjust the condition as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {isVisible && (
        <div
          className="fixed lg:bottom-10 bottom-5 flex justify-center items-center lg:right-10 right-5 lg:p-1.5 p-1 bg-gray-200 text-white rounded-full cursor-pointer"
          onClick={handleClick}
        >
          <i className="bx bx-chevron-up text-5xl text-gray-500"></i>
          <img src="/icons/chevronUp.svg" alt="Up" />
        </div>
      )}
    </div>
  );
};

export default ScrollToTopIcon;
