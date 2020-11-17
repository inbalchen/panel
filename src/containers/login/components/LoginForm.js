import React, { Component } from "react";
import { TextField, FormControl, Button } from "@material-ui/core";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    let { handleLogin } = this.props
    let { email, password } = this.state
    e.preventDefault();
    handleLogin(email, password)
  }

  render() {

    let { email, password } = this.state;

    return (
      <form style={{ maxWidth: "500px", margin: "50px auto" }} onSubmit={this.handleSubmit}>
          
        <FormControl fullWidth>
          <TextField
            label="Email"
            name="email"
            defaultValue={email}
            variant="outlined"
            type="email"
            onChange={this.handleChange}
            required
          />
          <TextField
            label="Password"
            name="password"
            defaultValue={password}
            variant="outlined"
            type="password"
            style={{ marginTop: "20px" }}
            onChange={this.handleChange}
            required
          />
        </FormControl>
        <Button type="submit" variant="contained" style={{ marginTop: "20px", float: 'right' }}>Submit</Button>
      </form>
    );
  }
}

export default LoginForm;
