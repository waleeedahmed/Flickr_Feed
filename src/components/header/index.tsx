import React from 'react';
import './header.css';

const Header: React.FC<any> = () => {

  return (
    <div className='header'>
      <span className='headerSpan'>
        Flickr Photo Search
      </span>
      <span className="anchor-link">
        <a href="https://www.flickr.com/search/" target="_blank">Flickr Search Engine</a>
      </span>
    </div>
  )
}

export default Header;