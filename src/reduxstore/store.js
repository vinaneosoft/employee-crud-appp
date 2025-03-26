import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./CounterSlice";
import { companySlice } from "./CompanySlice";


export const store=configureStore({
    reducer:{
        counter:counterSlice.reducer, // use this key in useSelector
        company:companySlice.reducer
    }
});