export const productStateSelector = (state) => state.product;

export const productListSelector = (state) => state.product.list;

export const pageSelector = (state) => state.product.page;

export const isLoadPageSelector = (state) => state.product.loadPage;

export const isNextPageSelector = (state) => state.product.page <= state.product.pageCount;

export const currentProductSelector = (state) => state.product.currentProduct;
