// "use client";

import { useTranslations } from "next-intl";
import LanguageSelector from "./customUI/LanguageSelector";

const Nav = () => {
  const t = useTranslations("navbar");

  const links = [
    { name: t("hotels"), path: "hotels" },
    { name: t("restaurants"), path: "restaurants" },
    { name: t("services"), path: "services" },
    { name: t("shipping"), path: "shipping" },
    { name: t("contacts"), path: "contacts" },
  ];

  return (
    <div className="flex gap-8">
      {links.map((link) => (
        <a
          href={`#${link.path}`}
          key={link.name}
          className="text-xl font-medium"
        >
          {link.name}
        </a>
      ))}
      <h1 className="ml-12">
        <LanguageSelector />
      </h1>
    </div>
  );
};

export default Nav;
