import React, { Component } from 'react';

class SectionTwo extends Component {
  render(){
    return (
      <section className="container">
        <div className="row">
          <div className="col-md-3 col-md-offset-1 section-two-content" id="section-two-left">
    				<h1 text-align="right"><strong>What</strong> is</h1>
    			</div>
          <div className="col-md-4 section-two-content" id="section-two-middle">
            <img src="../public/style/images/Home/prep.png" />
          </div>
          <div className="col-md-4 section-two-content section-two-img" id="section-two-right">
            <h3><img src="../public/style/images/Home/Icon_speaker.png" /><strong className="text-red">P.R.E.P. </strong>(Pre-pared Responses and Emergency Planning)
            aims to raise awaremess for disaster preparedness and emergency planning with succint,
            self-ex-planatory visual guides, and to </h3><h3 className="text-red">increase resilience of local
            community in coping with disasters, haxards and other catastrophics events.</h3>
          </div>
        </div>
      </section>
    )
  }
}

export default SectionTwo;
