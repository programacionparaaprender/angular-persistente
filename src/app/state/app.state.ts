import { CounterState, initialCounterState } from "../store/counter.reducer";
import { ExampleState, initialExampleState } from "./example.reducer";

// src/app/state/app.state.ts
export interface AppState {
    // Define los estados aquí
    exampleState: ExampleState;
    counterState: CounterState;
}

export const initialState: AppState = {
  exampleState: initialExampleState,
  counterState: initialCounterState,
};