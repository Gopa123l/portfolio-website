import React from "react";
import "./index.css";
import Home from './routes/Home.js'
import Project from './routes/Project.js'
import About from './routes/About.js'
import Contact from './routes/Contact.js'
import {Route,Routes} from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path='/portfolio-website' element= {<Home />} />
        <Route path='/experience' element= {<About />} />
        <Route path='/project' element= {<Project />} />
        <Route path='/contact' element= {<Contact />} />
        </Routes> 
    </>
  );
}

export default App;
