import {Customer} from '../../types/customer'


import { createSlice } from '@reduxjs/toolkit';
const initialState : Customer[] = [] 


const customersSlice = createSlice({
    name: "customers",
    initialState,
    reducers: {
        CleanCustomers: ()=>{
            return initialState;
        },
        AddCustomer: (state,{payload})=>{
            console.log([...state,payload]);
            return [...state,{
                name: payload.name,
                customerId: payload.customerId,
                email: payload.email
            }]
        },
        //Change customer
        //delete customer
    }


})

export const {AddCustomer,CleanCustomers} = customersSlice.actions;
export default customersSlice.reducer