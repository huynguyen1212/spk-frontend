/*
*
* Students selecters
* make by huynq
*/
import rootReducer from "redux/root-reducers";

export const selectStudentsStore = ((state: ReturnType<typeof rootReducer>) => state.Students)