export const SET_UNIT = 'SET_UNIT'

const initialState= {
    unit: []
}

export const unitsDetReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_UNIT:
            return {
                ...state,
                unit: action.payload
            }
        default:
            return state
    }
}