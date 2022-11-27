/*
*
* Advisors selecters
* make by huynq
*/
import rootReducer from "redux/root-reducers";

export const selectAdvisorsStore = ((state: ReturnType<typeof rootReducer>) => state.Advisors)