import {
    SET_LOADING_STATUS,GET_ARTICLES
} from '../Actions/Actiontype'
export const initState={
    articles:[],
     loading:false,
}
const articlereducer=(state=initState,action) =>{
    switch(action.type){
        case GET_ARTICLES:
            return{
                ...state,
                articles:action.payload,
            }
        case SET_LOADING_STATUS:
            return{
                ...state,
                loading:action.status,
            }
        default:
            return state;
    }
}
export default articlereducer;