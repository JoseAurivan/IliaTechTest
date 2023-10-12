import { IOrder } from '@/types/order';
import {ICustomer, ICustomerList} from '../types/customer';
import {api} from './axios';

export const fetchCustomers = async():Promise<ICustomer[]>  => {
    try {
      const response = await api.get<ICustomer[]>("/customer"); 
      return response.data;
    } catch (error) {
      throw new Error('Error fetching customer');
    }
}

export const fetchOrdersFromCustomer = async(id:number):Promise<IOrder[]> =>{
  try{
    const response = await api.get<IOrder[]>("/order/customer/"+(id.toString()));
    return response.data;
  }catch (error){
    throw new Error('error fetching orders from customer');
  }
}

export const postCustomer = async(customer:ICustomer) =>{
  try{
    const response = await api.post("/customer",customer);
    return response.status;
  }catch(error){
    throw new Error('Error posting customer');
  }
}

export const postCustomerList = async(customers:ICustomerList) =>{
  try{
    const response = await api.post("/customer/list",customers);
    return response.status;
  }catch(error){
    throw new Error('Error posting customer List');
  }
}

export const deleteCustomer = async(id:number) =>{
  try{
    const response = await api.delete("/customer/"+(id.toString()));
    return response.status;
  }catch(error){
    throw new Error('Error deleting customer');
  }
}

export const putCustomer = async(customer:ICustomer) =>{
  try{
    const response = await api.put("/customer/",customer);
    return response.status;
  }catch(error){
    throw new Error('Error changing customer data');
  }
}

export const deleteOrder = async(id:number)=>{
  try{
    const response = await api.delete("/order/"+(id.toString()));
    return response.status;
  }catch(error){
    throw new Error("Cant delete data");
  }
}