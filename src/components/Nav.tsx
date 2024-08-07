import { useTranslations } from "next-intl";
import LanguageSelector from "./customUI/LanguageSelector";

const Nav = ({ isScrolled }: any) => {
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
      {!isScrolled && (
        <div className={`ml-12 ${isScrolled && "hidden"}`}>
          <LanguageSelector />
        </div>
      )}
    </div>
  );
};

export default Nav;
