export const productStateSelector = (state) => state.product;

export const productListSelector = (state) => state.product.list;

export const productsBySearchResultSelector = (state) =>
  state.product.searchResult;

export const productsSearchQuerySelector = (state) => state.product.searchQuery;
export const pageNumberSelector = (state) => state.product.pageNumber;

export const isPageLoadingSelector = (state) => state.product.isPageLoading;

export const isNextPageSelector = (state) =>
  state.product.pageNumber <= state.product.pageCount;

export const currentProductSelector = (state) => state.product.currentProduct;
