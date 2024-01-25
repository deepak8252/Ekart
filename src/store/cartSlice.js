import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[],
    },
    reducers:{
       additem:(state,action)=>{
        state.items.push(action.payload);
       },
       removeitem:(state,action)=>{
    //    return  state.items.filter((item)=>item.id !==action.payload);
    state.items = state.items.filter((item) => item.id !== action.payload);
       },
       removeall:(state,action)=>{
        state.items.length=0;
       }
    }
})
export const {additem,removeall,removeitem}=cartSlice.actions;
export default cartSlice.reducer;