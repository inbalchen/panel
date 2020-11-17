import React, { Component } from "react";
import { connect } from "react-redux";
import {
  TextField,
  FormControl,
  Button,
  CircularProgress,
} from "@material-ui/core";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";
import { getProfileAction, updateProfileAction } from "./EditProfileActions";

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profData: {},
    };
  }

  componentDidMount() {
    let { getProfile } = this.props;
    getProfile();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      profData: nextProps.profileData,
    });
  }

  handleSubmit = (e) => {
    let { updateProfile } = this.props;
    e.preventDefault();
    
    let data = {
      first_name: e.target.first_name.value,
      last_name: e.target.last_name.value,
      email: e.target.email.value,
      phone_number: e.target.phone.value,
      address: {
        city: e.target.city.value,
        country: e.target.country.value
      }
    };
    console.log(data);
    updateProfile(data)
  };

  handleChange = (e) => {
    if (e && e.target) {
      let { name, value } = e.target;
      this.setState({ ...this.state.profData, [name]: value });
    }else{
      this.setState({ ...this.state.profData, phone_number: e });
    }
  };

  isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }

  render() {
    let { profData } = this.state;
    return (
      <div
        style={{
          maxWidth: "690px",
          margin: "50px auto",
          padding: "30px 20px",
        }}
        className="ep_wrapper"
      >
        {!this.isEmpty(profData) ? (
          <form
            style={{
              background: "#fff",
              padding: "20px",
              textAlign: "center",
              outline: "none",
              borderRadius: "3px",
              border: "1px solid rgba(0,0,0,.2)",
            }}
            onSubmit={this.handleSubmit}
          >
            <FormControl
              component="div"
              style={{ width: "300px", padding: "5px" }}
            >
              <TextField
                margin="normal"
                label="First Name"
                name="first_name"
                defaultValue={profData.first_name || ""}
                variant="outlined"
                type="text"
                onChange={this.handleChange}
                required
              />
              <TextField
                margin="normal"
                label="Last Name"
                name="last_name"
                defaultValue={profData.last_name || ""}
                variant="outlined"
                type="text"
                onChange={this.handleChange}
                required
              />
              <PhoneInput
                style={{ marginTop: "15px" }}
                // country={"us"}
                inputProps={{
                  name: "phone",
                }}
                enableSearch
                value={profData.phone_number || ""}
                onChange={(phone) => this.handleChange(phone)}
              />
            </FormControl>
            <FormControl
              component="div"
              style={{ width: "300px", padding: "5px" }}
            >
              <TextField
                margin="normal"
                label="Email"
                name="email"
                defaultValue={profData.email || ""}
                variant="outlined"
                type="email"
                onChange={this.handleChange}
                required
              />
              <TextField
                margin="normal"
                label="City"
                name="city"
                defaultValue={(profData.address && profData.address.city) || ""}
                variant="outlined"
                type="text"
                onChange={this.handleChange}
              />
              <TextField
                margin="normal"
                label="Country"
                name="country"
                defaultValue={
                  (profData.address && profData.address.country) || ""
                }
                variant="outlined"
                type="text"
                onChange={this.handleChange}
              />
            </FormControl>
            <div
              style={{
                padding: "22px 0 7px 0",
                display: "flex",
                justifyContent: "space-evenly",
              }}
            >
              <div>
                <Button type="submit" variant="contained">
                  Update
                </Button>
              </div>
            </div>
          </form>
        ) : (
          <div style={{ textAlign: "center" }}>
            <CircularProgress />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    profileData: state.editProfileReducer.profileData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProfile() {
      dispatch(getProfileAction());
    },
    updateProfile(newProfileData) {
      dispatch(updateProfileAction(newProfileData));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
