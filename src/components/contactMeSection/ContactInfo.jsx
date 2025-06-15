import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import SingleInfo from './SingleInfo';
function ContactInfo() {
    return (
        <div className='flex flex-col gap-4 text-white'>
            <SingleInfo text="paljatin128@gmail.com" Image = {MdOutlineEmail} />
            <SingleInfo text="+91 8423468439" Image = {FaPhoneAlt} />
            <SingleInfo text="Ghaziabad, Delhi" Image ={CiLocationOn} />
        </div>
    )
}

export default ContactInfo
