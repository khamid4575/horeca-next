"use client";

import Link from "next/link";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { useEffect, useState } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > window.innerHeight - 50); // Adjust the condition as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`py-5 z-50 ${
        isScrolled
          ? "bg-gray-50 sticky top-0 text-gray-900"
          : "bg-transparent text-white"
      }`}
    >
      <div className="flex justify-between items-center 2xl:w-[1700px] lg:w-[1200px] w-full mx-auto lg:px-0 px-5">
        <Link
          href={"#"}
          className="uppercase 2xl:text-3xl lg:text-2xl text-xl font-extrabold"
        >
          Supply partners
        </Link>
        <div className="hidden lg:flex">
          <Nav isScrolled={isScrolled} />
        </div>
        <div className="lg:hidden">
          <MobileNav isScrolled={isScrolled} />
        </div>
      </div>
    </header>
  );
};

export default Header;
