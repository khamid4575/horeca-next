import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

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


const Footer = () => {
  const t = useTranslations();

  return (
    <footer className="bg-black text-white pt-8 pb-4 px-5 md:px-10 lg:px-0">
      <div className="flex 2xl:w-[1700px] lg:w-[1200px] lg:flex-row flex-col mx-auto lg:text-start text-center w-full">
        <div className="lg:w-2/5">
          <h1 className="lg:text-4xl text-3xl font-bold">
          +998 (99) 920 88 00
          </h1>
          <div className="my-3 flex justify-center items-center 2xl:w-[44%] lg:w-[62%] space-x-3">
            {icons.map((icon) => (
              <Link href={icon.href} key={icon.href} aria-label={icon.ariaLabel}>
                <img src={icon.IconComponent} alt={icon.ariaLabel} />
              </Link>
            ))}
          </div>
        </div>
        <div className="lg:flex lg:w-2/4">
          <p className="lg:text-xl">
            SUPPLY PARTNERS - {t("motto")}
          </p>
        </div>
      </div>
      <div className="flex lg:mt-0 mt-3 lg:flex-row flex-col 2xl:w-[1700px] lg:w-[1200px] mx-auto lg:text-start text-center">
        <p className="lg:w-2/5">
          © Supply Partners 2024. {t("footer.allRightsReserved")}
        </p>
        <p>{t("footer.personalDataPolicy")}</p>
      </div>
    </footer>
  );
};

export default Footer;
