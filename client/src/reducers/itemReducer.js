import {
  GET_ITEMS,
  ITEMS_LOADING,
  ADD_ITEM,
  DELETE_ITEM
} from "../actions/type";

const initialState = {
  items: [],
  loading: false
};

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
        items: action.payload,
        loading: false
      };
    case ITEMS_LOADING:
      return {
        ...state,
        loading: true
      };
    case ADD_ITEM:
      return {
        ...state,
        items: [action.payload, ...state.items]
      };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item._id !== action.payload)
      };
    default:
      return state;
  }
};

export default itemReducer;
