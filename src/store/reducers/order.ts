import {Order} from "@/types/order";
import { createSlice } from "@reduxjs/toolkit";

const initialState : Order[] = [];


const orderSlice = createSlice({
	name: "orders",
	initialState,
	reducers:{
		CleanOrders:()=> {
			return initialState;
		},
		AddOrder:(state,{payload})=>{
			console.log([...state,payload]);
			return [...state,{
				description: payload.description,
				customerId: payload.customerId,
				orderId: payload.orderId
			}];
		},
		DeleteOrder:(state,{payload}) => {
			const index = state.findIndex(order=>order.orderId===payload);
			state.splice(index,1);
		},
		DeleteOrdersFromClient:(state,{payload})=>{
			const orders = state.filter(order=>order.customerId===payload);
			for(let i = orders.length - 1; i>=0;i--){
				state.splice(i,1);
			}
		},
		ChangeOrder:(state,{payload})=>{
			console.log(payload);
			const index = state.findIndex(order=>order.customerId===payload.customerId);
			Object.assign(state[index],{description: payload.description});
		}
	}
});




export const {AddOrder,CleanOrders,DeleteOrder,DeleteOrdersFromClient,ChangeOrder} = orderSlice.actions;
export default orderSlice.reducer;