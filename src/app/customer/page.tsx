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
import Link from 'next/link';

export default function Order()
{
    const dispatch = useDispatch();
    const [customerName, setCustomerName] = useState('');
    const [customerEmail, setCustomerEmail] = useState('');

    function SaveCustomer(event : React.FormEvent<HTMLFormElement>)
    {
        console.log("clicou");
        event.preventDefault();
        const customer : Customer = {name: customerName, email: customerEmail, customerId: uuid()};
        dispatch(AddCustomer(customer));
        ClearAllFields();
    }

    function ClearAllFields(){
        setCustomerName('');
        setCustomerEmail('');
    }



    return(
        <div className='container'>
            <div className={style.form}>
                
                <form className="row gx-3 gy-2 align-items-center m-auto" onSubmit={SaveCustomer}>
                    <div className="col-sm-3">
                        <label className="visually-hidden">Name:</label>
                        <input className="form-control" placeholder="Customer Name"value={customerName} onChange={evento=>{setCustomerName(evento.target.value)}}  type="text" id="name" required></input>
                    </div>
                    <div className="col-sm-3">
                        <label className="visually-hidden">Email:</label>
                        <div className="input-group">
                            <div className="input-group-text">@</div>
                                <input placeholder="Customer Email" className="form-control" value={customerEmail} type="email" onChange={evento=>{setCustomerEmail(evento.target.value)}} required></input>
                        </div>
                    </div>
                    <div className="col-auto">
                        <button className="btn btn-primary" type="submit">Save Customer</button>
                        <Link href="/customer/api" className="btn btn-outline-primary" >See Customers</Link>
                    </div>
                    
                </form>
                <CloseNight/>
                <CustomerList/>
                
            </div>
        </div>
    )
}