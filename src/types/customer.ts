import { IOrder } from "./order";


export type Customer = {
    name: string;
    email: string;
    customerId: string;
}

export interface ICustomer {
    name: string;
    email:string;
    customerId: number;
    orders: IOrder[] | null;
}

export interface ICustomerList{
    customers: ICustomer[];
}