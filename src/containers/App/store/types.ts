/*
 *
 * App types
 *
 */
import { Wallet } from 'near-wallet';
import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type AppStore = {
  loading: boolean;
  lang: AppLanguage;
  wallet?: Wallet;
  contracts: {
    app: any;
    staking: any;
    token: any;
  };
};

export type ActionsApp = ActionType<typeof actions>;

export type AppLanguage = 'vi' | 'en';
