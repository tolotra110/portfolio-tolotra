import { FaGithub, FaLinkedin, FaMessage } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useTranslation } from "../../i18n/LanguageContext";

export default function Footer() {
  const { t, theme } = useTranslation();
  const isLight = theme === "light";

  const socials = [
    {
      href: "https://mail.google.com/",
      icon: <FaMessage />,
      label: "Email",
      text: "bienheureuxtolojanahary@gmail.com",
    },
    {
      href: "https://www.linkedin.com/",
      icon: <FaLinkedin />,
      label: "LinkedIn",
      text: "bienheureuxtolojanahary",
    },
    {
      href: "https://github.com/tolotra110",
      icon: <FaGithub />,
      label: "GitHub",
      text: "github.com/tolotra110",
    },
  ];

  const iconClass = isLight
    ? "w-12 h-12 flex items-center justify-center rounded-full border border-purple-300 text-purple-700 text-xl hover:bg-purple-700 hover:text-white hover:-translate-y-1 transition-all duration-300"
    : "w-12 h-12 flex items-center justify-center rounded-full border border-purple-700/50 text-purple-300 text-xl hover:bg-purple-700 hover:text-white hover:-translate-y-1 transition-all duration-300";

  const linkText = isLight
    ? "block text-sm text-purple-700 hover:text-purple-900 transition-colors"
    : "block text-sm text-gray-300 hover:text-white transition-colors";

  return (
    <footer className={`mt-16 border-t ${isLight ? "border-purple-200 bg-white" : "border-white/10 bg-white/5"}`}>
      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <p className="text-2xl font-semibold">
            <span className={isLight ? "text-purple-700" : "text-blue-400"}>T</span>olotra.
          </p>
          <p className={`mt-2 text-sm ${isLight ? "text-purple-600" : "text-gray-400"}`}>{t("footer", "tagline")}</p>
        </div>

        <div className="flex flex-row items-center gap-4">
          {socials.map((s, i) => (
            <motion.a
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              title={s.text}
              className={iconClass}
            >
              {s.icon}
            </motion.a>
          ))}
        </div>

        <div className="text-center md:text-right space-y-1">
          {socials.map((s, i) => (
            <a
              key={i}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className={linkText}
            >
              {s.text}
            </a>
          ))}
        </div>
      </div>

      <div className={`border-t py-4 text-center text-xs ${isLight ? "border-purple-200 text-purple-500" : "border-white/10 text-gray-500"}`}>
        © {new Date().getFullYear()} Tolotra. {t("footer", "rights")}
      </div>
    </footer>
  );
}
