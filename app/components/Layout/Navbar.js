import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {IndexLink, Link} from 'react-router';
import {connect} from 'react-redux';
import {selectCategory} from '../../actions/index';
import {bindActionCreators} from 'redux';

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      getScrollTop: 0,
      isSelected: false
    };
    this.scrollY = this.scrollY.bind(this);
    this.renderNavList = this.renderNavList.bind(this);
    this.renderChildNavList = this.renderChildNavList.bind(this);
  }

  componentDidMount() {
    const toggle = document.getElementById("toggle");
    const myScrollspy = document.getElementById("myScrollspy");

    window.addEventListener('scroll', () => {
      this.scrollY();
    });

    toggle.addEventListener('click', () => {
      myScrollspy.classList.add("navbar-scroll");
      this.renderChildNavList();
    });

    myScrollspy.addEventListener('click', () => {
      myScrollspy.classList.add("navbar-scroll");
      this.renderChildNavList();
    });
  }

  scrollY() {
    const getScrollTop = !this.state.getScrollTop;
    const y = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
    this.setState({getScrollTop: y});
  }

  // toggleButton() {
  //   if(document.body.scrollTop <= 40) {
  //     document.getElementById("myScrollspy").addclassName = "navbar-scroll";
  //   };
  // }

  // handleClick(title) {
  //   this.setState({ isSelected: title });
  // }

  renderChildNavList() {
    // const { isSelected } = this.props;
    // return this.props.categories.map((category) => {
    //   this.handleClick = () => this.handleClick(category.title);
    //   if( isSelected === category.title) {
    //    console.log(category.child_categories.category);
    //     return (
    //       <div class="container-fluid">
    //         <div className="navbar-header">
    //           <a className="navbar-brand" href="#">{category.title}</a>
    //         </div>
    //         <ul className="nav navbar-nav">
    //           <li><a href="#">{category.child_categories.category}</a></li>
    //         </ul>
    //       </div>
    //     );
    //   }
    // });
  }

  renderNavList() {
    return this.props.categories.map((category) => {
      //const { isSelected } = this.state.category.title;
      return (
        <li key={category.title}>
          <Link
            className="navbar-category-text-disabled"
            to={category.to}
          >
            {category.parent_category}
          </Link>
        </li>
      );
    });
  }

  render() {
    const { getScrollTop } = this.state;
    const viewingMain = this.props.location.pathname === '/';
    let navClass;
    if (viewingMain) {
      navClass = getScrollTop <= 40 ? "" : "navbar-scroll";
    } else {
      navClass = getScrollTop <= 40 ? "navbar-scroll" : "navbar-scroll--hide";
    }
    return (
      <div data-spy="scroll" data-target="#myScrollspy">
      	{/* Fixed Nav */}
      	<nav className={"navbar navbar-default navbar-fixed-top " + navClass }
          id="myScrollspy">
      		<div className="container">
      			<div className="navbar-header">
      				<button id="toggle" type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                      data-target="#navbar" aria-expanded="true" aria-controls="navbar">
      					<span className="sr-only">Toggle navigation</span>
      					<span className="icon-bar"></span>
      					<span className="icon-bar"></span>
      					<span className="icon-bar"></span>
      				</button>
      				<a className="navbar-brand" href="/">
                <img src="/static/images/Home/Landing/Landing_sm_logo.svg" width="80px" height="25px" />
              </a>
      			</div>
      			<div id="navbar" class="navbar-collapse collapse">
      				<ul className="nav navbar-nav navbar-right w3-topnav">
                { this.renderNavList() }
                <li><Link className="navbar-category-text" to="selfhelp">SELF-HELP TECH</Link></li>
      				</ul>
      			</div>
      		</div>
      	</nav>
        <div>
          <nav id="localnav" class="ac-localnav-scrim">
            {this.renderChildNavList()}
          </nav>
        </div>
      	{ /*Close Fixed Nav */	}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    categories: state.categories
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectCategory: selectCategory }, dispatch );
}
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
