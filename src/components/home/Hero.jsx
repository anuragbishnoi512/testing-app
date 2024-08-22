import React from 'react'

const Hero = () => {

  const year = new Date().getFullYear()

  return (
    <div>
      <p>{year} copyright</p>
    </div>
  )
}

export default Hero