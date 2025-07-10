import AnimatedLetters from '../AnimatedLetters';
import './index.scss'
import { useState,useEffect } from 'react';
import Loader from 'react-loaders'
import SuitcaseandComp from '../../assets/images/suitandcomp.png'
const Work=()=>{
     const [letterClass,setLetterClass]= useState('text-animate');
       
    
        useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
         return () => clearTimeout(timeoutId);
    })
     return(
       <> <div className='container work-page'>

            <div className='text-zone'>
                <h1 >
                    <AnimatedLetters letterClass={letterClass} strArr={['E','x','p','e','r','i','e','n','c','e']} idx={15}/>
                </h1>
                    <div className='experience-box'>
                        <div className='card1'>
                            <h2>
                                Credit Union 1 Arena UIC
                            </h2>
                            <p>
                            Managed registration and seating logistics for 15 campus events, 
                            directing over 3,000 attendees (avg. 200 per event) and cutting average check-in time by 30%.
                            </p>
                            <p> Provided front-line support throughout each event, resolving 100+ attendee inquiries and technical issues, 
                                contributing to a 95% satisfaction rate on post-event surveys. </p>

                            <p className='duration'>  February 2025 - Present </p>
                        </div>

                            <div className='card2'>
                            <h2>
                                This could be your company!
                            </h2>
                            <p>
                            Software Engineer Internship 
                            </p>
                            

                            <p className='duration'>  5/2026 </p>
                        </div>
                        
                           

                          
                    </div>
                    <img className='suitcase' src={SuitcaseandComp} alt='suitcase'/>
               
         
               </div>
        
        </div>
        <Loader type='pacman'/>   
        </>
)}
export default Work;