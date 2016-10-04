import React from 'react';
import Navbar from '../Layout/Navbar';

class SectionOne extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div className="section-one" id="spytop">
        <section className="container">
          <div className="section-one-title">
            <img className="animated fadeInDownBig" src="../app/images/Home/title.png" />
          </div>
          <div className="section-one-arrow">
            <img src="../app/images/Home/arrow.png" />
          </div>
        </section>
      </div>
    )
  }
}

export default SectionOne;
