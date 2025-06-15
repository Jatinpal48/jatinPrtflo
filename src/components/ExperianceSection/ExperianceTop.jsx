import React from 'react'
import ExperianceTopRight from './ExperianceTopRight'
import ExperianceTopMiddle from './ExperianceTopMiddle'
import ExperianceTopLeft from './ExperianceTopLeft'

function ExperianceTop() {
    return (
        <div className='flex lg:flex-row sm:flex-col gap-4 items-center justify-center'>
             <ExperianceTopLeft/>
             <ExperianceTopMiddle/>
             <ExperianceTopRight/>
           
        </div>
    )
}

export default ExperianceTop
