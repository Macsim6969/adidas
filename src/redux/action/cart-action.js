import { SET_ITEMS } from "../reduc/cart-reducer";

export const setObj = (obj) =>({
    type: SET_ITEMS,
    payload: obj
})