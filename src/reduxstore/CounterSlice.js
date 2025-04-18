import { createSlice } from "@reduxjs/toolkit";


export const counterSlice=createSlice({
    name:'mycounter',
    initialState:{
        value:0
    },
    reducers:{
        increment: (state)=>{
            state.value=state.value+1;
        },
        decrement:(state)=>{
            state.value=state.value-1;
        }
    }
});

export const {increment,decrement}=counterSlice.actions