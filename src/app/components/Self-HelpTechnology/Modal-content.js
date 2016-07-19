import React, { Component } from 'react';

export default class ModalHeader extends Component {
  render() {
    return (
      <div className="modal-header">
        {this.props.title}
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    );
  }
}

export default class ModalBody extends Component {
  render() {
    return (
      <div className="modal-body">
        {this.props.content}
      </div>
    );
  }
}

export default class ModalFooter extends Component {
  render() {
    return (
      <div className="modal-footer">
        <button type="button" class="btn btn-default">Close</button>
      </div>
    );
  }
}
