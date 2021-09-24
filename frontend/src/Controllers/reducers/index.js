import { combineReducers } from "redux";
import bugs from './bugs'
import auth from './auth'

export default combineReducers({ bugs, auth })