import React, { Component } from "react";
import { connect } from "react-redux";
import {
  TableRow,
  TablePagination,
  TableHead,
  TableContainer,
  TableCell,
  TableBody,
  Table,
  Paper,
  Button,
} from "@material-ui/core";

import { getUsersAction } from "./UsersActions";
import AddUserModal from "./AddUser";

const columns = [
  { id: "id", label: "ID", minWidth: 100 },
  { id: "firstName", label: "First Name", minWidth: 170 },
  { id: "lastName", label: "Last Name", minWidth: 100 },
];

class Users extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  componentDidMount() {
    let { getUsers } = this.props;
    let isPageNumber =
      typeof this.props.match.params.pageNumber !== "undefined";
    if (isPageNumber) {
      getUsers(this.props.match.params.pageNumber);
    } else {
      getUsers(1);
    }
  }

  handleChangePage = (event, newPage) => {
    let { getUsers, users } = this.props;
    if (users.page !== newPage + 1) {
      this.props.history.push(`/users/${newPage + 1}`);
      getUsers(newPage + 1);
    }
  };

  handleModalOpen = () => {
    this.setState({ open: true });
  };

  handleModalClose = () => {
    this.setState({ open: false });
  };

  // handleChangeRowsPerPage = (event) => {
  //   this.setState({ rowsPerPage: +event.target.value });
  //   this.setState({ page: 0 });
  // };

  editUser = (userId) => {
    this.props.history.push(`/user/${userId}`);
  };

  render() {
    let { users } = this.props;
    let { open } = this.state;
    console.log(users);
    return (
      <div style={{ padding: "30px 20px 30px 20px" }} className="u_wrapper">
        <div style={{ textAlign: "right", paddingBottom: "20px" }}>
          <Button
            variant="contained"
            onClick={this.handleModalOpen}
            className="u_au_button"
          >
            Add User
          </Button>
        </div>
        <Paper>
          <TableContainer>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {users.data.map((user, i) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={i}
                      onClick={() => this.editUser(user.id)}
                      style={{ cursor: "pointer" }}
                    >
                      <TableCell>{user.id}</TableCell>
                      <TableCell>{user.first_name}</TableCell>
                      <TableCell>{user.last_name}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[6]}
            component="div"
            count={users.total || 0}
            rowsPerPage={users.per_page || 0}
            page={users.page !== null ? users.page - 1 : 0}
            onChangePage={this.handleChangePage}
            onChangeRowsPerPage={this.handleChangeRowsPerPage}
          />
        </Paper>
        <AddUserModal
          open={open}
          handleModalClose={() => this.handleModalClose()}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersReducer.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUsers(pageNumber) {
      dispatch(getUsersAction(pageNumber));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
