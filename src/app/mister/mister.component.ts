import * as fromRoot from '../store';
import { quackAction } from './actions';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'mister',
  styles: [':host { display: inline-block; }'],
  templateUrl: 'mister.component.html'
})
export class MisterComponent implements OnInit {
  says$: Observable<string>;

  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit() {
    this.says$ = this.store.select(fromRoot.getMisterSays);
  }

  onClick() {
    console.log('click');
    this.store.dispatch(quackAction());
  }
}
