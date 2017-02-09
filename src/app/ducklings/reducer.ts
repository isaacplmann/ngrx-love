import { actionTypes } from './actions';
import { StoryLocation } from '../models/location';
import { handleActions } from 'redux-actions';

export type DucklingsState = Duckling[];

export interface Duckling {
  location: StoryLocation;
  says: string;
}

const initialState: DucklingsState = [{
  location: StoryLocation.River,
  says: '',
}, {
  location: StoryLocation.River,
  says: '',
}, {
  location: StoryLocation.River,
  says: '',
}, {
  location: StoryLocation.River,
  says: '',
}, {
  location: StoryLocation.River,
  says: '',
}, {
  location: StoryLocation.River,
  says: '',
}, {
  location: StoryLocation.River,
  says: '',
}, {
  location: StoryLocation.River,
  says: '',
}];

export const reducer = handleActions<State>(
  {
    [actionTypes.QUACK]: (state, action) => {
      return state.map((duckling, index) => {
        if (index === action.payload) {
          return Object.assign({}, duckling, { says: 'Quack!' });
        }
        return duckling;
      });
    },
  },
  initialState);

/**
 * Because the data structure is defined within the reducer it is optimal to
 * locate our selector functions at this level. If store is to be thought of
 * as a database, and reducers the tables, selectors can be considered the
 * queries into said database. Remember to keep your selectors small and
 * focused so they can be combined and composed to fit each particular
 * use-case.
 */

export const getDuckling = (state: DucklingsState, index: number) => state[index];
export const getLocation = (state: Duckling) => state.location;
export const getSays = (state: Duckling) => state.says;
