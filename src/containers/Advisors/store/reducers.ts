/*
*
* Advisors reducers
* make by huynq
*/
import { Reducer } from 'redux';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as types from './constants';
import { ActionsAdvisors, StoreAdvisors } from "./types";

const initState : StoreAdvisors = { };

const reducersAdvisors : Reducer<StoreAdvisors, ActionsAdvisors> = (state = initState, actions: ActionsAdvisors) => {
switch (actions.type) {
default:
return { ...state };
}
};

export default reducersAdvisors;