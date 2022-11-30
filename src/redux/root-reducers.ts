/**
 * This file export all of type the Reducers
 * File is export only type, not the logic
 * huynq
 */

import { combineReducers } from 'redux';
import App from 'containers/App/store/reducers';
import Home from 'containers/Home/store/reducers';
import Layout from 'containers/Layout/store/reducers';
import Students from 'containers/Students/store/reducers';
import Advisors from 'containers/Advisors/store/reducers';
import Meeting from "containers/Meeting/store/reducers";
// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly



//pages
const rootReducer = combineReducers({
  App,
  Home,
  Layout,
  Students,
  Advisors,
  Meeting,
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly

  });

export default rootReducer;
