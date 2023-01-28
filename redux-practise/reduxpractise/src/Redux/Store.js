import { applyMiddleware, combineReducers, legacy_createStore } from "redux";

import thunk from "redux-thunk";
import { ProductReducer } from "./Products/prodreducer";
import { dummyreducer } from "./dummy/dummyreducer";

const allreducers = combineReducers({ ProductReducer, dummyreducer });
export const store = legacy_createStore(allreducers, applyMiddleware(thunk));
