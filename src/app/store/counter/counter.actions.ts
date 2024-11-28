
// src/app/state/example.actions.ts
import { createAction, props } from '@ngrx/store';

export const counterAction = createAction(
  '[Example] Counter Action',
  props<{ payload: number }>(),
);


export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');