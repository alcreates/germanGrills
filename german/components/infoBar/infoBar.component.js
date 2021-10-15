import navBarStyles from '../../styles/navBar.module.css';
import { FaPhoneAlt, FaRegClock, FaMapMarkerAlt } from 'react-icons/fa';


export default function InfoBar() {
    return (
        <div className={navBarStyles.infoBar}>
                <div className={navBarStyles.item}>
                    <span><FaMapMarkerAlt/></span>
                    59 Church St. Millburn, NJ
                </div>
                <div className={navBarStyles.item}>
                    <span><FaRegClock/></span>
                    Mon-Sat 7am - 7pm
                </div>
                <div className={navBarStyles.item}>
                    <span><FaPhoneAlt/></span>
                    973-449-0532
                </div>
                <div className={navBarStyles.item}>
                    <button>
                        Get Qoute
                    </button>
                </div> 
        </div>
    )
}