import React from 'react';
import { IndexLink, Link } from 'react-router';

const navbar = document.getElementById('#navber');
const top = document.getElementById('#top');
class Navbar extends React.Component {
  constructor() {
    super();

    this.state = {
      collapsed: true,
      scroll_top: 0
  }
}
  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  getScrollValue() {
    this.setState({ scroll_top: window.scrollY });
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

  render() {
    return (
      <div data-spy="scroll" data-target="#myScrollspy" class="">

      	{/* Fixed Nav */}
      	<nav class="navbar navbar-default navbar-fixed-top" id="myScrollspy">
      		<div class="container">
      			<div class="navbar-header">
      				<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
      					<span class="sr-only">Toggle navigation</span>
      					<span class="icon-bar"></span>
      					<span class="icon-bar"></span>
      					<span class="icon-bar"></span>
      				</button>
      				<a class="navbar-brand" href="#">P.R.E.P</a>
      			</div>
      			<div id="navbar" class="navbar-collapse collapse">
      				<ul class="nav navbar-nav navbar-right">
                <li><Link to='/hydro'>HYDRO</Link></li>
                <li><Link to='/geo'>GEO</Link></li>
                <li><Link to='/climato'>CLIMATO</Link></li>
                <li><Link to='/bio'>BIO</Link></li>
                <li><Link to='/manmade'>MANMADE</Link></li>
                <li><Link to='/etc'>ETC</Link></li>
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
