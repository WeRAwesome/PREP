import React, {Component} from 'react';

import stayInformed from '../../data/stayInformed';

class StayInformed extends Component {

  renderStayInformed() {
    return stayInformed.map((data) => {
      const renderImages = data.images.map((img, i) => {
        return (
          <img key={i} className="col-xs-3 stay-informed-num-img" src={img} />
        );
      });

      return (
        <div key={data.id}>
          <div className="stay-informed-num">
            <img src="/static/images/Home/Landing/Tag_Icon.png" width="50px" />
            <span className="stay-informed-num-text">{data.id}</span>
            <span>{data.title}</span>
          </div>
          {renderImages}
        </div>
      )
    });
  }

  render() {
    return(
      <div className="container">
        {this.renderStayInformed()}
      </div>
    );
  }
}

export default StayInformed;
