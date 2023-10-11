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
        ChangeCustomer: (state, {payload})=>{
            const index = state.findIndex(customer=>customer.customerId===payload.customerId)
            Object.assign(state[index],{name: payload.name, email: payload.email})
        },
        DeleteCustomer: (state,{payload})=>{
            const index = state.findIndex(customer=>customer.customerId===payload)
            state.splice(index,1);
        }
    }


})

export const {AddCustomer,CleanCustomers,ChangeCustomer,DeleteCustomer} = customersSlice.actions;
export default customersSlice.reducer