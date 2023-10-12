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