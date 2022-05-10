export const SET_CLOTHER = 'SET_CLOTHER';

const initialState = {
    items: [],
    isLoading: false
}

const clotherReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CLOTHER:
            return {
                ...state,
                items: action.payload,
                isLoading: true
            }
        default:
            return state
    }
}

export default clotherReducer