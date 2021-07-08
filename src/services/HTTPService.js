import { CustomError } from './CustomError';

export class HTTPService {
  static async request(url, method, headers, body) {
    const response = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      body: JSON.stringify(body),
    });

    const data = await this.parseResponse(response);
    return data;
  }

  static async get(url, options) {
    const data = await this.request(url, 'GET', options);
    return data;
  }

  static async post(url, body, options) {
    const data = await this.request(url, 'POST', options, body);
    return data;
  }

  static async patch(url, body, options) {
    const data = await this.request(url, 'PATCH', options, body);
    return data;
  }

  static async parseResponse(response) {
    if (response.ok) {
      const data = await response.json();
      return data;
    }

    if (response.status === 401) {
      window.location.assign('/login');
    }

    throw new CustomError({
      message: await response.json(),
      status: response.status,
    });
  }
}
