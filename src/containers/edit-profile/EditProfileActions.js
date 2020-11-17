import profileData from "../../data/admin-data.json";
const writeJsonFile = require('write-json-file');

export const getProfileAction = () => {
  return async (dispatch) => {
    return dispatch({
      type: "GET_PROFILE",
      payload: profileData,
    });
  };
};

export const updateProfileAction = (newProfileData) => {
  return async (dispatch) => {
    writeJsonFile(`${__dirname}/data/admin-data.json`, {foo: true});
    console.log(__dirname)
    return dispatch({
      type: "UPDATE_PROFILE",
      payload: profileData,
    });
  };
};
