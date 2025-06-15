import React from 'react'

function AboutMeText() {
    return (
        <div className='flex flex-col md:items-start sm:items-center md:text-left sm:text-center'>
            <h2 className='text-6xl text-cyan mb-10'>About Me</h2>
            <p className='text-white'>I'm Jatin Pal, a front-end developer focused on creating clean, responsive, and user-friendly web applications using React.js. I enjoy turning ideas into functional, interactive interfaces with HTML, CSS, and JavaScript. While I'm still early in my journey, I’m constantly learning and improving my skills — from writing better code to understanding how to build smooth and accessible user experiences. I take pride in building with precision, curiosity, and a strong attention to detail.</p>
            <button className='border border-orange rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-cyan'>My Projects</button>
        </div>
    )
}

export default AboutMeText
