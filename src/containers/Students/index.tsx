/*
*
* Students
* make by huynq
*/

import React, { memo } from 'react';
import ErrorBound from 'components/ErrorBound';
import useInjectReducer from 'redux/useInjectReducer';
import reducersStudents from './store/reducers';
import WrapStudents from './style';

interface Props {}

// eslint-disable-next-line
function Students({}: Props) {
useInjectReducer('Students', reducersStudents);
return (
<ErrorBound>
  <WrapStudents> Students </WrapStudents>
</ErrorBound>
);
}
export default memo(Students);