//action methods

import * as ActionTypes from "./ActionTypes";

export function userProfile(id){
    return function(dispatch) {
        dispatch(setLoader(true));
            fetchUser(id)
            .then ( (data) => {
                dispatch( {
                    type: ActionTypes.USER,
                    data: data
                });
                dispatch(setLoader(false));
            })
        }
}
export function  fetchUser(id) {
        return fetchJson("https://reqres.in/api/users/"+id)
}
export function fetchJson(url, option = undefined) {
    return window.fetch(url, option)
        .then ( (response) => {
            return response.json(); 
    }) 
}
export function clearDetails() {
    return {
        type: ActionTypes.USER_CLEAR,
    }
}    
export function setLoader(state) {
    return {
      type: ActionTypes.LOADER,
      state,
    };
  }