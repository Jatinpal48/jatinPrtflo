import React from 'react'
import ContactInfo from './ContactInfo'

function ContactMeRight() {
    return (
        <div className='flex flex-col item-center justify-center gap-12'>
            <img src="/images/email-image.png" alt="Contact me" className="max-w-[300px]" />

            <ContactInfo/>
        </div>
    )
}

export default ContactMeRight
