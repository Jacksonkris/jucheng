import {singlistAsyncAction} from "actions/homeClassfiy/actionCreator"

export const mapStateToProps = (state)=>({
    singlist:state.home.singlist,
    activeIndex:state.home.activeIndex
})

export const mapDispatchToProps =(dispatch)=>({
    handleAsyncSingList(cate,page){
        dispatch(singlistAsyncAction(cate,page))
    }
})
