"use client";
import { useSelector} from "react-redux";
import React from "react";

import { RootState, filterUserBySearch } from "@/store";


import CustomerListItem from "./CustomerListItem";
import Search from "../SearchBar";
import { Customer } from "@/types/customer";
import styles from "./Customer.module.scss";


export default function CustomerList()
{ 
	const regEx = new RegExp(useSelector((state: RootState)=>state.search),"i");
	const customers:Customer[] | undefined  = useSelector(filterUserBySearch(new RegExp(regEx)));


	return(
		<>
			<Search/>
			<aside className={styles.container}>
				<ol className="list-group list-group-numbered">
					{customers?.map(customer=>(
						<CustomerListItem params={customer} key={customer.customerId} />
					))}               
				</ol>
			</aside>
		</>
	);
}