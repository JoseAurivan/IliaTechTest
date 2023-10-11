import Link from "@/components/Link";
import { useDispatch } from "react-redux";
import { Customer } from "@/types/customer";
import { DeleteCustomer } from "@/store/reducers/customer";
import { DeleteOrdersFromClient } from "@/store/reducers/order";
import classNames from "classnames";
import styles from './Listitem.module.scss';

export default function CustomerListItem({params}:{params: Customer}){
    const dispatch = useDispatch();

    function SendDeleteCustomer(id:string)
    {
        dispatch(DeleteOrdersFromClient(id));    
        dispatch(DeleteCustomer(id));                
    }

    return(
        <>
            <li className="list-group-item d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                    <div className="fw-bold">Nome: {params.name}</div>
                    Email: {params.email}
                </div>
                <div className="ms-2 ml-auto justify-content-end">
                    <Link href={"/customer/"+params.customerId}>
                        <button className={classNames({"badge bg-primary rounded-pill":true},{[styles.close]:true})}>See orders</button>
                    </Link>
                    <button className={classNames({"badge bg-warning text-dark":true},{[styles.close]:true})} onClick={()=>SendDeleteCustomer(params.customerId)}>Close tab</button>
                </div>
            </li>
        </>
    )
}