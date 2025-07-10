import AnimatedLetters from '../AnimatedLetters';
import './index.scss'
import { useState,useEffect } from 'react';
import Loader from 'react-loaders'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCss3, faGitAlt, faHtml5, faJsSquare, faPython, faReact} from '@fortawesome/free-brands-svg-icons'
const About=()=>{
     const [letterClass,setLetterClass]= useState('text-animate');
       
    
        useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
         return () => clearTimeout(timeoutId);
    })

    
    return(
       <> <div className='container about-page'>

            <div className='text-zone'>
                <h1 >
                    <AnimatedLetters letterClass={letterClass} strArr={['A','b','o','u','t',' ','m','e']} idx={15}/>
                </h1>
                <p>I'm Kiet Ho! A Computer Science junior at University of Illinios Chicago. Interested in fullstack/backend development, AI/ML</p>
                <p>
                I am actively looking for Software Engineering intern in an established tech company with oppoturnity to work with the lastest technologies and diverse projects 

                </p>
            </div>

            <div className='skills'>
                <p>Programming Language: Javascript, Python, C++, C, HTML/CSS</p>
                   <p>Frameworks and Tools: ReactJs, NodeJs, Boostrap, Git</p>
                
            </div>
            <div className='stage-cube-cont'>
                <div className='cube-spinner'>
                <div className='face1'><FontAwesomeIcon icon={faReact}color='#5ED4F4'/></div>
                <div className='face2'><FontAwesomeIcon icon={faHtml5} color='#F06529'/></div>
                <div className='face3'><FontAwesomeIcon icon={faCss3}color='#28A4D9'/></div>                
                <div className='face4'><FontAwesomeIcon icon={faPython} color='#EFD81D'/></div>
                <div className='face5'><FontAwesomeIcon icon={faJsSquare} color='#EFD81D'/></div>
                <div className='face6'><FontAwesomeIcon icon={faGitAlt} color='#EC4D28'/></div>

                    

                </div>

            </div>
        </div>
        <Loader type='pacman'/>   

        </>
    )
}
export default About;