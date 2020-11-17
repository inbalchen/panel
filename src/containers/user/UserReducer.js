const initState = {
  user: {
    id: null,
    email: "",
    first_name: "",
    last_name: "",
    avatar: "",
  },
};

const UserReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_USER":
      state = { ...state, user: action.payload };
      break;
    case "DELETE_USER":
      state = { ...state, user: action.payload };
      break;
    default:
      break;
  }
  return state;
};

export default UserReducer;
