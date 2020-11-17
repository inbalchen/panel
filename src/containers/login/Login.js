import React, { Component } from 'react';
import { connect } from 'react-redux'
import LoginForm from './components/LoginForm'

import { login } from '../users/UsersActions'

class Login extends Component{

    componentDidMount() {
        let { isLogged } = this.props
        if(isLogged){
            this.props.history.push('/')
        }
    }

    handleLogin = (email, password) => {
        let { login } = this.props
        login(email, password)
        this.props.history.push('/')
    }

    render(){
        return <div style={{padding: '30px 20px 0 20px'}}>
            <LoginForm handleLogin={this.handleLogin} />
        </div>
    }
}

const mapStateToProps = state => {
    return {
       isLogged: state.usersReducer.isLogged
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
        login: (email, password) => {
            dispatch(login(email, password))
        }
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Login);