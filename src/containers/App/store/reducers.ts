/*
 *
 * App reducers
 *
 */
import { Reducer } from 'redux';
import * as types from './constants';
import { ActionsApp, AppStore } from './types';

const initState: AppStore = {
  lang: 'vi',
  loading: false,
  wallet: undefined,
  contracts: {
    app: undefined,
    token: undefined,
    staking: undefined,
  },
  me: {
    bio: undefined,
    bob: undefined,
    createdAt: undefined,
    deletedAt: undefined,
    email: undefined,
    gender: undefined,
    id: undefined,
    image: undefined,
    languages: undefined,
    name: undefined,
    phone: undefined,
    status: undefined,
    topics: undefined,
    type: undefined,
    updatedAt: undefined,
    walletAddress: undefined,
  },
};

const reducersApp: Reducer<AppStore, ActionsApp> = (
  state = initState,
  actions: ActionsApp,
) => {
  switch (actions.type) {
    case types.LOADING: {
      return { ...state, loading: actions.payload };
    }

    case types.LANGUAGE: {
      return { ...state, lang: actions.payload };
    }
    case types.WALLET: {
      return { ...state, wallet: actions.payload };
    }

    case types.ME: {
      return { ...state, me: actions.payload };
    }

    default:
      return { ...state };
  }
};

export default reducersApp;
