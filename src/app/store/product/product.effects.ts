import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { loadProducts, loadProductsSuccess, loadProductsFailure } from './product.actions';
import { ListProductUseCase } from '../../application/usecase/products/list-product.usecase';
import { of } from 'rxjs';

@Injectable()
export class ProductEffects {
  ListProductUseCase = inject(ListProductUseCase);
  actions$: Actions = inject(Actions);
  loadProducts$ = createEffect(() => this.actions$.pipe(
    ofType(loadProducts),
    mergeMap(() => this.ListProductUseCase.execute()
    .pipe(
        map(products => loadProductsSuccess({ products })),
        catchError(error => {
          return of(loadProductsFailure({ error }));
        })
      ))
  ));

}
