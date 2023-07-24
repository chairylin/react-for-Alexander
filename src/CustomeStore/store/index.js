class Store {
  state;

  subscribers = {};

  rootReducer;

  constructor(rootReducer) {
    this.rootReducer = rootReducer;
    this.state = this.rootReducer();
  }

  subscribe(key, callback) {
    if (typeof callback === "function") {
      this.subscribers[key] = callback;

      this.subscribers[key](this.state);
    }
  }

  unsubscribe(key) {
    delete this.subscribers[key];
  }

  dispatch(action) {
    this.state = this.rootReducer(this.state, action);

    Object.values(this.subscribers).forEach((callback) => callback(this.state));
  }
}

const rootReducer = () => {
  return {};
};

export const createStore = (() => {
  let store;

  return (rootReducer) => {
    if (!store) {
      store = new Store(rootReducer);
    }

    return store;
  };
})();
