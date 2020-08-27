import { Injectable } from '@angular/core';
import {Product} from './product.model';
import { HttpClient } from '@angular/common/http'
import {environment} from '../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient
  ) { }

  getAllProducts() {
    return this.http.get<Product[]>(environment.url);
  }

  getProduct(id: string) {
    return this.http.get<Product>(`${environment.url}${id}`);
  }

  createProduct(product: Product){
    return this.http.post(`${environment.url}`, product)
  }

  deleteProduct(id: string){
    return this.http.delete(`${environment.url}${id}`);
  }
}

