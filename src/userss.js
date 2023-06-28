import {createSlice} from "@reduxjs/toolkit";
import { MeinDataaa } from "./MeinDataaa";
 
export const userssSlice =   createSlice({
    name : "userss",
    initialState:   {value:{MeinDataaa}},
   reducers:{
    addUser:(state,action)=>{
        state.value = action.payload;

    },

    RemoveUser :(state)=>{
        state.value = {name:"",age:0,emai:""};

    }

   },

});

export const {AddUser,RemoveUser} = userssSlice.actions;
export default userssSlice.reducer;