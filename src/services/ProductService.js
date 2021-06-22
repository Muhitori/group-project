import { HTTPService } from './HTTPService';
import { API_URL } from '../utils/constants';

export class ProductService {
  static async getProducts({ limit, token }) {
    const data = await HTTPService.get(`${API_URL}/products?_limit=${limit}`, {
      Authorization: `Bearer ${token}`,
    });
    return data;
  }

  static async getProductById({ id, token }) {
    const data = await HTTPService.get(`${API_URL}/products/${id}`, {
      Authorization: `Bearer ${token}`,
    });
    return data;
  }
}
