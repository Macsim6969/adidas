const SET_SORT_BY = 'SET_SORT_BY'
const SET_CATEGORY = 'SET_CATEGORY'

export const  setSort = (name)  =>({
    type: SET_SORT_BY,
    payload: name
})

export const setCategory = (cartIndex) =>({
    type: SET_CATEGORY,
    payload: cartIndex
})