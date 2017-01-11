import React, { Component } from 'react';

const disaterCategory = [
  {"category_img": "../public/style/images/Home/hydro.png"},
  {"category_img": "../public/style/images/Home/geo.png"},
  {"category_img": "../public/style/images/Home/climate.png"},
  {"category_img": "../public/style/images/Home/biological.png"},
  {"category_img": "../public/style/images/Home/humanmade.png"},
  {"category_img": "../public/style/images/Home/circle.png"},
]
class SectionThree extends Component {

  renderDisasterCategory() {
    return disaterCategory.map((category, i) => {
      return (
        <div key={i} className="col-xs-2">
          <img className="section-three-disaster-category-img" src={category.category_img} />
        </div>
      )
    });
  }
  render(){
    return (
      <section className="container section-three">
        <p className="section-three-title">Prepare NOW</p>
        <p className="section-three-description">per Disaster Category</p>
        <div className="row">
          {this.renderDisasterCategory()}
        </div>
      </section>
    )
  }
}

export default SectionThree;
