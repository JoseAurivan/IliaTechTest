import { createSlice } from "@reduxjs/toolkit";

const initialState = "";


const searchSlice = createSlice({
    name:"search",
    initialState,
    reducers: {
        ChangeSearch:(state,{payload})=>{
            return payload;
        },
        ClearSearch:()=>{
            return initialState;
        }
    }
})

export const {ChangeSearch, ClearSearch} = searchSlice.actions;
export default searchSlice.reducer;