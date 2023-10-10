"use client"
import Link from '@/components/Link'
import OrderList from '@/components/Order';
import React, { useRef, useState } from 'react'
import { useSelector } from "react-redux";
import { getCurrentUser } from '@/store'

export default function Customer({params}:{params:{id:string}}){
    const [description, setDescription] = useState('');
    const input = useRef<HTMLInputElement>(null);


    function SendOrder(event : React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        console.log("ENVIOU PRO REDUX")
        console.log(description);
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
                <input ref={input} value={description} type="text" onChange={(event) => {setDescription(event.target.value)}}></input>
                <button type="submit">Send Order</button>
            </form>

        </div>
        <OrderList key={params.id} id={params.id}/>

       
        </>

    )
}