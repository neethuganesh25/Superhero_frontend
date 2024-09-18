import React from 'react';
import './Home.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import Chatbot from '../Chatbot';


const Home = ({login}) => {
  return (
    <>
      <Header />
      <div className="home-container">
        <section className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title  text-dark">Welcome to the Hero's Grievance Portal</h1>
            <p className="hero-subtitle text-dark">
              We are dedicated to resolving your concerns swiftly and effectively.
            </p>
        <Link to={'/login'}>   <button className="hero-button">Get Started</button></Link>
      
          </div>
          <div className="hero-image">
            <img className='w-100' src="https://img.freepik.com/premium-vector/full-body-cartoon-style-man-football-goalkeepr-jump-vector-illustration-flat-2_764382-116223.jpg?ga=GA1.1.309933886.1678615408&semt=ais_hybrid" alt="Hero Illustration" />
          </div>
        </section>
        <Chatbot/>
       
      </div>
      <Footer />
    </>
  );
};

export default Home;
