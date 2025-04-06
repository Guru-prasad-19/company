import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../Styles/TitlePage.css";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { SiGmail } from "react-icons/si";
import Logo from "../JCLogo.png";
const ContactCard = ({ platform }) => {
  return (
    <div className="contact-container">
      <a
        href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
          platform[1].url
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="contact-item"
      >
        <SiGmail className="icon" />
      </a>
      <a
        href={platform[0].url}
        target="_blank"
        rel="noopener noreferrer"
        className="contact-item"
      >
        <FaLinkedinIn className="icon" />
      </a>
      <a
        href={platform[2].url}
        target="_blank"
        rel="noopener noreferrer"
        className="contact-item"
      >
        <IoLogoInstagram className="icon" />
      </a>
    </div>
  );
};

const AnimatedProgressBar = ({ progress, duration = 3500 }) => {
  const [currentProgress, setCurrentProgress] = useState(0);

  useEffect(() => {
    const startAnimation = setTimeout(() => {
      setCurrentProgress(progress);
    }, 100);
    return () => clearTimeout(startAnimation);
  }, [progress]);

  const containerStyles = {
    height: "10px",
    width: "100%",
    backgroundColor: "#ababab",
    borderRadius: "10px",
    overflow: "hidden",
  };

  const fillerStyles = {
    height: "100%",
    width: `${currentProgress}%`,
    backgroundColor: "#ffffff",
    borderRadius: "inherit",
    textAlign: "right",
    transition: `width ${duration}ms ease-in-out`,
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}></div>
    </div>
  );
};
function TitlePage() {
  const [progress, setProgress] = useState(0);
  const platform1 = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/jones-consortium/",
    },
    { name: "Mail", url: "contact@jonesconsortium.in", icon: "fab fa-github" },
    {
      name: "Instagram",
      url: "https://www.instagram.com/jones.consortium?igsh=MWZzbWlsMjQwZDY5Yg%3D%3D",
      icon: "fab fa-instagram",
    },
  ];
  const platform2 = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/jones-realty-pvt-ltd/about/",
    },
    { name: "Mail", url: "realty@jonesconsortium.in ", icon: "fab fa-github" },
    {
      name: "Instagram",
      url: "https://www.instagram.com/jones.realty.ventures?igsh=MW44emNjcDMyOWxzOQ%3D%3D",
      icon: "fab fa-instagram",
    },
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 80 ? prev + 10 : 80));
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="coming-soon-container">
      <div className="circular-gradient"></div>
      <div className="circular-gradient"></div>
      <div className="circular-gradient"></div>
      <div className="circular-gradient"></div>
      
      <img className="logo"  src={Logo} alt=""/>
      <motion.div
        className="background-animation"
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
      <motion.h1
        className="site-title"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <p>
          
          Jones Consortium 
          </p> 
        {/* <span className="pipe">|</span>
        <p>

        Jones Realty ventures
        </p> */}
      </motion.h1>
      <div className="body-content">

      <motion.p
        className="coming-soon-text"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
        >
        A thriving vision is taking shape. Get ready to experience the
        extraordinary!
      </motion.p>
        </div>
      <div className="progress-bar-container">
        <h1 className="progress-bar-text">Under Construction</h1>
        <AnimatedProgressBar progress={progress} />
      </div>
      <div className="footer">

      <div className="contact-info">
        <div className="contact-individual">
          <h3>Jones Consortium : </h3>
          <ContactCard platform={platform1} />
        </div>
        {/* <div className="contact-individual">
          <h3>Jones Realty ventures : </h3>
          <ContactCard platform={platform2} />
        </div> */}
      </div>
      {/* <div class="map-container">
        <a
        href="https://www.google.com/maps?q=12.955201,80.171195"
        target="_blank"
        rel="noopener noreferrer"
        >
        <div class="map-rectangle">
        <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3888.260102646029!2d80.16861967507617!3d12.955201087358668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDU3JzE4LjciTiA4MMKwMTAnMTYuMyJF!5e0!3m2!1sen!2sin!4v1736067221480!5m2!1sen!2sin"
        width="600"
        height="450"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        </div>
        </a>
        </div> */}
      <footer>© 2025 All Rights Reserved</footer>
        </div>
    </div>
  );
}

export default TitlePage;
