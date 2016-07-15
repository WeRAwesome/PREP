import React, { Component } from 'react';

class Video extends Component {
  constructor(props) {
    super(props);

    this.state = {
      url : ''
    };
  }

  render() {
    return(
      <div className="video-detail">
        <div className="embed-responsive embed-reponsive-16by9">
          <iframe className="embed-responsive-item" src={this.props.url}></iframe>
        </div>
      </div>
    )
  }
}


export default Video;
