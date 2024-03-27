import React from 'react';
import { VerticalTimeline,VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import { styles } from '../style';
import 'react-vertical-timeline-component/style.min.css';
import { experiences } from '../constants';
import { sectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';



const ExperienceCard= ({work}) =>(
   <VerticalTimelineElement
        contentStyle={{background:'#1d1836' ,color:'#fff'}}
        contentArrowStyle={{borderRight:'7px solid #232631'}}
        date={work.date}
        iconStyle={{background:work.iconBg}}
        icon={  <div className=' flex justify-center items-center w-full h-full'>
                         <img src={work.icon}   className=' w-[60%] h-[60%] object-contain '/>
                  </div>  }
      >
        <div>
            <h3  className=' text-white text-[24px] font-bold'  >{work.title}</h3>
            <p className=' text-secondary text-[16px] font-semibold'> {work.company_name} </p>
        </div>
        
        <ul className=' mt-5 list-disc space-y-2 ml-5'>
            {  work.points.map((items, index ) => (
              <li key={index} className=' text-white text-[14px] pl-1 tracking-wider'>
                {items}</li>
            )) }
        </ul>

    </VerticalTimelineElement> 

)








const Experience = () => {
  return (
        <>
        <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>What I Have Done So Far</p>
        <h2 className={`${styles.sectionHeadText}`}>Work Experience</h2>
        </motion.div>
          <div className=' flex flex-col mt-20'>
                <VerticalTimeline>
                      {experiences.map( (work,index) =>(
                        <ExperienceCard key={index}  work={work} />
                      ) )   }
                </VerticalTimeline>
          </div>
        
        </>
 
 
 
 
    )
}

export default  sectionWrapper(Experience,"work");