import {userLoginAsyncAction,userRegisterAsyncAction} from "actions/user/actionCretor"


export const mapStateToProps = (state)=>({
    users:state.user.user
})


export const mapDispatchToProps =(dispatch)=>({
    handleAsyncLogin(username,password){
        dispatch(userLoginAsyncAction(username,password))
    },
    handleAsyncRegister(username,password){
        dispatch(userRegisterAsyncAction(username,password))
    }
})