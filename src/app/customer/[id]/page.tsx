"use client"

 
import { useRouter } from 'next/navigation'
import OrderList from '@/components/Order';
import React, { useRef, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { getCurrentUser } from '@/store'
import { Order } from '@/types/order';
import { v4 as uuid } from 'uuid';
import { AddOrder } from '@/store/reducers/order';
import { Customer } from '@/types/customer';
import CustomerChangeForm from '@/components/CustomerChangeForm';
import { validNameSize } from '@/validation/validate';

export default function Customer({params}:{params:{id:string}}){

    const router = useRouter()

    const [description, setDescription] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const input = useRef<HTMLInputElement>(null);
    const dispatch = useDispatch();


    function SendOrder(event : React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        if(validNameSize.test(description))
        {
            const order : Order = {description: description, orderId: uuid(), customerId:params.id}
            dispatch(AddOrder(order));
            setDescription('');        
        }
        else
        {          
            setErrorMessage("Description must have at least one character.")
            setTimeout(() => {
                setErrorMessage("");
              }, 2500);
        }
        if(input.current) input.current.focus();
    }



    const customer:Customer|undefined = useSelector(getCurrentUser(params.id));


    return(
        <div className='container'>

            <button type="button" onClick={()=>router.push('/customer')} className="btn btn-outline-warning mt-2 mb-2">Back</button>
            
            

           <CustomerChangeForm params={customer}/>
            
                <form className="row gx-3 gy-2 align-items-center mb-2 m-auto shadow-sm p-3 mb-5 bg-white rounded" onSubmit={SendOrder}>
                        <h4 className='card-header'>Order</h4>
                        <label className="col-sm-2 col-form-label">Description:</label>
                        <div className="col-sm-10">
                            <input className="form-control" placeholder='insert order description'  ref={input} value={description} type="text" onChange={(event) => {setDescription(event.target.value)}}/>
                        </div>
                    
                        <button className='btn btn-success' type="submit">Save Order</button>
                        {errorMessage &&<div className='alert alert-danger'>
                            {errorMessage}
                        </div>}
                </form>
            
       
          <OrderList key={params.id} id={params.id}/>

            
        </div>

    )
}