"use client"

import { IOrder } from "@/types/order";
import { fetchOrdersFromCustomer } from "@/utils/api";
import { useState, useEffect } from "react";
import { deleteOrder } from "@/utils/api";
import { useRouter } from "next/navigation";


export default function ApiCustomer({params}:{params:{id:number}}){

    const [data, setData] = useState<IOrder[]>([]);
    const [message, setMessage] = useState("Getting data from backend...");

    const router = useRouter();

    useEffect(()=>{
      const fetchDataAsync = async () => {
      try {
        const result = await fetchOrdersFromCustomer(params.id);
        setData(result);
      } catch (error) {
        setMessage("Problem with back end");
      }
    };

    fetchDataAsync();
    if(data.length == 0){
        setMessage("No orders are registered");
    }
  
    },[data.length,params.id])

    async function HandleDelete(id: number){
      const response = await deleteOrder(id);
      console.log(response.toString());
      window.location.reload();
    }

    return(
        <div className="container">
          <button type="button" onClick={()=>router.push('/customer/api')} className="btn btn-outline-warning mt-2 mb-2">Back</button>
          <ol className="list-group list-group-numbered">
            {data.length > 0 ?
             data.map(data =>(
              <li key={data.orderId} className="p-3 border bg-light rounded"> {data.description} <button className="btn btn-danger" onClick={()=>HandleDelete(data.orderId)}>DELETE</button> </li>
             )) 
             : <p> {message}</p>}
          </ol>
        </div>
    )
}
