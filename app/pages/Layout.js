import React, {Component} from 'react';
import Navbar from '../components/Layout/Navbar';

class Layout extends Component {

  render() {
    return (
      <div>
        <Navbar history={this.props.history} location={this.props.location} />
        {this.props.children}
      </div>
    );
  }
}

export default Layout;
