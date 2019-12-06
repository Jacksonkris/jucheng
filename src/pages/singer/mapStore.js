import {cateAsyncAction,clickAsyncAction} from "actions/homeClassfiy/actionCreator"

export const mapStateToProps = (state)=>({
    catelist:state.home.catelist,
    activeIndex:state.home.activeIndex
})

export const mapDispatchToProps =(dispatch)=>({
    handleAsyncCateList(){
        dispatch(cateAsyncAction())
    },
     handleClick(item) {
        dispatch(clickAsyncAction(item.category_id))
    }
})