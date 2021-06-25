import { HTTPService } from './HTTPService';
import { API_URL } from '../utils/constants';
import { ProductService } from './ProductService';

export class CartService {
  static cartId = null;

  static cartProductsCounts = {};

  static cartProducts = [];

  static async getUserCart({ userId, token }) {
    const data = await HTTPService.get(`${API_URL}/carts?_userId=${userId}`, {
      Authorization: `Bearer ${token}`,
    });
    this.cartId = data[0].id;

    this.cartProductsCounts = data[0].products;

    return data[0];
  }

  static async updateCartProducts({ token }) {
    const newCart = await HTTPService.patch(
      `${API_URL}/carts/${this.cartId}`,
      {
        products: this.cartProductsCounts,
      },
      {
        Authorization: `Bearer ${token}`,
      }
    );
    this.cartProductsCounts = newCart.products;
    return this.cartProductsCounts;
  }

  static async changeProductCount({ productId, count, token }) {
    const id = productId.toString();
    if (this.cartProductsCounts.hasOwnProperty(id)) {
      this.cartProductsCounts = { ...this.cartProductsCounts, [id]: count };
    }

    const updatedProducts = await this.updateCartProducts({ token });

    return updatedProducts;
  }

  static async addToCart({ productId, token }) {
    if (!this.cartProductsIds.includes(productId)) {
      this.cartProducts = [...this.cartProducts, { id: productId, count: 1 }];
    }

    const updatedProducts = await this.updateCartProducts({ token });

    return updatedProducts;
  }

  static async removeFromCart({ productId, token }) {
    const id = productId.toString();
    if (this.cartProductsCounts.hasOwnProperty(id)) {
      const { [id]: remove, ...rest } = this.cartProductsCounts;
      this.cartProductsCounts = rest;
    }
    const updatedProducts = await this.updateCartProducts({ token });

    return updatedProducts;
  }

  static async toggleCartProduct({ productId, token }) {
    const id = productId.toString();
    if (this.cartProductsCounts.hasOwnProperty(id)) {
      const { [id]: remove, ...rest } = this.cartProductsCounts;
      this.cartProductsCounts = rest;
    } else {
      this.cartProductsCounts = { ...this.cartProductsCounts, [id]: 1 };
    }

    await this.updateCartProducts({ token });
    return this.cartProductsCounts;
  }

  static async getCartProducts({ token }) {
    const cartProducts = Promise.all(
      Object.entries(this.cartProductsCounts).map(async ([id, count]) => {
        const product = await ProductService.getProductById({ id: +id, token });
        return { ...product, count };
      })
    );
    return cartProducts;
  }

  static async clearCart({ token }) {
    this.cartProducts = [];
    this.cartProductsCounts = {};
    console.log('clear', this.cartId);
    await this.updateCartProducts({ token });
    return this.cartProductsCounts;
  }

  static async getCartProductsCounts() {
    return this.cartProductsCounts;
  }
}
