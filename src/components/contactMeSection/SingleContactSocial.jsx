import React from 'react';

function SingleContactSocial({ link, Icon }) {
    return (
        <a
            href={link}
            className='text-2xl h-12 w-12 border border-orange-500 text-orange-500 rounded-full p-3 flex items-center justify-center hover:bg-orange-100 transition-colors duration-300'
            target="_blank"
            rel="noopener noreferrer"
        >
            <Icon size={24} />
        </a>
    );
}

export default SingleContactSocial;
