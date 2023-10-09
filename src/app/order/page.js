'use client'
import CustomerList from '@/components/CustomerList/index';
import style from './Order.module.scss'
import { useState } from "react"
import CloseNight from '@/components/CloseNight/index';
import { ICustomer } from '@/types/customer';
import { useSelector as Selector,useDispatch } from 'react-redux';
import { UseSelector } from 'react-redux/es/hooks/useSelector';
import { AddCustomer } from '@/store/reducers/customer';
import { v4 as uuid } from 'uuid';

export default function Order()
{
    const dispatch = useDispatch();
    const [customerName, setCustomerName] = useState('');
    const [customerEmail, setCustomerEmail] = useState('');

    function SaveCustomer(event)
    {
        console.log("clicou");
        event.preventDefault();
        const customer = {name: customerName, email: customerEmail, customerId: uuid(), orders:[]};
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
                <form>
                    <label>Name:</label>
                    <input value={customerName} onChange={evento=>{setCustomerName(evento.target.value)}}  type="text" id="name" ></input>
                    <label>Email:</label>
                    <input value={customerEmail} type="email" onChange={evento=>{setCustomerEmail(evento.target.value)}}></input>
                    <button type="submit" onClick={event => {SaveCustomer(event)}}>Save Customer</button>
                    
                </form>
                <CustomerList/>
                <CloseNight/>
            </div>
        </>
    )
}