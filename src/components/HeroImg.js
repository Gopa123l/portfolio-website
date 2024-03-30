import './HeroImgStyles.css';
import IntroImg from '../assests/introbg.jpg';
import {Link} from 'react-router-dom';
import React from 'react';

const HeroImg = () => {
  return (
    <div className= "hero">
        <div className="mask">
            <img className="intro-img" src= {IntroImg} alt="IntroImg" />
        </div>
        <div className="content">
            <p>Hi, I'm Gopal Agarwal</p>
            <h1>Full Stack Developer+Designer</h1>
            <div>
                <Link to='/project' className='btn'>Projects</Link>
                <Link to='/contact' className= 'btn btn-light'>Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg