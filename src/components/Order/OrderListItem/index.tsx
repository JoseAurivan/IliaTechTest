import { Order } from "@/types/order";
import { useDispatch } from "react-redux";
import {useState} from "react";
import { DeleteOrder } from "@/store/reducers/order";
import { ChangeOrder } from "@/store/reducers/order";

export default function OrderListItem({params}:{params:Order}){
    const [description,setDescription] = useState(params.description);
    const dispatch = useDispatch();

    function SuspendOrder(orderId:string){
        dispatch(DeleteOrder(orderId));
    }

    function sendChangeOrder(event : React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        if(description){
            const order : Order = {description: description, orderId: params.orderId, customerId: params.customerId}
            dispatch(ChangeOrder(order));
        }        
    }

    return(
        <>
            <form onClick={sendChangeOrder}>
                <input type="text"  value={description} onChange={(event)=>{setDescription(event.target.value)}}/>
                <button type="submit">Change description</button>
                
            </form>
            <button onClick={()=>SuspendOrder(params.orderId)}>Suspend Order</button>
        </>
    )
}