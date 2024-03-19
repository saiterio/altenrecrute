import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { lastValueFrom } from 'rxjs';
import { Product } from 'app/product';
import { Response } from 'app/response';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  productUrl: string = 'assets/products.json';

  constructor(private http: HttpClient) { }


  getProducts() {
    const products = this.http.get<any>(this.productUrl).pipe(
      map(response => response['data']),
    );
    return products;
  }
}
