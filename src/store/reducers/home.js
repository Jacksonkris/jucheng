import {handleActions} from "redux-actions";
import {HomeClassfiy,HotBlock,Bannerpit,TourShow,Theatres,ShowList,TheaList,SingList,Search,CateList,Clickid} from "actions/homeClassfiy/actionsTypes"
const defaultState = {
    classifyHome:[],
    hotblock:[],
    bannerpit:[],
    tourshow:[],
    theatre:[],
    showlist:[],
    thealist:[],
    singlist:[],
    search:[],
    catelist:[],
    activeIndex:35
}


export default handleActions({
    [HomeClassfiy]:(state,action)=>{
        let homeState = JSON.parse(JSON.stringify(state));
        homeState.classifyHome = action.payload.data.data.classify_list;
        return homeState
    },
    [Bannerpit]:(state,action)=>{
        let bannerState = JSON.parse(JSON.stringify(state));
        bannerState.bannerpit = action.payload.data.data.slide_list;
        return bannerState
    },
    [HotBlock]:(state,action)=>{
        let hotstate = JSON.parse(JSON.stringify(state));
        hotstate.hotblock = action.payload.data.data.hots_show_list;
        return hotstate
    },
    [TourShow]:(state,action)=>{
        let tourState = JSON.parse(JSON.stringify(state));
        tourState.tourshow = action.payload.data.data;
        return tourState
    },
    [Theatres]:(state,action)=>{
        let theatreState = JSON.parse(JSON.stringify(state));
        theatreState.theatre = action.payload.data.data.theatre_list;
        return theatreState
    },
    [ShowList]:(state,action)=>{
        let showlistState = JSON.parse(JSON.stringify(state));
        showlistState.showlist =[...showlistState.showlist,...action.payload.data.data.list] ;
        return showlistState
    },
    [TheaList]:(state,action)=>{
        let theaState = JSON.parse(JSON.stringify(state));
        theaState.thealist = action.payload.data.data.theatre_list;
        return theaState
    },
    [SingList]:(state,action)=>{
        let singState = JSON.parse(JSON.stringify(state));
        singState.singlist=action.payload.data.data.list;
        return singState;
    },
    [Search]:(state,action)=>{
        let searchState = JSON.parse(JSON.stringify(state));
        searchState.search = action.payload.data.data.list;
        return searchState;
    },
    [CateList]:(state,action)=>{
        let cateState = JSON.parse(JSON.stringify(state));
        cateState.catelist = action.payload.data.data.show_category_list;
        // console.log(cateState.catelist)
        return cateState
    },
    [Clickid]:(state,action)=>{
        let newIndex = JSON.parse(JSON.stringify(state));
        newIndex.activeIndex = action.index
        // console.log(newIndex.activeIndex)
        return newIndex
    }
},defaultState)