import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about'/>
        <img src={play_icon} alt="" className='play_icon'/>
      </div>
      <div className="about-right">
        <h3>ABOUT STORE</h3>
        <h2>Giving Customers The Best</h2>
        <p>"A brand for a company is like a reputation for a person.
            You earn a reputation by trying to do hard things well."
                                                   - Jeff Bezos</p>
        <p>"Happy customers are your biggest advocates and can become your most successful sales team"
                                                                                      - Lisa Maisello
        </p>
        <p>"We don't want to push our ideas on to customers, we simply want to make what they want."
                                                                                      - Laura Ashley
        </p>
      </div>
    </div>
  )
}

export default About