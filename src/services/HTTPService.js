export class HTTPService {
  static async request(url, method, headers, body) {
    try {
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
    } catch (error) {
      return error.message;
    }
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
    if (response.status === 401) {
      window.location.assign('/login');
      throw new Error(response.status);
    }

    if (!response.ok) {
      throw new Error(response.status);
    }

    const data = await response.json();
    return data;
  }
}
