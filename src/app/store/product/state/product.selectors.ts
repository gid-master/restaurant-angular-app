import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IProductState, PRODUCT_FEATURE_KEY } from "./product.state";
import { IProduct, IProductAdditional } from "../interfaces/product.interface";

const getProductState = createFeatureSelector<IProductState>(PRODUCT_FEATURE_KEY);

export const getInitialized = createSelector<object, IProductState, boolean>(getProductState, (state) => state.initialized);

export const getSearchTerm = createSelector<object, IProductState, string>(getProductState, (state) => state.searchTerm);
export const getFilterId = createSelector<object, IProductState, string>(getProductState, (state) => state.filterId);
export const getSortId = createSelector<object, IProductState, string>(getProductState, (state) => state.sortId);

export const getPreferredProduct = createSelector<object, IProductState, IProduct>(getProductState, (state) => state.preferredProduct);
export const getPreferredProductTotal = createSelector<object, IProductState, number>(getProductState, (state) => {
  const additionals: number = state.preferredProduct.additionals.reduce(
    (total: number, additional: IProductAdditional) => total + additional.quantity * additional.price,
    0
  );
  return (additionals + state.preferredProduct.price) * state.preferredProduct.quantity;
});

export const getPromotions = createSelector<object, IProductState, IProduct[]>(getProductState, (state) => state.products.filter((data) => data.previousPrice > 0));
export const getSuggestions = createSelector<object, IProductState, IProduct[]>(getProductState, (state) => state.products.filter((data) => data.suggested));
export const getOffers = createSelector<object, IProductState, IProduct[]>(getProductState, (state) => state.products.filter((data) => data.special));
export const getFromCategories = createSelector<object, IProductState, IProduct[]>(getProductState, (state) =>
  state.products.filter((data) => data.category === state.preferredProduct.category && data.id !== state.preferredProduct.id)
);

export const getProducts = createSelector<object, IProductState, IProduct[]>(getProductState, (state) => {
  return state.products
    .filter((data: IProduct) => {
      return (
        // filter
        (!state.filterId || data.category === state.filterId) &&
        // search
        (!state.searchTerm || data.name.toString().toLowerCase().indexOf(state.searchTerm.toString().toLowerCase()) > -1)
      );
    })
    .sort((a: IProduct, b: IProduct): number => {
      switch (state.sortId) {
        case "alpha":
          return a.name > b.name ? 1 : -1;
        case "price":
          return a.price - b.price;
        case "calories":
          return a.calories - b.calories;
        case "category":
          return a.category > b.category ? 1 : -1;
        case "review":
          return b.reviews.totalRating / b.reviews.totalReviews - a.reviews.totalRating / a.reviews.totalReviews;
        default:
          return 1;
      }
    });
});
