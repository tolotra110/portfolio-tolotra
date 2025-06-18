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

export default function Project() {
  return (
    <>
    <section id='projet' className="">
                <motion.p
                       initial={{opacity:0,x:-100}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:2}} className=" justify-center flex text-3xl text-purple-700 mt-12 "> My Latest Project</motion.p>
                <motion.p    
                       initial={{opacity:0,x:-100}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:2}}  className='ml-115 mt-2 text-2xl'>Check out some of my recent work</motion.p>
                <div className=' flex flex-row gap-10 ml-15 mt-2'>
                    
                        <motion.div
                               initial={{opacity:0,x:-100}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:2}} className='ml-29 text-white  p-1 bg-transparent border-2 border-purple-800 hover:bg-blue-700 h-100 w-110  rounded-[10px]'>
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
                                            <SwiperSlide>  <img src={login1} alt="" className='w-220 pb-5  rounded-[9px]' /></SwiperSlide>
                                            <SwiperSlide>  <img src={signin1} alt="" className='w-220 pb-5  rounded-[9px]' /></SwiperSlide>
                                             <p className='font-bold  '>Snack bar's App</p>
                                    <p className='m-1  text-white '>Lorem ipsum dolor sit amet, consectetur adipisicing<br /> Illo 
                                    consectetur adipisicing elit. Voluptates?</p>
                                            <SwiperSlide>  <img src={home1} alt="" className='w-220 pb-5  rounded-[9px]' /></SwiperSlide>
                                             <SwiperSlide>  <img src={client1} alt="" className='w-220 pb-5  rounded-[9px]' /></SwiperSlide>
                                             <SwiperSlide>  <img src={produit} alt="" className='w-220 pb-5  rounded-[9px]' /></SwiperSlide>
                                             <SwiperSlide>  <img src={achat} alt="" className='w-220 pb-5  rounded-[9px]' /></SwiperSlide>
                                                <SwiperSlide>  <img src={facture} alt="" className='w-220 pb-5  rounded-[9px]' /></SwiperSlide>
                                        </Swiper>
                               
                                  
                                   
                               </div>
                          
                                <div className=' ml-  px-3 py-2 mt- rounded-md '>
                                    <button className='ml-1  rounded-[1px] text-white bg-blue-700 px-2'>React js</button>
                                    <button className='ml-1 rounded-[1px] text-white bg-blue-700 px-2'>Json Server</button>
                                      <a href=' https://github.com/tolotra110/SNACK-BAR-S-APP.git ' className='ml-1 rounded-[1px] text-white bg-blue-700 px-2'>View in Github</a>
                                    
                        
                            </div>
                        </motion.div>
          
              
                        <motion.div
                               initial={{opacity:0,x:100}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:2}} className='ml-9 text-white  p-1 bg-transparent border-2 border-purple-800  h-100 w-110 rounded-[10px]'>
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
                                            <SwiperSlide>  <img src={login2} alt="" className='w-240 pb-5  rounded-[9px]' /></SwiperSlide>
                                            <SwiperSlide>  <img src={signin2} alt="" className='w-240 pb-5  rounded-[9px]' /></SwiperSlide>
                                             <p className='font-bold'>Road Trip</p>
                                    <p className='m-1  text-white '>Lorem ipsum dolor sit amet, consectetur adipisicing<br /> Illo 
                                    consectetur adipisicing elit. Voluptates?</p>
                                            <SwiperSlide>  <img src={home2} alt="" className='w-245 pb-5  rounded-[9px]' /></SwiperSlide>
                                             <SwiperSlide>  <img src={gallery2} alt="" className='w-245 pb-5  rounded-[9px]' /></SwiperSlide>
                                             <SwiperSlide>  <img src={contact2} alt="" className='w-245 pb-5  rounded-[9px]' /></SwiperSlide>
                                               
                                        </Swiper>
                               
                                  
                                   
                               </div>
                          
                                <div className=' ml-2   px-3 py-2 gap-12 rounded-md '>
                                    <button className='ml-1  rounded-[1px] text-white bg-blue-700 px-2'>React js</button>
                                    <button className='ml-1 rounded-[1px] text-white bg-blue-700 px-2'>Node js</button>
                                    <button className='ml-1 rounded-[1px] text-white bg-blue-700 px-2'>Mysql</button>
                                    <a href=' https://github.com/tolotra110/ROADTRIP_FRONTEND_PROJECT.git ' className='ml-1 rounded-[1px] h-19 text-white bg-blue-700 px-2'>View in Github</a>
                        
                            </div>
                        </motion.div>
          
                </div>
    </section>
    </>
  )
}
