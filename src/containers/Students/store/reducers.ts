/*
*
* Students reducers
* make by huynq
*/
import { Reducer } from 'redux';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as types from './constants';
import { ActionsStudents, StoreStudents } from "./types";

const initState : StoreStudents = { };

const reducersStudents : Reducer<StoreStudents, ActionsStudents> = (state = initState, actions: ActionsStudents) => {
switch (actions.type) {
default:
return { ...state };
}
};

export default reducersStudents;