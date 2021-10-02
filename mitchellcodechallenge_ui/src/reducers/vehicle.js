import { ACTION_TYPES } from "../actions/vehicle"; 

const initialState={
    list:[]
}

export const vehicle = (state=initialState,action) => {
    switch(action.type){
        case ACTION_TYPES.FETCH_ALL:
            return {
                ...state,
                list : [...action.payload]
            }

            default:return state
    }
}