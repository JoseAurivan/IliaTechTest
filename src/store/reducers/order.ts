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
        DeleteOrder:(state,{payload}) => {
            const index = state.findIndex(order=>order.orderId===payload);
            state.splice(index,1);
        },
        DeleteOrdersFromClient:(state,{payload})=>{
            const orders = state.filter(order=>order.customerId===payload);
            for(var i = orders.length - 1; i>=0;i--){
                state.splice(i,1);
            }
        }
        //change order
    }
})




export const {AddOrder,CleanOrders,DeleteOrder,DeleteOrdersFromClient} = orderSlice.actions;
export default orderSlice.reducer;