import {motion} from 'framer-motion'
import { FaStar,FaHandHoldingHand, FaEnvelopeOpenText } from 'react-icons/fa6'
import { useTranslation } from '../../i18n/LanguageContext'
export default function Contact() {
  const { t, theme } = useTranslation();
  const isLight = theme === "light";
  const titleColor = isLight ? "text-purple-700" : "text-purple-300";
  const reasonsColor = isLight ? "text-purple-600" : "text-purple-400";
  const cardSurface = isLight
    ? "border border-purple-300 rounded-2xl p-6 bg-purple-50 hover:border-purple-400 transition-colors"
    : "border border-purple-700/50 rounded-2xl p-6 bg-white/5 backdrop-blur hover:border-purple-500 transition-colors";
  const iconColor = isLight ? "text-purple-700" : "text-purple-400";
  const cardTitle = isLight ? "text-purple-800" : "text-purple-200";
  const descColor = isLight ? "text-purple-600" : "text-gray-300";

  const reasons = [
    { title: t("contact", "proficiency"), desc: t("contact", "proficiencyDesc") },
    { title: t("contact", "communication"), desc: t("contact", "communicationDesc") },
    { title: t("contact", "proactivity"), desc: t("contact", "proactivityDesc") },
  ];
  return (
    <>
        <motion.p
                       initial={{opacity:0,x:-100}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:2}} className={` justify-center items-center gap-3 flex text-2xl md:text-3xl mt-10 px-4 text-center font-semibold ${titleColor}`}><FaEnvelopeOpenText className="text-blue-700" />{t("contact", "title")}</motion.p>
        <div className='px-6 max-w-4xl mx-auto'>
          <p className='flex flex-wrap justify-center items-center gap-2 mt-4 text-lg'>
            <span className={`text-3xl ${iconColor}`}><FaHandHoldingHand /></span>
            <span className={reasonsColor}>{t("contact", "reasons")}</span>
          </p>

          <div className='mt-8 grid grid-cols-1 md:grid-cols-3 gap-6'>
            {reasons.map((r, i) => (
              <motion.div
                key={i}
                initial={{opacity:0,y:60}}
                whileInView={{opacity:1,y:0}}
                transition={{duration:0.6, delay:i * 0.15}}
                className={cardSurface}
              >
                <div className='flex items-center gap-3 mb-3'>
                  <span className={`text-2xl ${iconColor}`}><FaStar /></span>
                  <h3 className={`font-semibold ${cardTitle}`}>{r.title}</h3>
                </div>
                <p className={`text-sm leading-relaxed ${descColor}`}>{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
    </>
  )
}
