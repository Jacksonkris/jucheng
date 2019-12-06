import {
    Home,
    Theater,
    Wallet,
    Mine,
    Login,
    Search,
    Details,
    Singer,
    Account,
} from "pages"


export const TabBarRoute = [
    {
        path:"/home",
        component:Home,
        meta:{
            flag:true
        },
        icon:"\ue641",
        text:"首页"
    },
    {
        path:"/theater",
        component:Theater,
        meta:{
            flag:true
        },
        icon:"\ue513",
        text:"剧院"
    },
    {
        path:"/wallet",
        component:Wallet,
        meta:{
            // flag:true,
            requiredAuth:true
        },
        icon:"\ue647",
        text:"票夹"
    },
    {
        path:"/mine",
        component:Mine,
        meta:{
            flag:true,
            requiredAuth:true
        },
        icon:"\ue60c",
        text:"我的"
    },
];

export const NoTabBarRoute = [
    {
        path:"/login",
        component:Login,
        meta:{}
    },
    {
        path:"/search",
        component:Search,
        meta:{}
    },
    {
        path:"/details/:id",
        component:Details,
        meta:{}
    },
    {
        path:"/singer/:id",
        component:Singer,
        meta:{},
    },
    {
        path:"/account",
        component:Account,
        meta:{}
    },
];

export const RouteConfig = TabBarRoute.concat(NoTabBarRoute)