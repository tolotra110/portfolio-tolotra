import html from '../assets/html-5.png'
import js from '../assets/js.png'
import css from '../assets/text.png'
import react from '../assets/science.png'
import node from '../assets/programing.png'
import tailwind from '../assets/Tailwind CSS.png'
import material from '../assets/Material UI.png'
import angular from '../assets/angular.png'
import Mysql from '../assets/mysql-database.png'
import postgresql from '../assets/postgresql.jpg'
import npm from '../assets/Postman.png'

import git from '../assets/git.png'
import {motion} from 'framer-motion'
import { FaCode } from 'react-icons/fa6'
import { useTranslation } from '../../i18n/LanguageContext'

export default function Skills() {
  const { t, theme } = useTranslation();
  const isLight = theme === "light";

  const cardSurface = isLight
    ? "bg-white border-purple-200 hover:border-purple-400"
    : "bg-white/5 border-purple-700/50 hover:border-purple-400";
  const titleColor = isLight ? "text-purple-700" : "text-purple-200";
  const labelColor = isLight ? "text-purple-700" : "text-gray-300";
  const iconBg = isLight
    ? "bg-white/30 group-hover:bg-white/50"
    : "bg-white/10 group-hover:bg-white/20";
  const titleColor2 = isLight ? "text-purple-700" : "text-purple-300";
  const subColor = isLight ? "text-purple-600" : "text-purple-200";

  const categories = [
    {
      titleKey: "frontend",
      items: [
        { src: html, key: "html" },
        { src: css, key: "css" },
        { src: js, key: "js" },
        { src: react, key: "react" },
        { src: tailwind, key: "tailwind" },
        { src: material, key: "material" },
        { src: angular, key: "angular" },
      ],
    },
    {
      titleKey: "backend",
      items: [
        { src: node, key: "node" },
        { src: Mysql, key: "mysql" },
        { src: postgresql, key: "postgresql" },
      ],
    },
    {
      titleKey: "tools",
      items: [
        { src: npm, key: "postman" },
        { src: git, key: "git" },
      ],
    },
  ];

  return (
    <>
    <section id='skills' className="px-6">

        <motion.p
               initial={{opacity:0,x:-100}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:2}} className={` justify-center items-center gap-3 flex text-2xl md:text-3xl font-semibold ${titleColor2}`}><FaCode className="text-blue-700" />{t("skills", "title")}</motion.p>
        <motion.p
               initial={{opacity:0,x:-100}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:2}} className={`mt-2 text-lg md:text-2xl text-center ${subColor}`}>{t("skills", "subtitle")}</motion.p>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 max-w-5xl mx-auto'>
          {categories.map((cat, ci) => (
            <motion.div
              key={ci}
              initial={{opacity:0, y:50}}
              whileInView={{opacity:1, y:0}}
              transition={{duration:0.6, delay: ci * 0.15}}
              className={`rounded-2xl p-6 ${cardSurface} hover:-translate-y-1 transition-all duration-300`}
            >
              <h1 className={`text-center font-semibold mb-6 ${titleColor}`}>{t("skills", cat.titleKey)}</h1>
              <div className='flex flex-row flex-wrap justify-center gap-5'>
                {cat.items.map((item, ii) => (
                  <div key={ii} className='flex flex-col items-center group'>
                    <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl ${iconBg} flex items-center justify-center p-3 group-hover:scale-110 transition-all duration-300`}>
                      <img src={item.src} alt={t("skills", item.key)} className='w-full h-full object-contain' />
                    </div>
                    <p className={`mt-2 text-sm ${labelColor}`}>{t("skills", item.key)}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

    </section>
    </>
  )
}
