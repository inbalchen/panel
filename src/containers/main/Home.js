import React, { Component } from "react";
import { connect } from "react-redux";

class Home extends Component {
  render() {
    let { isLogged, siteName } = this.props;
    console.log(this.props);
    return (
      <div style={{ textAlign: "center" }}>
        {isLogged ? (
          <div
            style={{
              marginTop: "50px",
              padding: "30px 20px 0 20px",
              color: "#000",
            }}
          >
            Welcome to {siteName}
          </div>
        ) : (
          <div>Please log in</div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLogged: state.usersReducer.isLogged,
    siteName: state.appReducer.siteName
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
