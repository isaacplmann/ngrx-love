import { createAction } from 'redux-actions';

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 */
export const actionTypes = {
  QUACK: '[Mister] Quack',
  FLY: '[Mister] Fly',
};

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 *
 * See Discriminated Unions: https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions
 */
export const quackAction = createAction<{}>(actionTypes.QUACK);
export const flyAction = createAction<string>(actionTypes.FLY);
