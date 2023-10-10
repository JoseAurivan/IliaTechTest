import Link from "@/components/Link";
import { useDispatch } from "react-redux";
import { Customer } from "@/types/customer";
import { DeleteCustomer } from "@/store/reducers/customer";
import { DeleteOrdersFromClient } from "@/store/reducers/order";

export default function CustomerListItem({params}:{params: Customer}){
    const dispatch = useDispatch();

    function SendDeleteCustomer(id:string)
    {
        dispatch(DeleteOrdersFromClient(id));    
        dispatch(DeleteCustomer(id));                
    }

    return(
        <>
            <li>Nome: {params.name}</li>
            <li>Email: {params.email}</li>
            <Link href={"/customer/"+params.customerId}><button>See orders</button></Link>
            <button onClick={()=>SendDeleteCustomer(params.customerId)}>Close tab</button>
        </>
    )
}