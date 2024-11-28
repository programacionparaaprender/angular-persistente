import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductRepository } from '../../../infraestructure/repositories/products/product.repository';

@Injectable({
  providedIn: 'root',
})
export class ListProductUseCase {
  private productRepository = inject(ProductRepository);
  execute(): Observable<any[]>{
    return this.productRepository.getProducts();
  }
}