"use client"
import { useSelector, useDispatch} from "react-redux";
import React, { useEffect } from 'react'
import { RootState } from "@/store";
import {selectOrderbyCustomerID} from '@/store'
import { DeleteOrder, DeleteOrdersFromClient } from "@/store/reducers/order";

export default function OrderList({id}:{id:string}){

    const orders = useSelector(selectOrderbyCustomerID(id));
    const dispatch = useDispatch();

    function SuspendOrder(orderId:string){
        dispatch(DeleteOrder(orderId));
    }
    function SuspendAllOrdersOfClient(){
        dispatch(DeleteOrdersFromClient(id));
    }

    return(
        <div>
            <button disabled={orders.length === 0} onClick={()=>SuspendAllOrdersOfClient()}>Close all orders of this client</button>
           <ul>
            {orders?.map(order=> (
                <>
                    <input type="text" key={order.orderId} value={order.description}/>
                    <button onClick={()=>SuspendOrder(order.orderId)}>Suspend Order</button>
                </>
            ))}
           </ul>
        </div>
    )

}