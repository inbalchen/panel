import React, { Component } from "react";
import { TextField, FormControl, Button } from "@material-ui/core";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";

class Form extends Component {
  render() {
    let { handleModalClose, initData } = this.props;
    return (
      <form
        style={{
          maxWidth: "610px",
          margin: "50px auto",
          background: "#fff",
          padding: "20px",
          textAlign: "center",
          outline: "none",
          borderRadius: "3px",
        }}
        onSubmit={this.handleSubmit}
      >
        <FormControl
          component="div"
          style={{ width: "300px", padding: "0 5px 0 0" }}
        >
          <TextField
            margin="normal"
            label="First Name"
            name="first_name"
            defaultValue={initData.first_name || ''}
            variant="outlined"
            type="text"
            onChange={this.handleChange}
            required
          />
          <TextField
            margin="normal"
            label="Last Name"
            name="last_name"
            defaultValue={initData.last_name || ''}
            variant="outlined"
            type="text"
            onChange={this.handleChange}
            required
          />
          <PhoneInput
            style={{ marginTop: "18px" }}
            // country={"us"}
            enableSearch
            value={(initData.address && initData.address.country) || ''}
            onChange={(phone) => this.setState({ phone })}
          />
        </FormControl>
        <FormControl
          component="div"
          style={{ width: "300px", padding: "0 0 0 5px" }}
        >
          <TextField
            margin="normal"
            label="Email"
            name="email"
            defaultValue={initData.email || ''}
            variant="outlined"
            type="email"
            onChange={this.handleChange}
            required
          />
        </FormControl>
        {handleModalClose && <div
          style={{
            padding: "22px 0 7px 0",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <div>
            <Button type="submit" variant="contained">
              Add
            </Button>
          </div>

          <div>
            <Button
              type="submit"
              variant="contained"
              onClick={handleModalClose}
            >
              Cancel
            </Button>
          </div>
        </div>}
      </form>
    );
  }
}

export default Form;
