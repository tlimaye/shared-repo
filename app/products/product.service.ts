import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { IProduct } from './product';

@Injectable()
export class ProductService {
    private _productURL = './api/products/products.json';

    constructor(private _http : HttpClient) { }
    
    getProducts() : Observable<IProduct[]> {
        return this._http.get<IProduct[]>(this._productURL)
        .do(data => console.log('All: '+JSON.stringify(data)))
        .catch(this.handleError);
    }

    private handleError(err: HttpErrorResponse){
        console.error(err.message);
        return Observable.throw(err.message);
    }
}