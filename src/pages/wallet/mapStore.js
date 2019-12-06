import {pushAsyncAction,reduceAsyncAction,deleteAsyncAction} from "actions/detail/actionCreator"

export const mapStateToProps = (state)=>({
    shoplist: JSON.parse(localStorage.getItem('goodlist')) || state.det.shoplist,
    count:state.det.count,
    countPrice:state.det.countPrice
    // inputVal:state.det.inputVal
})

export const mapDispatchToProps =(dispatch)=>({
    handlepush(index){
        dispatch(pushAsyncAction(index))
    },
    handlereduce(index){
        dispatch(reduceAsyncAction(index))
    },
    handleInput(){},
    handleDel(index){
        dispatch(deleteAsyncAction(index))
    }
})