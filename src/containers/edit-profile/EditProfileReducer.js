const initState = {
  profileData: {
    first_name: "",
    last_name: "",
    phone_number: "",
    email: "",
    address: {
      city: "",
      country: "",
    },
  },
};

const EditProfileReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_PROFILE":
      state = { ...state, profileData: action.payload };
      break;
    case "UPDATE_PROFILE":
      state = { ...state, profileData: action.payload };
      break;
    default:
      break;
  }
  return state;
};

export default EditProfileReducer;
