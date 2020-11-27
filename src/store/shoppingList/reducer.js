const initialState = {
  shoppingList: [],
};

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case "newProductSucces": {
      return {
        state,
        shoppingList: [...state.shoppingList, action.payload],
      };
    }
    default: {
      return state;
    }
  }
}
