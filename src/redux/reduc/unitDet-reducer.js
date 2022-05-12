export const SET_UNIT = 'SET_UNIT'
export const REMOVE_UNIT ='REMOVE_UNIT'
export const SIZE_BY = 'SIZE_BY'
export const SET_GALLERY = 'SET_GALLERY'

const initialState= {
    unit: null,
    isLoading: false,
    sizeBy : null,
    gallery: []
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
        case SIZE_BY:
            return{
                ...state , sizeBy: action.payload
            }
        case SET_GALLERY:
            return{
                ...state, gallery: action.payload
            }
        default:
            return state 
    }
}