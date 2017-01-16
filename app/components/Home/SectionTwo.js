import React, { Component } from 'react';

const sectionTwoImg = [
  {
    "step_img": "/static/images/Home/step1.png",
    "info_img": "/static/images/Home/AssetStay_informed.png"
  }, {
    "step_img": "/static/images/Home/step2.png",
    "info_img": "/static/images/Home/AssetMake_a_plan.png"
  }, {
    "step_img": "/static/images/Home/step3.png",
    "info_img": "/static/images/Home/AssetStay_informed.png"
  }
];

class SectionTwo extends Component {

  createFourCol() {
    return sectionTwoImg.map((img, i) => {
      return (
        <div key={i}>
          <div className="section-two-img-hover section-two-overlap">
            <img
              className="section-two-person"
              src="/static/images/Home/person.png"
            />
            <img className="section-two-person-with" src="/static/images/Home/XMLID_13_.png" width="130px" />
          </div>
          <div className="section-two-four-col">
            <img className="section-two-four-col-step" src={img.step_img} />
            <img className="section-two-four-col-img" src={img.info_img}  />
          </div>
        </div>
      )
    })
  }

  render(){
    return (
      <section className="container">
        <div className="row section-two-content">
          <div className="col-sm-2 col-md-2 col-lg-2">
            <h1 className="section-two-text-whatis"><strong>What</strong> is</h1>
          </div>
          <div className="col-sm-3 col-md-3 col-lg-3 section-two-two">
            <img className="section-two-middle" src="/static/images/Home/prep.png" />
          </div>
          <div className="col-sm-3 col-md-3 col-lg-3 section-two-img section-two-text">
            <h2>
              <img src="/static/images/Home/Icon_speaker.png" />
              <strong className="section-two-text-red-title">P.R.E.P.</strong>
            </h2>
            <span><strong>(Pre-pared Responses and Emergency Planning)</strong> aims to raise awaremess for <strong>disaster preparedness and emergency planning</strong> with succint,
            self-ex-planatory visual guides, and to </span><span className="section-two-text-red">increase resilience of local
            community in coping with disasters, haxards and other catastrophics events.</span>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4 section-two-four">
            {this.createFourCol()}
            <div className="section-two-four-col">
              <img className="section-two-four-col-last" src="/static/images/Home/svcguide.png" />
              <img className="section-two-four-col-img" src="/static/images/Home/AssetVisual_Guide.png"  />
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default SectionTwo;
