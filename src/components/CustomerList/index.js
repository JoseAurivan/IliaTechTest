'use client'
import { useSelector } from "react-redux";
import React, { useEffect } from 'react'
import Link from "../Link";


export default function CustomerList()
{
   
    const customers = useSelector(state=> (state.customers));

    
    return(
        
        <aside>
            <ul>
                {customers?.map(customer=>(
                    <div key={customer.id } >
                        <li key={customer.id}>Nome:{customer.name}</li>
                        <li  key={customer.id}>Email:{customer.email}</li>
                        <Link href="/"><button>See orders</button></Link>
                    </div>
                ))}               
            </ul>
        </aside>
    )
}