import React from 'react'
import Icon from '../Icon/Icon';
import {RiRecycleFill, RiPhoneFill, RiSettings4Line, RiSmartphoneLine} from 'react-icons/ri';
import './welcome.scss'

function Welcome() {
  return (
    <div className='welcome'>
      <div className='wrapper'>
        <h3>Welcome to <span className='green'>elegantica</span> - a minimal business theme</h3>
        <div className='welcome_container'>
        <Icon title={'Amazing'} subTitle={'Support'} icons={<RiRecycleFill className='icons'/>} />
        <Icon title={'24 hour'} subTitle={'Availablity'} icons={<RiPhoneFill className='icons' />} />
        <Icon title={'web'} subTitle={'Design'} icons={<RiSettings4Line className='icons' />} />
        <Icon title={'mobile'} subTitle={'Development'} icons={<RiSmartphoneLine className='icons'/>} />
        </div>
      </div>
    </div>
  )
}

export default Welcome
