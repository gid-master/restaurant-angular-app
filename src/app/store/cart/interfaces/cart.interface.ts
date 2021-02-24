import { IProduct } from "src/app/store/product/interfaces/product.interface";

export interface ICart {
  id: string;
  product: IProduct;
}

export interface ICartSummary {
  totalProducts: number;
  quantityProducts: number;
  totalAdditionals: number;
  quantityAdditionals: number;
  total: number;
}
