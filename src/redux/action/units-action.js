import { REMOVE_UNIT, SET_GALLERY, SET_UNIT, SIZE_BY } from "../reduc/unitDet-reducer"
import { SET_UNITS } from "../reduc/units-reducer"

export const setUnits = (units) => ({
    type: SET_UNITS,
    payload: units
})

export const setUnit = (unit) => ({
    type: SET_UNIT,
    payload: unit
})

export const removeUnit = () => ({
    type :REMOVE_UNIT
})


export const setSizeBy = (value) => ({
    type: SIZE_BY,
    payload: value
})

export const setGallery = (img) =>({
    type: SET_GALLERY,
    payload: img
})