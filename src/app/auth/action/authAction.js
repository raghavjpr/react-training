import {
  LOGIN_SUCCESS,
  REGISTER_SUCCESS,
  USER_LOADED,
} from "../../../redux/types/userTypes";
import api from "../../../utils/api";

export const register = (formData) => async (dispatch) => {
  try {
    const res = await api.post("/users", formData);

    // success
    // failure
    dispatch({ type: REGISTER_SUCCESS, payload: res.data });
  } catch (err) {}
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
