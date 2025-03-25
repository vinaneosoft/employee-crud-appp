import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./reducers";


export const store=configureStore({
    reducer:{
        counter:counterSlice.reducer // use this key in useSelector
    }
});