import React, { useState, useEffect } from 'react';
import {useHistory } from "react-router-dom";
import '../css/About.css';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";


const About = () =>{

  return <div className='parent1'>
  <div className='expand1'>
    <h1><span className='blur'>WHO AM I? </span></h1>
    <p>
    <span className='blur2'>Hi I'm Kostas Mazarakis a software developer based in Indianapolis, IN.</span>
    <span className='blur3'> Born and raised in Greece, I've currently been in the USA for 8 years.</span>
    <span className='blur4'> I have a passion for work, especially for web design and software development.</span>
    </p>
    
    <p>
    <span className='blur5'>Determined to success in Coding Industry with intense training, over 5 completed Full scale projects and over 100 repositories in GitHub.</span>
    <span className='blur6'> Looking for a successful career with hard work, satisfaction only in perfection.</span>
    </p>

    <p>
    <span className='blur7'> My hobbies are fast cars/motorcycles and gaming.</span>
    <span className='blur8'>  I graduated from a vocational college in Greece with a focus in IT and from Coding Dojo coding bootcamp. </span>
    </p>
    </div>
</div>


}
export default About
