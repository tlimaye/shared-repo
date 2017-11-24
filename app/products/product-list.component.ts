import { Component, OnInit } from '@angular/core';

import { IProduct } from './product';
import {ProductService} from './product.service';


@Component({
    selector: 'pm-products',
    moduleId: module.id,
    templateUrl: './product-list.component.html'
    //sytleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
    
    pageTitle: string = 'Product List';
    showImage: boolean = false;
    
    imageWidth = 50;
    imageMargin = 2;
    imageHeight = 50;
    
    errorMessage : String;

    products: IProduct[] = [];

    constructor(private _productService : ProductService) { }

    toggleImage(){
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        this._productService.getProducts()
        .subscribe(products => {
            this.products = products;
        },
        error => this.errorMessage = <any>error);
    }
}
