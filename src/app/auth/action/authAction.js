import axios from "axios";
import { REGISTER_SUCCESS } from "../../../redux/types/userTypes";

// Register the user
export const register = (formData) => (dispatch) => {
  try {
    const res = await axios.post("/users", formData);
    //success
    //faliure
    dispatch({ type: REGISTER_SUCCESS, payload: res.data });
  } catch (err) {}
};
