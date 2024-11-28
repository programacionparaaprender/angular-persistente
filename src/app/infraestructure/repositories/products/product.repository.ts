import { Injectable } from '@angular/core';
import { of } from 'rxjs';


@Injectable({
    providedIn: 'root',
})
export class ProductRepository {
    getProducts(){
        const observableProducts = of([
            {
                name:'Product 1',
                description: 'Description 1',
                amount: 100
            },
            {
                name:'Product 2',
                description: 'Description 2',
                amount: 100
            }
        ]);
        return observableProducts;
    }
}