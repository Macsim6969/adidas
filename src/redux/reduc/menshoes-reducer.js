export const SET_SNEAKERS = 'SET_SNEAKERS'
export const SET_MEN_CATEGORY = 'SET_MEN_CATEGORY'
export const SET_LAODING = 'SET_LAODING'
export const SET_INFO_CATEGORY = 'SET_INFO_CATEGORY'
export const SET_SNEAK_GALLERY = 'SET_SNEAK_GALLERY'
export const SET_THINGS = 'SET_THINGS'
export const REMOVE_UNIT = 'SET_UNIT'


const initialState = {
    sneakers: [],
    things: [],
    gallery: [],
    infoCategory: [],
    category: 0,
    isLoading: false,
}

export const menShoesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SNEAKERS:
            return {
                ...state,
                sneakers: action.payload
            }
        case SET_THINGS:
            return {
                ...state,
                things: action.payload
            }
        case SET_SNEAK_GALLERY:
            return {
                ...state,
                gallery: action.payload
            }
        case SET_MEN_CATEGORY:
            return {
                ...state,
                category: action.payload
            }
        case SET_LAODING:
            return {
                ...state,
                isLoading: action.payload
            }
        case SET_INFO_CATEGORY:
            return {
                ...state,
                infoCategory: action.payload
            }
        case REMOVE_UNIT:
            return{
                ...state,
                gallery: null
            }
        default:
            return state

    }
}