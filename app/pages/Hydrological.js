import React, {Component} from "react";

import StayInformed from '../components/Hydrological/StayInformed';

class Hydrological extends Component {
  render () {
    return (
      <div>
      <div className="flood-header">
        <img src="/static/images/Home/Flood_header.png" />
        <div className="flood-header-text">
          <h2 className="flood-sub-title">Hydrological</h2>
          <h1 className="flood-title">Flood</h1>
        </div>
      </div>
      <div className="flood-second">
        <img src="/static/images/Home/flood-landing.png" />
      </div>
      <StayInformed />
      </div>
    );
  }
}

export default Hydrological;
