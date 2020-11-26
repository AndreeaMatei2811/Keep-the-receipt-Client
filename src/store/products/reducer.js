const initialState = {
  allProducts: [],
};

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case "/productsFetched": {
      return {
        state,
        allProducts: [...action.payload],
      };
    }
    case "newProductSucces": {
      return {
        state,
        allProducts: [...state.allProducts, action.payload],
      };
    }

    case "deleteProductSuccess":
      const categoryId = action.payload;
      const newProduct = state.allProducts.filter(
        (category) => category.id !== categoryId
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
