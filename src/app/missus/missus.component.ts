import * as fromRoot from '../store';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'missus',
  styles: [':host { display: inline-block; }'],
  templateUrl: 'missus.component.html'
})
export class MissusComponent implements OnInit {
  says$: Observable<string>;

  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit() {
    this.says$ = this.store.select(fromRoot.getMissusSays);
  }
}
