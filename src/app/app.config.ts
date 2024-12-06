import {
  ApplicationConfig,
  provideZoneChangeDetection,
  isDevMode,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { ActionReducer, MetaReducer, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { localStorageSync } from 'ngrx-store-localstorage';
import { exampleReducer } from './store/example/example.reducer';
import { counterReducer } from './store/counter/counter.reducer';
import { environment } from '../enviroments/enviroment';
import { productReducer } from './store/product/product.reducer';
import { ProductEffects } from './store/product/product.effects';
import { CounterEffects } from './store/counter/counter.effects';

export function localStorageSyncReducer(
  reducer: ActionReducer<any>
): ActionReducer<any> {
  return localStorageSync({
    keys: ['exampleState', 'counterState', 'productState'],
    rehydrate: true,
  })(reducer);
}

const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

export const appConfig: ApplicationConfig = {
  providers: [
    provideStore(
      {
        exampleState: exampleReducer,
        counterState: counterReducer,
        productState: productReducer,
      },
      { metaReducers }
    ),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: environment.production,
    }),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideEffects([ProductEffects,
      
    ]),
  ],
};
