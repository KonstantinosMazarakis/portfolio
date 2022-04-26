import React, { useState, useEffect } from 'react';
import {useHistory } from "react-router-dom";
import '../css/NavBar.css';
import {
    Link
  } from "react-router-dom";
  import LinkedInIcon from '@material-ui/icons/LinkedIn';
  import GitHubIcon from '@material-ui/icons/GitHub';

let NavBar = () =>{
    const [value, setValue] = useState("");


    return<>
    <nav>
        <img className='logo' src="/images/kostas.jpg" alt="fg" />
        <h3 className='mt-4'>Konstantinos Mazarakis</h3>
        <p className='mb-4' >FULLSTACK DEVELOPER</p>
        <Link to="/" className='nv hover-underline-animation' onClick={()=>{setValue(window.location.pathname)}} id={window.location.pathname == "/"?"active":""}>Home</Link>
        <Link to="/about" className='nv hover-underline-animation' onClick={()=>{setValue(window.location.pathname)}} id={window.location.pathname == "/about"?"active":""}>About</Link>
        <Link to="/projects" className='nv hover-underline-animation' onClick={()=>{setValue(window.location.pathname)}} id={window.location.pathname == "/projects"?"active":""}>Projects</Link>
        <Link to="/skills" className='nv hover-underline-animation' onClick={()=>{setValue(window.location.pathname)}} id={window.location.pathname == "/skills"?"active":""}>Skills</Link>
        <Link to="/resume" className='nv hover-underline-animation' onClick={()=>{setValue(window.location.pathname)}} id={window.location.pathname == "/resume"?"active":""}>Resume</Link>
        <Link to="/certifications" className='nv hover-underline-animation' onClick={()=>{setValue(window.location.pathname)}} id={window.location.pathname == "/certifications"?"active":""}>Certifications</Link>
        <Link to="/contact" className='nv hover-underline-animation' onClick={()=>{setValue(window.location.pathname)}} id={window.location.pathname == "/contract"?"active":""}>Contact</Link>
        <p className='mt-5'>
            <span className='me-2'><a href="https://www.linkedin.com/in/konstantinos-mazarakis/"><LinkedInIcon fontSize='large' color="primary"/></a></span>
            <span><a className='style-delete' href="https://github.com/KonstantinosMazarakis"><GitHubIcon fontSize='large'/></a></span>
        </p>
    </nav>

    </>
    
}
export default NavBar