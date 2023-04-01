import React, { useRef } from 'react'
import Tile from 'react-tilt'
import {motion} from 'framer-motion'
import {styles} from '../styles'
import {services} from '../constants'
import {fadeIn, textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({ index, title, icon}) => {
  return (
    <Tile className="xs:w-[250px] w-full">
      <motion.div 
        variants={fadeIn("right", "spring", 0.5*index, 0.75)} className="w-full from-white p-[1px] rounded-[20px] shadow-card">
          <div 
            options={{
              max:45,
              scale:1,
              speed:450,
            }}
            className="bg-white rounded-[20px] py-5 px-12 min-h-[280px]
                        flex justify-evenly items-center flex-col">
                          <img src={icon} alt={title} className="w-16 h-16 object-contain"/>
                          <h3 className='text-black text=[20px] font-bold text-center'>{title}</h3>
                        </div>
        </motion.div>

    </Tile>
  )
}

const About = () => {
  const myRef = useRef(null);
  return (
    <>
      <div className='w-full h-full' id='about'>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText} ref={myRef}>Introduction</p>
        <h2 className={`${styles.sectionHeadText} 
          xs:before:block xs:before:absolute xs:before:bottom-2 xs:before:left-0 xs:before:w-[230px] xs:before:h-[25px] xs:before:bg-[#eab752]
          lg:before:block lg:before:absolute lg:before:bottom-2 lg:before:left-0 lg:before:w-[350px] lg:before:h-[30px] lg:before:bg-[#eab752]  
          relative inline-block`}><span className='relative text-[#37241c]'>Overview.</span></h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-seconday text-[17px] max-w-3xl leading-[30px]">
        I am a full-stack developer with a passion for creating beautiful and functional web applications.
        I'm skilled in JavaScript, React, Node.js, Express, MongoDB, Java and more.
        I am always looking for new ways to improve my skills and learn new technologies.
        And I'm looking for a job where I can do just that right now. 
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}
      </div>
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")
// export default About