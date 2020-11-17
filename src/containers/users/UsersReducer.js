const isLoggedLocalStorage = window.localStorage.getItem("isLogged");
const initState = {
  isLogged:
    isLoggedLocalStorage !== null ? isLoggedLocalStorage === "true" : false,
  users: {
    page: null,
    per_page: null,
    total: null,
    total_pages: null,
    data: [],
  },
};

const UsersReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN":
      window.localStorage.setItem("isLogged", action.payload);
      state = { ...state, isLogged: action.payload };
      break;
    case "GET_USERS":
        state = {...state, users: action.payload}
        break;
    default:
      break;
  }
  return state;
};

export default UsersReducer;
