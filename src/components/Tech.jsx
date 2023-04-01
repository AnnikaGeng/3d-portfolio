import React from 'react'
import { BallCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'
import {motion} from 'framer-motion'
import {styles} from '../styles'
import {fadeIn, textVariant} from '../utils/motion'

const Tech = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Sillset</p>
        <h2 className={`${styles.sectionHeadText} 
          xs:before:block xs:before:absolute xs:before:bottom-2 xs:before:left-0 xs:before:w-[130px] xs:before:h-[25px] xs:before:bg-[#eab752]
          lg:before:block lg:before:absolute lg:before:bottom-2 lg:before:left-0 lg:before:w-[190px] lg:before:h-[30px] lg:before:bg-[#eab752]  
          relative inline-block`}><span className='relative text-[#37241c]'>Skills.</span></h2>
      </motion.div>
      <div className='flex flex-row flex-wrap justify-center gap-10 lg:my-32 xs:my-5'>
        {technologies.map((tech, index) => (
          <div className='w-28 h-28' key={tech.name} style={{ userSelect: 'none' }}>
            <BallCanvas icon={tech.icon} />
            <p className='text-brown text-center mt-2'>{tech.name}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Tech, "")