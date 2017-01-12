import React, { Component } from 'react';

const disaterCategory = [
  {"category_img": "/static/images/Home/hydro.png"},
  {"category_img": "/static/images/Home/geo.png"},
  {"category_img": "/static/images/Home/climate.png"},
  {"category_img": "/static/images/Home/biological.png"},
  {"category_img": "/static/images/Home/humanmade.png"},
  {"category_img": "/static/images/Home/circle.png"},
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
      <div className="container section-three">
        <p className="section-three-title">Prepare NOW</p>
        <p className="section-three-description">per Disaster Category</p>
        <div className="row">
          {this.renderDisasterCategory()}
        </div>
      </div>
    )
  }
}

export default SectionThree;
