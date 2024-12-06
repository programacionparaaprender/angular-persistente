import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { selectCounterValue } from "./counter.selectors";
import { firstValueFrom } from "rxjs";
import { decrement, increment, reset } from "./counter.actions";

@Injectable({
    providedIn: 'root',
  })
  export class CounterFacade {
    counter$ = this.store.select(selectCounterValue);
  
    constructor(private store: Store) {}

    async increment() {
        this.store.dispatch(increment());
        const counterValue = await firstValueFrom(this.store.select(selectCounterValue));
        return counterValue;
    }
    
    async decrement() {
        this.store.dispatch(decrement());
        const counterValue = await firstValueFrom(this.store.select(selectCounterValue));
        return counterValue;  
    }
    
    async reset() {
        this.store.dispatch(reset());
        const counterValue = await firstValueFrom(this.store.select(selectCounterValue));
        return counterValue;
    }
  }
  