export const cartReducer = (state, action) => {
  switch (action.type) {
    case "Add_TO_CART":
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
    case "REMOVE_CART":
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload.id),
      };
    case "INITIALIZE_CART":
      return action.payload;
    // case SET_LOADING:
    //   return {
    //     ...state,
    //     loading: true,
    //   };
    default:
      return state;
  }
};
