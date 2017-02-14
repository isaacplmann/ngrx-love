# Ngrx Love

## What?

- "RxJS powered state management for Angular applications, inspired by Redux"
  - Focus on Redux part today
  - RxJS will have to be a separate talk

## Terms

- **State** - A single immutable data structure
- **Actions** - Objects that describe state changes
- **Reducers** - Pure functions that take the previous state and the next action to compute the new state
- **Store** - An observable of state and an observer of actions
  - Can `dispatch` actions
  - Can `select` state

## Why?
- Single source of truth
  - One place to trigger actions (store.dispatch)
    - easy to track
  - One place to wire actions together (ngrx/effects)
  - One place to modify state (reducers)
    - easy to test
  - One place to listen to state changes (store.select)
  - Like a database for the frontend

## How?

Story:
- Mr. Mallard flying alone (dispatch - reduce - select cycle, Dev Tools)
  - mister.component calls store.dispatch(mister, quack);
  - mister.reducer quacks
  - mister.component renders quack
- Mr. and Mrs. Mallard flying together (multiple reducers for one action)
  - mister.component calls store.dispatch(mister, quack);
  - mister.reducer quacks
  - missus.reducer quacks
- Add the children (effects)
  - mister.component calls store.dispatch(mister, quack);
  - mister.reducer quacks
  - missus.reducer quacks
  - child.reducer quacks
  - effect triggered 3 second delay store.dispatch(missus, squawk)
  - missus.reducer squawks
- Undo/Redo
  - Undoable
  - 
- Use dev tools in prod
  - No performance hit if dev tools not present
  - Undo to create error
  - Enable dev tools
  - Export state
  - Import state into dev environment

## Why? (part 2)

- Easy(er) features
  - HMR
  - [Undo/Redo](http://blog.brecht.io/Cancellable-optimistic-updates-in-Angular2-and-Redux/)
- Redux Dev Tools extension
  - Benefit from work of Redux/React community
  - Easily view state
  - Easily generate tests for reducers with real data
  - Time travel
  - Export/Import to reproduce bugs, etc.
- [What state should go in redux vs components?](https://github.com/reactjs/redux/issues/1287)
  - Data should go in redux if it...
    - Is part of the data record for use in [time travel](http://ngrx.github.io/example-app/#/)
    - Is preserved during hot module replacement
        - recompiled components can be swapped out without reloading the page
        - maintain all the current state (except the data that is only inside the component that was replaced)
