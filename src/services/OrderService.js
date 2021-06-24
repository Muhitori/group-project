import { HTTPService } from './HTTPService';
import { API_URL } from '../utils/constants';

export class OrderService {
  static async createOrder({ token, userId, products }) {
    const data = await HTTPService.post(
      `${API_URL}/orders`,
      { userId, products },
      {
        Authorization: `Bearer ${token}`,
      }
    );
    return data;
  }
}
