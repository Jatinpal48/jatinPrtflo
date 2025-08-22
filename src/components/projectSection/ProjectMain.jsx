import React from 'react'
import ProjectText from './ProjectText'
import SingleProject from './SingleProject'
import {motion} from 'framer-motion'
import {fadeIn} from '../../framerMotion/Variants'

const projects = [
    {
        name: "Krishisetu",
        year: "mar2025",
        align: "right",
        image: "/images/website-img-1.jpg",
        link: "https://github.com/Jatinpal48/Krishisetujatin.git",
    },
    {
        name: "CineBook",
        year: "mar2025",
        align: "left",
        image: "/images/website-img-2.webp",
        link: "https://movie-ticket-booking-orcin.vercel.app/",
    },
    {
        name: "WeatherApp",
        year: "april2025",
        align: "right",
        image: "/images/website-img-3.jpg",
        link: "https://weather-app-nine-theta-81.vercel.app/",
    },
    
];

function ProjectMain() {
    return (
        <div id='Projects' className='max-w-[1200px] mx-auto px-4'>
            <motion.div
             variants={fadeIn('up', 0.2)}
             initial='hidden'
             whileInView='show'
             viewport={{once: false, amount: 0}}
            >
            <ProjectText />
            </motion.div>
            <div className='flex flex-col gap-20 max-w-[900px] mx-auto mt-12'>
            {projects.map((item,index) => {
                return <SingleProject key={index} name={item.name} year={item.year} align = {item.align} image={item.image} link={item.link}/>
            })}
            </div>
        </div>
    )
}

export default ProjectMain
