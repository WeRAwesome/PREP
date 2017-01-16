import React, { Component } from "react";
import SectionOne from '../components/Home/SectionOne';
import SectionTwo from '../components/Home/SectionTwo';
import SectionThree from '../components/Home/SectionThree';

class Home extends Component {
  render () {
    return (
      <div>
        <SectionOne />
        <section className="section-two-three-background">
          <img className="size-100" src="/static/images/Home/Landing_bcg.png" />
          <SectionTwo />
          <SectionThree />
        </section>
      </div>
    );
  }
}

export default Home;
