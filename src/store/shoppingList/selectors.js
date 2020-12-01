// export function selectShoppingList(state) {
//   // console.log("do i get to selector", state);
//   return state.shoppingList.shoppingList;
// }

export const selectShoppingList = (state) => {
  return state.shoppingList.shoppingList;
};

// export function selectShoppingListFilteredByStore(storeId) {
//   return function (state) {
//     // console.log("do i get to selector", state);
//     return state.shoppingList.shoppingList;
//   }
// }

export const selectShoppingListFilteredByStore = (storeId) => (state) => {
  if (!storeId) {
    return state.shoppingList.shoppingList;
  }

  return state.shoppingList.shoppingList.filter(
    (store) => store.store === storeId
  );
};

export function allStores(state) {
  return state.shoppingList.shoppingList
    .map((product) => {
      return product.store;
    })
    .filter((x, i, a) => a.indexOf(x) === i);
}
