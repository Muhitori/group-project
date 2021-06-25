import { createError } from './slices/ui-slice';

export const loggerMiddleware = (store) => (next) => (action) => {
  //  console.log('action', action);

  const returnValue = next(action);

  return returnValue;
};

export const errorHandlingMiddleware = (store) => (next) => (action) => {
  if (action.type.includes('rejected')) {
    store.dispatch(createError(action.error.name));
  }

  const returnValue = next(action);
  return returnValue;
};
