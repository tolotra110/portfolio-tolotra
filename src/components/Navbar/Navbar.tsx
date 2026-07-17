import { useState } from "react";
import { useTranslation } from "../../i18n/LanguageContext";

export default function Navbar() {
  const { language, setLanguage, t } = useTranslation();
  const [open, setOpen] = useState(false);

  const links = (
    <>
      <a
        href="#home"
        onClick={() => setOpen(false)}
        className="text-purple-800 bg-transparent border-2 border-none"
      >
        {t("nav", "home")}
      </a>
      <a href="#about" onClick={() => setOpen(false)}>
        {t("nav", "about")}
      </a>
      <a href="#skills" onClick={() => setOpen(false)}>
        {t("nav", "skills")}
      </a>
      <a href="#projet" onClick={() => setOpen(false)}>
        {t("nav", "project")}
      </a>
    </>
  );

  return (
    <>
      <section
        id="navbar"
        className="flex flex-col md:flex-row items-center md:justify-between px-4 md:px-6 py-3 gap-3 md:gap-4"
      >
        <div className="w-full md:w-auto flex items-center justify-between">
          <p className="text-2xl md:text-3xl">
            <span className="text-blue-400">T</span>olotra.
          </p>

          <div className="flex items-center gap-3 md:gap-0">
            <li className="flex flex-row items-center gap-1 list-none md:border-l md:border-gray-300 md:pl-4">
              <button
                onClick={() => setLanguage("en")}
                aria-label="Switch to English"
                className={`cursor-pointer px-2 py-1 rounded ${
                  language === "en"
                    ? "text-blue-700 font-bold bg-blue-50"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                EN
              </button>
              <span className="text-gray-400">|</span>
              <button
                onClick={() => setLanguage("fr")}
                aria-label="Passer en français"
                className={`cursor-pointer px-2 py-1 rounded ${
                  language === "fr"
                    ? "text-blue-700 font-bold bg-blue-50"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                FR
              </button>
            </li>

            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              aria-expanded={open}
              className="md:hidden flex flex-col gap-1 cursor-pointer p-2"
            >
              <span
                className={`block w-6 h-0.5 bg-white transition-transform ${
                  open ? "rotate-45 translate-y-1.5" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-white transition-opacity ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-white transition-transform ${
                  open ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              />
            </button>
          </div>
        </div>

        <ul className="hidden md:flex flex-row flex-wrap items-center justify-center gap-3 md:gap-6">
          <a href="#navbar" className="hidden">Navbar</a>
          {links}
        </ul>

        {open && (
          <ul className="flex md:hidden flex-col items-center gap-4 w-full mt-2">
            {links}
          </ul>
        )}
      </section>
    </>
  );
}
