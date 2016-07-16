import React, { Component } from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { selectAppropriate } from '../../actions/index';
import { bindActionCreators } from 'redux';


const appElement = document.getElementById('self-help-two-content');

class SelfHelpS2 extends Component {
  constructor() {
    super();

    this.state = { modalIsOpen: false };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(id) {
    this.setState({ modalIsOpen: id });
  }

  closeModal() { this.setState({ modalIsOpen: null }); }

  appropriateList() {
    return this.props.appropriateitems.map((item) => {
      const ModalComponent = item.modal;
      const handleOpenModal = () => this.openModal(item.id);
      return (
          <div key={item.id} className="form-group col-sm-6 col-md-4 self-help-two-content">
            <div className="thumbnail" onClick={handleOpenModal}>
              <h3>{item.title}</h3>
              <img src={item.img} />
            </div>
            <Modal
              isOpen={this.state.modalIsOpen === item.id}
              onRequestClose={this.closeModal}
              className="modal-content">
              <ModalComponent />
              <div class="modal-footer">
                <button type="button" class="btn btn-default" onClick={this.closeModal}>Close</button>
              </div>
            </Modal>
          </div>
      );
    });
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
          {this.appropriateList()}
        </div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    appropriateitems: state.appropriateitems
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectAppropriate: selectAppropriate }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(SelfHelpS2);
