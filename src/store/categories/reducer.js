const initialState = {
  allCategories: [],
};

export default function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    case "/categoriesFetched": {
      return {
        loading: false,
        allCategories: [...action.payload],
      };
    }
    case "newCategorySucces": {
      return {
        ...state,
        allCategories: [...state.allCategories, action.payload],
      };
    }
    default: {
      return state;
    }
  }
}
