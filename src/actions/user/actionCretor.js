import {userLogin,userRegister} from "./actionsTypes"
import {createAction} from "redux-actions";
import {LoginApi,RegisterApi} from "api/hub"


export const userLoginAsyncAction = (username,password)=>{
    let userLoginAction = createAction(userLogin,(data)=>({data:data}));

    return async(dispatch)=>{
        let data = await LoginApi(username,password);
        dispatch(userLoginAction(data))
    }
}

export const userRegisterAsyncAction = (username,password)=>{
    let userRegisterAction = createAction(userRegister,(data)=>({data:data}));

    return async(dispatch)=>{
        let data = await RegisterApi(username,password);
        dispatch(userRegisterAction(data))
    }
}

