import {Order} from './order'

export type Customer = {
    name: string;
    email: string;
    orders: Order[];
    customerId: string;
}