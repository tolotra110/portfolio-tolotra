import home1 from '../assets/Project1_home.png'
import home2 from '../assets/Project2_home.png';
import login2 from  '../assets/Project2_login.png'
import signin2 from '../assets/Project2_signin.png'
import gallery2 from '../assets/Project2_gallery.png'
import contact2 from '../assets/Project2_contact.png'
import login1 from '../assets/Project1_login.png'
import signin1 from '../assets/Project1_signin.png'
import client1 from '../assets/Project1_client.png'
import produit from '../assets/Project1_produit.png'
import facture from '../assets/Project1_facture.png'
import achat from '../assets/Project1_achat.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Autoplay} from 'swiper/modules';
import 'swiper/css'
import 'swiper/css/pagination'
import {motion} from 'framer-motion'
import 'swiper/css/autoplay'
import { useTranslation } from '../../i18n/LanguageContext'

export default function Project() {
  const { t } = useTranslation();
  return (
    <>
    <section id='projet' className="px-6">
                <motion.p
                       initial={{opacity:0,x:-100}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:2}} className=" justify-center flex text-2xl md:text-3xl text-purple-700 mt-12 ">{t("project", "title")}</motion.p>
                <motion.p
                       initial={{opacity:0,x:-100}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:2}}  className='mt-2 text-lg md:text-2xl text-center'>{t("project", "subtitle")}</motion.p>
                <div className='flex flex-col md:flex-row gap-10 mt-4 items-center md:items-start'>

                        <motion.div
                               initial={{opacity:0,x:-100}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:2}} className='w-full md:w-110 text-white p-1 bg-transparent border-2 border-purple-800 hover:bg-blue-700 rounded-[10px]'>
                               <div className='px-2 py-2'>
                                <Swiper
                                            modules={[Autoplay]}
                                            spaceBetween={30}
                                            slidesPerView={1}


                                            loop={true}
                                            autoplay={{
                                              delay:2500,
                                              disableOnInteraction:false
                                            }}

                                        >
                                            <SwiperSlide>  <img src={login1} alt="" className='w-full pb-5 rounded-[9px]' /></SwiperSlide>
                                            <SwiperSlide>  <img src={signin1} alt="" className='w-full pb-5 rounded-[9px]' /></SwiperSlide>
                                             <p className='font-bold  '>{t("project", "project1Name")}</p>
                                    <p className='m-1 text-white '>{t("project", "project1Desc")}
                                   </p>
                                            <SwiperSlide>  <img src={home1} alt="" className='w-full pb-5 rounded-[9px]' /></SwiperSlide>
                                             <SwiperSlide>  <img src={client1} alt="" className='w-full pb-5 rounded-[9px]' /></SwiperSlide>
                                             <SwiperSlide>  <img src={produit} alt="" className='w-full pb-5 rounded-[9px]' /></SwiperSlide>
                                             <SwiperSlide>  <img src={achat} alt="" className='w-full pb-5 rounded-[9px]' /></SwiperSlide>
                                                <SwiperSlide>  <img src={facture} alt="" className='w-full pb-5 rounded-[9px]' /></SwiperSlide>
                                        </Swiper>





                                </div>

                                <div className=' px-3 py-2 mt- rounded-md flex flex-wrap gap-2'>
                                    <button className='rounded-[1px] text-white bg-blue-700 px-2'>{t("project", "react")}</button>
                                    <button className='rounded-[1px] text-white bg-blue-700 px-2'>{t("project", "json")}</button>
                                      <a href=' https://github.com/tolotra110/SNACK-BAR-S-APP.git ' className='rounded-[1px] text-white bg-blue-700 px-2'>{t("project", "github")}</a>


                            </div>
                        </motion.div>


                        <motion.div
                               initial={{opacity:0,x:100}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:2}} className='w-full md:w-110 text-white p-1 bg-transparent border-2 border-purple-800 rounded-[10px]'>
                               <div className='px-2 py-2'>
                                <Swiper
                                            modules={[Autoplay]}
                                            spaceBetween={30}
                                            slidesPerView={1}


                                            loop={true}
                                            autoplay={{
                                              delay:2500,
                                              disableOnInteraction:false
                                            }}

                                        >
                                            <SwiperSlide>  <img src={login2} alt="" className='w-full pb-5 rounded-[9px]' /></SwiperSlide>
                                            <SwiperSlide>  <img src={signin2} alt="" className='w-full pb-5 rounded-[9px]' /></SwiperSlide>
                                             <p className='font-bold'>{t("project", "project2Name")}</p>
                                    <p className='m-1 text-white '>{t("project", "project2Desc")}</p>
                                            <SwiperSlide>  <img src={home2} alt="" className='w-full pb-5 rounded-[9px]' /></SwiperSlide>
                                             <SwiperSlide>  <img src={gallery2} alt="" className='w-full pb-5 rounded-[9px]' /></SwiperSlide>
                                             <SwiperSlide>  <img src={contact2} alt="" className='w-full pb-5 rounded-[9px]' /></SwiperSlide>

                                        </Swiper>



                                </div>

                                <div className=' ml-2 px-3 py-2 gap-2 rounded-md flex flex-wrap'>
                                    <button className='rounded-[1px] text-white bg-blue-700 px-2'>{t("project", "react")}</button>
                                    <button className='rounded-[1px] text-white bg-blue-700 px-2'>{t("project", "node")}</button>
                                    <button className='rounded-[1px] text-white bg-blue-700 px-2'>{t("project", "mysql")}</button>
                                    <a href=' https://github.com/tolotra110/ROADTRIP_FRONTEND_PROJECT.git ' className='rounded-[1px] text-white bg-blue-700 px-2'>{t("project", "github")}</a>

                            </div>
                        </motion.div>

                </div>
    </section>
    </>
  )
}
