import React from 'react'
import './banner.scss';
import {BiChevronLeftCircle, BiChevronRightCircle} from 'react-icons/bi'

function Banner() {
  return (
    <div className='banner'>
      <a className='arrows left' href="#FIXME"><BiChevronLeftCircle className='arrow_icons'/></a>
      <div className='wrapper'>
        <img src="https://via.placeholder.com/300x200" alt="banner-img" />
        <h2>add lovely caption to each slide and make your business stand out</h2>
      </div>
      <a className='arrows right' href="#FIXME"><BiChevronRightCircle className='arrow_icons'/></a>
    </div>
  )
}

export default Banner
