import React, { Component } from 'react';
import Modal from 'react-modal';


const appElement = document.getElementById('self-help-two-content');

class ModalContent extends Component {
  constructor() {
    super();

    this.state = { modalIsOpen: false };
  }

  openModal() {
    this.setState = { modalIsOpen: true };
  }
  /*
  afterOpenModal() {
    this.refs.subtitle.style.color='#f00';
  }
  */
  closeModal(){
    this.setState = { modalIsOpen: false };
  }
  render() {
    return (
      <div></div>
    );
  }
}

export default ModalContent;
