import { createAction, props } from '@ngrx/store';


export const addCountersNew = createAction('[Counters] add Counters New');
export const addCountersNewSuccess = createAction(
  '[Counters] add Counters New Success',
  props<{ counters: number }>()
);
export const addCountersNewFailure = createAction(
  '[Counters] add Counters New Failure',
  props<{ error: any }>()
);


export const decrementCountersNew = createAction('[Counters] decrement Counters New');
export const decrementCountersNewSuccess = createAction(
  '[Counters] decrement Counters New Success',
  props<{ counters: number }>()
);
export const decrementCountersNewFailure = createAction(
  '[Counters] decrement Counters New Failure',
  props<{ error: any }>()
);


export const loadCountersNew = createAction('[Products] Load Counters New');
export const loadCountersNewSuccess = createAction(
  '[Products] Load Counters New Success',
  props<{ counters: number }>()
);
export const loadCountersNewFailure = createAction(
  '[Products] Load Counters New Failure',
  props<{ error: any }>()
);
