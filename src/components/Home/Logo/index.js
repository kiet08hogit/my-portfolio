import './index.scss'
import LogoK from '../../../assets/images/Kblue.png'
const Logo=()=>{
  
    return(
        <div className='logo-container'>
            <img src={LogoK} className='solid-logo' alt='swe'/>
         <svg 
         width="658" 
         height="492" 
         viewBox="0 0 658 492" 
         fill="none"
          xmlns="http://www.w3.org/2000/svg">
         <g  className="svg-container"><path d="M259 170L285 83" stroke="#FFD700"/>
            <path d="M319 194L352 82" stroke="#FFD700"/>
            <path d="M319 195L416 84" stroke="#FFD700"/>
            <path d="M386 237L530 83" stroke="#FFD700"/>
            <path d="M227.5 267L189 389.5" stroke="#FFD700"/>
            <path d="M301 271L264.5 390" stroke="#FFD700"/>
            <path d="M301.5 271L356.5 392.481" stroke="#FFD700"/>
            <line x1="386.459" y1="236.801" x2="452.849" y2="389.511" stroke="#FFD700"/></g>
</svg>



           
        </div>
    )
}
export default Logo;