import { CleanCustomers } from "@/store/reducers/customer"
import {CleanOrders} from "@/store/reducers/order"
import { useDispatch } from "react-redux"
import style from './CloseNight.module.scss'
import classNames from "classnames";




export default function CloseNight(){

    const dispatch = useDispatch();

    return(
        <div className={classNames({'d-grid gap-2':true},{[style.container]:true})}>
            <button className="btn btn-outline-danger" onClick={()=>{
                dispatch(CleanOrders());
                dispatch(CleanCustomers()); 
                }}>Close night</button>
        </div> 
    )
}