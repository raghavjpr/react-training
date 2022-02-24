// by default when u will provide the path of reducers
import { combineReducers } from "redux";
import auth from "../../app/auth/reducers/authReducer";
import alerts from "../../app/core/reducers/alertReducer";
// in imp statement then it will refer the index.js internally.
export default combineReducers({
  auth,
  alerts,
});
// we registered the authReducer in our combinedreducer.
// combineReducers : function from redux
// export : is as good as public in nature
// default : by default it will be exported with the same name
//
