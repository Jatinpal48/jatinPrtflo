import React from 'react'
import ExperianceInfo from './ExperianceInfo'

function ExperianceTopLeft() {
    return (
        <div className='flex flex-col gap-6 w-[300px]'>
            <p className='text-orange font-bold uppercase text-3xl font-special text-center'>Since 2025</p>
            <div className='flex justify-center items-center gap-4'>
                <ExperianceInfo number="-" text="Years"/>
                <p className='font-bold text-6xl text-lightBrown'>_</p>
                <ExperianceInfo number="4" text="Websites"/>

            </div>
            <p className='text-center text-white'>
                 experience in building dyanamic and user-friendly web application.
            </p>
            <ExperianceInfo number="-" text="Max Budget"/>
        </div>
    )
}

export default ExperianceTopLeft
