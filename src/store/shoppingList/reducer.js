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

    default: {
      return state;
    }
  }
}
