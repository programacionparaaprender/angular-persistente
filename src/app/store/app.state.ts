import { CounterState, initialCounterState } from "../store/counter.reducer";

// src/app/state/app.state.ts
export interface AppCountState {
    // Define los estados aquí
    counterState: CounterState;
  }
  
  export const initialState: AppCountState = {
    counterState: initialCounterState,
  };
  