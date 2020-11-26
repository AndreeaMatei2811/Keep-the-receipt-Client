const initialState = {
  allCategories: [],
};

export default function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    case "/categoriesFetched": {
      return {
        allCategories: [...action.payload],
      };
    }
    case "newCategorySucces": {
      return {
        state,
        allCategories: [...state.allCategories, action.payload],
      };
    }

    case "deleteCategorySuccess":
      const categoryId = action.payload;
      const newCategory = state.allCategories.filter(
        (category) => category.id !== categoryId
      );
      return {
        state,
        allCategories: newCategory,
      };

    default: {
      return state;
    }
  }
}
