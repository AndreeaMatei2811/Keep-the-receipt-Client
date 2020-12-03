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
      if (action.payload === undefined) {
        return {
          shoppingList: [state.shoppingList],
        };
      } else {
        return {
          shoppingList: [...state.shoppingList, action.payload],
        };
      }
    }

    case "checkProductSuccess":
      const productId = action.payload;
      const newProduct = state.shoppingList.filter(
        (product) => product.shopping_item.productId !== productId
      );
      return {
        state,
        shoppingList: newProduct,
      };

    default: {
      return state;
    }
  }
}
