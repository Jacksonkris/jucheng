import {handleActions} from "redux-actions";
import {userLogin} from "actions/user/actionsTypes"


const defaultState = {
    user:''
}

export default handleActions({
    [userLogin]:(state,action)=>{
        let Users = JSON.parse(JSON.stringify(state));
        Users.user = action.payload.data.data;
        // console.log(action)
        return Users;
    }
},defaultState)