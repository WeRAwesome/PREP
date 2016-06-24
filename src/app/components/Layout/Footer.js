import React from 'react';
import {Link} from 'react-router';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className='container'>
          <div className='row'>
            <p className='text-right'> © 2016 P.R.E.P </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
