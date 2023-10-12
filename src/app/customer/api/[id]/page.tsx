"use client"

import { IOrder } from "@/types/order";
import { fetchOrdersFromCustomer } from "@/utils/api";
import { useState, useEffect } from "react";



export default function ApiCustomer({params}:{params:{id:number}}){

    const [data, setData] = useState<IOrder[]>([]);
    const [message, setMessage] = useState("Getting data from backend...");

    useEffect(()=>{
      const fetchDataAsync = async () => {
      try {
        const result = await fetchOrdersFromCustomer(params.id);
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchDataAsync();
    if(data.length == 0){
        setMessage("No orders are registered");
    }
  
    },[data.length,params.id])

    return(
        <div>
            {data.length > 0 ?
             data.map(data =>(
              <li key={data.orderId}> {data.description} </li>
             )) 
             : <p> {message}</p>}
        </div>
    )
}
