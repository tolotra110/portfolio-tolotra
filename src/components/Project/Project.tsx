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
import img1 from '../assets/1.png'
import img2 from '../assets/2.png'
import img3 from '../assets/3.png'
import img4 from '../assets/4.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css'
import 'swiper/css/pagination'
import {motion} from 'framer-motion'
import 'swiper/css/autoplay'
import { FaGithub, FaFolderOpen } from 'react-icons/fa6'
import { useTranslation } from '../../i18n/LanguageContext'

const projects = [
  {
    images: [login1, signin1, home1, client1, produit, achat, facture],
    nameKey: "project1Name",
    descKey: "project1Desc",
    tags: ["react", "json"],
    github: "https://github.com/tolotra110/SNACK-BAR-S-APP.git",
  },
  {
    images: [login2, signin2, home2, gallery2, contact2],
    nameKey: "project2Name",
    descKey: "project2Desc",
    tags: ["react", "node", "mysql"],
    github: "https://github.com/tolotra110/ROADTRIP_FRONTEND_PROJECT.git",
  },
  {
    images: [img1, img2, img3, img4],
    nameKey: "project3Name",
    descKey: "project3Desc",
    tags: ["react", "node", "mysql"],
    github: "https://github.com/tolotra110/GestionActeVente",
  },
]

export default function Project() {
  const { t, theme } = useTranslation();
  const isLight = theme === "light";
  const cardSurface = isLight
    ? "bg-white border-purple-200 hover:border-purple-400"
    : "bg-white/5 border-purple-700/50 hover:border-purple-400";
  const titleColor = "text-white";
  const descColor = isLight ? "text-purple-600" : "text-white/90";
  const tagColor = "text-white bg-blue-700";
  const tagColor2 = "text-white bg-blue-700 hover:bg-blue-800";
  const githubColor = isLight ? "bg-purple-700 hover:bg-purple-800" : "bg-purple-700 hover:bg-purple-600";
  const borderTop = isLight ? "border-purple-200" : "border-white/10";

  return (
    <>
    <section id='projet' className="px-6">
                <motion.p
                       initial={{opacity:0,x:-100}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:2}} className={` justify-center items-center gap-3 flex text-2xl md:text-3xl mt-12 font-semibold ${isLight ? "text-purple-700" : "text-purple-300"}`}><FaFolderOpen className="text-blue-700" />{t("project", "title")}</motion.p>
                <motion.p
                       initial={{opacity:0,x:-100}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:2}}  className={`mt-2 text-lg md:text-2xl text-center ${isLight ? "text-purple-600" : "text-purple-200"}`}>{t("project", "subtitle")}</motion.p>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-2 mt-8 items-stretch justify-center max-w-5xl mx-auto'>

                        {projects.map((proj, i) => (
                          <motion.div
                            key={i}
                            initial={{opacity:0, y:60}}
                            whileInView={{opacity:1, y:0}}
                            transition={{duration:0.7, delay: i * 0.15}}
                            className={`group w-full flex flex-col ${cardSurface} hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(124,58,237,0.35)] transition-all duration-300 rounded-2xl overflow-hidden`}
                          >
                            <div className='p-4'>
                              <Swiper
                                modules={[Autoplay, Pagination]}
                                spaceBetween={30}
                                slidesPerView={1}
                                loop={proj.images.length > 1}
                                autoplay={{ delay: 2500, disableOnInteraction: false }}
                                pagination={{ clickable: true }}
                                className='rounded-xl overflow-hidden'
                              >
                                {proj.images.map((src, idx) => (
                                  <SwiperSlide key={idx}>
                                    <img src={src} alt={`${t("project", proj.nameKey)} ${idx + 1}`} className='w-full h-48 object-cover rounded-xl' />
                                  </SwiperSlide>
                                ))}
                              </Swiper>

                              <div className='mt-4'>
                                <h3 className={`font-bold text-lg ${titleColor}`}>{t("project", proj.nameKey)}</h3>
                                <p className={`mt-1 text-sm leading-relaxed ${descColor}`}>{t("project", proj.descKey)}</p>
                              </div>
                            </div>

                            <div className={`px-4 py-4 mt-auto flex flex-wrap items-center gap-2 border-t ${borderTop}`}>
                              {proj.tags.map((tag, ti) => (
                                <span key={tag} className={`rounded-full text-xs px-3 py-1 ${ti === 0 ? tagColor : tagColor2}`}>{t("project", tag)}</span>
                              ))}
                              <a
                                href={proj.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`ml-auto rounded-full text-xs text-white ${githubColor} transition-colors px-3 py-1 flex items-center gap-1`}
                              >
                                <FaGithub /> {t("project", "github")}
                              </a>
                            </div>
                          </motion.div>
                        ))}

                </div>
    </section>
    </>
  );
}
