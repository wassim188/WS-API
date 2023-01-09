import { type } from "@testing-library/user-event/dist/type";

const initialState ={
    users : []
}

const AppReducer = (state = initialState,action) => {
    let {type,payload} = action;
    switch (type) {
        case "GET_USERS":
            return{...state, users : payload};
            break;
            
        default:
            return state;
            break;
    }
}
export default AppReducer;