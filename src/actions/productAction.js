import {
  CREATE_PRODUCT,
  GET_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
  SELECT_PRODUCT,
  CLEAR_PRODUCT,
  DELETE_SELECTED_PRODUCT,
} from "../constant/types";

// actions
export const addProduct = (product) => ({
  type: CREATE_PRODUCT,
  payload: product,
});

// get a product
export const getProduct = (id) => ({
  type: GET_PRODUCT,
  payload: id,
});

// update a product
export const updateProduct = (product) => ({
  type: UPDATE_PRODUCT,
  payload: product,
});

// delete a product
export const deleteProduct = (id) => ({
  type: DELETE_PRODUCT,
  payload: id,
});

// select all product
export const selectAllProduct = (id) => ({
  type: SELECT_PRODUCT,
  payload: id,
});

// clear selected products
export const clearAllProduct = () => ({
  type: CLEAR_PRODUCT,
});

// delete selected products
export const deleteAllProduct = () => ({
  type: DELETE_SELECTED_PRODUCT,
});
