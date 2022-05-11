import { REMOVE_UNIT, SET_UNIT } from "../reduc/unitDet-reducer"
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