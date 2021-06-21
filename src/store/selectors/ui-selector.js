export const uiStateSelector = (state) => state.ui;

export const loadingSelector = (state) => state.ui.loading;

export const errorsSelector = (state) => state.ui.errors;

export const hasErrorsSelector = (state) => !!state.ui.errors.length;
