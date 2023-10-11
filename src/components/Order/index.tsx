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
        <div className="container mt-2">
            <button className="btn btn-outline-danger" disabled={orders.length === 0} onClick={()=>SuspendAllOrdersOfClient()}>Close all orders of this client</button>
           <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3 mt-2">
            {orders && orders.map(order=> (
                <OrderListItem key={order.orderId} params={order}/>
            ))}
           </div>
        </div>
    )

}