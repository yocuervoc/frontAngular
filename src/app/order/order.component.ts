import {Product} from '../product.model';
import {CartService} from '../cart.service'
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../products.service'

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  product$: Observable<Product[]> ; 
  constructor(
    private cartService: CartService,
    private productsService: ProductsService
  ) { 
    this.product$ = this.cartService.cart$;
  }

  ngOnInit(){
    
  }

}
