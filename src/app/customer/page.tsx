"use client";
import CustomerList from "@/components/CustomerList/index";
import style from "./Order.module.scss";
import { useRef, useState } from "react";
import CloseNight from "@/components/CloseNight";
import { Customer } from "@/types/customer";
import { useDispatch } from "react-redux";
import { AddCustomer } from "@/store/reducers/customer";
import { v4 as uuid } from "uuid";
import { validEmail } from "@/validation/validate";
import Link from "next/link";
import React from "react";

export default function Order()
{
	const dispatch = useDispatch();

	const [errorMessage, setErrorMessage] = useState("");
	const [customerName, setCustomerName] = useState("");
	const [customerEmail, setCustomerEmail] = useState("");

	const emailInput = useRef<HTMLInputElement>(null);


	function SaveCustomer(event : React.FormEvent<HTMLFormElement>)
	{

		event.preventDefault();
		if(validEmail.test(customerEmail))
		{
			const customer : Customer = {name: customerName, email: customerEmail, customerId: uuid()};
			dispatch(AddCustomer(customer));
			ClearAllFields();
		}else{
			HandleIncorrectInput();
		}
	}

	function HandleIncorrectInput(){
		setCustomerEmail("");
		if(emailInput.current) emailInput.current.focus();
		setErrorMessage("Email is not typed correctly.");
		setTimeout(() => {
			setErrorMessage("");
		}, 2500);
	}

	function ClearAllFields(){
		setCustomerName("");
		setCustomerEmail("");
	}



	return(
		<div className='container'>
			<div className={style.form}>
                
				<form className="row gx-3 gy-2 align-items-center m-auto" onSubmit={SaveCustomer}>
					<div className="col-sm-3">
						<label className="visually-hidden">Name:</label>
						<input className="form-control" placeholder="Customer Name"value={customerName} onChange={evento=>{setCustomerName(evento.target.value);}}  type="text" id="name" required></input>
					</div>
					<div className="col-sm-3">
						<label className="visually-hidden">Email:</label>
						<div className="input-group">
							<div className="input-group-text">@</div>
							<input ref={emailInput} placeholder="Customer Email" className="form-control" value={customerEmail} type="text" onChange={evento=>{setCustomerEmail(evento.target.value);}} required></input>
						</div>
					</div>
					<div className="col-auto">
						<button className="btn btn-primary mr-2 ml-2" type="submit">Save Customer</button>
					</div>
					<div className='col-auto'>
						<Link href="/customer/api" className="btn btn-outline-info" >See Customers</Link>
					</div>
					{errorMessage &&<div className='alert alert-danger'>
						{errorMessage}
					</div>}
				</form>
				<CloseNight/>
				<CustomerList/>
                
			</div>
		</div>
	);
}