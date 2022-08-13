import { filterReducer } from "./reduc/fiter-reducer";
import { combineReducers, legacy_createStore as createStore, compose, applyMiddleware} from 'redux'
import thunk from "redux-thunk";
import { unitsReducer } from "./reduc/units-reducer";
import { unitsDetReducer } from "./reduc/unitDet-reducer";
import { menShoesReducer } from "./reduc/menshoes-reducer";
import { infoShoes } from "./reduc/infoshoes-reducer";
import { cart } from "./reduc/cart-reducer";


let reducer = combineReducers({
    filter : filterReducer,
    unit: unitsReducer,
    unitDetails: unitsDetReducer,
    sneak: menShoesReducer,
    info: infoShoes,
    cart : cart
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))



