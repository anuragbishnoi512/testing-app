import React from 'react'
import { Header_Image } from '../../utils/helper'

const Footer = () => {
  return (
    <div>
      {Header_Image.map((obj, index) => (
        <div key={index}>
          <h2 className='pt-5'>
            {obj.heading}
          </h2>
          <p>{obj.para}</p>
          <img src={obj.img} alt="image" />
        </div>
      ))}
    </div>
  )
}
export default Footer