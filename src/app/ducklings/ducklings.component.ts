import { DucklingsState } from './reducer';
import * as fromRoot from '../store';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'ducklings',
  styles: [':host { display: inline-block; }'],
  templateUrl: 'ducklings.component.html'
})
export class DucklingsComponent implements OnInit {
  ducklings$: Observable<DucklingsState>;

  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit() {
    this.ducklings$ = this.store.select(fromRoot.getDucklingState);
  }
}
