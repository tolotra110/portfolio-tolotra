import  {motion} from 'framer-motion'
import { FaArrowUp, FaUser } from 'react-icons/fa6'
import { useTranslation } from '../../i18n/LanguageContext'
import MOI from '../assets/MOI.png'
export default function About() {
  const { t, theme } = useTranslation();
  const isLight = theme === "light";
  const titleColor = isLight ? "text-purple-700" : "text-purple-300";
  const subColor = isLight ? "text-purple-600" : "text-purple-200";
  const textColor = isLight ? "text-purple-700" : "text-white";
  const upBtn = isLight ? "bg-blue-700 hover:bg-blue-600 text-white" : "bg-purple-800";
  return (
    <>
      <section id='about' className="mt-20 md:mt-35 px-6">
        <motion.p
            initial={{opacity:0,x:-100}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:2}}

        className={`flex items-center justify-center gap-3 text-center text-2xl md:text-3xl font-semibold ${titleColor}`}><FaUser className="text-blue-700" />{t("about", "title")}</motion.p>
        <motion.div
          initial={{opacity:0, scale:0.8}}
          whileInView={{opacity:1, scale:1}}
          transition={{duration:1.5}}
          className="flex justify-center mt-8"
        >
          <img src={MOI} alt="Photo de profil" className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-purple-500 shadow-lg" />
        </motion.div>
        <div className="mt-6 mx-auto max-w-3xl text-center space-y-4">
          <motion.p
              initial={{opacity:0,x:-100}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:2}} className={`text-lg ${subColor}`}>{t("about", "subtitle")}</motion.p>
          <motion.p
           initial={{opacity:0,x:-100}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:2}} className={`leading-relaxed ${textColor}`}>{t("about", "p1")} {t("about", "p1b")} {t("about", "p1c")}</motion.p>

          <motion.p
           initial={{opacity:0,x:-100}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:2}}  className={`leading-relaxed ${textColor}`}>{t("about", "p2")} {t("about", "p2b")}</motion.p>
        </div>
         <a href='#home' className={`fixed left-4 bottom-4 md:left-299 md:top-120 md:bottom-auto px-5 py-5 rounded-[12px] ${upBtn}`}><p className=''><FaArrowUp></FaArrowUp></p></a>
      </section>

    </>
  )
}
