export const favoritesStateSelector = (state) => state.favorites;

export const favoritesProductsSelector = (state) => state.favorites.products;

export const favoritesProductsIdsSelector = (state) =>
  state.favorites.productsIds;
