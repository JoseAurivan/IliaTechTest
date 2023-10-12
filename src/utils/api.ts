import { IOrder } from '@/types/order';
import {ICustomer, ICustomerList} from '../types/customer';
import {api} from './axios';

export const fetchCustomers = async():Promise<ICustomer[]>  => {
    try {
      const response = await api.get<ICustomer[]>("/customer"); // Exemplo de rota
      return response.data;
    } catch (error) {
      console.error('Error ao buscar dados do usuário:', error);
      throw new Error('Erro ao buscar dados do usuário');
    }
}

export const fetchOrdersFromCustomer = async(id:number):Promise<IOrder[]> =>{
  try{
    const response = await api.get<IOrder[]>("/order/customer/"+(id.toString()));
    return response.data;
  }catch (error){
    console.error('Error ao buscar dados do usuário:', error);
    throw new Error('Erro ao buscar dados do usuário');
  }
}

export const postCustomer = async(customer:ICustomer) =>{
  try{
    const response = await api.post("/customer",customer);
    return response.status;
  }catch(error){
    console.error('Error ao buscar dados do usuário:', error);
    throw new Error('Erro ao buscar dados do usuário');
  }
}

export const postCustomerList = async(customers:ICustomerList) =>{
  try{
    const response = await api.post("/customer/list",customers);
    return response.status;
  }catch(error){
    console.error('Error ao buscar dados do usuário:', error);
    throw new Error('Erro ao buscar dados do usuário');
  }
}

export const deleteCustomer = async(id:number) =>{
  try{
    const response = await api.delete("/customer/"+(id.toString()));
    return response.status;
  }catch(error){
    console.error('Error ao buscar dados do usuário:', error);
    throw new Error('Erro ao buscar dados do usuário');
  }
}

export const putCustomer = async(customer:ICustomer) =>{
  try{
    const response = await api.put("/customer/",customer);
    return response.status;
  }catch(error){
    console.error('Error ao buscar dados do usuário:', error);
    throw new Error('Erro ao buscar dados do usuário');
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