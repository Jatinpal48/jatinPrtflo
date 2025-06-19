import React from 'react'
import ExperianceText from './ExperianceText'
import ExperianceTop from './ExperianceTop'
import AllExperiance from './AllExperiance'
import {motion} from 'framer-motion'
import {fadeIn} from '../../framerMotion/Variants'

function ExperianceMain() {
    return (
        <div id='Experience' className='max-w-[1200px] mx-auto px-4 '>
            <motion.dev
            variants={fadeIn('down', 0.2)}
                                    initial='hidden'
                                    whileInView='show'
                                    viewport={{once: false, amount: 0.7}}>
            <ExperianceText/>
            </motion.dev>
            <motion.dev
            variants={fadeIn('up', 0.2)}
                                    initial='hidden'
                                    whileInView='show'
                                    viewport={{once: false, amount: 0}}>
            <ExperianceTop/>
            </motion.dev>
            <div className='w-full h-1 mt-4 bg-lightBrown lg:block sm:hidden'></div>
            <AllExperiance/>
        </div>
    )
}

export default ExperianceMain
