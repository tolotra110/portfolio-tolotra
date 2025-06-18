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

export default function Skills() {
  return (
    <>
    <section id='skills' className="">

        <motion.p
               initial={{opacity:0,x:-100}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:2}} className=" justify-center flex text-3xl text-purple-700 "> My Skills</motion.p>
        <motion.p
               initial={{opacity:0,x:-100}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:2}} className='ml-133 mt-2 text-2xl'>Technologies I work with</motion.p>
        <div  className='grid grid-cols-2  gap-1 '>
          
           
          
        
          <motion.div
           initial={{opacity:0,x:-100}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:2}}  className='border-2 border-purple-800 rounded-[12px] pl-5 py-2  bg-transparent mt-5 ml- pl- w-164'>
             <h1 className='pl-24  '>Framework  & Librairies web Developpements</h1>
            <div className='flex flex row gap-25 mt-5 ml-10'>
              <div className='pl-1'>
              <motion.img src={html} alt="" className='w-20 ' />
              <p className=' ml-5'>Html</p>
            </div>
            <div>
              <img src={css} alt="" className='w-20' />
              <p className='ml-6'>Css</p>
            </div>
            <div>
              <img src={js} alt="" className='w-20' />
              <p className=''>Javascript</p>
            </div>
            
            </div>

          </motion.div>

           <motion.div
            initial={{opacity:0,x:-100}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:2}}  className='border-2 rounded-[12px] pl-5 py-2  bg-transparent border-purple-700 mt-5 ml- pl- w-164'>
             <h1 className='pl-44  '>Database Management System</h1>
            <div className='flex flex row gap-25 mt-5 ml-7'>
              <div>
              <img src={Mysql} alt="" className='w-20' />
              <p className=' ml-4'>Mysql</p>
            </div>
            
            </div>

          </motion.div>


           <motion.div
                  initial={{opacity:0,x:-100}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:2}}
            className='border-2 border-purple-700 rounded-[12px] pl-5 py-2  bg-transparent mt-6 ml- pl- w-164'>
             <h1 className='pl-24  '>Framework  & Librairies web Developpements</h1>
            <div className='flex flex row gap-25 mt-5 ml-2'>
              <div>
              <img src={react} alt="" className='w-20' />
              <p className='ml-3'>React js</p>
            </div>
            <div>
              <img src={node} alt="" className='w-20' />
              <p className='ml-3'>Node js</p>
            </div>
            <div>
              <img src={material} alt="" className='w-20' />
              <p className=''>Material Ui</p>
            </div>
            <div className=''>
              <img src={tailwind} alt="" className='w-20' />
              <p className=''>Tailwind</p>
            </div>
            
            </div>

          </motion.div>


           <motion.div
                  initial={{opacity:0,x:-100}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:2}} className='border-2  border-purple-800 rounded-[12px] pl-5 py-2  bg-transparent mt-6 ml- pl- w-164'>
             <h1 className='pl-68  '>Dev tools</h1>
            <div className='flex flex row gap-25 mt-5 ml-7'>
              <div>
              <img src={npm} alt="" className='w-20' />
              <p className=' ml-2'>Postman</p>
            </div>
            <div>
              <img src={git} alt="" className='w-20' />
              <p className=' ml-7'>Git</p>
            </div>
            
            </div>

          </motion.div>
          
          
        
        </div>
        
    </section>
    
    </>
  )
}
