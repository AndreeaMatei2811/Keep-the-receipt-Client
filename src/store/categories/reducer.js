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

    default: {
      return state;
    }
  }
}
