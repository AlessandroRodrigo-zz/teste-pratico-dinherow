const store = {
  // Initial state
  state: {
    items: [],
  },
  // Getters
  getters: {
    productsInCart: (state) => {
      return state.items;
    },
  },
  // Mutations
  mutations: {
    addProductInCart: (state, payload) => {
      const product = state.items.findIndex((item) => item.id === payload.id);

      if (product >= 0) {
        state.items[product].amount += 1; // eslint-disable-line no-param-reassign
      } else {
        state.items.push(payload);
      }
      sessionStorage.setItem('store', JSON.stringify(state.items));
    },
    removeProductFromCart: (state, payload) => {
      const product = state.items.findIndex((item) => item.id === payload);

      state.items.splice(product, 1);
      sessionStorage.setItem('store', JSON.stringify(state.items));
    },
    addProductAmount: (state, payload) => {
      const product = state.items.findIndex((item) => item.id === payload);

      state.items[product].amount += 1; // eslint-disable-line no-param-reassign
      sessionStorage.setItem('store', JSON.stringify(state.items));
    },
    removeProductAmount: (state, payload) => {
      const product = state.items.findIndex((item) => item.id === payload);

      state.items[product].amount -= 1; // eslint-disable-line no-param-reassign
      sessionStorage.setItem('store', JSON.stringify(state.items));
    },
    verifyStorage: (state, payload) => {
      state.items = payload; // eslint-disable-line no-param-reassign
    },
  },
  // Actions
  actions: {
    ADD_PRODUCT_IN_CART: (context, payload) => {
      context.commit('addProductInCart', payload);
    },
    REMOVE_PRODUCT_FROM_CART: (context, payload) => {
      context.commit('removeProductFromCart', payload);
    },
    ADD_PRODUCT_AMOUNT: (context, payload) => {
      context.commit('addProductAmount', payload);
    },
    REMOVE_PRODUCT_AMOUNT: (context, payload) => {
      context.commit('removeProductAmount', payload);
    },
    VERIFY_STORAGE: (context, payload) => {
      context.commit('verifyStorage', payload);
    },
  },
};

export default store;
