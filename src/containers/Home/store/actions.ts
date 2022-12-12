/*
 *
 * Home actions
 */

import * as types from './constants';
import { action } from 'typesafe-actions';

export const getLanguages = (val: any) => action(types.LANGUAGE, val);

export const getTopics = (val: any) =>action(types.TOPIC, val);
