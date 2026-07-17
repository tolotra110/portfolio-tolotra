import  {motion} from 'framer-motion'
import { FaArrowUp } from 'react-icons/fa6'
import { useTranslation } from '../../i18n/LanguageContext'
export default function About() {
  const { t } = useTranslation();
  return (
    <>
      <section id='about' className="mt-20 md:mt-35 px-6">
        <motion.p
            initial={{opacity:0,x:-100}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:2}}

        className="text-center text-2xl md:text-3xl text-purple-700 ">{t("about", "title")}</motion.p>
        <div className="mt-6 mx-auto max-w-3xl text-center space-y-4">
          <motion.p
              initial={{opacity:0,x:-100}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:2}} className="text-lg text-purple-300">{t("about", "subtitle")}</motion.p>
          <motion.p
           initial={{opacity:0,x:-100}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:2}} className="leading-relaxed">{t("about", "p1")} {t("about", "p1b")} {t("about", "p1c")}</motion.p>

          <motion.p
           initial={{opacity:0,x:-100}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:2}}  className="leading-relaxed">{t("about", "p2")} {t("about", "p2b")}</motion.p>
        </div>
         <a href='#navbar' className='fixed left-4 bottom-4 md:left-299 md:top-120 md:bottom-auto px-5 py-5 rounded-[12px] bg-purple-800'><p className=''><FaArrowUp></FaArrowUp></p></a>
      </section>

    </>
  )
}
