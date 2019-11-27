import React from 'react'
import './Slider.css'

import Slide from '../slide'

const Slider = ({ data, translate }) => {
  return (
    <div style={{ transform: `translateY(-${translate})` }} className="Slider">
      {
        data.map((slide, index) => {
          return (
            <Slide key={index} slide={slide} />
          )
        })
      }
    </div>
  )
}

export default Slider