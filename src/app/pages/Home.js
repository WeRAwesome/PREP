import React, { Component } from "react";
import SectionOne from '../components/Home/SectionOne';
import SectionTwo from '../components/Home/SectionTwo';
import SectionThree from '../components/Home/SectionThree';
import SectionFour from '../components/Home/SectionFour';

class Home extends Component {
  render () {
    return (
      <div>
        <SectionOne />
        <div className="section-two-three-background">
          <SectionTwo />
          <SectionThree />
        </div>
      </div>
    );
  }
}

export default Home;
