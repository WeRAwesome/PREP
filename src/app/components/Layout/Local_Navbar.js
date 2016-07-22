import React, { Component } from 'react';
import { connect } from 'react-redux';

class LocalNavbar extends Component {

  <h2 className="ac-ln-title"></h2>
  
  render() {
    return (
      <div>
        <nav id="localnav" className="ac-localnav-scrim js touch svg no-ie7 no0ie8 no-css-sticky" role="navigation" data-stickey>
          <div className="ac-ln-wrapper">
            <div className="ac-ln-background ac-ln-content">

            </div>
          </div>
        </nav>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    category: state.activeCategory
  };
}

export default connect(mapStateToProps)(LocalNavbar);
