import React from 'react'
import './Slide.css'

const Slide = ({ slide }) => {
  return (
    <div style={{ backgroundImage: `${slide.color}`, transition: '.3s all ease' }} className="Slide">
      <div className="Slide--Heading">
        <h2 style={{ color: `${slide.headingColor}` }}>{slide.heading}</h2>
      </div>
      <div className="Slide--Content">
        {slide.content.map((paragraph, index) => {
          return (
            <p style={{ color: `${slide.contentColor}` }} key={index}>{paragraph}</p>
          )
        })}
      </div>
    </div>
  )
}

export default Slide