import { HTTPService } from './HTTPService';
import { API_URL } from '../utils/constants';

const limit = 24;

export class ProductService {
  static link = `${API_URL}/products`;

  static async getProductPageCount({ token }) {
    const data = await HTTPService.get(this.link, {
      Authorization: `Bearer ${token}`,
    });
    const pageCount = Math.ceil(data.length / limit);
    return pageCount;
  }

  static async getProducts({ token, page = 1 }) {
    const data = await HTTPService.get(
      `${this.link}?_limit=${limit}&_page=${page}`,
      {
        Authorization: `Bearer ${token}`,
      }
    );
    return data;
  }

  static async getProductById({ id, token }) {
    const data = await HTTPService.get(`${API_URL}/products/${id}`, {
      Authorization: `Bearer ${token}`,
    });
    return data;
  }
}
