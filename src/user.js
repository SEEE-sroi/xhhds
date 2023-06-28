import {createSlice} from "@reduxjs/toolkit";
 
export const userSlice =   createSlice({
    name : "user",
    initialState:   {value:{name:"Pavan ",age:0,email:"dfsjsgjg@gmail.in"}},
   reducers:{
    login:(state,action)=>{
        state.value = action.payload;

    },

    logout :(state)=>{
        state.value = {name:"",age:0,emai:""};

    }

   },

}); 

export const {login, logout} = userSlice.actions;
export default userSlice.reducer;