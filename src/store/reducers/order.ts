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
            console.log([...state,payload]);
            return [...state,{
               description: payload.description,
               customerId: payload.customerId,
               orderId: payload.orderId
            }]
        },
        //delete order from customer
        //change order
    }
})




export const {AddOrder,CleanOrders} = orderSlice.actions;
export default orderSlice.reducer;