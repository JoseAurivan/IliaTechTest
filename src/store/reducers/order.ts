import {Order} from "@/types/order";
import { createSlice } from "@reduxjs/toolkit";

const initialState : Order[] = [];


const orderSlice = createSlice({
    name: "orders",
    initialState,
    reducers:{
        CleanOrders:()=> {
            return initialState
        },
        AddOrder:(state,{payload})=>{
            return [...state,{
               description: payload.description,
               customerId: payload.customerId,
               orderId: payload.orderId
            }]
        }
    }
})




export const {AddOrder,CleanOrders} = orderSlice.actions;
export default orderSlice.reducer;