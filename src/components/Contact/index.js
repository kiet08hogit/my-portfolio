import Loader from 'react-loaders';
import './index.scss';
import { useState,useEffect, useRef } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import emailjs from '@emailjs/browser'

const Contact=()=>{
    const [letterClass,setLetterClass]= useState('text-animate');
     useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);
    
        return () => clearTimeout(timeoutId);
        }, []);

        const refForm= useRef()
       const sendEmail = (e) => {
            e.preventDefault();

            emailjs.sendForm(
                'service_ah98zr3', 
                'template_cgc2zka', 
                refForm.current,
               "oHmLFuY7SyWZTqyBO" 
            ).then(
                () => {
                    alert('Message successfully sent');
                    window.location.reload(false);
                },
                () => {
                    alert('Failed to send the message, please try again');
                }
            );
        };
    return(
        <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArr={['C','o','n','t','a','c','t',' ','m','e']} idx={15}/>
                </h1>
                <p> Thank you for being here. I really appreciate your getting in touch </p>
                <p>I sincerely value your interest and welcome all forms of communication—whether 
                    it's a question, feedback, or a potential collaboration. 
                    Please feel free to connect with me by completing the contact form, and I will respond at my earliest convenience.</p>
                <div className='contact-form'>
                    <form ref={refForm} onSubmit={sendEmail}>
                    <ul>
                        <li className='half'>
                            <input type='text' name='name' placeholder='Name' required/>
                    
                        </li>
                        <li className='half'>
                            <input type='email' name='email' placeholder='Email' required/>
                    
                        </li>
                        <li>
                            <input type='text' name='subject' placeholder='Subject' required/>
                    
                        </li>
                        <li>
                            <textarea  name='message' placeholder='Message' required></textarea>
                    
                        </li>
                        <li>
                            <input type='submit' className='flat-button' value='Send'/>
                        </li>
                 </ul>
                    </form>
                </div>
                
            </div>
        </div>
        <Loader type='pacman'/>
        </>
    )
}
export default Contact;