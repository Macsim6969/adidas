import axios from "axios";
import {  SET_INFO_CATEGORY, SET_LAODING, SET_MEN_CATEGORY, SET_SNEAKERS } from "../reduc/menshoes-reducer";


export const fetchShoes = (category) => (dispatch) => {
    dispatch(setLoading(false))
    axios.get(`http://localhost:3001/menshoes?${category !== 0 ? `category=${category}`: ''}`).then(resp => {
        dispatch(setSneakers(resp.data))    
        dispatch(setLoading(true))
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

const setLoading = (load) => ({
    type: SET_LAODING,
    payload :load
})

const setInfoCategory = (info) =>({
    type: SET_INFO_CATEGORY,
    payload: info
})
export const fetchInfoCategory = (category) => (dispatch) =>{
    axios.get(`http://localhost:3001/infoCateg?category=${category}`).then(resp =>{
        dispatch(setInfoCategory(resp.data))
    })
}