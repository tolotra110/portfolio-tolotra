import  {motion} from 'framer-motion'
import { FaArrowUp } from 'react-icons/fa6'
export default function About() {
  return (
    <>
      <section id='about' className="mt-35">
        <motion.p 
            initial={{opacity:0,x:-100}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:2}}
        
        className=" ml-149  flex text-3xl text-purple-700 ">About Me</motion.p>
        <div className="ml-6 mt-2">
          <motion.p
              initial={{opacity:0,x:-100}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:2}} className="  ml-85 md:ml-120">Learn more about who I am and what I do</motion.p><br />
          <motion.p
           initial={{opacity:0,x:-100}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:2}} className="ml-96">I specialize in building scalable web applications. My toolkit includes <br /> <span className="ml-12">ReactJS, Node.js, Mysql and more—blending technical <br /><span className="ml-32"> expertise with a keen eye for design.</span></span></motion.p><br /> 

<motion.p
 initial={{opacity:0,x:-100}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:2}}  className="ml-85">When I'm not coding, you'll find me exploring foreign language, music and technology, <br /><span className="ml-8">fueling my creativity, drive and enhancing my communication skills aswell.</span></motion.p>
        </div>
         <a href='#navbar' className='fixed left-299 top-120 px-5 py-5 rounded-[12px] bg-purple-800'><p className=''><FaArrowUp></FaArrowUp></p></a>
      </section>
        
    </>
  )
}
