export const SET_UNIT = 'SET_UNIT'
export const REMOVE_UNIT ='REMOVE_UNIT'

const initialState= {
    unit: null,
    isLoading: false
}

export const unitsDetReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_UNIT:
            return {
                ...state,
                unit: action.payload
            }
        case REMOVE_UNIT:
            return{

            }
        default:
            return state 
    }
}