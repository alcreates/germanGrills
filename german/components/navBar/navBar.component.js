import navBarStyles from '../../styles/navBar.module.css';
import InfoBar from '../infoBar/infoBar.component';
export default function NavBar() {
   return(
       <div className={navBarStyles.container}>
           <InfoBar/>
           <div className={navBarStyles.title}>
                <h1> 
                    GRILL CLEANING & REPAIR SERVICES  
                    BY GERMAN
                </h1>
           </div>
       </div>
   ) 
}