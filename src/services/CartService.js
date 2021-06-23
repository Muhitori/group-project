import { HTTPService } from './HTTPService';
import { API_URL } from '../utils/constants';
import { ProductService } from './ProductService';

export class CartService {
  static cartId = null;

  static cartProductsIds = [];

  static async getUserCart({ userId, token }) {
    const data = await HTTPService.get(`${API_URL}/carts?_userId=${userId}`, {
      Authorization: `Bearer ${token}`,
    });

    this.cartId = data[0].id;
    this.cartProductsIds = data[0].products;

    return data[0];
  }

  static async updateCartProducts({ token }) {
    const newCart = await HTTPService.patch(
      `${API_URL}/carts/${this.cartId}`,
      {
        products: this.cartProductsIds,
      },
      {
        Authorization: `Bearer ${token}`,
      }
    );

    this.cartProductsIds = newCart.products;

    return newCart.products;
  }

  static async addToCart({ productId, token }) {
    if (!this.cartProductsIds.includes(productId)) {
      this.cartProductsIds = [...this.cartProductsIds, productId];
    }

    const updatedProducts = await this.updateCartProducts({ token });

    return updatedProducts;
  }

  static async removeFromCart({ productId, token }) {
    if (this.cartProductsIds.includes(productId)) {
      this.cartProductsIds = this.cartProductsIds.filter(
        (cartProductId) => cartProductId !== productId
      );
    }
    const updatedProducts = await this.updateCartProducts({ token });

    return updatedProducts;
  }

  static async toggleCartProduct({ productId, token }) {
    if (this.cartProductsIds.includes(productId)) {
      this.cartProductsIds = this.cartProductsIds.filter(
        (cartProductId) => cartProductId !== productId
      );
    } else {
      this.cartProductsIds = [...this.cartProductsIds, productId];
    }

    const updatedProducts = await this.updateCartProducts({ token });

    return updatedProducts;
  }

  static async getCartProducts({ token }) {
    const cartProducts = Promise.all(
      this.cartProductsIds.map((productId) =>
        ProductService.getProductById({ id: productId, token })
      )
    );

    return cartProducts;
  }

  static async getCartProductsIds() {
    console.log(this.cartProductsIds);
    return this.cartProductsIds;
  }
}
