'use client'
import { useSelector, useDispatch} from "react-redux";
import React, { useEffect } from 'react'

import { RootState } from "@/store";
import { DeleteCustomer } from "@/store/reducers/customer";

import CustomerListItem from "./CustomerListItem";


export default function CustomerList()
{ 
    const busca = useSelector((state:RootState)=>(state.search)); 
    let customers = useSelector((state : RootState)=> (state.customers));
    return(
        
        <aside>
            <ul>
                {customers?.map(customer=>(
                    <CustomerListItem params={customer} key={customer.customerId} />
                ))}               
            </ul>
        </aside>
    )
}