import { createReducer, on } from '@ngrx/store';
import { loadProductsSuccess, loadProductsFailure } from './product.actions';


export interface ProductState {
    productsList: any[];
    loading: boolean;
}


export const initialStateProducts: ProductState = {
  productsList: [],
  loading: false,
};

export const productReducer = createReducer(
  initialStateProducts,
  on(loadProductsSuccess, (state, { products }) => ({
    ...state,
    productsList: products,
    loading: false,
  })),
  on(loadProductsFailure, (state, { error }) => ({
    ...state,
    loading: false,
  }))
);
