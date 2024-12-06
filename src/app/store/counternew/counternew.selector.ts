import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { CounterNewState } from './counternew.reducer';

export const selectCountersNewState = createFeatureSelector<CounterNewState>('counterNewState');
export const selectAllCountersNew = createSelector(
  selectCountersNewState,
  (state) => {
    console.log(state); // Log the state to check its value
    return state?.counterNewValue
  }
);

export const selectLoading = createSelector(
  selectCountersNewState,
  (state) => state.loading
);



