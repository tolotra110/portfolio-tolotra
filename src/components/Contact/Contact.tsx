import {motion} from 'framer-motion'
import { FaStar,FaHandHoldingHand } from 'react-icons/fa6'
export default function Contact() {
  return (
    <>
        <motion.p
                       initial={{opacity:0,x:-100}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:2}} className=" justify-center flex text-3xl text-purple-700 mt-5 ">Why choose to work with Tolotra?</motion.p>
       <div className=''>
         <p className='ml-43 flex gap-2'>  <p className='text-3xl text-purple-800'><FaHandHoldingHand></FaHandHoldingHand></p>  <p className='mt-1'>There are Three Reasons:</p></p>
        <div className=''>
            <div className='ml-65 mt-9'>
            <li>Technical Proficiency:</li>
            <p className='ml-35 flex gap-2 mt-6 '> <p className='text-3xl text-purple-800'><FaStar></FaStar></p><p className='mt-1'>Crafting seamless code  and mastering cutting-edge technologies to bring your digital vision to life</p></p>
        </div>
         <div className='ml-65 mt-4'>
            <li>Clear Communication:</li>
            <p className='ml-35 flex gap-2 mt-6 '><p className='text-3xl text-purple-800'><FaStar></FaStar></p><p className='mt-1'>Articulating complex technical concepts with clarity ,ensuring a shared understanding for successful project collaboration</p></p>
        </div>
         <div className='ml-65 mt-4'>
            <li>Proactivity:</li>
            <p className='ml-35 flex gap-2 mt-6'><p className='text-3xl text-purple-800'><FaStar></FaStar></p><p className='mt-1'>Anticipating challenges ,providing solution before initiative to enhance project outcomes</p></p>
        </div>
        </div>

       </div>

    
    </>
  )
}
