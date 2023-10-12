import { Customer, ICustomer, ICustomerList } from '@/types/customer';
import { Order, IOrder } from '@/types/order';

export  function ConvertCustomerAndOrderToInterface(customer:Customer, orders:Order[]) : ICustomer {
    let DBcustomer : ICustomer = {name: customer.name, email:customer.email, customerId: 0, orders: []}
    if(orders.length > 0){       
        let DBorders : IOrder[] = []; 
        orders.map(order => {
            const DBorder:IOrder = {description: order.description, orderId:0,customerId:0}
            DBorders.push(DBorder);
        })
        DBcustomer.orders = DBorders;
    }
    return DBcustomer;
}

export  function ConvertCustomersAndOrdersToInterface(customers:Customer[],orders:Order[]) : ICustomerList{
    let DBcustomers = {} as ICustomerList;
    DBcustomers.customers = [];
    customers.map(customer=>{
        const customerOrders = orders.filter(order => order.customerId === customer.customerId);
        let DBcustomer = ConvertCustomerAndOrderToInterface(customer,customerOrders);
        DBcustomers.customers.push(DBcustomer);       
    })
    console.log(DBcustomers);
    return DBcustomers;
}