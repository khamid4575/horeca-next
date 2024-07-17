"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useRef, useState, useTransition } from "react";
import Flag from "react-flagkit";

const languages = [
  { country: "RU", code: "ru", text: "Русский" },
  { country: "UZ", code: "uz", text: "O'zbek" },
];

const LanguageSelector = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();
  const pathname = usePathname();

  const onSelectChange = (newLanguage: any) => {
    startTransition(() => {
      router.replace(`/${newLanguage}`);
    });
  };

  // const { t, i18n } = useTranslation("global");
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const languageDropdownRef = useRef(null);

  //   useEffect(() => {
  //     document.addEventListener("mousedown", handleClickOutside);
  //     return () => {
  //       document.removeEventListener("mousedown", handleClickOutside);
  //     };
  //   }, []);

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
  };

  //   const handleClickOutside = (event: { target: any; }) => {
  //     if (
  //       languageDropdownRef.current &&
  //       !languageDropdownRef.current.contains(event.target)
  //     ) {
  //       setIsLanguageDropdownOpen(false);
  //     }
  //   };

  const handleLanguageChange = (newLang: any) => {
    // i18n.changeLanguage(newLang);
    setIsLanguageDropdownOpen(false);
  };

  return (
    <div className="relative" ref={languageDropdownRef}>
      <button
        onClick={toggleLanguageDropdown}
        className="flex items-center text-white rounded"
      >
        {pathname === "/ru" && <Flag country="RU" className="w-10" />}
        {pathname === "/uz" && <Flag country="UZ" className="w-10" />}
      </button>
      {isLanguageDropdownOpen && (
        <div className="absolute lg:right-0 2xl:mt-5 z-50 mt-4 w-28 lg:bg-white rounded lg:shadow-lg">
          {languages.map((language) => (
            <li
              key={language.code}
              onClick={() => onSelectChange(language.code)}
              //   disabled={isPending}
              className="flex font-medium items-center px-3 py-2 cursor-pointer rounded text-white lg:text-gray-500 hover:bg-gray-200 hover:text-black"
            >
              <Flag country={language.country} className="mr-2" />
              {language.text}
            </li>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
