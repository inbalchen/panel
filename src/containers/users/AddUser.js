import React, { Component } from "react";
import { Modal } from "@material-ui/core";
import "react-phone-input-2/lib/material.css";
import Form from '../../components/Form'

class AddUser extends Component {
  render() {
    // let { open, handleModalClose } = this.props
    let { open, handleModalClose } = this.props;
    console.log(this.props);
    return (
      <div
        style={{
          maxWidth: "400px",
          margin: "50px auto",
        }}
        className="au_wrapper"
      >
        <Modal
          open={open}
          onClose={handleModalClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          style={{
            margin: "50px auto",
          }}
        >
          <Form handleModalClose={handleModalClose} initData='' />
        </Modal>
      </div>
    );
  }
}

export default AddUser;
