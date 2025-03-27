import { createSlice } from "@reduxjs/toolkit";



export const companySlice=createSlice({

    name:'neoobject',
    initialState:{
        value:{
            cid:12345,
            cname:"Neosoft",
            cbudget:5600000
        }
    },
    reducers:{
        updateBudget:(state, action)=>{
           // return {...state.value, cbudget:state.value.cbudget+10000} // immutable
           state.value.cbudget=state.value.cbudget+action.payload
        }
    }
});

export const {updateBudget}=companySlice.actions;