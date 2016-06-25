import React from "react";
import { IndexLink, Link } from "react-router";

class Navbar extends React.Component {
  render() {
    return (
      <div data-spy='scroll' data-target='#PREP' className="">
        <nav className='globalnav globalnav-default navbar-fixed-top' id='PREP'>
          <div className='container'>
            <div className='navbar-header'>
              <button type='button' className='globalnav-toggle collapsed' data-toggle='collapse'
                data-target='#globalnav' aria-expanded='false' aria-controls='globalnav'>
                <span className='sr-only'>Toggle Navigation</span>
                <span className='icon-bar'></span>
                <span className='icon-bar'></span>
                <span className='icon-bar'></span>
              </button>
              <a className='globalnav-brand' href='#spytop'>P.R.E.P</a>
            </div>
            <div id='globalnav' className='navbar-collapse collapse'>
              <ul className='nav globalnav-nav navbar-right'>
                <li><Link to='/hydro'>HYDRO</Link></li>
                <li><Link to='/geo'>GEO</Link></li>
                <li><Link to='/climato'>CLIMATO</Link></li>
                <li><Link to='/bio'>BIO</Link></li>
                <li><Link to='/manmade'>MANMADE</Link></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
