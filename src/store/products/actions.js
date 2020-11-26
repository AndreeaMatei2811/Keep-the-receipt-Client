import axios from "axios";
import { apiUrl } from "../../config/constants";
import { selectUser } from "../user/selectors";
import {
  appLoading,
  appDoneLoading,
  showMessageWithTimeout,
} from "../appState/actions";

export const deleteProductSuccess = (productId) => ({
  type: "deleteProductSuccess",
  payload: productId,
});

export const deleteCategory = (productId) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    const { id, token } = selectUser(getState());
    try {
      const response = await axios.delete(
        `${apiUrl}/products/${id}/deleteProduct/${productId}`,
        {
          productId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      showMessageWithTimeout("success", false, response.message, 3000);
      dispatch(deleteProductSuccess(productId));
      dispatch(appDoneLoading());
    } catch (e) {
      console.error(e);
    }
  };
};
