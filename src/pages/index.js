import Loadable from "react-loadable";
import Loading from "common/loading"

export const Home = Loadable({
    loader:_=>import("./home"),
    loading:Loading
})

export const Theater = Loadable({
    loader:_=>import("./theater"),
    loading:Loading
})

export const Wallet = Loadable({
    loader:_=>import("./wallet"),
    loading:Loading
})

export const Mine = Loadable({
    loader:_=>import("./mine"),
    loading:Loading
})

export const Login = Loadable({
    loader:_=>import("./login"),
    loading:Loading
})

export const Search = Loadable({
    loader:_=>import("./search"),
    loading:Loading
})

export const Details = Loadable({
    loader:_=>import("./details"),
    loading:Loading
})

export const Singer = Loadable({
    loader:_=>import("./singer"),
    loading:Loading
})

export const Account = Loadable({
    loader:_=>import("./account"),
    loading:Loading
})

export const SingerList = Loadable({
    loader:_=>import("./singerList"),
    loading:Loading
})
