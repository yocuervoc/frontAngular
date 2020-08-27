import { Component, Input, Output, EventEmitter, NgModule } from '@angular/core';
import { Product} from '../product.model';
import { CartService} from '../cart.service';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent{
    @Input() product: Product;
    @Output() productClicked: EventEmitter<any> = new EventEmitter();

    today = new Date();

    constructor(
        private cartService: CartService
    ){
        console.log("constructor")
    }
    
    addCart(){
        console.log('producto añadido');
        this.cartService.addCart(this.product);
        
    }
}