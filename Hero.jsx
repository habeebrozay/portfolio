import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>We sell the best sport jerseys</h1>
        <p>Sportwears are designed with comfort in mind.
The materials are often breathable, moisture-wicking,
and flexible allowing for easy movements during sports and exercise.</p>
<button className='btn'>Explore more <img src={dark_arrow}alt="" /></button>
      </div>
    </div>
  )
}
import './Hero.css'

export default Hero
