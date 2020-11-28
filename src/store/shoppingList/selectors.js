export function selectShoppingList(state) {
  console.log("do i get to selector", state);
  return state.shoppingList.shoppingList;
}

export function selectProductsShoppingList(state) {
  return state.shoppingList.shoppingList[0].products;
}
