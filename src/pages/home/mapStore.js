import {homeAsyncAction,hotAsyncAction,bannerAsyncAction,tourAsyncAction,theatreAsyncAction,showlistAsyncAction} from "actions/homeClassfiy/actionCreator"

export const mapStateToProps = (state)=>({
    classifyHome:state.home.classifyHome,
    hotblock:state.home.hotblock,
    bannerpit:state.home.bannerpit,
    tourshow:state.home.tourshow,
    theatre:state.home.theatre,
    showlist:state.home.showlist
})


export const mapDispatchToProps =(dispatch)=>({
    handleAsynckHome(){
        dispatch(homeAsyncAction())
    },
    handleAsynckHot(){
        dispatch(hotAsyncAction())
    },
    handleAsynckBanner(){
        dispatch(bannerAsyncAction())
    },
    handleAsynckTour(){
        dispatch(tourAsyncAction())
    },
    handleAsynckTheatre(){
        dispatch(theatreAsyncAction())
    },
    handleAsynckShowList(page){
        dispatch(showlistAsyncAction(page))
    }
})
//classify_list