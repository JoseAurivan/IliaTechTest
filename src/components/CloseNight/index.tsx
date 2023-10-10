import { CleanCustomers } from "@/store/reducers/customer"
import {CleanOrders} from "@/store/reducers/order"
import { useDispatch } from "react-redux"




export default function CloseNight(){

    const dispatch = useDispatch();

    return(
        <div>
            <button onClick={()=>{
                dispatch(CleanOrders());
                dispatch(CleanCustomers()); 
                }}>Close night</button>
        </div> 
    )
}