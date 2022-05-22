import axios from "axios";
import {  SET_MEN_CATEGORY, SET_SNEAKERS } from "../reduc/menshoes-reducer";


export const fetchShoes = (category) => (dispatch) => {
    axios.get(`http://localhost:3001/menshoes?${category !== null ? `category=${category}`: ''}`).then(resp => {
        dispatch(setSneakers(resp.data))    
    })
}

const setSneakers = (sneaker) => ({ 
    type: SET_SNEAKERS,
    payload: sneaker
})


export const setMenCategory = (categ) => ({
    type: SET_MEN_CATEGORY,
    payload: categ
})

