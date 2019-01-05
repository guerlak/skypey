import user from "./usersReducer";
import contacts from "./contactsReducer";
import activeUserIdReducer from './activeUserIdReducer'
import messages from './messages.js'
import { combineReducers } from "redux";

export default combineReducers({user, contacts, activeUserIdReducer, messages});