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
            <h4 className="home-subtitle">Before Anything Happens</h4>
            <h1 className="home-title">P. R. E. P.</h1>
          </div>
          <div className="section-one-arrow">
            <img src="../public/style/images/Home/arrow.png" width="50px" height="50px" />
          </div>
        </section>
      </div>
    )
  }
}

export default SectionOne;
//<img className="animated fadeInDownBig" src="../app/images/Home/title.png" width="430px" height="120px" />
