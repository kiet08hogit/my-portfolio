import {Link, NavLink} from 'react-router-dom'
import './index.scss'
import LogoKblue from '../../assets/images/Kblue.png'
import LogoSubtitle from '../../assets/images/newsub.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faDiagramProject, faEnvelope, faHome, faSuitcase, faUser} from '@fortawesome/free-solid-svg-icons'
import{faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
const SideBar=()=>(
    <> <div className='nav-bar'>
        <Link className='logo' to='/' >
        <img src={LogoKblue} alt='logo'/>
            <img className='Kietsub' src={LogoSubtitle} alt='kiet'/>
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to='/'>
            <FontAwesomeIcon icon={faHome} color='#4d4d4e'/>

            </NavLink>


              <NavLink exact="true"  to='/about' className='about-link'>
            <FontAwesomeIcon icon={faUser} color='#4d4d4e'/>

            </NavLink>
            
            <NavLink exact="true"  to='/work' className='work-link'>
            <FontAwesomeIcon icon={faSuitcase} color='#4d4d4e'/>

            </NavLink>

             <NavLink exact="true"  to='/project' className='project-link'>
            <FontAwesomeIcon icon={faDiagramProject} color='#4d4d4e'/>

            </NavLink>
              <NavLink exact="true"  to='/contact' className='contact-link'>
            <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e'/>

            </NavLink>
        </nav>
        <ul>
            <li><a target='blank' rel='noreferrer' href='https://www.linkedin.com/in/ntkiet-ho/'>
                
                    <FontAwesomeIcon icon={faLinkedin}/>
                </a></li>
                 <li><a target='blank' rel='noreferrer' href='https://github.com/kiet08hogit'>
                
                    <FontAwesomeIcon icon={faGithub}/>
                </a></li> 
                
        </ul>
        
    </div>
    </>
   
)

export default SideBar;