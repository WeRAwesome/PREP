import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';

const navList = [
  {
    id: 1,
    title: "HYDRO",
    to: "/hydro"
  }, {
    id: 2,
    title: "GEO",
    to: "/geo"
  }, {
    id: 3,
    title: "CLIMATO",
    to: "/climato"
  }, {
    id: 4,
    title: "BIO",
    to: "/bio"
  }, {
    id: 5,
    title: "MANMADE",
    to: "/manmade"
  }, {
    id: 6,
    title: "ETC",
    to: "/etc"
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
