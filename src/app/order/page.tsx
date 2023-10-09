import CustomerList from '@/components/CustomerList';
import style from './Order.module.scss'
import { useState } from "react"

export default function Order()
{
    const [customerName, setCustomerName] = useState('');
    const [customerEmail, setCustomerEmail] = useState('');

    function saveCustomer()
    {
        const customer = {customerName,customerEmail};
        //dispatch to Redux
    }
    function finishAllCustomers()
    {

    }

    return(
        <div>
            <form>
                <label>Name:</label>
                <input type="text" id="name" ></input>
                <label>Email:</label>
                <input type="email"></input>
                <button type="submit" onClick={saveCustomer}></button>
            </form>
            <CustomerList/>
            <div>
                <button onClick={finishAllCustomers}>Close night</button>
            </div>
        </div>
    )
}