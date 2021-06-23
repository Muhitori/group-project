export const productStateSelector = (state) => state.product;

export const productListSelector = (state) => state.product.list;

export const pageNumberSelector = (state) => state.product.pageNumber;

export const isLoadPageSelector = (state) => state.product.loadPage;

export const isNextPageSelector = (state) => state.product.pageNumber <= state.product.pageCount;

export const currentProductSelector = (state) => state.product.currentProduct;
