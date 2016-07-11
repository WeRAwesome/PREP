import React, { Component } from 'react';
import Modal from 'react-modal';

const appElement = document.getElementById('self-help-two-content');

class SelfHelpS2 extends Component {
  constructor() {
    super();

    this.state = {modalIsOpen: false};
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    this.refs.subtitle.style.color='#f00';
  }

  closeModal(){
    this.setState({modalIsOpen: false });
  }
  render () {
    return (
      <section className="container self-help-two">
        <h1><strong>Appropriate Technology</strong></h1>
        <hr></hr>
        <h4 className="self-help-two-info">
          <strong>Appropriate technology </strong>is small-scale <strong>technology</strong>
            . It is simple enough that people can manage it directly and on a local level. <strong>Appropriate technology </strong>
            makes use of skills and <strong>technology </strong>that are available in a local community to supply basic human needs,
            such as gas and electricity, water, food, and waste disposal.
        </h4>

        <div className="row">
          <div className="form-group col-sm-6 col-md-4 self-help-two-content">
            <div className="thumbnail">
              <h3>Get Pure Water</h3>
              <img src="../app/images/Self-HelpTechnology/PurifyWater_02.jpg" onClick={this.openModal} />
            </div>
            <Modal
              isOpen={this.state.modalIsOpen}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal}>

              <h2 ref="subtitle">Hello</h2>
              <button onClick={this.closeModal}>close</button>
              <div>I am a modal</div>
              <form>
                <input />
                <button>tab navigation</button>
                <button>stays</button>
                <button>inside</button>
                <button>the modal</button>
              </form>
            </Modal>
          </div>
          <div className="form-group col-sm-6 col-md-4 self-help-two-content">
            <div className="thumbnail">
              <h3>A liter of Light</h3>
              <img src="../app/images/Self-HelpTechnology/Liter_of_Light_04.jpg" />
            </div>
          </div>
          <div className="form-group col-sm-6 col-md-4 self-help-two-content">
            <div className="thumbnail">
              <h3>LED Power Hack</h3>
              <img src="../app/images/Self-HelpTechnology/Liter_of_Light_02.jpg" />
            </div>
          </div>
          <div className="form-group col-sm-6 col-md-4 self-help-two-content">
            <div className="thumbnail">
              <h3>Cook Stove</h3>
              <img src="../app/images/Self-HelpTechnology/institutional_cookstove_main.jpg" />
            </div>
          </div>
          <div className="form-group col-sm-6 col-md-4 self-help-two-content">
            <div className="thumbnail">
              <h3>Solar Water Disinfection</h3>
              <img src="../app/images/Self-HelpTechnology/Solar_Water_Disinfection_01.jpg" />
            </div>
          </div>
          <div className="form-group col-sm-6 col-md-4 self-help-two-content">
            <div className="thumbnail">
              <h3>Pot in Pot Cooler</h3>
              <img src="../app/images/Self-HelpTechnology/Pot_in_Pot_Cooler_01.jpg" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SelfHelpS2;
