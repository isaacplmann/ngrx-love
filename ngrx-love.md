ngrx

Why?
- Single source of truth
  - One place to trigger actions (store.dispatch)
    - easy to track
  - One place to wire actions together (ngrx/effects)
  - One place to modify state (reducers)
    - easy to test
  - One place to listen to state changes (store.select)
  - Like a database for the frontend
- Easy features
  - HMR
  - [Undo/Redo](http://blog.brecht.io/Cancellable-optimistic-updates-in-Angular2-and-Redux/)
- Benefit from work of Redux/React community
  - Redux Dev Tools extension
    - Easily view state
    - Easily generate tests for reducers with real data
    - Time travel
    - Export/Import to reproduce bugs, etc.

- Is part of the data record for use in [time travel](http://ngrx.github.io/example-app/#/)
- Is preserved during hot module replacement
    - recompiled components can be swapped out without reloading the page
    - maintain all the current state (except the data that is only inside the component that was replaced)

- [What state should go in redux vs components?](https://github.com/reactjs/redux/issues/1287)

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
- whole story
  - mister quacks, all quack
  -> missus squawks, mister flies to park
  -> missus to street, ducklings to street, cars honk
  -> policeman whistles, cars stop, missus to park, ducklings to park
- walk through story with dev tools
- Undo/Redo
- use dev tools in prod

Location = 'River' | 'Street' | 'Park'

state:
mister
- location
- says

missus
- location
- says

ducklings []
- location
- says

cars []
- speed
- horn

policeman
- location
- says
