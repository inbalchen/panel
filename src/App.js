import React, { Component } from "react";
import { connect } from "react-redux";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  ListItem,
  Hidden,
  List,
  Drawer,
} from "@material-ui/core";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import Home from "./containers/main/Home";
import Login from "./containers/login/Login";
import Users from "./containers/users/Users";
import User from "./containers/user/User";
import EditProfile from "./containers/edit-profile/EditProfile";
import { changeSiteName } from "./AppActions";
import PrivateRoutes from "./components/PrivateRoutes";
import { logout } from "./containers/users/UsersActions";
import GroupIcon from "@material-ui/icons/Group";
import PersonIcon from "@material-ui/icons/Person";
import AppsIcon from "@material-ui/icons/Apps";
import MenuIcon from "@material-ui/icons/Menu";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleLogout = () => {
    let { logout } = this.props;
    logout();
  };

  toggleDrawer = () => {
    this.setState({ open: !this.state.open });
  };

  items = () => {
    return (
      <div onClick={this.toggleDrawer}>
        <List>
          <NavLink to="/" exact activeClassName="active">
            <ListItem button>
              <AppsIcon />
              <Typography style={{ padding: "5px" }}>Home</Typography>
            </ListItem>
          </NavLink>
          <NavLink to="/users" exact activeClassName="active">
            <ListItem button>
              <GroupIcon />
              <Typography style={{ padding: "5px" }}>Users</Typography>
            </ListItem>
          </NavLink>
          <NavLink to="/edit-profile" exact activeClassName="active">
            <ListItem button>
              <PersonIcon />
              <Typography style={{ padding: "5px" }}>Edit Profile</Typography>
            </ListItem>
          </NavLink>
        </List>
      </div>
    );
  };

  render() {
    let { siteName, isLogged } = this.props;
    let { open } = this.state;
    return (
      <div className="App">
        <Router>
          <AppBar position="fixed">
            <Toolbar>
              <Hidden xsDown>
                <IconButton
                  edge="start"
                  href="/"
                  color="inherit"
                  aria-label="menu"
                  style={{ fontSize: "18px" }}
                >
                  {siteName}
                </IconButton>
              </Hidden>
              <Hidden smUp>
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  style={{ fontSize: "18px" }}
                  onClick={this.toggleDrawer}
                >
                  <MenuIcon />
                </IconButton>
              </Hidden>
              <div style={{ flexGrow: 1 }}></div>
              {!isLogged && (
                <Typography style={{ padding: "5px" }}>
                  <NavLink to="/login" exact style={{ color: "#fff" }}>
                    Login
                  </NavLink>
                </Typography>
              )}
              {isLogged && (
                <Typography style={{ padding: "5px" }}>
                  <Link
                    to="/login"
                    onClick={this.handleLogout}
                    style={{ color: "#fff" }}
                  >
                    Log Out
                  </Link>
                </Typography>
              )}
            </Toolbar>
          </AppBar>
          <Hidden xsDown>
            <Drawer
              variant="permanent"
              anchor="left"
              className="drawer-permanent"
            >
              {this.items()}
            </Drawer>
          </Hidden>
          <Hidden smUp>
            <Drawer
              variant="temporary"
              anchor="left"
              open={open}
              onClose={this.toggleDrawer}
              className="drawer-temporary"
            >
              {this.items()}
            </Drawer>
          </Hidden>

          <div className="right-pane">
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={Login} />
            <PrivateRoutes path="/users/:pageNumber?" exact component={Users} />
            <PrivateRoutes path="/user/:userId" exact component={User} />
            <PrivateRoutes path="/edit-profile" exact component={EditProfile} />
          </div>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    siteName: state.appReducer.siteName,
    isLogged: state.usersReducer.isLogged,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeSiteName(newSiteName) {
      dispatch(changeSiteName(newSiteName));
    },
    logout() {
      dispatch(logout());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
