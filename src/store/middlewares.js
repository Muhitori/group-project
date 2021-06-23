export const loggerMiddleware = (store) => (next) => (action) => {
  //  console.log('action', action);

  const returnValue = next(action);

  return returnValue;
};
