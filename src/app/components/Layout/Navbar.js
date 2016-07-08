import React from 'react';
import { IndexLink, Link } from 'react-router';
import $ from 'jquery';
import jQueryUI from 'jquery-ui';

/*
const navbar = document.getElementById('#navber');
const top = document.getElementById('#top');
const scroll_top = window.pageYOffset;

class Navbar extends React.Component {
  componentDidUpdate() {
    var node = this.getDOMNode();
    node.scrollTop = this.scrollTop + (node.scrollHeight - this.scrollHeight);
    console.log(node.scrollTop);
  }
  componentWillUpdate() {
    var node = this.getDOMNode();
    this.scrollHeight = node.scrollHeight;
    this.scrollTop = node.scrollTop;
    if(this.scrollTop <= 40) {
      navbar.removeClass("navbar-scroll");
    }else {
      navbar.addClass("navbar-scroll");
    }
  }

  constructor(props) {
    super(props);

    this.state = {
      collapsed: true,
      scrollTop: 0
    }
  }
  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  getScrollValue() {
    this.setState({ scroll_top: window.pageYOffset });
    console.log(scroll_top);
    //return window.scrollY || window.pageYOffset || 0;
  }
  navbarChange() {
    if (this.state.scroll_top <= 40) {
      navbar.removeClass("navbar-scroll");
    }else {
      navbar.addClass("navbar-scroll");
    }
  }
*/
class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  asNavItems(navLists) {
    const items = this.props.navLists;
    return navLists.map((items) => {
      return (
        <li key={items.title}>
          <Link to={items.to}>{items.title}</Link>
        </li>
      );
    });
  }
  handleNavbar() {
    $(document).ready(function() {
      const navbar = $('.navbar');

    	$(window).scroll(function(){
    		if($(window).scrollTop() <= 40){
    			navbar.removeClass('navbar-scroll');
    			$('.top').hide();
    		} else {
    			navbar.addClass('navbar-scroll');
    			$('.top').show();
    		}
    	});
    	$('.navbar-toggle').click(function(){
    		if($(window).scrollTop() <= 40){
    		   navbar.addClass('navbar-scroll');
    	    }
    	});
    });
  }


  render() {
    return (
      <div data-spy="scroll" data-target="#myScrollspy" class="">
      	{/* Fixed Nav */}
      	<nav className="navbar navbar-default navbar-fixed-top" id="myScrollspy">
        { this.handleNavbar() }
      		<div className="container">
      			<div className="navbar-header">
      				<button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                      data-target="#navbar" aria-expanded="false" aria-controls="navbar">
      					<span className="sr-only">Toggle navigation</span>
      					<span className="icon-bar"></span>
      					<span className="icon-bar"></span>
      					<span className="icon-bar"></span>
      				</button>
      				<a className="navbar-brand" href="#">P.R.E.P</a>
      			</div>
      			<div id="navbar" class="navbar-collapse collapse">
      				<ul className="nav navbar-nav navbar-right">
                { this.asNavItems(this.props.navList) }
      				</ul>
      			</div>
      		</div>
      	</nav>
      	{ /*Close Fixed Nav */	}

      </div>
    );
  }
}

export default Navbar;
