import { useEffect } from 'react';
import React from 'react'
import About from '../components/About'

function AboutUs() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div>
        <About/>
    </div>
  )
}

export default AboutUs