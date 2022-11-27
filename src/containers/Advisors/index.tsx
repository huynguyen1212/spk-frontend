/*
*
* Advisors
* make by huynq
*/

import React, { memo } from 'react';
import ErrorBound from 'components/ErrorBound';
import useInjectReducer from 'redux/useInjectReducer';
import reducersAdvisors from './store/reducers';
import WrapAdvisors from './style';

interface Props {}

// eslint-disable-next-line
function Advisors({}: Props) {
useInjectReducer('Advisors', reducersAdvisors);
return (
<ErrorBound>
  <WrapAdvisors> Advisors </WrapAdvisors>
</ErrorBound>
);
}
export default memo(Advisors);