import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { ActionReducer, MetaReducer, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { localStorageSync } from 'ngrx-store-localstorage';
import { exampleReducer } from './state/example.reducer';
import { counterReducer }  from './store/counter.reducer'
import { environment } from '../enviroments/enviroment';

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync(
    { 
      keys: ['exampleState', 'counterState'], rehydrate: true 
    }
  )(reducer);
}

const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

export const appConfig: ApplicationConfig = {
  providers: [
    provideStore({ 
      exampleState: exampleReducer,
      counterState: counterReducer
    }, 
    { metaReducers }
  ),
  provideStoreDevtools({
    maxAge: 25,
    logOnly: environment.production,
  }),
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideEffects([])
  ]
};
