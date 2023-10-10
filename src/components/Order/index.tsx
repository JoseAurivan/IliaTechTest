"use client"
import { useSelector, useDispatch as dispatch } from "react-redux";
import React, { useEffect } from 'react'
import { RootState } from "@/store";
import {selectOrderbyCustomerID} from '@/store'

export default function OrderList({id}:{id:string}){
    const orders = useSelector(selectOrderbyCustomerID(id));

    return(
        <div>
            <button disabled={orders.length === 0}>Close all orders of this client</button>
           <ul>
            {orders?.map(order=> (<li key={order.orderId}>{order.description}</li>))}
           </ul>
        </div>
    )

}