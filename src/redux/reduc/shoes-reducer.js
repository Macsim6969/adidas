export const SET_SHOES = 'SET_SHOES'
export const SET_LOADING = 'SET_lOADING'

const initialState = {
    item: [],
    isLoading: false
}

export const shoesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SHOES:
            return {
                ...state,
                item: action.payload,
                isLoading: true 
            }
        case SET_LOADING:
            return{
                ...state,
                isLoading: action.payload
            }
        default:
            return state
    }
}