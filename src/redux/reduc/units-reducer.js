export const SET_UNITS = 'SET_UNITS'

const initialState = {
    units: [],
}

export const unitsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_UNITS:
            return {
                ...state,
                units: action.payload
            }
        default:
            return state
    }
}