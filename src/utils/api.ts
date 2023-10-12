import { IOrder } from '@/types/order';
import {ICustomer} from '../types/customer';
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
    const response = await api.get<IOrder[]>("order/customer/"+(id.toString()));
    return response.data;
  }catch (error){
    console.error('Error ao buscar dados do usuário:', error);
    throw new Error('Erro ao buscar dados do usuário');
  }
}

export const postCustomer = async(customer:ICustomer) =>{
  try{
    const response = await api.post("api/customer",customer);
    return response.status;
  }catch(error){
    console.error('Error ao buscar dados do usuário:', error);
    throw new Error('Erro ao buscar dados do usuário');
  }
}