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
      const productIncreased = action.payload;
      const productNewQuantity = state.allProducts.filter(
        (product) => product.quantity === productIncreased.quantity
      );
      return {
        state,
        allProducts: [...state.allProducts, productNewQuantity],
      };
    }

    case "decreaseQuantity": {
      const productDecreased = action.payload;
      const productNewQuantity = state.allProducts.filter(
        (product) => product.quantity === productDecreased.quantity
      );

      return {
        state,
        allProducts: [...state.allProducts, productNewQuantity],
      };
    }

    default: {
      return state;
    }
  }
}
