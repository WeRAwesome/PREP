import React from 'react';

class SectionThree extends React.Component {
  render(){
    return (
      <div className="section-three">
        <section className="container">
          <h1 className="section-three-title"><strong>3 Essential Steps</strong></h1>
          <div className="section-three-content">
            <div className="row">
              <div className="col-md-3 section-three-person">
                <img src="../app/images/Home/person.png" />
              </div>
              <div className="col-md-9 section-three-images">
                <h1><strong>STEP </strong><img src="../app/images/Home/1.png" />
                <img src="../app/images/Home/XMLID_271_.png" /><strong> Be Informed</strong></h1>
              </div>
            </div>
            <div className="row">
              <div className="col-md-offset-3 col-md-9 section-three-images">
                <h1><strong>STEP </strong><img src="../app/images/Home/2.png" />
                <img src="../app/images/Home/XMLID_4053_.png" /><strong> Make a Plan</strong></h1>
              </div>
            </div>
            <div className="row">
              <div className="col-md-offset-2 col-md-4 section-three-overlap">
                <h1><img src="../app/images/Home/XMLID_13_.png" />
                <strong>STEP </strong><img id="section-three-step3" src="../app/images/Home/3.png" /></h1>
              </div>
              <div className="col-md-6 section-three-step3">
                <h1><img src="../app/images/Home/XMLID_4041_.png" /><strong> Get a Kit</strong></h1>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
{/*<h1><strong>STEP </strong><img src="../app/images/Home/2.png" /></h1>
<img src="../app/images/Home/XMLID_13_.png" /><h1><strong>STEP </strong><img src="../app/images/Home/3.png" /></h1>*/}
export default SectionThree;
