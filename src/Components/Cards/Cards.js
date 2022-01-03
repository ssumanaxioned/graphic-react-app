import React from 'react';
import './cards.scss';

function Cards(props) {
  const {title, image, subtitle1, subtitle2 } = props;

   return (
    <div className='cards'>
      <img src={image} alt='card'/>
      <div className='card_content'>
        <span className='title'>{title}</span>
        <span className='sub'>
          <span className='subtitle'>{subtitle1}</span>
          <span className='subtitle'>{subtitle2}</span>
        </span>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum cupiditate maxime dolorum adipisci, ducimus aut eaque saepe alias.</p>
      </div>

    </div>
  )
}

export default Cards
