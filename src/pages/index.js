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