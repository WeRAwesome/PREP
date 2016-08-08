import React from 'react';
import Navbar from '../Layout/Navbar';

class SectionOne extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <section className='cover' id='spytop'>
        <div className='jumbotron'>
          <img className='animated fadeInDownBig' src='../app/images/Home/title.png' />
        </div>
      </section>
    )
  }
}

export default SectionOne;