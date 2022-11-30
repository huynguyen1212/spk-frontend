/*
 *
 * Meeting
 * make by huynq
 */

import Frame from 'components/Call/Frame';
import ErrorBound from 'components/ErrorBound';
import { memo } from 'react';
import useInjectReducer from 'redux/useInjectReducer';
import reducersMeeting from './store/reducers';
import WrapMeeting from './style';

interface Props {}

// eslint-disable-next-line
function Meeting({}: Props) {
  useInjectReducer('Meeting', reducersMeeting);
  return (
    <ErrorBound>
      <WrapMeeting>
        <Frame />
      </WrapMeeting>
    </ErrorBound>
  );
}
export default memo(Meeting);
