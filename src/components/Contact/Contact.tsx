import {motion} from 'framer-motion'
import { FaStar,FaHandHoldingHand } from 'react-icons/fa6'
import { useTranslation } from '../../i18n/LanguageContext'
export default function Contact() {
  const { t } = useTranslation();
  return (
    <>
        <motion.p
                       initial={{opacity:0,x:-100}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:2}} className=" justify-center flex text-2xl md:text-3xl text-purple-700 mt-5 px-4 text-center">{t("contact", "title")}</motion.p>
       <div className='px-6'>
         <p className='flex flex-wrap justify-center gap-2 mt-4'>  <p className='text-3xl text-purple-800'><FaHandHoldingHand></FaHandHoldingHand></p>  <p className='mt-1'>{t("contact", "reasons")}</p></p>
        <div className='mt-4'>
            <div className='mt-6'>
            <li>{t("contact", "proficiency")}</li>
            <p className='flex flex-wrap gap-2 mt-4 '> <p className='text-3xl text-purple-800'><FaStar></FaStar></p><p className='mt-1'>{t("contact", "proficiencyDesc")}</p></p>
        </div>
         <div className='mt-4'>
            <li>{t("contact", "communication")}</li>
            <p className='flex flex-wrap gap-2 mt-4 '><p className='text-3xl text-purple-800'><FaStar></FaStar></p><p className='mt-1'>{t("contact", "communicationDesc")}</p></p>
        </div>
         <div className='mt-4'>
            <li>{t("contact", "proactivity")}</li>
            <p className='flex flex-wrap gap-2 mt-4'><p className='text-3xl text-purple-800'><FaStar></FaStar></p><p className='mt-1'>{t("contact", "proactivityDesc")}</p></p>
        </div>
        </div>

       </div>


    </>
  )
}
