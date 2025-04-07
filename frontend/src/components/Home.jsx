import React from 'react'
import '../styles/Home.css'
import image2 from '../images/adarsh.jpeg'
import image1 from '../images/Logo.png'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='home'>
      <div className="video-background">
        <iframe
          src="https://www.youtube.com/embed/Mccg0fLFq-U?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&playlist=Mccg0fLFq-U"
          title="background video"
          frameBorder="0"
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>
      <div className="content-overlay">
        <div className="content-wrapper">
          <h2 style={{color:'aqua', fontFamily:'cursive'}}>Farewell Invitation</h2>
          <br />
          <img style={{borderRadius:'50%', height:'80px', width:'80px'}} className="college-logo" src={image2} alt="Adarsh College" />
          <h1>ADARSH COLLEGE OF ENGINEERING</h1>
          <h2 style={{color:'white'}}>COMPUTER SCIENCE AND ENGINEERING</h2>
          <img style={{height:'100px'}} className="department-logo" src={image1} alt="Department Logo" />
          <h2 style={{color:'white'}}>Welcome to Farewell</h2>
          <h3 style={{color:'aqua'}} className="event-name">Phoenix</h3>
          <p style={{color:'white'}}>Rising stronger and brighter from challenges.</p>
          <Link to="/about">
            <button>About More</button>
          </Link>
        </div>
      </div>
      <footer>
        <div className="footer-content">
          <p>Developed with love by 3rd CSE © 2025</p>
        </div>
      </footer>
    </div>
  )
}

export default Home