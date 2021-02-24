import { IProductState, initialState } from "./product.state";
import { ProductAction, ProductActionTypes } from "./product.actions";
import { IProductAdditional } from "../interfaces/product.interface";

export function productReducer(state: IProductState = initialState, action: ProductAction): IProductState {
  switch (action.type) {
    case ProductActionTypes.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        initialized: true,
      };

    case ProductActionTypes.SET_TERM_SEARCH:
      return {
        ...state,
        searchTerm: action.payload,
      };

    case ProductActionTypes.SET_SORT:
      return {
        ...state,
        sortId: action.payload,
      };

    case ProductActionTypes.SET_FILTER:
      return {
        ...state,
        filterId: action.payload,
      };

    case ProductActionTypes.SET_PREFERRED_PRODUCT_SUCCESS:
      return {
        ...state,
        preferredProduct: action.payload,
      };

    case ProductActionTypes.SET_PRODUCT_ADDITIONAL_INCREMENT:
      return {
        ...state,
        preferredProduct: {
          ...state.preferredProduct,
          additionals: [
            ...state.preferredProduct.additionals.map((data) => {
              return {
                ...data,
                quantity: data.id === action.payload.id ? data.quantity + action.payload.increment : data.quantity,
              };
            }),
          ],
        },
      };

    case ProductActionTypes.SET_PRODUCT_COMMENTS:
      return {
        ...state,
        preferredProduct: {
          ...state.preferredProduct,
          comments: action.payload,
        },
      };

    case ProductActionTypes.SET_PRODUCT_QUANTITY:
      return {
        ...state,
        preferredProduct: {
          ...state.preferredProduct,
          quantity: state.preferredProduct.quantity + action.payload,
        },
      };

    default:
      return state;
  }
}
