import { actionTypes as misterActionTypes } from './../mister/actions';
import { quackAction } from './actions';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';
import * as fromRoot from '../store';

/**
 * Effects offer a way to isolate and easily test side-effects within your
 * application. StateUpdates is an observable of the latest state and
 * dispatched action. The `toPayload` helper function returns just
 * the payload of the currently dispatched action, useful in
 * instances where the current state is not necessary.
 *
 * If you are unfamiliar with the operators being used in these examples, please
 * check out the sources below:
 *
 * Official Docs: http://reactivex.io/rxjs/manual/overview.html#categories-of-operators
 * RxJS 5 Operators By Example: https://gist.github.com/btroncone/d6cf141d6f2c00dc6b35
 */

@Injectable()
export class DucklingEffects {
  constructor(
    private actions$: Actions,
    private store: Store<fromRoot.State>,
  ) { }

  @Effect()
  search$: Observable<Action> = this.actions$
    .ofType(misterActionTypes.QUACK)
    .withLatestFrom(this.store.select(fromRoot.getDucklingState))
    .mergeMap(value => Observable.range(0, value[1].length)).windowCount(1)
    .map((duckling$, index) => duckling$.delay(index * 400))
    .mergeAll()
    .map(index => quackAction(index));
}
