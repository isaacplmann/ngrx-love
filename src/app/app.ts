import { Store } from '@ngrx/store';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import * as fromRoot from './store';

@Component({
  selector: 'ngrx-ducklings-app',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <h1>Ngrx Ducklings</h1>
  <div>
    <button (click)="undo()">Undo</button><button (click)="redo()">Redo</button>
  </div>
  <mister></mister>
  <missus></missus>
  <ducklings></ducklings>
  `
})
export class AppComponent {
  constructor(private store: Store<fromRoot.State>) {
    /**
     * Selectors can be applied with the `select` operator which passes the state
     * tree to the provided selector
     */
  }

  undo() {
    this.store.dispatch({ type: 'UNDO' });
  }

  redo() {
    this.store.dispatch({ type: 'REDO' });
  }
}
