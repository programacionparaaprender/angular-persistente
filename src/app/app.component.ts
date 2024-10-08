import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './state/app.state';
import { AsyncPipe, CommonModule } from '@angular/common';
import { selectSomeValue } from './state/example.selectors';
import { resetAction, someAction } from './state/example.actions';
import { selectCounterValue } from './store/counter.selectors';
import { decrement, increment, reset } from './store/counter.actions';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-persistente';

  someValue$: Observable<string>;
  counterValue$: Observable<number>;
  constructor(private store: Store<AppState>) {
    this.someValue$ = this.store.select(selectSomeValue);
    this.counterValue$ = this.store.select(selectCounterValue);
  }

  updateValue() {
    this.store.dispatch(someAction({ payload: 'New Value' }));
  }

  resetValue() {
    this.store.dispatch(resetAction());
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
