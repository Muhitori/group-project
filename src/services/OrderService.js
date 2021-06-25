import { HTTPService } from './HTTPService';
import { API_URL } from '../utils/constants';

export class OrderService {
  static async createOrder({ token, userId, products, info }) {
    console.log(products, info);
    const data = await HTTPService.post(
      `${API_URL}/orders`,
      { userId, products, info },
      {
        Authorization: `Bearer ${token}`,
      }
    );
    console.log(data);
    return data;
  }
}
