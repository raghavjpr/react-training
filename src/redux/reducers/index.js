// by default when u will provide the path of reducers
import { combineReducers } from "redux";
import auth from "../../app/auth/reducers/authReducer";
// in imp statement then it will refer the index.js internally.
export default combineReducers({ auth });
// we registered the authReducer in our combinedreducer.
// combineReducers : function from redux
// export : is as good as public in nature
// default : by default it will be exported with the same name
//
