import { useState } from "react";
import { useTranslation } from "../../i18n/LanguageContext";
import { FaSun, FaMoon } from "react-icons/fa6";

export default function Navbar() {
  const { language, setLanguage, t, theme, toggleTheme } = useTranslation();
  const [open, setOpen] = useState(false);
  const isLight = theme === "light";

  const linkBase = `px-3 py-2 rounded-full transition-colors ${
    isLight ? "text-purple-700 hover:bg-purple-100" : "text-purple-200 hover:bg-white/10"
  }`;

  const links = (
    <>
      <a href="#home" onClick={() => setOpen(false)} className={linkBase}>
        {t("nav", "home")}
      </a>
      <a href="#about" onClick={() => setOpen(false)} className={linkBase}>
        {t("nav", "about")}
      </a>
      <a href="#skills" onClick={() => setOpen(false)} className={linkBase}>
        {t("nav", "skills")}
      </a>
      <a href="#services" onClick={() => setOpen(false)} className={linkBase}>
        {t("nav", "services")}
      </a>
      <a href="#projet" onClick={() => setOpen(false)} className={linkBase}>
        {t("nav", "project")}
      </a>
    </>
  );

  const langActive = "bg-blue-700 text-white font-semibold";
  const langInactive = isLight
    ? "text-gray-500 hover:text-gray-800"
    : "text-gray-400 hover:text-white";

  const navSurface = isLight
    ? "bg-white border-purple-200 shadow-[0_8px_30px_rgba(109,40,217,0.12)]"
    : "bg-[#11012e]/60 border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.35)]";

  const iconBtn = "text-purple-300 border-white/15 hover:bg-white/10";
  const burger = "bg-white";

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <div className={`relative w-full max-w-5xl flex items-center justify-between gap-4 px-5 py-3 rounded-full border backdrop-blur-lg ${navSurface}`}>
        <p className="text-xl md:text-2xl font-semibold whitespace-nowrap">
          <span className={isLight ? "text-purple-700" : "text-blue-400"}>T</span>olotra.
        </p>

        <ul className="hidden md:flex flex-row items-center gap-1">{links}</ul>

        <div className="flex items-center gap-2 md:gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle light mode"
            className={`w-9 h-9 flex items-center justify-center rounded-full border transition-colors ${iconBtn}`}
          >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>

          <div className="flex items-center gap-1 rounded-full border border-white/15 px-1 py-0.5">
            <button
              onClick={() => setLanguage("en")}
              aria-label="Switch to English"
              className={`cursor-pointer px-3 py-1 rounded-full text-sm transition-colors ${
                language === "en" ? langActive : langInactive
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage("fr")}
              aria-label="Passer en français"
              className={`cursor-pointer px-3 py-1 rounded-full text-sm transition-colors ${
                language === "fr" ? langActive : langInactive
              }`}
            >
              FR
            </button>
          </div>

          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="md:hidden flex flex-col gap-1 cursor-pointer p-2"
          >
            <span
              className={`block w-6 h-0.5 ${burger} transition-transform ${
                open ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 ${burger} transition-opacity ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 ${burger} transition-transform ${
                open ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {open && (
        <ul className={`md:hidden absolute top-20 left-4 right-4 flex flex-col items-center gap-2 p-4 rounded-2xl border backdrop-blur-lg shadow-xl ${navSurface}`}>
          {links}
        </ul>
      )}
    </nav>
  );
}
