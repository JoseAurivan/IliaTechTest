
export interface IOrder{
    descricao: string;
    orderId: string;
    customerId: string;
}

export interface ICustomer{
    nome: string;
    email: string;
    orders: IOrder[];
    customerId: string;
}