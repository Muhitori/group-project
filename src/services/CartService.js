import { HTTPService } from './HTTPService';
import { API_URL } from '../utils/constants';
import { ProductService } from './ProductService';

export class CartService {
  static async getUserCart({ userId, token }) {
    const data = await HTTPService.get(`${API_URL}/carts?_userId=${userId}`, {
      Authorization: `Bearer ${token}`,
    });

    return data[0];
  }

  static async updateCartProducts({ newProducts, id, token }) {
    const newCart = await HTTPService.patch(
      `${API_URL}/carts/${id}`,
      {
        products: newProducts,
      },
      {
        Authorization: `Bearer ${token}`,
      }
    );
    return newCart.products;
  }

  static async addToCart({ userId, productId, token }) {
    const { products, id } = await this.getUserCart({
      userId,
      token,
    });

    let newProducts = products;
    if (!products.includes(productId)) {
      newProducts = [...products, productId];
    }

    const updatedProducts = await this.updateCartProducts({
      newProducts,
      id,
      token,
    });

    return updatedProducts;
  }

  static async removeFromCart({ userId, productId, token }) {
    const { products, id } = await this.getUserCart({
      userId,
      token,
    });

    let newProducts = products;
    if (products.includes(productId)) {
      newProducts = products.filter(
        (cartProductId) => cartProductId !== productId
      );
    }

    const updatedProducts = await this.updateCartProducts({
      newProducts,
      id,
      token,
    });

    return updatedProducts;
  }

  static async toggleCartProduct({ userId, productId, token }) {
    const { products, id } = await this.getUserCart({
      userId,
      token,
    });

    let newProducts = products;
    if (products.includes(productId)) {
      newProducts = products.filter(
        (cartProductId) => cartProductId !== productId
      );
    } else {
      newProducts = [...products, productId];
    }

    const updatedProducts = await this.updateCartProducts({
      newProducts,
      id,
      token,
    });

    return updatedProducts;
  }

  static async getCartProductsByUserId({ userId, token }) {
    const { products } = await this.getUserCart({
      userId,
      token,
    });

    const cartProducts = Promise.all(
      products.map((productId) =>
        ProductService.getProductById({ id: productId, token })
      )
    );

    return cartProducts;
  }
}
