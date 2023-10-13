"use client"

import { IOrder } from "@/types/order";
import { fetchOrdersFromCustomer } from "@/utils/api";
import { useState, useEffect } from "react";
import { deleteOrder } from "@/utils/api";
import { useRouter } from "next/navigation";


export default function ApiCustomer({params}:{params:{id:number}}){

    const [data, setData] = useState<IOrder[]>([]);
    const [message, setMessage] = useState("Getting data from backend...");

    const [sucessMessage, setSucessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

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
      if(response.valueOf()==200)
      {
        setSucessMessage("Order deleted. Updating List...");
            setTimeout(() => {
                
                window.location.reload();
              }, 800);

      }else{
        setErrorMessage("Unable to delete Order.Try to reload the page.")
            setTimeout(() => {                
                setErrorMessage("");
              }, 1400);
      }
      
    }

    return(
        <div className="container">
          <button type="button" onClick={()=>router.push('/customer/api')} className="btn btn-outline-warning mt-2 mb-2">Back</button>
          {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
          {sucessMessage && <div className="alert alert-success">{sucessMessage}</div>}
          <ol className="list-group list-group-numbered">
            {data.length > 0 ?
             data.map(data =>(
              <li key={data.orderId} className="p-3 border bg-dark bg-gradient text-white rounded"> {data.description}            
                <div key={data.orderId} className="ms-2 ml-auto justify-content-end">
                  <button className="btn btn-danger" onClick={()=>HandleDelete(data.orderId)}>DELETE</button>
                </div>
              </li>
             )) 
             : <p> {message}</p>}
          </ol>
        </div>
    )
}
