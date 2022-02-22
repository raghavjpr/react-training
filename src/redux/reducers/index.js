// by default when we provide the path of reducers in import statement it will refer the index.js internally
import { combineReducers } from "redux";
import auth from "../../app/auth/reducers/authReducer";

export default combineReducers({ auth });
// combineReducers : function from redux
// export : defines that it is public in nature(analogy)
// default : by default it will be exported with the same name

// we registered the authReducer in our combineReducers
