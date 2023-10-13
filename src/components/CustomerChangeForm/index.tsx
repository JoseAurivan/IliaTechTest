import { Customer } from "@/types/customer";
import {useState} from "react";
import {ChangeCustomer} from "@/store/reducers/customer";
import {  useDispatch } from "react-redux";

export default function CustomerChangeForm({params}:{params: Customer | undefined}){

	const [customerName, setCustomerName] = useState(params?.name);
	const [customerEmail, setCustomerEmail] = useState(params?.email);
	const dispatch = useDispatch();

	function sendChangeCustomer(event : React.FormEvent<HTMLFormElement>){
		event.preventDefault();
		if(customerName && customerEmail && params?.customerId){
			const customer : Customer = {name: customerName, email: customerEmail, customerId: params.customerId};
			dispatch(ChangeCustomer(customer));
		}        
	}

	return(
		<form className="row gx-3 gy-2 align-items-center mb-2 m-auto" onSubmit={sendChangeCustomer}>
			<div className="col-sm-3">
				<label className="visually-hidden">Name:</label>
				<input className="form-control" placeholder="Customer Name"value={customerName} onChange={evento=>{setCustomerName(evento.target.value);}}  type="text" id="name" ></input>
			</div>
			<div className="col-sm-3">
				<label className="visually-hidden">Email:</label>
				<div className="input-group">
					<div className="input-group-text">@</div>
					<input placeholder="Customer Email" className="form-control" value={customerEmail} type="email" onChange={evento=>{setCustomerEmail(evento.target.value);}}></input>
				</div>
			</div>
			<div className="col-auto">
				<button className="btn btn-primary" type="submit">Update Customer</button>
			</div>
            
		</form>
	);
}