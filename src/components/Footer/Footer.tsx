import { FaGithub,FaLinkedin ,FaMessage} from "react-icons/fa6";
import {motion} from 'framer-motion'

export default function Footer() {
  return (
    <>
    <div className="mt-12 ml-0 md:ml-30 h-auto flex flex-col md:flex-row gap-6 md:gap-12 px-6 py-4">
                  <motion.a
                              initial={{opacity:0,y:100}}
            whileInView={{opacity:1,y:0}}
            transition={{duration:0.5}} href="https://mail.google.com/" className="flex flex-row gap-2"> <p className="mt-1 text-3xl text-purple-800"><FaMessage></FaMessage></p><p className="mt-2">bienheureuxtolojanahary@gmail.com</p></motion.a>
           <motion.a
              initial={{opacity:0,y:100}}
            whileInView={{opacity:1,y:0}}
            transition={{duration:0.5}}  href="https://www.linkedin.com/" className="flex flex-row gap-2"> <p className="mt-1 text-3xl text-purple-800"><FaLinkedin></FaLinkedin></p><p className="mt-2">bienheureuxtolojanahary</p></motion.a>
           <motion.a
                          initial={{opacity:0,y:100}}
            whileInView={{opacity:1,y:0}}
            transition={{duration:0.5}}
            href="https://github.com/tolotra110" className="flex flex-row gap-2"> <p className="mt-1 text-3xl text-purple-800"><FaGithub ></FaGithub></p><p className="mt-2">https://github.com/tolotra110</p></motion.a>
    </div>



    </>
  )
}
