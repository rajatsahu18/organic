import thunk from "redux-thunk"
import { legacy_createStore, applyMiddleware ,combineReducers, compose} from "redux";
import {reducer as AppReducer} from "./AppReducer/reducer"
import { reducer as AuthReducer } from "./Authreducer/reducer";

const rootReducer = combineReducers({ AppReducer, AuthReducer });
export const store = legacy_createStore(rootReducer,
    compose(applyMiddleware(thunk),
    typeof window.__REDUX_DEVTOOLS_EXTENSION__ === "undefined"
    ? a => a
    : window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()))
