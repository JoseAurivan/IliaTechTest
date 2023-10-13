import Link from "@/components/Link";
import { useDispatch, useSelector } from "react-redux";
import { Customer } from "@/types/customer";
import { DeleteCustomer } from "@/store/reducers/customer";
import { DeleteOrdersFromClient } from "@/store/reducers/order";
import { selectOrderbyCustomerID } from "@/store";
import { ConvertCustomerAndOrderToInterface as Convert } from "@/utils/conversor";
import {postCustomer} from "@/utils/api";
import classNames from "classnames";
import styles from "./Listitem.module.scss";
import { useState } from "react";
import React from "react";


export default function CustomerListItem({params}:{params: Customer}){
	const dispatch = useDispatch();

	const [errorMessage,setErrorMessage] = useState("");
	const [successMessage,setSuccessMessage] = useState("");

	const orders = useSelector(selectOrderbyCustomerID(params.customerId));

	async function  SendDeleteCustomer(id:string)
	{
		const customer = Convert(params,orders);
		try{
			const result = await postCustomer(customer);
			if(result.valueOf() == 201)
			{

				setSuccessMessage("Customer and Orders Saved");
				setTimeout(() => {
					dispatch(DeleteOrdersFromClient(id));    
					dispatch(DeleteCustomer(id));
					setSuccessMessage("");
				}, 1000);
                
			}else
			{
				setErrorMessage("An error Occurred");
				setTimeout(() => {
					setErrorMessage("");
				}, 2500);
			}
		}catch(error){
			console.log("ERROR");
		}                
	}

	return(
		<>
			{successMessage && <div className="alert alert-success">{successMessage}</div>}
			{errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
			<li className="list-group-item d-flex justify-content-between align-items-start bg-dark bg-gradient text-light">
				<div className="ms-2 me-auto">
					<div className="fw-bold">Nome: {params.name}</div>
                    Email: {params.email}
				</div>
				<div className="ms-2 ml-auto justify-content-end">
					<Link href={"/customer/"+params.customerId}>
						<button className={classNames({"badge bg-info rounded-pill":true},{[styles.close]:true})}>See orders</button>
					</Link>
					<button className={classNames({"badge bg-info ":true},{[styles.close]:true})} onClick={()=>SendDeleteCustomer(params.customerId)}>Close tab</button>
				</div>
			</li>
		</>
	);
}