/*
 *
 * Home reducers
 *
 */
import { Reducer } from 'redux';
import { ActionsHome, HomeStore } from './types';
import * as types from './constants';
import rootReducer from 'redux/root-reducers';

const initState: HomeStore = {
  languages: [],
  topics: [],
};

const reducersHome: Reducer<HomeStore, ActionsHome> = (
  state = initState,
  actions: ActionsHome,
) => {
  switch (actions.type) {
    case types.LANGUAGE: {
      return {
        ...state,
        languages: actions.payload,
      };
    }
    case types.TOPIC: {
      return {
        ...state,
        topics: actions.payload,
      };
    }
    default:
      return { ...state };
  }
};

export default reducersHome;

export const selectHomeStore = (state: ReturnType<typeof rootReducer>) =>
  state.Home;
