import { HTTPService } from './HTTPService';
import { API_URL } from '../utils/constants';

export class ProductService {
  constructor() {
    this.baseUrl = API_URL;
  }

  async getProducts({ limit, token }) {
    const data = await HTTPService.get(
      `${this.baseUrl}/products?_limit=${limit}`,
      {
        Authorization: `Bearer ${token}`,
      }
    );
    return data;
  }
}

export const productService = new ProductService();
