import { REGISTER_SUCCESS } from "../../../redux/types/userTypes";

const initialState = {
  user: null,
  isAuthenticated: false,
  loading: true,
  token: localStorage.getItem("token"), // after successfull login we will set token in localStorage
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
      }; // it will return this json object to store and update the store content as per the new payload

    default:
      return state;
  }
};
