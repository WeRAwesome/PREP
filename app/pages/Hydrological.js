import React, {Component} from "react";

import StayInformed from '../components/Hydrological/StayInformed';

class Hydrological extends Component {
  render () {
    return (
      <div>
      <div className="">
        <img className="" src="/static/images/Home/Flood_header.png" />
        <h1 className="hydro-title">Flood</h1>
        <img src="/static/images/Home/flood-landing.png" />
      </div>
      <StayInformed />
      </div>
    );
  }
}

export default Hydrological;
