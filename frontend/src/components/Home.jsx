import React from 'react'
import '../styles/Home.css'
import {Link} from 'react-router-dom'
import image2 from '../images/adarsh.jpeg'

import image1 from '../images/Logo.png';

function Home() {
  return (
    <div style={{backgroundColor:'black'}} className='home'>

      <div className="content-overlay">
        <div style={{paddingTop:'10px', paddingBottom:'150px', paddingLeft:'40px'}} className="d-flex align-items-center">
          <div style={{ textAlign:'center'}} className="flex-grow-1 ms-3">
            <img style={{borderRadius:'50%', height:'70px'}} src={image2} alt="Adarsh College" />
            <h1>ADARSH COLLEGE OF ENGINEERING</h1>
            <h2 style={{color:'white'}}>COMPUTER SCIENCE AND ENGINEERING</h2>
            <img style={{height:'130px', marginTop:'70px', width:'130px', borderRadius:'50%', border:'2px solid aqua'}} src={image1} alt="" />
            <h2 style={{color:'white'}}>Welcome to Farewell</h2>
            <h3 style={{color:'aqua', fontSize:'40px'}}>Phoenix</h3>
            <p style={{color:'white'}}>Rising stronger and brighter from challenges.</p>
            <Link to='/about'>
              <button>About More</button>
            </Link>
          </div>
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