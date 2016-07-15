import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';

const navList = [
  {
    title: "HYDRO",
    to: "hydro"
  }, {
    title: "GEO",
    to: "geo"
  }, {
    title: "CLIMATO",
    to: "climato"
  }, {
    title: "BIO",
    to: "bio"
  }, {
    title: "MANMADE",
    to: "manmade"
  }, {
    title: "SELF-HELP TECH",
    to: "selfhelp"
  }
];

class Layout extends Component {
  constructor(props) {
    super(props)

    this.state = {};
  }
  render() {
    return (
      <div>
        <Navbar history={this.props.history} navList={navList} />
          {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default Layout;
