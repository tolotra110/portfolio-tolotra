import html from '../assets/html-5.png'
import js from '../assets/js.png'
import css from '../assets/text.png'
import react from '../assets/science.png'
import node from '../assets/programing.png'
import tailwind from '../assets/Tailwind CSS.png'
import material from '../assets/Material UI.png'
import Mysql from '../assets/mysql-database.png'
import npm from '../assets/Postman.png'

import git from '../assets/git.png'
import {motion} from 'framer-motion'
import { useTranslation } from '../../i18n/LanguageContext'

export default function Skills() {
  const { t } = useTranslation();
  return (
    <>
    <section id='skills' className="px-
  6 ">

        <motion.p
               initial={{opacity:0,x:-100}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:2}} className=" justify-center flex text-2xl md:text-3xl text-purple-700 "> {t("skills", "title")}</motion.p>
        <motion.p
               initial={{opacity:0,x:-100}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:2}} className='mt-2 text-lg md:text-2xl text-center'>{t("skills", "subtitle")}</motion.p>
        <div  className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 max-w-5xl mx-auto'>

          <motion.div
           initial={{opacity:0,x:-100}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:2}}  className='border-2 border-purple-800 rounded-[12px] p-5 bg-transparent'>
             <h1 className='text-center font-semibold mb-4'>{t("skills", "webDev")}</h1>
             <div className='flex flex-row flex-wrap justify-center gap-6'>
               <div className='flex flex-col items-center'>
               <motion.img src={html} alt={t("skills", "html")} className='w-16 md:w-20' />
               <p className='mt-2'>{t("skills", "html")}</p>
             </div>
             <div className='flex flex-col items-center'>
               <img src={css} alt={t("skills", "css")} className='w-16 md:w-20' />
               <p className='mt-2'>{t("skills", "css")}</p>
             </div>
             <div className='flex flex-col items-center'>
               <img src={js} alt={t("skills", "js")} className='w-16 md:w-20' />
               <p className='mt-2'>{t("skills", "js")}</p>
             </div>

             </div>

          </motion.div>

           <motion.div
            initial={{opacity:0,x:-100}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:2}}  className='border-2 rounded-[12px] p-5 bg-transparent border-purple-700'>
             <h1 className='text-center font-semibold mb-4'>{t("skills", "dbms")}</h1>
             <div className='flex flex-row flex-wrap justify-center gap-6'>
               <div className='flex flex-col items-center'>
               <img src={Mysql} alt={t("skills", "mysql")} className='w-16 md:w-20' />
               <p className='mt-2'>{t("skills", "mysql")}</p>
             </div>

             </div>

          </motion.div>


           <motion.div
                  initial={{opacity:0,x:-100}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:2}}
            className='border-2 border-purple-700 rounded-[12px] p-5 bg-transparent'>
             <h1 className='text-center font-semibold mb-4'>{t("skills", "webDev")}</h1>
             <div className='flex flex-row flex-wrap justify-center gap-6'>
               <div className='flex flex-col items-center'>
               <img src={react} alt={t("skills", "react")} className='w-16 md:w-20' />
               <p className='mt-2'>{t("skills", "react")}</p>
             </div>
             <div className='flex flex-col items-center'>
               <img src={node} alt={t("skills", "node")} className='w-16 md:w-20' />
               <p className='mt-2'>{t("skills", "node")}</p>
             </div>
             <div className='flex flex-col items-center'>
               <img src={material} alt={t("skills", "material")} className='w-16 md:w-20' />
               <p className='mt-2'>{t("skills", "material")}</p>
             </div>
             <div className='flex flex-col items-center'>
               <img src={tailwind} alt={t("skills", "tailwind")} className='w-16 md:w-20' />
               <p className='mt-2'>{t("skills", "tailwind")}</p>
             </div>

             </div>

          </motion.div>


           <motion.div
                  initial={{opacity:0,x:-100}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:2}} className='border-2 border-purple-800 rounded-[12px] p-5 bg-transparent'>
             <h1 className='text-center font-semibold mb-4'>{t("skills", "devTools")}</h1>
             <div className='flex flex-row flex-wrap justify-center gap-6'>
               <div className='flex flex-col items-center'>
               <img src={npm} alt={t("skills", "postman")} className='w-16 md:w-20' />
               <p className='mt-2'>{t("skills", "postman")}</p>
             </div>
             <div className='flex flex-col items-center'>
               <img src={git} alt={t("skills", "git")} className='w-16 md:w-20' />
               <p className='mt-2'>{t("skills", "git")}</p>
             </div>

             </div>

          </motion.div>


        </div>

    </section>

    </>
  )
}
