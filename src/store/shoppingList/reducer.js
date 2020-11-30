const initialState = {
  shoppingList: [],
};

export default function shoppingListReducer(state = initialState, action) {
  switch (action.type) {
    case "/shoppingListFetched": {
      return {
        shoppingList: [...action.payload],
      };
    }
    case "/addToShoppingListSucces": {
      return {
        shoppingList: [action.payload],
      };
    }

    case "checkProductSuccess":
      const productId = action.payload;
      const newProduct = state.shoppingList.filter(
        (product) => product.id !== productId
      );

      return {
        state,
        allProducts: newProduct,
      };

    default: {
      return state;
    }
  }
}
