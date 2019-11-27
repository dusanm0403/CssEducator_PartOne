import React, { useState } from 'react';
import './CssEducator.css';

import Slider from './components/slider'
import data from './data'
import arrow from './assets/images/icons/arrow.svg'
import cx from 'classnames'

const CssEducator = () => {

  const [activeIndex, setActiveIndex] = useState(0)

  const handleSlideChange = (direction) => {
    if (direction === 'next') {
      setActiveIndex(activeIndex === data.slides.length - 1 ? 0 : activeIndex + 1)
    } else {
      setActiveIndex(activeIndex === 0 ? data.slides.length - 1 : activeIndex - 1)
    }
  }

  const translateY = `${100 * activeIndex}vh`
  const isOnStart = activeIndex === 0
  const isOnEnd = activeIndex === data.slides.length - 1

  const prevArrowClasses = cx(
    "Prev",
    isOnStart && "Prev--Hidden"
  )

  const nextArrowClasses = cx(
    "Next",
    isOnEnd && "Next--Hidden"
  )

  return (
    <div className="CssEducator">
      <Slider
        translate={translateY}
        data={data.slides}
      />
      <img
        src={arrow}
        alt="prev"
        onClick={() => handleSlideChange('prev')}
        className={prevArrowClasses}
      />
      <img
        src={arrow}
        alt="next"
        onClick={() => handleSlideChange('next')}
        className={nextArrowClasses} />
    </div>
  );
}

export default CssEducator;
