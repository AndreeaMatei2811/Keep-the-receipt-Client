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

    case "increaseQuantity": {
      console.log("action payload", action.payload);
      return {
        state,
        allProducts: [...state.allProducts, action.payload.quantity],
      };
    }

    case "decreaseQuantity": {
      console.log("action payload", action.payload);
      return {
        state,
        allProducts: [...state.allProducts, action.payload],
      };
    }

    default: {
      return state;
    }
  }
}
