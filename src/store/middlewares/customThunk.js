export const customThunk = (store) => (next) => (action) => {
  if (typeof action === "function") {
    action(store.dispatch.bind(store), store.getState.bind(store));
    return;
  }

  next(action);
};
