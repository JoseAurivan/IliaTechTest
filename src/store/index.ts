import customersSlice from './reducers/customer';
import orderSlice from './reducers/order';
import searchSlice from './reducers/search';
import { configureStore, createSelector } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
      customers: customersSlice,
      orders: orderSlice,
      search: searchSlice,
    }
  });

export type RootState = ReturnType<typeof store.getState> 

const orderList =(state:RootState) => state.orders;
const customerList = (state:RootState) => state.customers;

export const selectOrderbyCustomerID =(id:string)=> createSelector([orderList],(orderList)=>orderList.filter(item=>item.customerId===id));
export const getCurrentUser =(id:string)=>createSelector([customerList],customerList=>customerList.find(customer=>customer.customerId===id));

export default store;