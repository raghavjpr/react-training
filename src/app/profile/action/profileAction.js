import { GET_PROFILE, PROFILE_ERROR } from "../../../redux/types/profileTypes";
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

export const createProfile = (formData) => async (dispatch) => {
  try {
    console.log("In Create Profile");
    const res = await api.post("/profile", formData);
    dispatch({ type: GET_PROFILE, payload: res.data });
    dispatch(setAlert("Profile Successfully Created", "success"));
  } catch (err) {}
};
