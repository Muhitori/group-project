import { HTTPService } from './HTTPService';
import { API_URL } from '../utils/constants';

export class ProductService {
  async getProducts({ limit, token }) {
    const data = await HTTPService.get(`${API_URL}/products?_limit=${limit}`, {
      Authorization: `Bearer ${token}`,
    });
    return data;
  }
}

export const productService = new ProductService();
