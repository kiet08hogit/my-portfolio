import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logoK.blue.png'
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';
import Loader from 'react-loaders';
const Home=()=>{
    const [letterClass,setLetterClass]= useState('text-animate');
    const nameArr=['i','e','t',' ','H','o'];
    const jobArr=['S','o','f','t','w','a','r','e',' ','E','n','g','i','n','e','e','r']



    useEffect(() => {
    const timeoutId = setTimeout(() => {
        setLetterClass('text-animate-hover');
    }, 4000);

    return () => clearTimeout(timeoutId);
    }, []);


    
    return(
        <>
       <div className="home-page container">

        <div className="text-zone">
        <h1>
            <span className={letterClass}> H</span>
            <span className={`${letterClass} _12`}>i,</span>
                         
          <br/>
           <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m </span> <span ><img className={letterClass} src={LogoTitle} alt="swe"/>  
            <AnimatedLetters letterClass={letterClass} strArr={nameArr} idx={15}/> </span>
      

        <br/>
        <AnimatedLetters letterClass={letterClass} strArr={jobArr} idx={15}/>
        </h1>
         <h2 >Computer Science, 2027 at University of Illinios Chicago</h2>
            <Link to='/contact' className='flat-button'>Contact me</Link>
        </div>
       
        <Logo/>
       </div>
        <Loader type='pacman'/>
        </>
    )
}
export default Home;