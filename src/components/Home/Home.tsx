import boss1 from '../assets/boss1.jpg'
import {motion} from 'framer-motion'


export default function Home() {
  return (
    <section id='home' className=" m-25 flex ">
        <div>
            <motion.p
            initial={{opacity:0,x:-100}}
            transition={{duration:2}}
            whileInView={{opacity:1,x:0}}

             className='text-sm  mb-2 w-17 rounded-sm px-2 py-1 bg-blue-700'>Hi,guys</motion.p>
            <motion.p
             initial={{opacity:0,x:-100}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:2}}
             className="font-light text-5xl">
                <span >B</span>ien heureux  <br /> <span>N</span>atolojanahary
            </motion.p> 
            <motion.div
             initial={{opacity:0,x:-100}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:2}}
             className='pt-4 '>
              <p className='text-2xl'>I'm Web Developpeur</p> 
              <p className='pt-1'>
                Crafting modern,performant,and delightful digital  <br />experiences  with a passion for clean code and <br /> intuitive design.
              </p>
              
            </motion.div>
            <motion.div
             initial={{opacity:0,y:100}}
            whileInView={{opacity:1,y:0}}
            transition={{duration:2}}
             className='flex flex-row gap-5 m-4'>
              <a  href='https://mail.google.com/mail'  className="bg-blue-700 mt-4  px-4 py-2 rounded-[24px]  cursor-pointer ">Contact me</a>
              <a href='/CV.pdf'download="CV.pdf" className="bg-transparent text-purple-500 border-2  border-purple-700 mt-4 cursor-pointer  px-4 py-2 rounded-[24px]  "> Download CV</a>
            </motion.div>
        </div>
       
        <div>
          <motion.img 
              initial={{opacity:0,x:200}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:2}}
          
          
          className=" w-95 absolute top-32 left-140 rounded-[200px] border-2 border-purple-700  ml-32" src={boss1} alt="" />
        </div>
       
    </section>
  )
}
