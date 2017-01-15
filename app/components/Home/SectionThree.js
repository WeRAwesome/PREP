import React, { Component } from 'react';

const disaterCategory = [
  {"category_img": "/static/images/Home/Symbol_Hydro.png"},
  {"category_img": "/static/images/Home/Symbol_Geo.png"},
  {"category_img": "/static/images/Home/Symbol_Climato.png"},
  {"category_img": "/static/images/Home/Symbol_Bio.png"},
  {"category_img": "/static/images/Home/Symbol_Human.png"},
  {"category_img": "/static/images/Home/circle.png"},
]
class SectionThree extends Component {

  renderDisasterCategory() {
    return disaterCategory.map((category, i) => {
      return (
        <img key={i} className="section-three-disaster-category-img" src={category.category_img} />
      )
    });
  }
  render(){
    return (
      <div className="container">
        <div className="section-three" id="overlay-absolute">
          <p className="section-three-title">Prepare NOW</p>
          <p className="section-three-description">per Disaster Category</p>
          <div className="container section-three-image-size">
            {this.renderDisasterCategory()}
          </div>
        </div>
      </div>
    )
  }
}

export default SectionThree;
