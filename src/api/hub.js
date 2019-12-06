import http from "utils/request";

export const ClassifyHomeApi = ()=>http.get({
    url:"/home/index/getClassifyHome?city_id=0&abbreviation=&version=6.0.8&referer=2"
})

export const HotblockApi = ()=>http.get({
    url:"/home/index/getHotsRecommendList",
    data:{
        city_id:0,
        version:"6.0.8",
        referer:2,
    }
    
})

export const tourApi = ()=>http.get({
    url:"/home/index/getFloorShow",
    data:{
        city_id:0,
        version:"6.0.8",
        referer:2
    }
})

export const theatreApi = ()=>http.get({
    url:"/home/index/getHotTheatre",
    data:{
        version:"6.0.8",
        referer:2
    }
})


export const showlistApi = (page)=>http.get({
    url:"/Show/Search/getShowList",
    data:{
        city_id:0,
        page:page,
        version:"6.0.8",
        referer:2
    }
})

export const thealistApi = ()=>http.get({
    url:"/theatre/index/getTheatreList",
    data:{
        page:1,
        version:"6.0.8",
        referer:2
    }
})

export const singlistApi = (cate,page)=>http.get({
    url:"/Show/Search/getShowList",
    data:{
        category: cate,
        city_id: 0,
        page: page,
        keywords:"" ,
        version: "6.0.8",
        referer: 2,
    }
})

export const searchApi = (key)=>http.get({
    url:"/Show/Search/getShowList",
    data:{
        keywords:key,
        page:1,
        sort_type:1,
        version:"6.0.8",
        referer:2
    }
})


export const detailApi = (id)=>http.get({
    url:"/Schedule/Schedule/getScheduleInfo",
    data:{
        schedular_id: id,
        version: "6.0.8",
        referer: 2
    }
})

export const cateApi = ()=>http.get({
    url:"/Search/getShowCategory?version=6.0.8&referer=2",
})


export const LoginApi = (username,password)=>http.post({
    url:"/ajax/users/login",
    data:{
        username,
        password
    },
    method:"POST"
})

export const RegisterApi = (username,password)=>http.post({
    url:"/ajax/users/register",
    data:{
        username,
        password
    },
    method:"POST"
})