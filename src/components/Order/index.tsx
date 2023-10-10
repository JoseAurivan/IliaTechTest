"use client"
import { useSelector } from "react-redux";
import React, { useEffect } from 'react'
import { RootState } from "@/store";
import {selectOrderbyCustomerID} from '@/store'

export default function OrderList({id}:{id:string}){
    const orders = useSelector(selectOrderbyCustomerID(id));

    return(
        <div>
            orders
        </div>
    )

}