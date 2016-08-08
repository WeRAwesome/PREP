import React, { Component } from 'react';
import { connect } from 'react-redux';

class LocalNavbar extends Component {
  constructor() {
    super();
    this.renderChildList = this.renderChildList.bind(this);
  }
//  <h2 className="ac-ln-title"></h2>
  renderChildList() {

      return (
        <li>
          <a>{this.props.category.child_categories.category}</a>
        </li>
      );
  }
  render() {
    console.log(this.props.category);
    return (
      <div>
        <nav id="localnav" className="ac-localnav-scrim js touch svg no-ie7 no0ie8 no-css-sticky" role="navigation" data-stickey>
          <div className="ac-ln-wrapper">
            <div className="ac-ln-background ac-ln-content">
              {this.renderChildList()}
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
