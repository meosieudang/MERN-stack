import { GET_ITEMS, ITEMS_LOADING, ADD_ITEM, DELETE_ITEM } from "./type";
import axios from "axios";

//Get All Item
export const getItemsRequest = () => dispatch => {
  dispatch(setItemsLoading());
  axios
    .get("/api/items")
    .then(res => dispatch(getItems(res.data)))
    .catch();
};

export const getItems = data => {
  return {
    type: GET_ITEMS,
    payload: data
  };
};

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING
  };
};

// Add Item
export const addItemRequest = item => dispatch => {
  axios
    .post("/api/items", item)
    .then(res => dispatch(addItem(res.data)))
    .catch();
};

export const addItem = item => {
  return {
    type: ADD_ITEM,
    payload: item
  };
};

// Delete Item
export const deleteItemRequest = id => dispatch => {
  axios
    .delete(`/api/items/${id}`)
    .then(res => dispatch(deleteItem(id)))
    .catch();
};

export const deleteItem = id => {
  return {
    type: DELETE_ITEM,
    payload: id
  };
};
