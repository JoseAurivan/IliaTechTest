'use client'
import { useSelector } from "react-redux";
import React, { useEffect } from 'react'
import Link from "../Link/index";
import { RootState } from "@/store";


export default function CustomerList()
{
   
    const customers = useSelector((state : RootState)=> (state.customers));

    
    return(
        
        <aside>
            <ul>
                {customers?.map(customer=>(
                    <div key={customer.customerId } >
                        <li key={customer.customerId}>Nome:{customer.name}</li>
                        <li  key={customer.customerId}>Email:{customer.email}</li>
                        <Link href="/"><button>See orders</button></Link>
                    </div>
                ))}               
            </ul>
        </aside>
    )
}