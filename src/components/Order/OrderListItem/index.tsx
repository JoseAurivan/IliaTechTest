import { Order } from "@/types/order";
import { useDispatch } from "react-redux";
import {useState} from "react";
import { DeleteOrder } from "@/store/reducers/order";
import { ChangeOrder } from "@/store/reducers/order";
import React from "react";

export default function OrderListItem({params}:{params:Order}){
	const [description,setDescription] = useState(params.description);
	const dispatch = useDispatch();

	function SuspendOrder(orderId:string){
		dispatch(DeleteOrder(orderId));
	}

	function sendChangeOrder(event : React.FormEvent<HTMLFormElement>){
		event.preventDefault();
		if(description){
			const order : Order = {description: description, orderId: params.orderId, customerId: params.customerId};
			dispatch(ChangeOrder(order));
		}        
	}

	return(
		<div className="col">
			<form className="p-3 border bg-dark bg-gradient text-white rounded" onSubmit={sendChangeOrder}>
				<h5 className="card-title mb-1">Order</h5>
				<input className="form-control" type="text"  value={description} onChange={(event)=>{setDescription(event.target.value);}}/>
				<div className="d-grid gap-2">
					<button className="btn btn-warning mt-2 mb-2" type="submit">Change description</button>
					<button className="btn btn-danger" onClick={()=>SuspendOrder(params.orderId)}>Suspend Order</button>
				</div>
			</form>         
		</div>
	);
}