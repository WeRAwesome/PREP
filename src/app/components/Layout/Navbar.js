import React from 'react';
import ReactDOM from 'react-dom';
import { IndexLink, Link } from 'react-router';
import { connect } from 'react-redux';
import { selectCategory } from '../../actions/index';
import { bindActionCreators } from 'redux';

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      getScrollTop: 0,
    };
    this.scrollY = this.scrollY.bind(this);
    this.renderNavList = this.renderNavList.bind(this);
  }

  componentDidMount() {
    const toggle = document.getElementById("toggle");
    const myScrollspy = document.getElementById("myScrollspy");

    window.addEventListener('scroll', () => {
      this.scrollY();
    });

    toggle.addEventListener('click', () => {
      myScrollspy.classList.add("navbar-scroll");
    });

    myScrollspy.addEventListener('click', () => {
      myScrollspy.classList.add("navbar-scroll");
    });
  }

  scrollY() {
    const getScrollTop = !this.state.getScrollTop;
    const y = document.body.scrollTop;
    this.setState({getScrollTop: y});
  }

  toggleButton() {
    if(document.body.scrollTop <= 40) {
      document.getElementById("myScrollspy").addclassName = "navbar-scroll";
    };
  }
/*
  renderLocalNavList() {
    return this.props.categories.map((category) => {
      return(
        <nav>

        </nav>
      );
    });
  }
  */
  renderNavList() {
    return this.props.categories.map((category) => {
      return (
        <li key={category.title}>
          <Link to={category.to}>{category.parent_category}</Link>
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
      				<a className="navbar-brand" href="/">P.R.E.P</a>
      			</div>
      			<div id="navbar" class="navbar-collapse collapse">
      				<ul className="nav navbar-nav navbar-right w3-topnav">
                { this.renderNavList() }
      				</ul>
      			</div>
      		</div>
      	</nav>
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
