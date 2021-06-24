export const cartStateSelector = (state) => state.cart;

export const cartProductsSelector = (state) => state.cart.products;

export const cartProductsIdsSelector = (state) =>
  Object.keys(state.cart.productsCounts);

export const cartProductsCountSelector = (state) =>
  Object.values(state.cart.productsCounts).reduce(
    (acc, count) => acc + count,
    0
  );
