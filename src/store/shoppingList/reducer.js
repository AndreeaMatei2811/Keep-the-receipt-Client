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
        shoppingList: [...state.shoppingList, action.payload],
      };
    }

    case "checkProductSuccess":
      const productId = action.payload;
      console.log("productIs reducer check", productId);
      const newProduct = state.shoppingList.filter(
        (product) => product.shopping_item.productId !== productId
      );
      console.log("new product", newProduct);
      console.log("state check", state);
      return {
        state,
        shoppingList: newProduct,
      };

    default: {
      return state;
    }
  }
}
