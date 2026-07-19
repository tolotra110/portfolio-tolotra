import { motion } from 'framer-motion'
import { FaLaptopCode, FaPalette, FaDatabase } from 'react-icons/fa6'
import { useTranslation } from '../../i18n/LanguageContext'

export default function Services() {
  const { t, theme } = useTranslation();
  const isLight = theme === "light";

  const titleColor = isLight ? "text-purple-700" : "text-purple-300";
  const subColor = isLight ? "text-purple-600" : "text-purple-200";
  const cardSurface = isLight
    ? "border border-purple-300 rounded-2xl p-6 bg-purple-50 hover:border-purple-400 hover:-translate-y-1 transition-all duration-300"
    : "border border-purple-700/50 rounded-2xl p-6 bg-white/5 backdrop-blur hover:border-purple-500 hover:-translate-y-1 transition-all duration-300";
  const iconColor = isLight ? "text-blue-700" : "text-purple-400";
  const cardTitle = isLight ? "text-purple-800" : "text-purple-200";
  const descColor = isLight ? "text-purple-600" : "text-gray-300";

  const services = [
    { icon: <FaLaptopCode />, titleKey: "webTitle", descKey: "webDesc" },
    { icon: <FaPalette />, titleKey: "uiTitle", descKey: "uiDesc" },
    { icon: <FaDatabase />, titleKey: "apiTitle", descKey: "apiDesc" },
  ];

  return (
    <>
      <motion.p
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
        className={`justify-center items-center gap-3 flex text-2xl md:text-3xl mt-16 px-4 text-center font-semibold ${titleColor}`}
      >
        <FaLaptopCode className="text-blue-700" />
        {t("services", "title")}
      </motion.p>
      <p className={`mt-2 text-lg md:text-2xl text-center ${subColor}`}>{t("services", "subtitle")}</p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 px-6 max-w-5xl mx-auto">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className={cardSurface}
          >
            <div className={`text-3xl mb-4 ${iconColor}`}>{s.icon}</div>
            <h3 className={`font-semibold text-lg mb-2 ${cardTitle}`}>{t("services", s.titleKey)}</h3>
            <p className={`text-sm leading-relaxed ${descColor}`}>{t("services", s.descKey)}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
}
