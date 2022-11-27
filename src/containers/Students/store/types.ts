/*
*
* Students types
* make by huynq
*/
import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export interface StoreStudents {}

export type ActionsStudents = ActionType<typeof actions>;