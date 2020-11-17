import axios from 'axios'

export const login = (email, password) => {
    return async (dispatch) => {
        axios.post('https://reqres.in/api/login', {
            "email": "eve.holt@reqres.in",
            "password": "cityslicka"
        }).then(res => {
            console.log(res)
            let isLogged = res.data.token === "QpwL5tke4Pnpja7X4" ? true : false
            return dispatch ({
                type: "LOGIN",
                payload: isLogged,
            })
        }).catch(err => {
            console.log(err)
        })
    }
}

export const logout = () => {
    return  {
        type: "LOGIN",
        payload: false,
    }
}

export const getUsersAction = (pageNamber) => {
    return async (dispatch) => {
        axios.get(`https://reqres.in/api/users?page=${pageNamber}`).then(res => {
            return dispatch ({
                type: "GET_USERS",
                payload: res.data,
            })
        }).catch(err => {
            console.log(err)
        })
    }
}

