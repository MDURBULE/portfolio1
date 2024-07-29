import React from 'react';
import Nav from './component/Nav';
import Footer from './component/Footer';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Skills from './component/Skills';
import Projects from './component/Projects';
import { Toaster } from 'react-hot-toast';



const App = () => {
  return (
    <>
     <div>
     <Nav/>
     <Home/>
     <About/>
     <Skills/>
     {/* <Projects/> */}
     <Contact/>
     <Footer/>
     </div>
     <Toaster/>
    </>
  )
}

export default App