import boss1 from '../assets/boss1.jpg'
import {motion} from 'framer-motion'
import { FaDownload, FaEnvelope, FaHandshake } from 'react-icons/fa6'
import { useTranslation } from '../../i18n/LanguageContext'


export default function Home() {
  const { t, theme } = useTranslation();
  const isLight = theme === "light";
  const nameColor = isLight ? "text-purple-700" : "text-blue-400";
  const nameColor2 = isLight ? "text-purple-800" : "text-purple-400";
  const roleColor = isLight ? "text-purple-700" : "text-purple-300";
  const introColor = isLight ? "text-purple-600" : "text-gray-300";
  const badge = isLight
    ? "text-sm mb-4 w-fit mx-auto md:mx-0 rounded-full px-3 py-1 bg-blue-700/20 text-blue-700 border border-blue-700/40"
    : "text-sm mb-4 w-fit mx-auto md:mx-0 rounded-full px-3 py-1 bg-blue-700/20 text-blue-300 border border-blue-700/40";
  const dlBtn = isLight
    ? "bg-transparent text-purple-700 border-2 border-purple-700 hover:bg-purple-700 hover:text-white transition-colors mt-2 cursor-pointer px-5 py-2.5 rounded-full font-medium"
    : "bg-transparent text-purple-300 border-2 border-purple-700 hover:bg-purple-700 hover:text-white transition-colors mt-2 cursor-pointer px-5 py-2.5 rounded-full font-medium";
  const contactBtn = isLight
    ? "bg-blue-700 hover:bg-blue-600 transition-colors mt-2 px-5 py-2.5 rounded-full font-medium cursor-pointer text-white"
    : "bg-blue-700 hover:bg-blue-600 transition-colors mt-2 px-5 py-2.5 rounded-full font-medium cursor-pointer";
  const imgBorder = isLight ? "border-4 border-purple-300 shadow-[0_0_40px_rgba(109,40,217,0.4)]" : "border-4 border-purple-600 shadow-[0_0_40px_rgba(124,58,237,0.5)]";
  return (
    <section
      id='home'
      className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 px-6 md:px-25 py-16 md:py-25 max-w-6xl mx-auto"
    >
        <div className="text-center md:text-left">
            <motion.p
            initial={{opacity:0,x:-100}}
            transition={{duration:2}}
            whileInView={{opacity:1,x:0}}
             className={badge}><motion.span
                animate={{ rotate: [0, 18, -8, 18, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, repeatDelay: 1.5 }}
                className="inline-block mr-2 origin-bottom"
              ><FaHandshake /></motion.span>{t("home", "greeting")}</motion.p>
            <motion.p
             initial={{opacity:0,x:-100}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:2}}
             className="font-light text-4xl md:text-6xl leading-tight">
                <span className={nameColor}>B</span>ien heureux  <br /> <span className={nameColor2}>N</span>atolojanahary
            </motion.p>
            <motion.div
             initial={{opacity:0,x:-100}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:2}}
             className='pt-5 '>
              <p className={`text-xl md:text-2xl ${roleColor}`}>{t("home", "role")}</p>
              <p className={`pt-2 text-sm md:text-base max-w-md mx-auto md:mx-0 ${introColor}`}>
                {t("home", "intro1")} {t("home", "intro2")} {t("home", "intro3")}
              </p>

            </motion.div>
            <motion.div
             initial={{opacity:0,y:100}}
            whileInView={{opacity:1,y:0}}
            transition={{duration:2}}
             className='flex flex-row flex-wrap gap-4 justify-center md:justify-start mt-6'>
              <a  href='https://mail.google.com/mail'  className={contactBtn}><FaEnvelope className="inline mr-2" />{t("home", "contact")}</a>
              <a href='/ME.pdf'download="ME.pdf" className={dlBtn}><FaDownload className="inline mr-2" /> {t("home", "download")}</a>
            </motion.div>
        </div>

        <div className="flex justify-center">
          <motion.img
              initial={{opacity:0,scale:0.8}}
            whileInView={{opacity:1,scale:1}}
            transition={{duration:2}}

          className={`w-44 h-44 md:w-80 md:h-80 rounded-full ${imgBorder} object-cover`} src={boss1} alt="Bien heureux Natolojanahary" />
        </div>

    </section>
  )
}
