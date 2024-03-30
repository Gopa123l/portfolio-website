import './AboutContentStyles.css';
import React from 'react'
import MyImage from '../assests/MyPhoto.jpeg'

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h4>Hi there!</h4>
            <p>I'm Gopal,currently living in Gurgaon working as a Software Developer at Legistify.I am a BITS Pilani graduate,having experience working with several full-stack web development projects such as E-Commerce, Email-Sync, In-app Notifications. I also worked with several web designing projects such as admin dashboard,landing page,portfolio website. My skills includes various languages & technologies such as HTML, CSS, JavaScript, NodeJS, ReactJS,ExpressJS,MongoDB,Developing RESTFUL APIs,Socket.io,PostgreSQL,AWS S3,Gmail APIs</p>
            <p> I'm open to discussing new projects and solving problems. </p>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={MyImage} className="img" alt="true"/>                    
                </div>                
            </div>
        </div>        
    </div>
  )
}

export default AboutContent