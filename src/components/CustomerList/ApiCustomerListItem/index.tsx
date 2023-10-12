import {ICustomer} from '@/types/customer';
import Link from '@/components/Link';
import classNames from 'classnames';
import styles from '../CustomerListItem/Listitem.module.scss';
import { useState, useEffect } from 'react';
import { deleteCustomer } from '@/utils/api';
import { useRouter } from 'next/navigation';
export default function ApiCustomerListItem({params}:{params: ICustomer}){

    const router = useRouter();

    async function HandleDeleteCustomer(id:number){
        
        await deleteCustomer(id);
        window.location.reload();
    }


    return(
        <>
        <li className="list-group-item d-flex justify-content-between align-items-start">
            
            <div className="ms-2 me-auto">
                <div className="fw-bold">Nome: {params.name}</div>
                Email: {params.email}
            </div>
            <div className="ms-2 ml-auto justify-content-end">
                <Link href={"/customer/api/"+params.customerId}>
                    <button className={classNames({"badge bg-primary rounded-pill":true},{[styles.close]:true})}>See orders</button>
                </Link>
                <button className={classNames({"badge bg-danger":true},{[styles.close]:true})} onClick={()=>HandleDeleteCustomer(params.customerId)}>Delete</button>
            </div>
        </li>
    </>
    )

}