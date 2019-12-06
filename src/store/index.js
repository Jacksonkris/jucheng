import {createStore,combineReducers,applyMiddleware} from "redux"
import reduxThunk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension"
import home from "./reducers/home"
import det from "./reducers/detail"
import user from "./reducers/user"
const reducers = combineReducers({
    home,
    det,
    user
})

const store = createStore(reducers,composeWithDevTools(applyMiddleware(reduxThunk)))

export default store;