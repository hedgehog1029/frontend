import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <header>
      <h1>URF</h1>
      <ul>
        <li>
          <Link to="shows">Shows</Link>
        </li>
      </ul>
    </header>
  );
};


export default Header;
