import * as actions from './actions';
import { ActionType } from 'typesafe-actions';

export interface HomeStore {
  languages: any[];
  topics:  any[];
}

export type ActionsHome = ActionType<typeof actions>;
