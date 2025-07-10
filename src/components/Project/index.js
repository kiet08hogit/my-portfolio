import AnimatedLetters from '../AnimatedLetters';
import './index.scss'
import { useState,useEffect } from 'react';
import Loader from 'react-loaders'
import projectsdata from '../Data/projects.json'
const Project=()=>{
     const [letterClass,setLetterClass]= useState('text-animate');
       
    
        useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
         return () => clearTimeout(timeoutId);
    })

        const renderProject = (projects) => {
            return (
                <div className='images-container'>
                    {projects.map((proj, idx) => (
                        <div key={idx} className='image-box'>
                            <img className='project-image' src={proj.cover} alt='project' />
                            <div className="content">
                                    <p className="title">{proj.title}</p>
                                    <h4 className="description">{proj.description}</h4>
                                    <button className="btn" onClick={() => window.open(proj.url)}>View</button>
                                </div>
                        </div>
                    ))}
                </div>
            );
        };

    return(
       <> <div className='container project-page'>

            <div >
                <h1 className='page-title'>
                    <AnimatedLetters letterClass={letterClass} strArr={['P','r','o','j','e','c','t','s']} idx={15}/>
                </h1>
                <div>{renderProject(projectsdata.projects)}</div>
               </div>
        
        </div>
        <Loader type='pacman'/>   

        </>
    )
}
export default Project;