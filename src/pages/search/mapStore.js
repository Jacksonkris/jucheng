import {searchAsyncAction} from "actions/homeClassfiy/actionCreator"

export const mapStateToProps = (state)=>({
    search:state.home.search
})

export const mapDispatchToProps =(dispatch)=>({
    handleAsyncSearch(key){
        dispatch(searchAsyncAction(key))
    }
})