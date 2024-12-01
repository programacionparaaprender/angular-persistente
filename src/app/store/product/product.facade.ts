import { Injectable } from "@angular/core";
import { addProducts, loadProducts } from "./product.actions";
import { Store } from "@ngrx/store";
import { selectAllProducts, selectLoading } from "./product.selector";
import { ProductDto } from "../../infraestructure/dtos/products/product.dto";

@Injectable({
    providedIn: 'root',
  })
  export class ProductFacade {
    products$ = this.store.select(selectAllProducts);
    loading$ = this.store.select(selectLoading);
  
    constructor(private store: Store) {}
  
    loadProducts() {
      this.store.dispatch(loadProducts());
    }

    addProduct(product: ProductDto) {
      this.store.dispatch(addProducts({ product }));
    }
    
  }
  