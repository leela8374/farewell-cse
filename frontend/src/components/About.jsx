import React from 'react'
import '../styles/Home.css'
import image2 from '../images/2.JPG'
import image4 from '../images/4.JPG'
import image8 from '../images/8.JPG'
import image9 from '../images/9.JPG'
import image10 from '../images/10.JPG'
import image11 from '../images/11.JPG'
import faculty1 from '../images/faculty1.jpg'
import faculty2 from '../images/faculty2.jpg'
import faculty3 from '../images/faculty3.jpg'
import hod from '../images/Hod.jpg'
import principal from '../images/Principal.jpg'
import faculty4 from '../images/faculty4.jpg'
import faculty5 from '../images/faculty5.jpg'
import faculty6 from '../images/faculty6.jpg'
import faculty7 from '../images/faculty7.jpg'
import management from '../images/management.jpg'

function About() {
  const galleryImages = [image8, image2, image4, image9, image10, image11]

  return (
    <div className='about'>
      <h1>About</h1>
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
      <div className="faculty-section">
        <h2>Chief Guests</h2>
        <div className="faculty-grid">
          <div className="faculty-card">
            <img src={management} alt="Management" />
          </div>
        </div>
      </div>

      <div className="faculty-section">
        <h2>Faculty</h2>
        <div className="faculty-grid">
        <div className="faculty-card">
            <img src={principal} alt="Faculty 2" />
            <h4>Dr Y.V.N. Rajasekhar</h4>
          </div>
          <div className="faculty-card">
            <img src={hod} alt="HOD" />
            <h4>P. Swathi</h4>
          </div>
          <div className="faculty-card">
            <img src={faculty1} alt="Faculty 1" />
            <h4>S. Sravani</h4>
          </div>
          <div className="faculty-card">
            <img src={faculty2} alt="Faculty 2" />
            <h4>G. Deepika</h4>
          </div>
          <div className="faculty-card">
            <img src={faculty3} alt="Faculty 3" />
            <h4>Ch. Phillip</h4>
          </div>
          <div className="faculty-card">
            <img src={faculty7} alt="Faculty 2" />
            <h4>S. Sridevi</h4>
          </div>
          <div className="faculty-card">
            <img src={faculty6} alt="Faculty 2" />
            <h4>M. Ramya sri</h4>
          </div>
          <div className="faculty-card">
            <img src={faculty4} alt="Faculty 2" />
            <h4>Likitha</h4>
          </div>
          <div className="faculty-card">
            <img src={faculty5} alt="Faculty 2" />
            <h4>Dhanalakshmi</h4>
          </div>
        </div>
      </div>

      <div className="gallery-section">
        <h3>Photo Gallery</h3>
        <div className="marquee-container">
          <div className="marquee-content">
            {galleryImages.map((img, index) => (
              <img key={index} src={img} alt={`Gallery ${index + 1}`} />
            ))}
            {galleryImages.map((img, index) => (
              <img key={`dup-${index}`} src={img} alt={`Gallery ${index + 1}`} />
            ))}
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

export default About