import {Detail,push,reduce,deletel,cartPush} from "./actionsTypes"
import {createAction} from "redux-actions";
import {detailApi} from "api/hub"

export const detailAsyncAction = (id)=>{
    let detailAction = createAction(Detail,(data)=>({data:data}))
    return async (dispatch)=>{
        let data = await detailApi(id);
        dispatch(detailAction(data))
    }
}

export const pushAsyncAction = (index)=>({
    type:push,
    index
})

export const reduceAsyncAction = (index)=>({
    type:reduce,
    index
})

export const deleteAsyncAction = (index)=>({
    type:deletel,
    index
})

export const cartPuchAsyncAction = (info)=>({
    type:cartPush,
    info
})
