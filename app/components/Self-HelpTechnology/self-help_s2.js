import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { selectAppropriate } from '../../actions/index';
import { bindActionCreators } from 'redux';

const appElement = document.getElementById('app');
const VIEWER_REF = 'VIEWER';
const customStyles = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(255, 255, 255, 0.75)',
    overflow          : 'hidden',
    margin            : 0,
    height            : '100%'
  },
  content : {
    position                   : 'absolute',
    top                        : 0,
    left                       : 0,
    right                      : 0,
    bottom                     : 0,
    border                     : '1px solid #ccc',
    backgroundColor             : 'rgba(0, 0, 0, 0.8)',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    outline                    : 'none',
  }
};

const state = {
  currentSlide: 0,
  appropriateitems: []
};
const actions = {
  toggleNext() {
    console.log("somthing worked togglenext");
    const current = state.currentSlide;
  }
};
class SelfHelpS2 extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      currentSlide: 0,
      appropriateitems: []
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(id) {
    this.setState({
      modalIsOpen: id,
      originalBodyOverflow: appElement.style.overflow,
      originalBodyPosition: appElement.style.position
    });
    // Set overflow hidden so that the background doesn't scroll
    appElement.style.overflow = 'hidden';
    appElement.style.position = 'fixed';
  }

  closeModal() {
    this.setState({ modalIsOpen: null });
    // Set overflow back to original value
    appElement.style.overflow = this.state.originalBodyOverflow;
    appElement.style.position = this.state.originalBodyPosition;
    this.refs.VIEWER_REF.focus();
  }

  appropriateList() {
    const { currentModal } = this.state;
    return this.props.appropriateitems.map((item) => {
      const ModalComponent = item.modal;
      const handleOpenModal = () => this.openModal(item.id);
      const handleSlide = () => {
        this.handleslide(item.id);
      }
      return (
        <div key={item.id}>
          <div className="form-group col-sm-4 col-md-4 self-help-two-content" href="#self-help-two-content">
            <div className="thumbnail" onClick={handleOpenModal}>
              <h3>{item.title}</h3>
              <img src={item.img} />
            </div>
          </div>
          <Modal
            isOpen={this.state.modalIsOpen === item.id}
            onRequestClose={this.closeModal}
            style={customStyles}
            onChange={this.slide}
            contentLabel="Modal"
            >
              <button type="button" class="close-button" data-dismiss="modal" onClick={this.closeModal}>&times;</button>
                <div className="modal-content">
                  <ModalComponent />
                  <div class="modal-footer">
                    <button type="button" class="btn btn-default" onClick={this.closeModal}>Close</button>
                  </div>
                </div>
                <a className="w3-btn-floating" id="floating-left" onClick={handleSlide}>❮</a>
                <a className="w3-btn-floating" id="floating-right" onClick={handleSlide}>❯</a>
            </Modal>
          </div>
        );
    });
  }

  /*
    handleslide(id, modal) {
      const floatingLeft = document.getElementById("floating-left");
      const floatingRight = document.getElementById("floating-right");
      this.setState({ currentId: id, currentModal: modal });
      floatingLeft.addEventListener('click', () => {
        if ( currentId > 1 ) {
          this.setState({ prevId: currentId - 1});

        } else {
          currentModal: modal;
        }
      });
      floatingRight.addEventListener('click', () => {
        currentModal = id + 1;
      });
    }
  */

  render () {
    return (
      <section className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div className="container self-help-two">
          <h1><strong>Appropriate Technology</strong></h1>
          <hr></hr>
          <h4 className="self-help-two-info">
            <strong>Appropriate technology </strong>is small-scale <strong>technology</strong>
              . It is simple enough that people can manage it directly and on a local level. <strong>Appropriate technology </strong>
              makes use of skills and <strong>technology </strong>that are available in a local community to supply basic human needs,
              such as gas and electricity, water, food, and waste disposal.
          </h4>

          <div className="row" tabIndex="0" ref="VIEWER_REF">
            {this.appropriateList()}
          </div>
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
