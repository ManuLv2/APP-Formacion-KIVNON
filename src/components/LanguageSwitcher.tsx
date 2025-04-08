import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "./ui/button";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === "en" ? "es" : "en";
    i18n.changeLanguage(newLanguage);
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-2"
    >
      {currentLanguage === "en" ? (
        <>
          <span className="w-5 h-5 rounded-full overflow-hidden flex-shrink-0 border border-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30">
              <clipPath id="a">
                <path d="M0 0v30h60V0z" />
              </clipPath>
              <clipPath id="b">
                <path d="M30 15h30v15zv15H0zH0V0zV0h30z" />
              </clipPath>
              <g clipPath="url(#a)">
                <path fill="#012169" d="M0 0v30h60V0z" />
                <path stroke="#fff" strokeWidth="6" d="M0 0l60 30m0-30L0 30" />
                <path
                  stroke="#C8102E"
                  strokeWidth="4"
                  d="M0 0l60 30m0-30L0 30"
                  clipPath="url(#b)"
                />
                <path stroke="#fff" strokeWidth="10" d="M30 0v30M0 15h60" />
                <path stroke="#C8102E" strokeWidth="6" d="M30 0v30M0 15h60" />
              </g>
            </svg>
          </span>
          <span className="text-xs">EN</span>
        </>
      ) : (
        <>
          <span className="w-5 h-5 rounded-full overflow-hidden flex-shrink-0 border border-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 750 500">
              <rect width="750" height="500" fill="#c60b1e" />
              <rect width="750" height="250" fill="#ffc400" y="125" />
            </svg>
          </span>
          <span className="text-xs">ES</span>
        </>
      )}
    </Button>
  );
};

export default LanguageSwitcher;
