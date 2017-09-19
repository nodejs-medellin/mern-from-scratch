import React from 'react';
import PropTypes from 'prop-types';

const Header = () => {
  return (
    <div className="header clearfix">
      <nav>
        <ul className="nav nav-pills pull-right">
          <li className="active" role="presentation">
            <a href="/">Home</a>
          </li>
          <li role="presentation">
            <a href="/mascotas">Mascotas</a>
          </li>
        </ul>
      </nav>
      <h3 className="text-muted">Intro React</h3>
    </div>
    
  );
};

Header.propTypes = {};

Header.defaultTypes = {};

export default Header;
