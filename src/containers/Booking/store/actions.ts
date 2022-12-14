/*
 *
 * Booking actions
 * make by huynq
 */
import * as types from './constants';
import { action } from 'typesafe-actions';

export const changeLogin = (val: boolean) => action(types.GET, val);

export const getUsers = (val: any) => action(types.USER_LIST, val);

export const getBookings = (val: any) => action(types.BOOKING_LIST, val);
