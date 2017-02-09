import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ngrx-ducklings-app',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <h1>Ngrx Ducklings</h1>
  <mister></mister>
  <missus></missus>
  <ducklings></ducklings>
  `
})
export class AppComponent {
  constructor() {
    /**
     * Selectors can be applied with the `select` operator which passes the state
     * tree to the provided selector
     */
  }
}
