import React from 'react';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';

class Layout extends React.Component {
  render() {
    return (
      <div>
        <Navbar history={this.props.history} />
          {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default Layout;
