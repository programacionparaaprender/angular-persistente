import { createReducer, on } from '@ngrx/store';
import { 
  addCountersNew,
  addCountersNewSuccess,
  addCountersNewFailure,
  loadCountersNew,
  loadCountersNewSuccess,
  loadCountersNewFailure,
  decrementCountersNewFailure,
  decrementCountersNewSuccess,
  decrementCountersNew} from './counternew.actions';

export interface CounterNewState {
    counterNewValue: number;
    loading: boolean;
}

export const initialStateCountersNew: CounterNewState = {
  counterNewValue: 0,
  loading: false,
};


export const counterNewReducer = createReducer(
  initialStateCountersNew,
  on(decrementCountersNew, (state:any) => ({
    ...state,
    loading: true,
  })),
  on(decrementCountersNewSuccess, (state, { counters }) => ({
    ...state,
    loading: false,
    counterNewValue: counters,  // ensure counters is a valid number
  })),
  on(decrementCountersNewFailure, (state:any, { error }) => ({
    ...state,
    loading: false,
  })),
  
  on(addCountersNew, (state:any) => ({
    ...state,
    loading: true,
  })),
  on(addCountersNewSuccess, (state, { counters }) => ({
    ...state,
    loading: false,
    counterNewValue: counters,  // ensure counters is a valid number
  })),
  on(addCountersNewFailure, (state:any, { error }) => ({
    ...state,
    loading: false,
  })),
  on(loadCountersNew, (state) => ({
    ...state,
    loading: true,
  })),
  on(loadCountersNewSuccess, (state, { counters }) => ({
    ...state,
    counterNewValue: counters,
    loading: false,
  })),
  on(loadCountersNewFailure, (state:any, { error }) => ({
    ...state,
    loading: false,
  }))
);
