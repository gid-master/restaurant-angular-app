import { IProduct } from "../interfaces/product.interface";

export const PRODUCT_FEATURE_KEY = "product";

export interface IProductState {
  initialized: boolean;
  searchTerm: string;
  sortId: string;
  filterId: string;
  products: IProduct[];
  preferredProduct: IProduct;
}

export const initialState: IProductState = {
  initialized: false,
  searchTerm: null,
  sortId: "relevant",
  filterId: null,
  products: [],
  preferredProduct: null,
};
