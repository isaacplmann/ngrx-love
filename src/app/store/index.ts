import { environment } from '../../environments/environment';
import * as fromDuckling from '../ducklings/reducer';
import * as fromMissus from '../missus/reducer';
import * as fromMister from '../mister/reducer';
import { getPresent, undoable, UndoableState } from './undoable';
import { compose } from '@ngrx/core/compose';
import * as fromRouter from '@ngrx/router-store';
import { combineReducers } from '@ngrx/store';
import { ActionReducer } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { createSelector } from 'reselect';

/**
 * The compose function is one of our most handy tools. In basic terms, you give
 * it any number of functions and it returns a function. This new function
 * takes a value and chains it through every composed function, returning
 * the output.
 *
 * More: https://drboolean.gitbooks.io/mostly-adequate-guide/content/ch5.html
 */

/**
 * storeFreeze prevents state from being mutated. When mutation occurs, an
 * exception will be thrown. This is useful during development mode to
 * ensure that none of the reducers accidentally mutates the state.
 */

/**
 * combineReducers is another useful metareducer that takes a map of reducer
 * functions and creates a new reducer that stores the gathers the values
 * of each reducer and stores them using the reducer's key. Think of it
 * almost like a database, where every reducer is a table in the db.
 *
 * More: https://egghead.io/lessons/javascript-redux-implementing-combinereducers-from-scratch
 */


/**
 * Every reducer module's default export is the reducer function itself. In
 * addition, each module should export a type or interface that describes
 * the state of the reducer plus any selector functions. The `* as`
 * notation packages up all of the exports into a single object.
 */


/**
 * As mentioned, we treat each reducer like a table in a database. This means
 * our top level state interface is just a map of keys to inner state types.
 */
export interface State {
  duckling: fromDuckling.DucklingsState;
  missus: fromMissus.State;
  mister: fromMister.State;
}


/**
 * Because metareducers take a reducer function and return a new reducer,
 * we can use our compose helper to chain them together. Here we are
 * using combineReducers to make our top level reducer, and then
 * wrapping that in storeLogger. Remember that compose applies
 * the result from right to left.
 */
const reducers = {
  duckling: fromDuckling.reducer,
  missus: fromMissus.reducer,
  mister: fromMister.reducer,
  router: fromRouter.routerReducer,
};

const developmentReducer: ActionReducer<UndoableState<State>> = compose(undoable, storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<UndoableState<State>> = compose(undoable, combineReducers)(reducers);

export function reducer(state: any, action: any) {
  if (environment.production) {
    return productionReducer(state, action);
  }
  else {
    return developmentReducer(state, action);
  }
}


/**
 * A selector function is a map function factory. We pass it parameters and it
 * returns a function that maps from the larger state tree into a smaller
 * piece of state. This selector simply selects the `books` state.
 *
 * Selectors are used with the `select` operator.
 *
 * ```ts
 * class MyComponent {
 * 	constructor(state$: Observable<State>) {
 * 	  this.booksState$ = state$.select(getMisterState);
 * 	}
 * }
 * ```
 */
export const getDucklingState = createSelector(getPresent, (state: State) => state.duckling);
export const getMissusState = createSelector(getPresent, (state: State) => state.missus);
export const getMisterState = createSelector(getPresent, (state: State) => state.mister);

/**
 * Every reducer module exports selector functions, however child reducers
 * have no knowledge of the overall state tree. To make them useable, we
 * need to make new selectors that wrap them.
 *
 * The createSelector function from the reselect library creates
 * very efficient selectors that are memoized and only recompute when arguments change.
 * The created selectors can also be composed together to select different
 * pieces of state.
 */
export const getMissusLocation = createSelector(getMissusState, fromMissus.getLocation);
export const getMissusSays = createSelector(getMissusState, fromMissus.getSays);
export const getMisterLocation = createSelector(getMisterState, fromMister.getLocation);
export const getMisterSays = createSelector(getMisterState, fromMister.getSays);

