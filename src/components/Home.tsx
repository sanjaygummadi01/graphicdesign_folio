// import React from 'react';
import '../styles/animations.css';
import '../styles/home-layout.css';
import '../styles/background-text.css';
import '../styles/profile-image.css';
import '../styles/home-typography.css';
import '../styles/home-buttons.css';
import '../styles/scroll-indicator.css';
import '../styles/home-responsive.css';

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="background-text">GRAPHIC DESIGNER</div>
      <div className="home-container">
        <div className="profile-image-container floating">
          <div className="profile-image">
            <img 
              src="./logos/hero-portrait.png" 
              alt="Profile" 
            />
          </div>
        </div>
        
        <div className="home-content">
          <h1 className="main-title">
            <span className="greeting">Hey, I'm</span>
            <span className="name">SANJAY GUMMADI</span>
          </h1>
          <h2 className="subtitle">Creative Graphic Designer</h2>
          <p className="tagline">
            Specialized in Web Design, UI/UX, Branding and Print Design
          </p>
          
          <div className="cta-buttons">
            <button 
              className="btn primary"
              onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </button>
            <button 
              className="btn secondary"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
      
      {/* <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
      </div> */}
    </section>
  );
};

export default Home;
