import { Component, OnInit } from '@angular/core';
import {Product} from '../product.model';

import {ProductsService} from '../products.service'
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(
    private productsService: ProductsService
  ) { }
  products: Product[] = [];

  clickProduct(id){
    console.log('product')
    console.log(id)
  }
  
  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(){
    this.productsService.getAllProducts().subscribe(products =>{
    this.products = products;
    });
  }



}
