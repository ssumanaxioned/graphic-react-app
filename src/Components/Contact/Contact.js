import React from 'react'
import { FaBasketballBall, FaFacebookF, FaMobileAlt, FaPhoneAlt, FaRegEnvelope, FaRss, FaTwitter, FaUsers, FaVimeoV } from 'react-icons/fa';
import './contact.scss';

function Contact() {
  return (
    <div className='contact_container'>
      <div className='wrapper'>
        <ul className='about'>
          <li><span className='head'>little about us</span></li>
          <li><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nesciunt atque provident ipsam, labore sunt.</p></li>
          <li><span className="head">follow us</span></li>
          <li className='social_ctn'>
            <a href="#FIXME" title="facebook" target="_blank"><FaFacebookF /></a>
            <a href="#FIXME" title="twitter" target="_blank"><FaTwitter /></a>
            <a href="#FIXME" title="feed" target="_blank"><FaRss /></a>
            <a href="#FIXME" title="vimeo" target="_blank"><FaVimeoV /></a>
            <a href="#FIXME" title="basket" target="_blank"><FaBasketballBall /></a>
            <a href="#FIXME" title="people" target="_blank"><FaUsers /></a>
          </li>
        </ul>
        <ul className='archives'>
          <li><span className='head'>Archives</span></li>
          <li><p>March 2012</p></li>
          <li><p>February 2012</p></li>
          <li><p>January 2012</p></li>
          <li><p>December 2011</p></li>
        </ul>
        <ul className='contact'>
          <li><span className='head'>contact us</span></li>
          <li>
            <FaRegEnvelope className='contact_icons'/>
            <a href="mailto:info@premiumcoding.com" title='mail'>info@premiumcoding.com</a>
          </li>
          <li>
            <FaPhoneAlt className='contact_icons' />
            <a href="tel:+800756756" title='call'>800756756</a>
            </li>
          <li>
            <FaMobileAlt className='contact_icons' />
            <a href="tel:+386408007561" title='contact' >+386408007561</a>
            </li>
        </ul>
        <form>
          <span className='head'>sign to newsletter</span>
          <input type="text" name='name' id='name' placeholder='Name' />
          <input type="email" name="email" id="email" placeholder='Email' />
          <button type="submit">SUBSCRIBE</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
