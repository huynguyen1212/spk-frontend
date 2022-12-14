/*
 *
 * Booking reducers
 * make by huynq
 */
import { Reducer } from 'redux';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as types from './constants';
import { ActionsBooking, StoreBooking } from './types';

const initState: StoreBooking = {
  advisors: [],
  bookingList: [],
};

const reducersBooking: Reducer<StoreBooking, ActionsBooking> = (
  state = initState,
  actions: ActionsBooking,
) => {
  switch (actions.type) {
    case types.USER_LIST: {
      return {
        ...state,
        advisors: actions.payload,
      };
    }
    case types.BOOKING_LIST: {
      return {
        ...state,
        bookingList: actions.payload,
      };
    }
    default:
      return { ...state };
  }
};

export default reducersBooking;
