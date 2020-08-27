import { Component, OnInit } from '@angular/core'
import {Params, ActivatedRoute} from '@angular/router'
import {ProductsService} from '../products.service'
import { Product } from '../product.model';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService
  ) { }
  
  ngOnInit(){
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      //this.product = this.ProductService.getProduct(id);
      //console.log(this.product);
      this.fetchProduct(id)
    });
  }

  fetchProduct(id: string){
    this.productService.getProduct(id)
    .subscribe(product => {
      this.product = product
    })
  }

  createProduct(){
    const newProduct = {
      id: 'YYYYYY',
      title: 'de donde eres?',
      image: 'https://estadosunidos.embajada.gov.co/sites/default/files/styles/news_slide/public/news/main-image/pieza-grafica.jpeg?itok=Du8PueQR',
      description: "yo soy de colombia",
      price: 12000
    }
    this.productService.createProduct(newProduct).subscribe(product =>{
      console.log(product)
      });
  }

  deleteProduct(id){
    this.productService.deleteProduct('22').subscribe(rta =>{
      console.log(rta)
      });
  }
  
}
