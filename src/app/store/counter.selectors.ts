// src/app/state/example.selectors.ts
import { createSelector, createFeatureSelector } from '@ngrx/store';
//import { CounterState } from './counter.reducer';

export const selectExampleState = createFeatureSelector<number>('counterState');

export const selectSomeValue = createSelector(
  selectExampleState,
  (state: number) => state,
);
