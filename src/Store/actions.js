import {UPDATE_TIMESTAMP,FETCH_DATA} from './actions-constants';
export const setData=(data)=>{
    return {
        type: FETCH_DATA,
        data: data
    }
}
export const setShowState=(showState)=>{
    return {
        type:UPDATE_TIMESTAMP,
        payload: showState
    }
}
