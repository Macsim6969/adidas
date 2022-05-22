import axios from "axios"
import { SET_LOADING, SET_SHOES } from "../reduc/shoes-reducer"


export const fetchShoes = (category, sortBy) => (dispatch) => {
    dispatch(setLoading(false))
    axios.get(`http://localhost:3001/shoes?${category !== null ? `category=${category}` : ''}&_sort=${sortBy}&_order=desc`).then(({data}) => {
        dispatch(setShoes(data))
    })
}

export const setShoes = (items) => ({ 
    type: SET_SHOES,
    payload: items
})

export const setLoading = (value) =>({
    type: SET_LOADING,
    payload: value
})