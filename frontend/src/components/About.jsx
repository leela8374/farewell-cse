import React from 'react'
import '../styles/Home.css'
import image2 from '../images/2.JPG';
import image4 from '../images/4.JPG';
import image8 from '../images/8.JPG';
import image9 from '../images/9.JPG'; 
import image10 from '../images/10.JPG';
import image11 from '../images/11.JPG';

function About() {
  return (
    <div className='about'>
      <h1 style={{textAlign:'center'}}>About</h1>
      <section className="container">
        <div className="box">
          <i className='bx bxs-bowl-rice'></i>
          <h3>Lunch</h3>
          <p>12:00 PM</p>
          <p>Drawing Hall</p>
        </div>
        <div className="box">
          <i className='bx bxs-bell'></i>
          <h3>Save the Date</h3>
          <p>12-04-2025</p>
        </div>
        <div className="box">
          <i className='bx bxs-map'></i>
          <h3>Place</h3>
          <p>Seminar Hall</p>
        </div>
      </section>
      <div className='images'>
        <h3 style={{textAlign:'center'}}>Photo Gallery</h3>
        <div className="marquee-container">
          <div className="marquee-content">
            {/* First set of images */}
            <img src={image8} alt="Gallery 8" />
    
            <img src={image2} alt="Gallery 2" />
            <img src={image4} alt="Gallery 4" />
            <img src={image9} alt="Gallery 9" />
            <img src={image10} alt="Gallery 10" />
            <img src={image11} alt="Gallery 11" />
            {/* Duplicate set for seamless loop */}
            <img src={image8} alt="Gallery 8" />
    
            <img src={image2} alt="Gallery 2" />
            <img src={image4} alt="Gallery 4" />
            <img src={image9} alt="Gallery 9" />
            <img src={image10} alt="Gallery 10" />
            <img src={image11} alt="Gallery 11" />
          </div>
        </div>
        <footer>
          <div className="footer-content">
            <p>Developed with love by 3rd CSE © 2025</p>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default About