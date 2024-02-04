import { POST_API_STARTED,POST_DATA_SUCCESS,POST_DATA_FAILURE } from "../actions/actionTypes";



const initialState ={
    loading:false,
    data:[],
    error:""
}


const postReducer = (state=initialState,action)=>{

    switch(action.type){
        case POST_API_STARTED:return{...state,loading:true};
        case POST_DATA_SUCCESS:return{...state,data:action.payload,loading:false,error:""};
        case POST_DATA_FAILURE:return{...state,data:[],error:action.payload,loading:false};


        default:return state;
    }
}

export default postReducer;