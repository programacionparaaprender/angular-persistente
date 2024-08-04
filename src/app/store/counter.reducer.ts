import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './counter.actions';


/* export interface CounterState {
    counterValue: number;
  } */

export const initialCounterState = 0;

export const counterReducer = createReducer(
  initialCounterState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0)
);