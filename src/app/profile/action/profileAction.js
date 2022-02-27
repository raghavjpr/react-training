import {
  GET_PROFILE,
  PROFILE_ERROR,
  UPDATE_PROFILE,
} from "../../../redux/types/profileTypes";
import api from "../../../utils/api";
import { setAlert } from "../../core/actions/alertAction";

//Get current user profile
export const getCurrentProfile = () => async (dispatch) => {
  try {
    const res = await api.get("/profile/me");

    dispatch({ type: GET_PROFILE, payload: res.data });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const createProfile = (formData, navigate) => async (dispatch) => {
  try {
    console.log("In Create Profile");
    const res = await api.post("/profile", formData);
    dispatch({ type: GET_PROFILE, payload: res.data });
    dispatch(setAlert("Profile Successfully Created", "success"));
    navigate("/dashboard");
  } catch (err) {}
};

export const addEducation = (formData, navigate) => async (dispatch) => {
  try {
    console.log("In Add Education");
    const res = await api.put("/profile/education", formData);
    dispatch({ type: UPDATE_PROFILE, payload: res.data });
    dispatch(setAlert("Education Successfully Added", "success"));
    navigate("/dashboard");
  } catch (err) {}
};

export const addExperience = (formData, navigate) => async (dispatch) => {
  try {
    const res = await api.put("/profile/experience", formData);
    dispatch({ type: UPDATE_PROFILE, payload: res.data });
    dispatch(setAlert("Experience Added", "success"));
    navigate("/dashboard");
  } catch (err) {}
};

export const deleteEducation = (id) => async (dispatch) => {
  try {
    const res = await api.delete(`/profile/education/${id}`);

    dispatch({ type: UPDATE_PROFILE, payload: res.data });

    dispatch(setAlert("Education Removed", "success"));
  } catch (err) {}
};

export const deleteExperience = (id) => async (dispatch) => {
  try {
    const res = await api.delete(`/profile/experience/${id}`);

    dispatch({ type: UPDATE_PROFILE, payload: res.data });

    dispatch(setAlert("Experience Removed", "success"));
  } catch (err) {}
};
