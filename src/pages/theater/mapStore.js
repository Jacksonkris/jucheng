import {thealistAsyncAction} from "actions/homeClassfiy/actionCreator"

export const mapStateToProps = (state)=>({
    thealist:state.home.thealist
})

export const mapDispatchToProps =(dispatch)=>({
    handleAsynckTheaList(){
        dispatch(thealistAsyncAction())
    }
})