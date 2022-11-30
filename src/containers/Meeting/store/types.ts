/*
*
* Meeting types
* make by huynq
*/
import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export interface StoreMeeting {}

export type ActionsMeeting = ActionType<typeof actions>;