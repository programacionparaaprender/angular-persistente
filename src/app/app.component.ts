import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './state/app.state';
import { AsyncPipe } from '@angular/common';
import { selectSomeValue } from './state/example.selectors';
import { someAction } from './state/example.actions';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe],
  //templateUrl: './app.component.html',
  template: `
    <div>
      <h1>{{ someValue$ | async }}</h1>
      <button (click)="updateValue()">Update Value</button>
    </div>
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-persistente';

  someValue$: Observable<string>;

  constructor(private store: Store<AppState>) {
    this.someValue$ = this.store.select(selectSomeValue);
  }

  updateValue() {
    this.store.dispatch(someAction({ payload: 'New Value' }));
  }
}
