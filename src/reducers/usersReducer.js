import { generateUser } from "../data";
import { SET_ACTIVE_USER } from "../constants/action-types";

export default function user(state = generateUser(), action) {
  
switch(action.type){
  
    case SET_ACTIVE_USER:
    return action.payload;
    default:
    return state

  }
}