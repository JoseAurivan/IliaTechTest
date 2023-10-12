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




export default function CloseNight(){

    const dispatch = useDispatch();

    const customers  = useSelector((state: RootState)=>state.customers);
    const orders  = useSelector(getOrders());

    function handleCloseNight(){

        const customerList = Convert(customers,orders);
        const result = postCustomerList(customerList);
        console.log(result);
        dispatch(CleanOrders());
        dispatch(CleanCustomers()); 
    }

    return(
        <div className={classNames({'d-grid gap-2':true},{[style.container]:true})}>
            <button className="btn btn-outline-danger" onClick={()=>handleCloseNight()}>Clear all customers and Orders</button>
        </div> 
    )
}