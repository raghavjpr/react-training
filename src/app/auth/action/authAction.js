import {
  LOGIN_SUCCESS,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  USER_LOADED,
} from "../../../redux/types/userTypes";
import api from "../../../utils/api";
import { setAlert } from "../../core/actions/alertAction";

export const register = (formData) => async (dispatch) => {
  try {
    const res = await api.post("/users", formData);

    // success
    // failure
    dispatch({ type: REGISTER_SUCCESS, payload: res.data });
  } catch (err) {
    const errors = err.response.data.errors;
    console.log(JSON.stringify("data is " + JSON.stringify(errors)));
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({ type: REGISTER_FAIL });
  }
};

// load User===> load the user inform

export const loadUser = () => async (dispatch) => {
  try {
    const res = await api.get("/auth");
    dispatch({ type: USER_LOADED, payload: res.data });
  } catch (err) {}
};

export const login = (email, password) => async (dispatch) => {
  const body = JSON.stringify({ email, password });
  try {
    const res = await api.post("/auth", body);
    console.log(JSON.stringify(res.data));
    dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    dispatch(loadUser());
  } catch (err) {}
};
