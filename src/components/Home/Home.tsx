import boss1 from '../assets/boss1.jpg'
import {motion} from 'framer-motion'
import { useTranslation } from '../../i18n/LanguageContext'


export default function Home() {
  const { t } = useTranslation();
  return (
    <section id='home' className="flex flex-col md:flex-row items-center md:items-start gap-8 px-6 md:px-25 md:m-25 md:mt-25">
        <div className="order-2 md:order-1">
            <motion.p
            initial={{opacity:0,x:-100}}
            transition={{duration:2}}
            whileInView={{opacity:1,x:0}}

             className='text-sm mb-2 w-fit rounded-sm px-2 py-1 bg-blue-700'>{t("home", "greeting")}</motion.p>
            <motion.p
             initial={{opacity:0,x:-100}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:2}}
             className="font-light text-4xl md:text-5xl">
                <span >B</span>ien heureux  <br /> <span>N</span>atolojanahary
            </motion.p>
            <motion.div
             initial={{opacity:0,x:-100}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:2}}
             className='pt-4 '>
              <p className='text-xl md:text-2xl'>{t("home", "role")}</p>
              <p className='pt-1 text-sm md:text-base'>
                {t("home", "intro1")}  <br />{t("home", "intro2")} <br /> {t("home", "intro3")}
              </p>

            </motion.div>
            <motion.div
             initial={{opacity:0,y:100}}
            whileInView={{opacity:1,y:0}}
            transition={{duration:2}}
             className='flex flex-row flex-wrap gap-5 m-4'>
              <a  href='https://mail.google.com/mail'  className="bg-blue-700 mt-4 px-4 py-2 rounded-[24px] cursor-pointer ">{t("home", "contact")}</a>
              <a href='/CV.pdf'download="CV.pdf" className="bg-transparent text-purple-500 border-2 border-purple-700 mt-4 cursor-pointer px-4 py-2 rounded-[24px]"> {t("home", "download")}</a>
            </motion.div>
        </div>

        <div className="order-1 md:order-2 flex justify-center">
          <motion.img
              initial={{opacity:0,x:200}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:2}}

          className="w-48 h-48 md:w-95 md:h-auto md:absolute md:top-32 md:right-20 rounded-full md:rounded-[200px] border-2 border-purple-700 object-cover" src={boss1} alt="" />
        </div>

    </section>
  )
}
