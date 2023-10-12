import {ICustomer} from '@/types/customer';
import Link from '@/components/Link';
import classNames from 'classnames';
import styles from '../CustomerListItem/Listitem.module.scss';
import { useState } from 'react';
export default function ApiCustomerListItem({params}:{params: ICustomer}){

    const [reRender, setReRender] = useState(false);

    async function HandleDeleteCustomer(id:number){
        setReRender(!reRender);

    }

    return(
        <>
        <li className="list-group-item d-flex justify-content-between align-items-start">
            <p hidden> {reRender} </p>
            <div className="ms-2 me-auto">
                <div className="fw-bold">Nome: {params.name}</div>
                Email: {params.email}
            </div>
            <div className="ms-2 ml-auto justify-content-end">
                <Link href={"/customer/api/"+params.customerId}>
                    <button className={classNames({"badge bg-primary rounded-pill":true},{[styles.close]:true})}>See orders</button>
                </Link>
                <button className={classNames({"badge bg-warning text-dark":true},{[styles.close]:true})} onClick={()=>HandleDeleteCustomer(params.customerId)}>Close tab</button>
            </div>
        </li>
    </>
    )

}