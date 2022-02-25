import {
  CREATE_PRODUCT,
  GET_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
  SELECT_PRODUCT,
  CLEAR_PRODUCT,
  DELETE_SELECTED_PRODUCT,
} from "../constant/types";

const intialState = {
  products: [
    {
      id: 1,
      name: "Samsung",
      category: "Mobile",
      description: "Hiii I am Samsung",
      expiryDate: "2022-02-22",
      costPrice: 500,
      sellPrice: 1000,
      discount: 10,
      gst: 5,
    },
    {
      id: 2,
      name: "Nokia",
      category: "Mobile",
      description: "Hiii I am Nokia",
      expiryDate: "2022-02-22",
      costPrice: 750,
      sellPrice: 1500,
      discount: 10,
      gst: 5,
    },
    {
      id: 3,
      name: "Realme",
      category: "Mobile",
      description: "Hiii I am Realme",
      expiryDate: "2022-02-22",
      costPrice: 1000,
      sellPrice: 2000,
      discount: 10,
      gst: 5,
    },
    {
      id: 4,
      name: "Oppo",
      category: "Mobile",
      description: "Hiii I am Oppo",
      expiryDate: "2022-02-22",
      costPrice: 1500,
      sellPrice: 3000,
      discount: 10,
      gst: 5,
    },
    {
      id: 5,
      name: "Vivo",
      category: "Mobile",
      description: "Hiii I am Vivo",
      expiryDate: "2022-02-22",
      costPrice: 2000,
      sellPrice: 4000,
      discount: 10,
      gst: 5,
    },
  ],
  product: null,
  selectedProducts: [],
};

export const productReducer = (state = intialState, action) => {
  switch (action.type) {
    case CREATE_PRODUCT:
      return {
        ...state,
        products: [action.payload, ...state.products],
      };
    case GET_PRODUCT:
      let arr = state.products.filter(
        (product) => product.id === action.payload
      );
      arr = arr.values();
      for (let val of arr) {
        arr = val;
      }
      return {
        ...state,
        product: arr,
      };
    case UPDATE_PRODUCT:
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload.id ? action.payload : product
        ),
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload
        ),
      };
    case DELETE_SELECTED_PRODUCT:
      return {
        ...state,
        products: [],
      };
    case SELECT_PRODUCT:
      return {
        ...state,
        selectedProducts: action.payload,
      };

    case CLEAR_PRODUCT:
      return {
        ...state,
        selectedProducts: [],
      };
    default:
      return state;
  }
};
