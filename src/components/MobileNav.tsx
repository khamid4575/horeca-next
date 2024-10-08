"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { useState } from "react";
import LanguageSelector from "./customUI/LanguageSelector";

const icons = [
  {
    href: "https://www.linkedin.com/",
    IconComponent: "/icons/facebook.svg",
    ariaLabel: "LinkedIn",
  },
  {
    href: "https://www.facebook.com/",
    IconComponent: "/icons/instagram.svg",
    ariaLabel: "Facebook",
  },
  {
    href: "https://www.instagram.com/",
    IconComponent: "/icons/linkedin.svg",
    ariaLabel: "Instagram",
  },
];

const MobileNav = ({ isScrolled }: any) => {
  const t = useTranslations("navbar");

  const links = [
    { name: t("hotels"), path: "hotels" },
    { name: t("restaurants"), path: "restaurants" },
    { name: t("services"), path: "services" },
    { name: t("shipping"), path: "shipping" },
    { name: t("contacts"), path: "contacts" },
  ];
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSidebarClose = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="lg:hidden flex items-center justify-end z-30">
      {/* <i
        className={`bx bx-menu text-3xl w-full ${
          isScrolled ? "text-gray-900" : "text-white"
        }`}
        
      ></i> */}
      <img src={isScrolled ? "/icons/menuBlack.svg": "/icons/menuWhite.svg"} alt="menu" className="w-8 h-8" onClick={handleSidebarToggle}/>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-black text-white shadow-lg transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex justify-between items-center p-5">
          {isSidebarOpen && <LanguageSelector />}
          <button onClick={handleSidebarClose} className="text-4xl">
            &times;
          </button>
        </div>
        <ul className="flex flex-col p-5 mt-14 list-none">
          {links.map((link, index) => (
            <li key={index} className="py-2">
              <a
                href={`#${link.path}`}
                className="text-lg"
                onClick={handleSidebarClose}
                aria-label="Close sidebar"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex justify-center items-center space-x-5">
          {icons.map((icon) => (
            <Link href={icon.href} key={icon.href} aria-label={icon.ariaLabel}>
              <img src={icon.IconComponent} alt={icon.ariaLabel} className="w-8 h-8"/>
            </Link>
          ))}
        </div>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={handleSidebarClose}
        ></div>
      )}
    </div>
  );
};

export default MobileNav;
