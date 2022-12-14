/*
 *
 * Booking selecters
 * make by huynq
 */
import rootReducer from 'redux/root-reducers';

export const selectBookingStore = (state: ReturnType<typeof rootReducer>) =>
  state.Booking;
