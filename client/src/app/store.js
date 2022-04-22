import reducer from "app/rootReducer";
import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";

const store = configureStore({ reducer }, applyMiddleware(thunk));

export default store;
