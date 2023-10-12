"use client"

import { ICustomer } from "@/types/customer";
import { fetchCustomers } from "@/utils/api";
import { useEffect, useState } from "react";

export default function Customers(){

    const [data, setData] = useState<ICustomer[]>([]);
    const [message, setMessage] = useState("Getting data from backend...");

    useEffect(()=>{
      const fetchDataAsync = async () => {
      try {
        const result = await fetchCustomers();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchDataAsync();
    if(data.length == 0){
        setMessage("No customers are registered");
    }
  
    },[data.length])

    return(
        <div className="container">
            {data.length > 0 ? data.map(data =>(<li key={data.customerId}> {data.name} </li>)) : <p> {message}</p>}
        </div>
    )

}