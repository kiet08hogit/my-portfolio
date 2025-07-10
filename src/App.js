import './App.scss';
import { Route,Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Project from './components/Project';
import Work from './components/Work';
function App() {
  return (
      <>
      <Routes>
        <Route path='/'element={<Layout/>}>
        
        <Route index element={<Home/>}/>
          <Route path='About' element={<About/>}/>
          <Route path='Contact' element={<Contact/>}/>
          <Route path='Project' element={<Project/>}/>
           <Route path='Work' element={<Work/>}/>
        </Route>

      </Routes>
        
      </>
    
  );
}

export default App;
