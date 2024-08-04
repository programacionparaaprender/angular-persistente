import { ExampleState, initialExampleState } from "./example.reducer";

// src/app/state/app.state.ts
export interface AppState {
    // Define los estados aquí
    exampleState: ExampleState;
  }
  
  export const initialState: AppState = {
    exampleState: initialExampleState,
  };
  