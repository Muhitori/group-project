import { HTTPService } from './HTTPService';
import { API_URL } from '../utils/constants';

export class ProductService {
  static limit = 24;

  static page = 1;

  static parseLinkHeader(linkHeader) {
    const linkHeadersArray = linkHeader
      .split(', ')
      .map((header) => header.split('; '));
    const linkHeadersMap = linkHeadersArray.map((header) => {
      const thisHeaderRel = header[1].replace(/"/g, '').replace('rel=', '');
      const thisHeaderUrl = header[0].slice(1, -1);
      return [thisHeaderRel, thisHeaderUrl];
    });
    return Object.fromEntries(linkHeadersMap);
  }

  static async getProducts({ link, token }) {
    const requestLink = link || `${API_URL}/products?_limit=${this.limit}&_page=${this.page}`;
    const { data, headers } = await HTTPService.get(requestLink, {
      Authorization: `Bearer ${token}`,
    });
    const { next } = this.parseLinkHeader(headers.get('Link'));
    return { data, next };
  }
}
