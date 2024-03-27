import React from 'react'
import { motion } from 'framer-motion';
import { styles } from '../style';
import { ComputersCanvas } from './canvas';


const Hero = () => {
  return (
      <section className=' relative w-full h-screen  mx-auto'>

          <div className={`${styles.paddingX} absolute inset-0 top-[120px] mx-auto flex flex-row max-w-7xl items-start gap-5`}>
            <div className=' flex flex-col items-center justify-center mt-5'>

            <div  className=' w-5 h-5 rounded-full bg-[#915eff] '></div>
            <div  className=' w-1 sm:h-80 h-40 violet-gradient '></div>

            
            
            
            </div>

              <div>
                <h1 className={ `${styles.heroHeadText} text-white`} >Hi I'm  <span className=' text-[#915eff]'>Akshit !</span> </h1>
                <p className={`${styles.heroSubText} mt-2 text-white-100  font-normal`} >I Architect web realms, where <br className=' sm:block  hidden'/> creativity meets functionality in bytes of brilliance</p>
              </div>

          </div>
       
       <ComputersCanvas/>
        <div className=' absolute xs:bottom-5 bottom-32 w-full flex  justify-center items-center'>
          <a href="#about">
            <div className=' w-[30px] h-[60px] rounded-3xl border-4 border-secondary flex justify-end items-start p-2 '>
                
                <motion.dev
                    animate={{
                      y:[0,24,0]
                    }}
                    transition={{
                      duration:1.5,
                      repeat:Infinity,
                      repeatType:'loop'
                    }}
                    className='w-3 h-3 bg-secondary mb-1 rounded-full'
                />

               
            </div>
          </a>


        </div>
      </section>

  )
}

export default Hero