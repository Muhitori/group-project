import { HTTPService } from './HTTPService';
import { API_URL } from '../utils/constants';

export class ProductService {
  static limit = 300;

  static page = 1;

  static getNextPageFromHeader(linkHeader) {
    const linkHeadersArray = linkHeader.split(', ');
    const nextPageRel = linkHeadersArray
      .find((element) => element.includes('next'));
    if (!nextPageRel) {
      return '';
    }
    const nextPageUrl = nextPageRel.split('; ')[0].slice(1, -1);
    return nextPageUrl;
  }

  static async getProducts({ link, token }) {
    const requestLink = link || `${API_URL}/products?_limit=${this.limit}&_page=${this.page}`;
    const { data, headers } = await HTTPService.get(requestLink, {
      Authorization: `Bearer ${token}`,
    });
    const next = this.getNextPageFromHeader(headers.get('Link'));
    return { data, next };
  }
}
