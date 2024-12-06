import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import {
  addCountersNew,
  addCountersNewSuccess,
  addCountersNewFailure,
  loadCountersNew,
  loadCountersNewSuccess,
  loadCountersNewFailure,
  decrementCountersNew,
  decrementCountersNewSuccess,
  decrementCountersNewFailure
} from './counternew.actions'


import { of } from 'rxjs';
import { AddCounterNewUseCase } from '../../application/usecase/counternew/add-counternew.usecase';
import { GetCounterNewUseCase } from '../../application/usecase/counternew/get-counternew.usecase';
import { DecrementCounterNewUseCase } from '../../application/usecase/counternew/decrement-counternew.usecase';

@Injectable()
export class CounterNewEffects {
  actions$: Actions = inject(Actions);
  addCounterNewUseCase = inject(AddCounterNewUseCase);
  getCounterNewUseCase = inject(GetCounterNewUseCase);
  decrementCounterNewUseCase = inject(DecrementCounterNewUseCase)
  decrementCounter$ = createEffect(() =>
    this.actions$.pipe(
      ofType(decrementCountersNew),
      mergeMap(() => this.decrementCounterNewUseCase.execute().pipe(
          map(counters => decrementCountersNewSuccess({ counters })),
          catchError(error => {
            console.log('error');
            console.log(error);
            return of(decrementCountersNewFailure({ error}));
          })        
        )),
    )
  );
  
  addCounter$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addCountersNew),
      mergeMap(() => this.addCounterNewUseCase.execute().pipe(
          map(counters => addCountersNewSuccess({ counters })),
          catchError(error => {
            console.log('error');
            console.log(error);
            return of(addCountersNewFailure({ error}));
          })        
        )),
    )
  );

  loadCountersNew$ = createEffect(() => this.actions$.pipe(
    ofType(loadCountersNew),
    mergeMap(() => this.getCounterNewUseCase.execute()
    .pipe(
        map(counters => loadCountersNewSuccess({ counters })),
        catchError(error => {
          return of(loadCountersNewFailure({ error }));
        })
      ))
  ));
}
