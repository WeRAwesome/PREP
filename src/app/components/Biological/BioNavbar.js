import React from "react";

class BioNavbar extends React.Component {
  render(){
    return (
      <nav id='ac-localnav' className='no-js ac-ln-switch' role='navigation' data-analytics-region='local nav' data-sticky>
        <div className='ac-ln-wrapper'>
          <div className='ac-ln-background'></div>
          <div className='ac-ln-content'>
            <h2 className='ac-ln-title'>
              <a href='/bio/' data-analytic-title='product index'><span>BIO</span></a>
            </h2>

            <div className='ac-ln-menu'>
              <div className='ac-ln-menu-tray'>
              <a href='#ac-ln-menustate' className='ac-ln-menucta-anchor ac-ln-menucta-anchor-open' id='ac-ln-menustate-open'>
                <span className='ac-ln-menucta-anchor-label'>Open Menu</span>
              </a>
              <a href='#' className='ac-ln-menucta-anchor ac-ln-menucta-anchor-close' id='ac-ln-menustate-close'>
                <span className='ac-ln-menucta-anchor-label'>Close Menu</span>
              </a>

              <ul className='ac-ln-menu-items'>
                <li className='ac-ln-menu-item'>
                  <a href='/bio/a/' className='ac-ln-menu-link localnav-link' data-jump-section-name='a' data-analytics-title='a'>A</a>
                </li>
                <li className='ac-ln-menu-item'>
                  <a href='/bio/b/' className='ac-ln-menu-link localnav-link' data-jump-section-name='b' data-analytics-title='b'>B</a>
                </li>
                <li className='ac-ln-menu-item'>
                  <a href='/bio/c/' className='ac-ln-menu-link localnav-link' data-jump-section-name='c' data-analytics-title='c'>C</a>
                </li>
                <li className='ac-ln-menu-item'>
                  <a href='/bio/d/' className='ac-ln-menu-link localnav-link' data-jump-section-name='d' data-analytics-title='d'>D</a>
                </li>
              </ul>
            </div>

          </div>

          </div>
        </div>
      </nav>
    )
  }
}

export default BioNavbar;
