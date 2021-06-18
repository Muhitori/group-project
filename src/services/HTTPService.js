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

  static async parseResponse(response) {
    if (response.ok) {
      return response.json();
    }

    const errorObject = {
      message: response.message,
      status: response.status,
    };

    if (response.status === 401) {
      window.location.assign('/login');
      throw new CustomError(errorObject);
    }

    throw new Error(errorObject);
  }
}
