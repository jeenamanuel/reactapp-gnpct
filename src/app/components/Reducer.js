import * as ActionTypes from "./ActionTypes";

const INITIAL_STATE = {
    userData :{},
    loader:false,
}

export default function userReducer(state=INITIAL_STATE, action) {

    switch(action.type) {
        case ActionTypes.USER:{
             return Object.assign({}, state, {userData: action.data},{})
        }
        case ActionTypes.USER_CLEAR :{
            return Object.assign({}, state, {userData: {}})

        }
        case ActionTypes.LOADER:{
            return Object.assign({}, state, {loader: action.state})

        }
        default: 
            return state;
    }
}

