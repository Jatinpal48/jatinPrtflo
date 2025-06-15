import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaFigma } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import SingleSkill from './SingleSkill';
import {motion} from 'framer-motion'
import {fadeIn} from '../../FramerMotion/Variants'


const skills = [
    {
        skill: "HTML",
        icon: FaHtml5,
    },
    {
        skill:"CSS",
        icon: FaCss3Alt,
    },
     {
        skill:"JavaScript",
        icon: IoLogoJavascript,
    },
     {
        skill:"ReactJS",
        icon: FaReact,
    },
     {
        skill:"Redux",
        icon: SiRedux,
    },
     {
        skill:"TailwindCSS",
        icon: RiTailwindCssFill,
    },
     {
        skill:"Figma",
        icon: FaFigma,
    },
     {
        skill:"JAVA",
        icon: FaJava,
    },
];

function AllSkills() {
    return (
        <div>
            <div className='flex items-center justify-center relative gap-2 max-w-[1200px] max-auto'>
                {skills.map((item, index) => {
                    return <motion.div
                         variants={fadeIn('up', `0.${index}`)}
                        initial='hidden'
                        whileInView='show'
                        viewport={{once: false, amount: 0.7}}
                    > <SingleSkill key={index} text={item.skill} imgSvg={<item.icon />} /> </motion.div>;
                })}
            </div>
        </div>
    )
}

export default AllSkills
