export class HTTPService {
  static async request(url, method, headers, body) {
    try {
      headers['Content-Type'] = 'application/json';

      const response = await fetch(url, {
        method,
        headers,
        body: JSON.stringify(body),
      });

      const data = await this.parseResponse(response);
      return data;
    } catch (error) {
      console.error(error);
      return null;
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
      throw new Error(response.error);
    }

    if (!response.ok) {
      throw new Error(response.error);
    }

    const data = await response.json();
    return data;
  }
}
