import { Customer } from "@/types/customer";
import customer from '@/store/reducers/customer';
import {useState} from 'react';
import {ChangeCustomer} from '@/store/reducers/customer'
import { useSelector, useDispatch } from "react-redux";

export default function CustomerChangeForm({params}:{params: Customer | undefined}){

    const [customerName, setCustomerName] = useState(params?.name);
    const [customerEmail, setCustomerEmail] = useState(params?.email);
    const dispatch = useDispatch();

    function sendChangeCustomer(event : React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        if(customerName && customerEmail && params?.customerId){
            const customer : Customer = {name: customerName, email: customerEmail, customerId: params.customerId}
            dispatch(ChangeCustomer(customer));
        }        
    }

    return(
        <form onSubmit={sendChangeCustomer}>
            <label>CUSTOMER:</label>
            <input type="text" value={customerName} onChange={(event)=>{setCustomerName(event.target.value)}}/>
            <label>EMAIL:</label>
            <input type="text" value={customerEmail} onChange={(event)=>{setCustomerEmail(event.target.value)}}/>
        <button type='submit'>Change Customer</button>
    </form>
    )
}