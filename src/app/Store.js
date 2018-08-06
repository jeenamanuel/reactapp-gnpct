import {createStore} from "redux";
import {combineReducers, applyMiddleware} from "redux";
import userReducer from "./components/Reducer";

//help to combine many reducers in the app
let rootReducer = combineReducers({
    userState: userReducer
})

//middlware to handle async function in dispatch
import thunk from "redux-thunk";

let store = createStore(rootReducer, 
                        applyMiddleware(thunk));


export default store;
