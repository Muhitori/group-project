import { HTTPService } from './HTTPService';
import { API_URL } from '../utils/constants';
import { ProductService } from './ProductService';

export class FavoritesService {
  static favoriteListId = null;

  static favoriteProductsIds = [];

  static async getUserFavorites({ userId, token }) {
    const data = await HTTPService.get(
      `${API_URL}/favorites?_userId=${userId}`,
      {
        Authorization: `Bearer ${token}`,
      }
    );

    this.favoriteListId = data[0].id;
    this.favoriteProductsIds = data[0].products;

    return data[0];
  }

  static async updateFavoriteProducts({ token }) {
    const newFavoriteList = await HTTPService.patch(
      `${API_URL}/favorites/${this.favoriteListId}`,
      {
        products: this.favoriteProductsIds,
      },
      {
        Authorization: `Bearer ${token}`,
      }
    );

    this.favoriteProductsIds = newFavoriteList.products;

    return newFavoriteList.products;
  }

  static async addToFavorites({ productId, token }) {
    if (!this.favoriteProductsIds.includes(productId)) {
      this.favoriteProductsIds = [...this.favoriteProductsIds, productId];
    }

    const updatedProducts = await this.updateFavoriteProducts({ token });

    return updatedProducts;
  }

  static async removeFromFavorites({ productId, token }) {
    if (this.favoriteProductsIds.includes(productId)) {
      this.favoriteProductsIds = this.favoriteProductsIds.filter(
        (favoriteProductId) => favoriteProductId !== productId
      );
    }
    const updatedProducts = await this.updateFavoriteProducts({ token });

    return updatedProducts;
  }

  static async toggleFavoriteProduct({ productId, token }) {
    if (this.favoriteProductsIds.includes(productId)) {
      this.favoriteProductsIds = this.favoriteProductsIds.filter(
        (favoriteProductId) => favoriteProductId !== productId
      );
    } else {
      this.favoriteProductsIds = [...this.favoriteProductsIds, productId];
    }

    const updatedProducts = await this.updateFavoriteProducts({ token });

    return updatedProducts;
  }

  static async getFavoriteProducts({ token }) {
    console.log(this.favoriteProductsIds);
    const favoriteProducts = Promise.all(
      this.favoriteProductsIds.map((productId) =>
        ProductService.getProductById({ id: productId, token })
      )
    );

    return favoriteProducts;
  }

  static async getFavoriteProductsIds() {
    return this.favoriteProductsIds;
  }
}
