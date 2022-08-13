export const SET_ITEMS = "SET_ITEMS"

const initialState ={
    items : {},
    totalPrice: 0,
    totalCount: 0

}

export const cart = (state= initialState , action) =>{
    switch (action.type){
        case SET_ITEMS:{
            const newItems = {
                ...state.items,
                [action.payload.id] :  !state.items[action.payload.id] 
                    ? [action.payload] 
                    : [...state.items[action.payload.id], action.payload],
                
            };

            const allShoes = [].concat.apply([], Object.values(newItems));
            const totalPrice = allShoes.reduce((sum, obj) => obj.price + sum , 0) 
            return{
                ...state,
                items: newItems,
                totalCount: allShoes.length,
                totalPrice
             }

        }
        default : 
        return state
    } 
}