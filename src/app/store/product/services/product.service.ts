import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IResponse } from "src/app/interfaces/response.interface";
import { IProduct } from "../interfaces/product.interface";

@Injectable({ providedIn: "root" })
export class ProductService {
  constructor(private http: HttpClient) {}

  public getAllProducts(): Observable<IResponse<IProduct[]>> {
    return this.http.get<IResponse<IProduct[]>>("product");
  }
}
