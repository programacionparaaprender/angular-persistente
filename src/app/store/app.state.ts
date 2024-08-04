import { initialCounterState } from "./counter.reducer"; 

// src/app/state/app.state.ts
export interface AppState {
    // Define los estados aquí
    counterState: number;
  }
  
  export const initialState: AppState = {
    counterState: initialCounterState,
  };
  