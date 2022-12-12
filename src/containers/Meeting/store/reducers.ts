/*
 *
 * Meeting reducers
 * make by huynq
 */
import { Reducer } from 'redux';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as types from './constants';
import { ActionsMeeting, StoreMeeting } from './types';

const initState: StoreMeeting = {};

const reducersMeeting: Reducer<StoreMeeting, ActionsMeeting> = (
  state = initState,
  actions: ActionsMeeting,
) => {
  switch (actions.type) {
    default:
      return { ...state };
  }
};

export default reducersMeeting;
