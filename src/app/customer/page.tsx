'use client'
import CustomerList from '@/components/CustomerList/index';
import style from './Order.module.scss'
import { useState } from "react"
import CloseNight from '@/components/CloseNight';
import { Customer } from '@/types/customer';
import { useSelector as Selector,useDispatch } from 'react-redux';
import { UseSelector } from 'react-redux/es/hooks/useSelector';
import { AddCustomer } from '@/store/reducers/customer';
import { v4 as uuid } from 'uuid';

export default function Order()
{
    const dispatch = useDispatch();
    const [customerName, setCustomerName] = useState('');
    const [customerEmail, setCustomerEmail] = useState('');

    function SaveCustomer(event : React.FormEvent<HTMLFormElement>)
    {
        console.log("clicou");
        event.preventDefault();
        const customer = {name: customerName, email: customerEmail, customerId: uuid()};
        dispatch(AddCustomer(customer));
        ClearAllFields();
    }

    function ClearAllFields(){
        setCustomerName('');
        setCustomerEmail('');
    }



    return(
        <>
            <div>
                
                <form onSubmit={SaveCustomer}>
                    <label>Name:</label>
                    <input value={customerName} onChange={evento=>{setCustomerName(evento.target.value)}}  type="text" id="name" ></input>
                    <label>Email:</label>
                    <input value={customerEmail} type="email" onChange={evento=>{setCustomerEmail(evento.target.value)}}></input>
                    <button type="submit">Save Customer</button>
                    
                </form>
                <CloseNight/>
                <CustomerList/>
                
            </div>
        </>
    )
}