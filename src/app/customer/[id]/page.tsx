"use client"
import Link from '@/components/Link'
import OrderList from '@/components/Order';
import React, { useRef, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { getCurrentUser } from '@/store'
import { Order } from '@/types/order';
import { v4 as uuid } from 'uuid';
import { AddOrder } from '@/store/reducers/order';
import {ChangeCustomer} from '@/store/reducers/customer'
import { Customer } from '@/types/customer';
import customer from '@/store/reducers/customer';

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
    const [customerName, setCustomerName] = useState(customer?.name);
    const [customerEmail, setCustomerEmail] = useState(customer?.email);

    function sendChangeCustomer(event : React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        if(customerName && customerEmail){
            const customer : Customer = {name: customerName, email: customerEmail, customerId: params.id}
            dispatch(ChangeCustomer(customer));
        }
        
        
        
    }

    return(
        <>
        <Link href='/customer'><button>Voltar</button></Link> 
        <div>

            <form onSubmit={sendChangeCustomer}>
                <label>CUSTOMER:</label>
                <input type="text" value={customerName} onChange={(event)=>{setCustomerName(event.target.value)}}/>
                <label>EMAIL:</label>
                <input type="text" value={customerEmail} onChange={(event)=>{setCustomerEmail(event.target.value)}}/>
                <button type='submit'>Change Customer</button>
            </form>

            <form onSubmit={SendOrder}>
                <label>Description:</label>
                <input required ref={input} value={description} type="text" onChange={(event) => {setDescription(event.target.value)}}/>
                <button type="submit">Send Order</button>
            </form>

        </div>
        <OrderList key={params.id} id={params.id}/>

       
        </>

    )
}