import './FooterStyles.css'
import React from 'react';
import { FaPhone, FaMailBulk, FaInstagram, FaLinkedin, FaGithub, FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="Home">
                        <h4><FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />Gurgaon, India</h4>
                    </div>
                    <div className="phone">
                        <h4><FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />+91 6295602964</h4>
                    </div>
                    <div className="email">
                        <h4><FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />gopalagarawal629@gmail.com</h4>
                    </div>
                </div>
                <div className="right">
                    <h4>About Me</h4>
                    <p>My name is Gopal Agarwal, and I have one year of professional experience as a Software Developer. I enjoy working in full stack web development and design projects.</p>
                    <div className="social">
                        <Link to="https://github.com/Gopa123l">
                            <FaGithub size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                        </Link>
                        <Link to="https://www.linkedin.com/in/gopal-agarwal-9b0943218/">
                            <FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                        </Link>
                        <Link to="https://www.instagram.com/gopal_agarwal_42/">
                            <FaInstagram size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer