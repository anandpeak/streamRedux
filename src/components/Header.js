import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

const Header = () => {
  const ab = 'asdf';
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        Streamer
      </Link>

      <div className="right menu"></div>

      <Link to={{ pathname: '/Streams/new', state: { ab } }} className="item">
        All streams
      </Link>

      <GoogleAuth />
    </div>
  );
};

export default Header;
