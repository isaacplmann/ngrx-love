import { actionTypes } from './actions';
import { StoryLocation } from '../models/location';
import { handleActions } from 'redux-actions';

export interface State {
  location: StoryLocation;
  says: string;
};

const initialState: State = {
  location: StoryLocation.River,
  says: '',
};

export const reducer = handleActions<State>(
  {
    [actionTypes.QUACK]: state => {
      return Object.assign({}, state, { says: 'Quack!' });
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

export const getLocation = (state: State) => state.location;
export const getSays = (state: State) => state.says;
