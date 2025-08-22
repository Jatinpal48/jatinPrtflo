import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import SingleExperience from './SingleExperiance';
import {motion} from 'framer-motion'
import {fadeIn} from '../../framerMotion/Variants'
const experiences = [
    {
        job:"TechStack Intern",
        company: "Hashednit Innovation",
        date:"june 2025 - Present",
        responsibilities: [
            "Collaborated with the development team to build and enhance web application using technologies such as React.js , Tailwind CSS, JavaScript and Node.js.",
            "Worked on full-stack features including frontend UI Components and backend API Integeration",
            
        ],
    },
    // {
    //     job:"Course Instructor",
    //     company: "Nucamp",
    //     date:"2023-Present",
    //     responsibilities: [
    //         "Explaining and facilitating web development concepts.",
    //         "Help students withnthier assignment and grade them weekly.",
    //         "provide support for students through their learning journey.",
    //     ],
    // },
    // {
    //     job:"Front-End Developer",
    //     company: "Freelance",
    //     date:"2021-2022",
    //     responsibilities: [
    //         "Building responsive websites.",
    //         "Working with clients to understand their needs.",
    //         "Creating user-friendly interfaces.",
    //     ],
    // },
];
function AllExperiance() {
    return (
        <div className='flex md:flex-row sm:flex-col items-center justify-between'>
            {experiences.map((experience, index) => {
                return (
                    <>
                        <SingleExperience key={index} experience={experience} />
                       {index < 2 ? (
                        <motion.div
                        variants={fadeIn('right', 0.2)}
                                    initial='hidden'
                                    whileInView='show'
                                    viewport={{once: false, amount: 0}}>
                        <FaArrowRight className='text-6xl text-orange lg:block sm:hidden'/>
                        </motion.div>
                       ) : ""} 
                    </>
                )
            })}
        </div>
    )
}

export default AllExperiance
