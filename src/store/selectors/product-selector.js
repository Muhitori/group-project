export const productStateSelector = (state) => state.product;

export const productListSelector = (state) => state.product.list;

export const productsBySearchSelector = (state) => state.product.searchResult;

export const productsSearchQuerySelector = (state) => state.product.searchQuery;

export const currentProductSelector = (state) => state.product.currentProduct;
