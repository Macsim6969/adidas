import { SET_MEN_CATEGORY, SET_SNEAKERS } from "../reduc/menshoes-reducer";

export const setSneakers = (sneaker) => ({
    type: SET_SNEAKERS,
    payload: sneaker
})


export const setMenCategory = (categ) =>({
    type: SET_MEN_CATEGORY,
    payload : categ
})