import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {ProductListComponent} from './products/product-list.component';
import {ProductService} from './products/product.service';

@NgModule ({
    imports: [BrowserModule,HttpClientModule],
    declarations: [AppComponent,ProductListComponent],
    providers: [ProductService],
    bootstrap : [AppComponent]
})

export class AppModule { }