import { createStore, combineReducers, applyMiddleware } from 'redux'
import appReducer from './AppReducer'
import usersReducer from './containers/users/UsersReducer'
import userReducer from './containers/user/UserReducer'
import editProfileReducer from './containers/edit-profile/EditProfileReducer'
import thunk from 'redux-thunk'

const store = createStore(
    combineReducers({
        appReducer,
        usersReducer,
        userReducer,
        editProfileReducer
    }),
    {},
    applyMiddleware(thunk)
)

export default store;

