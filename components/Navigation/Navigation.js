import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

function Navigation(props, context) {
  return (
    <ul>
      <li><Link to="/home">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/">Posts</Link></li>
      
    </ul>
  );
}

Navigation.propTypes = {
  switchLanguage: PropTypes.func.isRequired,
  intl: PropTypes.object.isRequired,
};

export default Navigation;
