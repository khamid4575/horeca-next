"use client";

import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Link from "next/link";

const links = [
  { name: "Отели", path: "hotels" },
  { name: "Рестораны", path: "restaurants" },
  { name: "Услуги", path: "services" },
  { name: "Доставка и оплата", path: "shipping" },
  { name: "Контакты", path: "contacts" },
];

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <i className="bx bx-menu text-3xl w-full"></i>
      </SheetTrigger>
      <SheetContent className="flex flex-col text-white">
        <div className="mt-32 mb-24 text-center">
          <Link href={"/"}>
            <h1 className="text-3xl font-extrabold uppercase">
              Supply partners
            </h1>
          </Link>
        </div>
        <nav className="flex flex-col justify-center items-start gap-5">
          {links.map((link) => {
            return (
              <a href={`#${link.path}`} key={link.path} className="text-lg">
                {link.name}
              </a>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
