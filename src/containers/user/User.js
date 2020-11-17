import React, { Component } from "react";
import { connect } from "react-redux";
import { Typography, CardContent, Card, Divider, Button, CardActions } from "@material-ui/core";

import { getUserAction, deleteUserAction } from "./UserAction";

class User extends Component {

  componentDidMount() {
    let { getUser } = this.props;
    let userId = this.props.match.params.userId;
    getUser(userId);
  }

  // componentDidUpdate(prevProps){
  //   let { getUser } = this.props
  //   if(prevProps.match.params.userId !== this.userId){
  //     getUser(this.userId)
  //   }
  // }

  handleDeleteUser = (userId) => {
    this.props.history.push('/users')
  }

  render() {
    let { user } = this.props;
    return (
      <div
        style={{
          maxWidth: "400px",
          margin: "50px auto",
          textAlign: "center",
          padding: "30px 20px 0 20px",
        }}
      >
        <Card>
          <img src={user.avatar} alt={user.first_name} />
          <CardContent>
            <Divider variant="middle" />
            <div style={{ marginTop: "15px" }}>
              <Typography gutterBottom variant="h5" component="h2">
                {user.first_name + " " + user.last_name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {user.email}
              </Typography>
            </div>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary">
              Edit
            </Button>
            <Button onClick={() => this.handleDeleteUser(user.id)} size="small" color="primary">
              Delete
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUser(userId) {
      dispatch(getUserAction(userId));
    },
    deleteUser(userId){
      dispatch(deleteUserAction(userId))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
