import {createSlice} from "@reduxjs/toolkit";
import { MeinDataaa } from "./MeinDataaa";
 
export const usersSlice =   createSlice({
    name : "users",
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

export const {AddUser,RemoveUser} = usersSlice.actions;
export default usersSlice.reducer;