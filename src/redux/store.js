import { filterReducer } from "./reduc/fiter-reducer";
import { combineReducers, legacy_createStore as createStore, compose, applyMiddleware} from 'redux'
import { shoesReducer } from "./reduc/shoes-reducer";
import clotherReducer from "./reduc/clother-reducer";
import thunk from "redux-thunk";
import { unitsReducer } from "./reduc/units-reducer";
import { unitsDetReducer } from "./reduc/unitDet-reducer";



let reducer = combineReducers({
    filter : filterReducer,
    shoes: shoesReducer,
    clother: clotherReducer,
    unit: unitsReducer,
    unitDetails: unitsDetReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))



