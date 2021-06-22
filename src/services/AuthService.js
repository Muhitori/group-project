import { HTTPService } from './HTTPService';

export class AuthService {
  constructor() {
    this.baseUrl = 'http://localhost:3010';
  }

  async login({ password, email }) {
    const data = await HTTPService.post(`${this.baseUrl}/login`, {
      password,
      email,
    });
    return data;
  }

  async getCurrentUser(token) {
    const data = await HTTPService.get(`${this.baseUrl}/users`, {
      Authorization: `Bearer ${token}`,
    });
    return data;
  }
}

export const authService = new AuthService();
