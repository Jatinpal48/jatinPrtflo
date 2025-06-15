import SingleContactSocial from './SingleContactSocial';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

function ContactSocial() {
    return (
        <div className='flex gap-4'>
            <SingleContactSocial link='https://github.com/Jatinpal48' Icon={FaGithub} />
            <SingleContactSocial link='https://www.linkedin.com/in/jatin-pal-25085525b' Icon={FaLinkedin} />
            <SingleContactSocial link='https://www.instagram.com/jatin_pal48' Icon={FaInstagram} />
        </div>
    );
}

export default ContactSocial;
