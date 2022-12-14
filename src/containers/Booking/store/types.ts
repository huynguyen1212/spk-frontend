/*
 *
 * Booking types
 * make by huynq
 */
import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export interface StoreBooking {
  advisors: any[];
  bookingList: any[];
}

export type ActionsBooking = ActionType<typeof actions>;
