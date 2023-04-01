import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'
import { styles } from '../styles'
import { experiences } from '../constants'
import { SectionWrapper } from '../hoc'
import { textVariant } from '../utils/motion'

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{background: 'white', color:"#fff", boxShadow: '30px 60px 100px -15px #E0deda', borderRadius: '20px'}}
    contentArrowStyle={{borderRight: '7px solid #eab752'}}
    date={experience.date}
    dateClassName='text-black-100 text-[14px] font-semibold'
    iconStyle={{background: experience.iconBg}}
    icon={
      <div className='flex justify-center items-center w-full h-full'>
        <img 
          src={experience.icon} 
          alt={experience.company_name} 
          className="w-[60%] h-[60%] object-contain"/>
      </div>
    }
    >
    <div>
      <h3 className="text-black text-[24px] font-bold">
        {experience.title}
      </h3>
      <p className='text-black text-[16px] font-semibold' style={{margin: 0}}>{experience.company_name}</p>
    </div>

    <ul className='mt-5 list-disc ml-5 space-y-2'>
      {experience.points.map((point, index) => (
        <li key={`experience-point-${index}`} 
          className="text-black-100 text-[14px] pl-1 tracking-wider">
            {point}
          </li>
      ))}
    </ul>
  </VerticalTimelineElement>
)

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={`${styles.sectionHeadText} before:block before:absolute 
        xs:before:bottom-2 xs:before:left-0 xs:before:w-[380px] xs:before:h-[25px] xs:before:bg-[#eab752]
        lg:before:bottom-2 lg:before:left-0 lg:before:w-[550px] lg:before:h-[30px] lg:before:bg-[#eab752] 
         relative inline-block`}><span className='relative text-[#37241c]'>Work Experience.</span></h2>
        
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline lineColor={'#463719'}
        >
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} {...experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, "work") 