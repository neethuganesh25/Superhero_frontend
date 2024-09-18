import React from 'react';
import { motion } from 'framer-motion';
import './About.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  return (
    <>
      <Header />
      <div className="about">
       
        <div className="hero-section">
          <img src='https://media.istockphoto.com/id/1364547335/vector/vector-superhero-wielding-shield-silhouette-stock-illustration.jpg?s=612x612&w=0&k=20&c=uK32t9QdF0E65Ux_8flRFfXKEIAhagAdB8CtAL6uu9A=' alt="Superhero" className="hero-image" />
          
        </div>

        
        <div className="content-grid">
          <motion.div
            className="content-card"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img src="https://media.istockphoto.com/id/1499105300/vector/vector-retro-art-deco-superhero-silhouette-looking-at-far-away-with-night-sky-in-the.jpg?s=612x612&w=0&k=20&c=UqKkTCnjOwsFg8z4wefPaYDtIKKbT6_FBZEllHxDHMU=" alt="Mission" className="card-image" />
            <div className="card-text">
              <h2>Our Mission</h2>
              <p>
                Our superhero is dedicated to safeguarding humanity from the forces of evil,
                while also addressing the everyday grievances of common citizens.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="content-card"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <img src="https://media.istockphoto.com/id/1419807700/vector/superhero-electrically-charged-by-thunder-strike.jpg?s=612x612&w=0&k=20&c=m5BD5fCWlDoRB9BIihHG9rdZ1f6gj6PxF8zUY4hBJ-M=" alt="Background" className="card-image" />
            <div className="card-text">
              <h2>Superhero Background</h2>
              <p>
                Born from the core of the Earth, our superhero possesses immense strength,
                speed, and the power to harness elemental forces.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="content-card"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <img src="https://media.istockphoto.com/id/838990622/vector/vector-businessman-superhero-landing.jpg?s=612x612&w=0&k=20&c=VROPdUbmK9VntiPwdXPYe9MftNcbQ_YvgP5iDuuOGIo=" alt="Grievances" className="card-image" />
            <div className="card-text">
              <h2>How We Address Grievances</h2>
              <p>
                Every grievance submitted will be reviewed and addressed as swiftly as possible. Justice will be served!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
