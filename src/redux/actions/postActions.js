import { POST_API_STARTED,POST_DATA_SUCCESS,POST_DATA_FAILURE } from "./actionTypes";




export const postApiStarted =() =>{
    return {
        type:POST_API_STARTED
    }
}

export const postDataSuccess =(data) =>{
    return {
        type:POST_DATA_SUCCESS,
        payload:data
    }
}

export const postDataFailure =(error) =>{
    return {
        type:POST_DATA_FAILURE,
        payload:error
    }
}