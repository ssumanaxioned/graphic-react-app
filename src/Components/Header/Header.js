import React from 'react'
import { FaBookmark } from 'react-icons/fa';
import './header.scss';

function Header() {

  const handleNav =()=> {
    document.querySelector('.menu').classList.toggle('menu_active');
    document.querySelector('.menu_details').classList.toggle('menu_details_active');
  }

  return (
    <div className='header'>
      <div className='wrapper'>
        <nav>
          <h1>
            <a href="index.html" title="Graphic Umbrella" target="_self">
              <img src="https://via.placeholder.com/240x80" alt="Graphic Umbrella" />
            </a>
          </h1>
          <span className="menu" onClick={handleNav}>
            <span className="line">line</span>
            <span className="line">line</span>
            <span className="line">line</span>
          </span>
          <ul className='menu_details'>
            <li><a href="#FIXME" title="home" target="_self">home</a></li>
            <li><a href="#FIXME" title="news" target="_self">news</a></li>
            <li><a href="#FIXME" title="products" target="_self">products</a></li>
            <li><a href="#FIXME" title="features" target="_self">features</a></li>
            <li><a href="#FIXME" title="contact" target="_self">contact</a></li>
          </ul>
        </nav>
          <p>pull me <FaBookmark className='bookmark' /></p>
      </div>
    </div>
  )
}

export default Header
