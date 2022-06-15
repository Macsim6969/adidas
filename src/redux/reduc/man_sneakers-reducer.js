export const SET_INFO = 'SET_INFO' 


const initialState ={
    info: []
}


export const mansneakersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INFO :
            return{
                ...state, 
                info : action.payload
            }
        default:
            return state
    }
}