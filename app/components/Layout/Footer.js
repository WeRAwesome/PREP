import React from 'react';
import {Link} from 'react-router';

class Footer extends React.Component {
/*
  componentDidMount() {
    // window.addEventListener('scroll', () => {
    //   this.scrollY();
    // });
    window.onscroll = () => {
      if (document.body.scrollTop <= 40) {
        document.getElementById("topbutton").className = "";
      } else {
        document.getElementById("topbutton").className = "top";
      }
    }
  }
  constructor() {
    super();
    this.state = {
      getScrollTop: 0,
    };
    this.scrollY = this.scrollY.bind(this);
  }

  scrollY() {
    // const getScrollTop = !this.state.getScrollTop;
    // const y = document.body.scrollTop;
    // this.setState({getScrollTop: y});
    if(document.body.scrollTop <= 40){
      document.getElementById("topbutton").className = "";
    } else {
      document.getElementById("topbutton").className = "top";
    }
  }
*/
  render() {
    //const { getScrollTop } = this.state;
    //const topButton = getScrollTop <= 40 ? "" : "top";
    return (
      <div className="footer">
        {/* <a href="#spytop" className="top" id="topbutton"><span clasName="glyphicon glyphicon-chevron-up"></span></a> */}
        <div className='container'>
          <div className='row'>
            <p className='text-right'> © 2016 P.R.E.P </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
