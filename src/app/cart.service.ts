import { Injectable } from '@angular/core';
import {Product} from './product.model'
import {BehaviorSubject} from 'rxjs'



@Injectable({
  providedIn: 'root'
})
export class CartService {

  private product: Product[] =[];
  private cart = new BehaviorSubject<Product[]>([])

  cart$ = this.cart.asObservable();

  addCart(product: Product){
    this.product = [...this.product, product];
    this.cart.next(this.product);
  }
  constructor() { }
}
