"use client"

import customer, { CleanCustomers } from "@/store/reducers/customer"
import {CleanOrders} from "@/store/reducers/order"
import {getOrders} from "@/store"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/store";
import style from './CloseNight.module.scss'
import classNames from "classnames";
import {Customer} from "@/types/customer";
import {Order} from "@/types/order";
import {postCustomerList} from "@/utils/api"
import { ConvertCustomersAndOrdersToInterface as Convert } from "@/utils/conversor";
import {useState} from 'react'




export default function CloseNight(){

    const dispatch = useDispatch();

    const [errorMessage,setErrorMessage] = useState("");
    const [successMessage,setSuccessMessage] = useState("");

    const customers  = useSelector((state: RootState)=>state.customers);
    const orders  = useSelector(getOrders());

    async function handleCloseNight(){
        const customerList = Convert(customers,orders);
        if(customers.length>=1){
            try{
                    const result = await postCustomerList(customerList);
                    if(result.valueOf()==201)
                    {
                        dispatch(CleanOrders());
                        dispatch(CleanCustomers());
                        setSuccessMessage("Customers and Orders Saved. Check them on See Customers button");
                        setTimeout(() => {
                            setSuccessMessage("");
                        }, 1500);
                    }
                    else
                    {
                        setErrorMessage("An error Occurred");
                        setTimeout(() => {
                            setErrorMessage("");
                        }, 2500);
                    }

                }catch(error){

                } 
        }else{
            setErrorMessage("No customers or orders. Please Add a customer.");
            setTimeout(() => {
                setErrorMessage("");
            }, 2500);
        }
    }

    return(
        <div className={classNames({'d-grid gap-2':true},{[style.container]:true})}>
            {successMessage && <div className="alert alert-success">{successMessage}</div>}
            {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
            <button className="btn btn-outline-danger" onClick={()=>handleCloseNight()}>Clear all customers and Orders</button>
        </div> 
    )
}