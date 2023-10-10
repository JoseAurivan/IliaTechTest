"use client"
import { useSelector, useDispatch} from "react-redux";
import React from 'react'
import {selectOrderbyCustomerID} from '@/store'
import { DeleteOrdersFromClient } from "@/store/reducers/order";
import OrderListItem from "./OrderListItem";

export default function OrderList({id}:{id:string}){

    const orders = useSelector(selectOrderbyCustomerID(id));
    const dispatch = useDispatch();

    function SuspendAllOrdersOfClient(){
        dispatch(DeleteOrdersFromClient(id));
    }

    return(
        <div>
            <button disabled={orders.length === 0} onClick={()=>SuspendAllOrdersOfClient()}>Close all orders of this client</button>
           <ul>
            {orders && orders.map(order=> (
                <OrderListItem key={order.orderId} params={order}/>
            ))}
           </ul>
        </div>
    )

}