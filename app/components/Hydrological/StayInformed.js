import React, {Component} from 'react';

import stayInformed from '../../data/stayInformed';

class StayInformed extends Component {

  renderStayInformed() {
    return stayInformed.map((data) => {
      const renderImages = data.images.map((img, i) => {
        return (
          <img key={i} className="stay-informed-img" src={img} />
        );
      });

      return (
        <div key={data.id}>
          <div className="stay-informed-num">
            <img src={data.num_img} width="60px" />
            <span>{data.title}</span>
          </div>
          <div className="stay-informed-img-container">
            {renderImages}
          </div>
        </div>
      )
    });
  }

  render() {
    return(
      <div className="container stay-informed-container">
        {this.renderStayInformed()}
      </div>
    );
  }
}

export default StayInformed;
