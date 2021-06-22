import { HTTPService } from './HTTPService';
import { API_URL } from '../utils/constants';
import { ProductService } from './ProductService';

export class FavoritesService {
  static async getUserFavorites({ userId, token }) {
    const data = await HTTPService.get(
      `${API_URL}/favorites?_userId=${userId}`,
      {
        Authorization: `Bearer ${token}`,
      }
    );

    return data[0];
  }

  static async updateFavoriteProducts({ newProducts, id, token }) {
    const newFavorites = await HTTPService.patch(
      `${API_URL}/favorites/${id}`,
      {
        products: newProducts,
      },
      {
        Authorization: `Bearer ${token}`,
      }
    );
    return newFavorites.products;
  }

  static async addToFavorites({ userId, productId, token }) {
    const { products, id } = await this.getUserFavorites({
      userId,
      token,
    });

    let newProducts = products;
    if (!products.includes(productId)) {
      newProducts = [...products, productId];
    }

    const updatedProducts = await this.updateFavoriteProducts({
      newProducts,
      id,
      token,
    });

    return updatedProducts;
  }

  static async removeFromFavorites({ userId, productId, token }) {
    const { products, id } = await this.getUserFavorites({
      userId,
      token,
    });

    let newProducts = products;
    if (products.includes(productId)) {
      newProducts = products.filter(
        (favoriteProductId) => favoriteProductId !== productId
      );
    }

    const updatedProducts = await this.updateFavoriteProducts({
      newProducts,
      id,
      token,
    });

    return updatedProducts;
  }

  static async toggleFavoriteProduct({ userId, productId, token }) {
    const { products, id } = await this.getUserFavorites({
      userId,
      token,
    });

    let newProducts = products;
    if (products.includes(productId)) {
      newProducts = products.filter(
        (favoriteProductId) => favoriteProductId !== productId
      );
    } else {
      newProducts = [...products, productId];
    }

    const updatedProducts = await this.updateFavoriteProducts({
      newProducts,
      id,
      token,
    });

    return updatedProducts;
  }

  static async getFavoriteProductsByUserId({ userId, token }) {
    const { products } = await this.getUserFavorites({
      userId,
      token,
    });

    const favoriteProducts = Promise.all(
      products.map((productId) =>
        ProductService.getProductById({ id: productId, token })
      )
    );

    return favoriteProducts;
  }
}
