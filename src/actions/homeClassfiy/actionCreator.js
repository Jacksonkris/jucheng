import {HomeClassfiy,Bannerpit,HotBlock,TourShow,Theatres,ShowList,TheaList,SingList,Search,CateList,Clickid} from "./actionsTypes"
import {createAction} from "redux-actions";
import {ClassifyHomeApi,HotblockApi,tourApi,theatreApi,showlistApi,thealistApi,singlistApi,searchApi,cateApi} from "api/hub"
export const homeAsyncAction = ()=>{
    let homeAction =createAction(HomeClassfiy,(data)=>({data:data}))
    
    return async (dispatch)=>{
        let data = await ClassifyHomeApi();
        dispatch(homeAction(data))
    }
}

export const hotAsyncAction = ()=>{
    let hotAction = createAction(HotBlock,(data)=>({data:data}))
    return async (dispatch)=>{
        let data = await HotblockApi();
        dispatch(hotAction(data))
    }
}


export const bannerAsyncAction = ()=>{
    let bannerAction = createAction(Bannerpit,(data)=>({data:data}))
    return async (dispatch)=>{
        let data = await ClassifyHomeApi();
        dispatch(bannerAction(data))
    }
}

export const tourAsyncAction = ()=>{
    let tourAction = createAction(TourShow,(data)=>({data:data}))
    return async (dispatch)=>{
        let data = await tourApi();
        dispatch(tourAction(data))
    }
}

export const theatreAsyncAction = ()=>{
    let theatreAction = createAction(Theatres,(data)=>({data:data}))
    return async (dispatch)=>{
        let data = await theatreApi();
        dispatch(theatreAction(data))
    }
}

export const showlistAsyncAction = (page) =>{
    let showlistAction = createAction(ShowList,(data)=>({data:data}))
    return async (dispatch)=>{
        let data = await showlistApi(page);
        dispatch(showlistAction(data))
    }
}

export const thealistAsyncAction = () =>{
    let thealistAction = createAction(TheaList,(data)=>({data:data}))
    return async (dispatch)=>{
        let data = await thealistApi();
        dispatch(thealistAction(data))
    } 
}

export const singlistAsyncAction = (cate,page) =>{
    let singlistAction = createAction(SingList,(data)=>({data:data}))
    return async (dispatch)=>{
        let data = await singlistApi(cate,page);
        dispatch(singlistAction(data))
    }
}

export const searchAsyncAction = (key)=>{
    let searchAction = createAction(Search,(data)=>({data:data}))
    return async (dispatch)=>{
        let data =await searchApi(key);
        dispatch(searchAction(data))
    }
}

export const cateAsyncAction = ()=>{
    let cateAction = createAction(CateList,(data)=>({data:data}))
    return async (dispatch)=>{
        let data = await cateApi();
        dispatch(cateAction(data))
    }
}

export const clickAsyncAction = (index)=>({
    type:Clickid,
    index:index
})
