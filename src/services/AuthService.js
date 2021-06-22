import { HTTPService } from './HTTPService';
import { API_URL } from '../utils/constants';

export class AuthService {
  static async login({ password, email }) {
    const data = await HTTPService.post(`${API_URL}/login`, {
      password,
      email,
    });
    return data;
  }

  static async getCurrentUser(token) {
    const data = await HTTPService.get(`${API_URL}/users`, {
      Authorization: `Bearer ${token}`,
    });
    return data;
  }
}
