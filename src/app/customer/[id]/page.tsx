"use client"
import Link from '@/components/Link'
import OrderList from '@/components/Order';
import React, { useRef, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { getCurrentUser } from '@/store'
import { Order } from '@/types/order';
import { v4 as uuid } from 'uuid';
import { AddOrder } from '@/store/reducers/order';
import { Customer } from '@/types/customer';
import CustomerChangeForm from '@/components/CustomerChangeForm';

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



    const customer:Customer|undefined = useSelector(getCurrentUser(params.id));


    return(
        <div className='container'>

            <button type="button" className="btn btn-outline-warning mt-2 mb-2">Voltar</button>
            
            

           <CustomerChangeForm params={customer}/>

           <form onSubmit={SendOrder}>
                <label>Description:</label>
                <input required ref={input} value={description} type="text" onChange={(event) => {setDescription(event.target.value)}}/>
                <button type="submit">Send Order</button>
            </form>

       
          <OrderList key={params.id} id={params.id}/>

            
        </div>

    )
}