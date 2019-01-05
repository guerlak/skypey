import { SET_ACTIVE_USER_ID} from "../constants/action-types";
import { SET_ACTIVE_USER} from "../constants/action-types";

export const setActiveUserId = id => {
console.log('Action fn ' + id)

return (
            {
            type: SET_ACTIVE_USER_ID,
            payload: id
            }
        );
}


export const setActiveUser = user => {

    return (
                {
                type: SET_ACTIVE_USER,
                payload: user
                }
            );
    }