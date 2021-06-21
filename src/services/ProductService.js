import { HTTPService } from './HTTPService';

export class ProductService {
  constructor() {
    this.baseUrl = 'http://localhost:3010';
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
