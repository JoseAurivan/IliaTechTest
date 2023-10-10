"use client"
import Link from '@/components/Link'
import OrderList from '@/components/Order';
import React, { useRef, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { getCurrentUser } from '@/store'
import { Order } from '@/types/order';
import { v4 as uuid } from 'uuid';
import { AddOrder } from '@/store/reducers/order';

export default function Customer({params}:{params:{id:string}}){
    const [description, setDescription] = useState('');
    const input = useRef<HTMLInputElement>(null);
    const dispatch = useDispatch();


    function SendOrder(event : React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        const order : Order = {description: description, orderId: uuid(), customerId:params.id}
        dispatch(AddOrder(order));
        setDescription('');
        if(input.current) input.current.focus();
    }

    const customer = useSelector(getCurrentUser(params.id));

    return(
        <> 
        <div>
            CUSTOMER: {customer?.name} <Link href='/customer'><button>Voltar</button></Link>
            <form onSubmit={SendOrder}>
                <label>Description:</label>
                <input required ref={input} value={description} type="text" onChange={(event) => {setDescription(event.target.value)}}></input>
                <button type="submit">Send Order</button>
            </form>

        </div>
        <OrderList key={params.id} id={params.id}/>

       
        </>

    )
}