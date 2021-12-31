import React from 'react'
import { RiArrowUpSLine } from 'react-icons/ri';
import './advertise.scss';

function Advertiser() {
  return (
    <div className='advertise'>
      <div className='wrapper'>
        <h5 className='head'>Our major <span className='green'>advertisers</span></h5>
        <figure>
          <img src='https://via.placeholder.com/100x100' alt='ad' />
          <img src='https://via.placeholder.com/100x100' alt='ad' />
          <img src='https://via.placeholder.com/100x100' alt='ad' />
          <img src='https://via.placeholder.com/100x100' alt='ad' />
          <img src='https://via.placeholder.com/100x100' alt='ad' />
          <img src='https://via.placeholder.com/100x100' alt='ad' />
        </figure>
        <a href='#FIXME' title='top' target='_self'><RiArrowUpSLine  style={{fontSize: '24px'}} /></a>
      </div>
    </div>
  )
}

export default Advertiser
