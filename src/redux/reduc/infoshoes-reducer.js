export const SET_CHOICE_SIZE = 'SET_CHOICE_SIZE'

const initialState = {
    choiceSize: null,
    choiceShoes: []
}

export const infoShoes = (state = initialState, action) => {
    switch (action.type) {
        case SET_CHOICE_SIZE:
            return {
                ...state,
                choiceSize: action.payload
            }
        default:
            return state
    }
}
