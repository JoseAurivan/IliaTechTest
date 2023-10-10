'use client'
import { useSelector, useDispatch} from "react-redux";
import React, { useEffect } from 'react'
import Link from "../Link/index";
import { RootState } from "@/store";
import { DeleteCustomer } from "@/store/reducers/customer";
import { Customer } from "@/types/customer";


export default function CustomerList()
{
   
    const customers = useSelector((state : RootState)=> (state.customers));
    const dispatch = useDispatch();

    function SendDeleteCustomer(id:string)
    {
        // deletar pedidos do cliente       
        dispatch(DeleteCustomer(id));                
    }
    return(
        
        <aside>
            <ul>
                {customers?.map(customer=>(
                    <div key={customer.customerId } >
                        <li key={customer.customerId}>Nome:{customer.name}</li>
                        <li  key={customer.customerId}>Email:{customer.email}</li>
                        <Link href={"/customer/"+customer.customerId}><button>See orders</button></Link>
                        <button onClick={()=>SendDeleteCustomer(customer.customerId)}>Close tab</button>
                    </div>
                ))}               
            </ul>
        </aside>
    )
}