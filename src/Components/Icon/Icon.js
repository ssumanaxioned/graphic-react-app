import React from 'react';
import './icon.scss';

function Icon(props) {
  const { title, subTitle, icons } = props;
  return (
    <div className='icons_container'>
      <div className='container'>
      {icons}
      </div>
      <div className='content'>
        <span className='title'>{title}</span>
        <span className='subtitle'>{subTitle}</span>
      </div>
    </div>
  )
}

export default Icon
