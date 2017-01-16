import React, {Component} from 'react';
import Navbar from '../Layout/Navbar';

class SectionOne extends Component {

  render(){
    return (
      <div className="section-one" id="spytop">
        <section className="container">
          <div className="section-one-title">
            <h4 className="home-subtitle">
              ARE YOU PREPARED?
              <img src="/static/images/Home/Landing/Landing_subtitlehuman.svg" width="36px" height="36px" />
            </h4>
            <img className="home-title" src="/static/images/Home/Landing/Landing_title.png" />
            <h4 className="home-sub-subtitle">Prepared Resonses & Emergency Planning</h4>
          </div>
          <div className="section-one-arrow">
            <img src="/static/images/Home/arrow.png" width="50px" height="50px" />
          </div>
        </section>
      </div>
    )
  }
}

export default SectionOne;
//<img className="animated fadeInDownBig" src="../app/images/Home/title.png" width="430px" height="120px" />
