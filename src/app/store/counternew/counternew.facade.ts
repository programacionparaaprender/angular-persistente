import { Injectable } from "@angular/core";
import { addCountersNew, decrementCountersNew, loadCountersNew} from "./counternew.actions";
import { Store } from "@ngrx/store";
import { selectAllCountersNew, selectLoading } from "./counternew.selector";

@Injectable({
    providedIn: 'root',
  })
  export class CounterNewFacade {
    countersNew$ = this.store.select(selectAllCountersNew);
    loading$ = this.store.select(selectLoading);
    constructor(private store: Store) {}
  
    decrementCountersNew() {
      this.store.dispatch(decrementCountersNew());
    }

    addCountersNew() {
      this.store.dispatch(addCountersNew());
    }

    loadCountersNew() {
      this.store.dispatch(loadCountersNew());
    }
    
  }
  