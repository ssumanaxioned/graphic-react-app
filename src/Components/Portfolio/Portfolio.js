import React from 'react'
import Cards from '../Cards/Cards';
import './portfolio.scss'

function Portfolio() {
  return (
    <div className='portfolio'>
      <div className='wrapper'>
        <h4 className='head'>Recent from <span className='green'>Portfolio</span></h4>
        <div className='port_container'>
          <Cards title={'bussiness cards'} image={'https://via.placeholder.com/300x250'} subtitle1={'Video'} subtitle2={'Interview'} />
          <Cards title={'mono minicards'} image={'https://via.placeholder.com/300x250'} subtitle1={'Video'} subtitle2={'Business'} />
          <Cards title={'say it in print'} image={'https://via.placeholder.com/300x250'} subtitle1={'Audio'} subtitle2={'Print'} />
          <Cards title={'graphics in print'} image={'https://via.placeholder.com/300x250'} subtitle1={'Video'} subtitle2={'Graphics'} />
        </div>
      </div>
    </div>
  )
}

export default Portfolio
