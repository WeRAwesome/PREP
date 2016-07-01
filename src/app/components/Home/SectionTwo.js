import React from 'react';

class SectionTwo extends React.Component {
  render(){
    return (
      <div className="section-two">
        <section className='container '>
          <div className='row'>
            <div class="col-md-4 section-two-content" id="section-two-left">
      				<h1>What is</h1>
      			</div>
            <div class="col-md-4 section-two-content" id="section-two-middle">
              <h1>P</h1><h3>repared</h3>
              <h1>R</h1><h3>esponses</h3>
              <h1>E</h1><h3>mergency</h3>
              <h1>P</h1><h3>lanning</h3>
            </div>
            <div class="col-md-4 section-two-content" id="section-two-right">
              <h3><strong>P.R.E.P</strong>(Prepared Responses and Emergency Planning) aims to promote individuals' access to the information needed for disaster preparation and emeragency planning.
              </h3>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default SectionTwo;
