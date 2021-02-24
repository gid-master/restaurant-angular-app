import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { ICart } from "src/app/store/cart/interfaces/cart.interface";

export const filterAdditionals = () => (source: Observable<ICart[]>) =>
  source.pipe(
    map((cart: ICart[]) => {
      return cart.map((item: ICart) => {
        return {
          ...item,
          product: {
            ...item.product,
            additionals: item.product.additionals.filter((additional) => additional.quantity > 0),
          },
        };
      });
    })
  );
