import axios from 'axios'


export const getUserAction = (userId) => {
    return async (dispatch) => {
        axios.get(`https://reqres.in/api/users/${userId}`).then(res => {
            return dispatch ({
                type: "GET_USER",
                payload: res.data.data,
            })
        }).catch(err => {
            console.log(err)
        })
    }
}

export const deleteUserAction = (userId) => {
    return async (dispatch) => {
        axios.delete(`https://reqres.in/api/users/${userId}`).then(res => {
            console.log(res)
            return dispatch ({
                type: "DELETE_USER",
                payload: res.data.data,
            })
        }).catch(err => {
            console.log(err)
        })
    }
}

