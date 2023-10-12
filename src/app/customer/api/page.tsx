"use client"

import { ICustomer } from "@/types/customer";
import { fetchCustomers } from "@/utils/api";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import ApiCustomerListItem from "@/components/CustomerList/ApiCustomerListItem";
import style from './Apicustomer.module.scss'
import classNames from "classnames";

export default function Customers(){

    const [data, setData] = useState<ICustomer[]>([]);
    const [message, setMessage] = useState("Getting data from backend...");

    const router = useRouter()

    useEffect(()=>{
      const fetchDataAsync = async () => {
      try {
        const result = await fetchCustomers();
        setData(result);
      } catch (error) {
        setMessage("An error occurred, check your connection to backend");
      }
    };

    fetchDataAsync();
    if(data.length == 0){
        setMessage("No customers are registered");
    }
  
    },[data.length])

    return(
        <div className="container">
           <button type="button" onClick={()=>router.push('/customer')} className="btn btn-outline-warning mt-2 mb-2">Back</button>
          <ol className={classNames({"list-group list-group-numbered":true},{[style.ol]:true})}>
            {data.length > 0 ?
             data.map(data =>(
              <ApiCustomerListItem key={data.customerId} params={data}/>
             )) 
             : <p> {message}</p>}
          </ol>
        </div>
    )

}