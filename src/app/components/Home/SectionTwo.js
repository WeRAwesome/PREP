import React from 'react';

class SectionTwo extends React.Component {
  render(){
    return (
      <div className="section-two">
        <section className="container">
          <div className="row">
            <div className="col-md-2 col-md-offset-2 section-two-content" id="section-two-left">
      				<h1 text-align="right"><strong>What</strong> is</h1>
      			</div>
            <div className="col-md-4 section-two-content" id="section-two-middle">
              <img src="../app/images/Home/prep.png" height="70%" width="70%" />
            </div>
            <div className="col-md-4 section-two-content" id="section-two-right">
              <h3><strong className="text-red">P.R.E.P. </strong>(Pre-pared Responses and Emergency Planning)
              aims to raise awaremess for disaster preparedness and emergency planning with succint,
              self-ex-planatory visual guides, and to </h3><h3 className="text-red">increase resilience of local
              community in coping with disasters, haxards and other catastrophics events.</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-md-offset-4 col-md-2">
              <div className="verticalLine"></div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default SectionTwo;
/*
<a className="w3-btn-floating" id="floating-button">P</a><h3>repared</h3>
<a className="w3-btn-floating" id="floating-button">R</a><h3>esponses</h3>
<a className="w3-btn-floating" id="floating-button">E</a><h3>mergency</h3>
<a className="w3-btn-floating" id="floating-button">P</a><h3>lanning</h3>
*/
