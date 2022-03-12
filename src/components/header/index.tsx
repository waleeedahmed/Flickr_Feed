import React from 'react';
import './header.css';

const Header: React.FC<any> = () => {

  return (
    <div className='header'>
      <span className='headerSpan'>
        Flickr Photo Search
      </span>
    </div>
  )
}

export default Header;