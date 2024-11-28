import { Injectable } from "@angular/core";
import { loadProducts } from "./product.actions";
import { Store } from "@ngrx/store";
import { selectAllProducts, selectLoading } from "./product.selector";

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
  }
  