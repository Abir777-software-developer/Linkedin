import { SET_USER,REMOVE_USER } from "../Actions/Actiontype";




const INITIAL_STATE={
    user:null,
};
const userReducer=(state=INITIAL_STATE,action) =>{
    switch(action.type){
        case SET_USER:
            return{
                ...state,
                user:action.user,
            };
            case REMOVE_USER:  // Handle the REMOVE_USER action
            return {
                ...state,
                user: null,
            };
        default:
            return state;
    }
};

export default userReducer;