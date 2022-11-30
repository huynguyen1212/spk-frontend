/*
*
* Meeting selecters
* make by huynq
*/
import rootReducer from "redux/root-reducers";

export const selectMeetingStore = ((state: ReturnType<typeof rootReducer>) => state.Meeting)