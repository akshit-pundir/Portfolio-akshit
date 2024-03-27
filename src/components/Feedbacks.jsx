import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../style';
import { fadeIn,textVariant } from '../utils/motion';
import { testimonials } from '../constants';
import { sectionWrapper } from '../hoc';


const FeedbackCard = ({index,testimonial ,name,designation,company,image }) =>{
    return(
        <motion.div
            variants={fadeIn("", "spring",index*0.5, 0.75 )}
            className=' bg-black-200 p-10 rounded-3xl sm:w-[320px] w-full'
        >
          <p className=' text-white text-[48px] font-black'>"</p>

        <div className=' mt-1'>
          <p className=' text-white tracking-wider text-[18px] '>{testimonial}</p>
            
            <div className=' mt-7 flex justify-between items-center gap-1'>
                  <div className=' flex-1 flex flex-col'>
                      <p className=' text-white font-medium text-[16px]'> <span className='blue-text-gradient p-1'>@</span>{name} </p>
                      <p className=' text-secondary text-[13px] mt-1'> {designation} of {company} </p>
                  </div>
                <img src={image} className=' w-10 h-10 rounded-full' />
            </div>
        </div>


        </motion.div>



    )
}





const Feedbacks = () => {

  return (

    <div className=' mt-12 bg-black-100 rounded-[20px]  '>
        <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
            <motion.div variants={textVariant()}>
                    <p className={`${styles.sectionSubText}`}>What Other Say</p>
                    <h2 className={`${styles.sectionHeadText}`}>Testimonials</h2>
            </motion.div>
        </div>
        <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
            
            {testimonials.map( (item,index) => (
               <FeedbackCard
                    key={item.name}
                    {...item}
              />
            ) ) }
        </div>
      </div>



    )
}

export default   sectionWrapper(Feedbacks,"");