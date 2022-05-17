export const SET_SNEAKERS = 'SET_SNEAKERS'
export const SET_MEN_CATEGORY = 'SET_MEN_CATEGORY'

const initialState = {
    sneakers: [],
    category: null
}

export const menShoesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SNEAKERS:
            return {
                ...state,
                sneakers: action.payload 
            }
        case SET_MEN_CATEGORY:
            return {
                ...state,
                category: action.payload
            }
        default:
            return state

    }
}