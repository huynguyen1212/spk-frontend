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
  me: {
    bio: any;
    bob: any;
    createdAt: any;
    deletedAt: any;
    email: any;
    gender: any;
    id: any;
    image: any;
    languages: any;
    name: any;
    phone: any;
    status: any;
    topics: any;
    type: any;
    updatedAt: any;
    walletAddress: any;
  };
};

export type ActionsApp = ActionType<typeof actions>;

export type AppLanguage = 'vi' | 'en';
