/*
 *
 * Booking
 * make by huynq
 */

import React, { memo, useEffect, useState } from 'react';
import ErrorBound from 'components/ErrorBound';
import useInjectReducer from 'redux/useInjectReducer';
import reducersBooking from './store/reducers';
import WrapBooking from './style';
import { Col, Row, DatePicker, InputNumber } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { selectBookingStore } from './store/selecters';
import TextColor from 'components/TextColor';
import { request, requestToken } from 'api/axios';
import API_URL from 'api/url';
import { getBookings, getUsers } from './store/actions';
import { Alert } from 'components/Alert';
import { selectAppStore } from 'containers/App/store/selecters';

interface Props {}
const { RangePicker } = DatePicker;

// eslint-disable-next-line
function Booking({}: Props) {
  useInjectReducer('Booking', reducersBooking);
  const { advisors, bookingList } = useSelector(selectBookingStore);
  const { me } = useSelector(selectAppStore);
  console.log('me: ', me?.type);

  const dispatch = useDispatch();

  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [price, setPrice] = useState(0);

  useEffect(() => {
    request({
      method: 'GET',
      url: API_URL.USER.USER_LIST,
    }).then((res: any) => {
      dispatch(getUsers(res?.data?.data));
    });
  }, [dispatch]);

  useEffect(() => {
    requestToken({
      method: 'GET',
      url: API_URL.BOOKING.GET,
    }).then((res: any) => {
      console.log('res: ', res);
      if (res?.data?.data?.isArray()) {
        dispatch(getBookings(res?.data?.data));
      }
    });
  }, [dispatch]);

  const handleBooking = (id: string) => {
    requestToken({
      method: 'POST',
      url: API_URL.BOOKING.POST,
      data: {
        advisorId: id,
        price,
        start,
        end,
      },
    }).then((res: any) => {
      console.log(res);
      Alert({ name: 'Booking thành công', icon: 'success' });
    });
  };

  //date
  const [value, setValue] = useState<any[]>([]);

  useEffect(() => {
    if (value) {
      setStart(new Date(value[0]?._d || new Date()).toISOString());
      setEnd(new Date(value[1]?._d || new Date()).toISOString());
    }
  }, [value]);

  return (
    <ErrorBound>
      <WrapBooking>
        <div className="banner">
          <h2 className="title">
            Find a <b>Advisors</b>
          </h2>
          <h4 className="title_lit">
            For only course you need to learn web development
          </h4>
          <div className="banner_search">
            <Row>
              <Col span={20}>
                <div className="wrap_input">
                  <div className="input">
                    <SearchOutlined
                      style={{ fontSize: '20px', color: '#ced4da' }}
                    />
                    <input type="text" placeholder="Start typing to search.." />
                  </div>
                </div>
              </Col>

              <Col span={4}>
                <div className="btn_search">
                  <button>Search</button>
                </div>
              </Col>
            </Row>
          </div>
        </div>

        <div className="advisors">
          <div className="advisors_content">
            <Row>
              {me?.type === 'ADVISOR'
                ? bookingList.map((item: any, index: number) => {
                    return (
                      item?.type === 'ADVISOR' && (
                        <Col span={6} key={item?.id}>
                          <div className="item">
                            <div className="item_infor">
                              <span className="name">
                                <TextColor
                                  text={`${item?.name}`}
                                  color={`${
                                    index % 2 === 0 ? 'yellow' : 'green'
                                  }`}
                                />
                              </span>

                              <p className="desc">{item?.bio}</p>
                            </div>

                            <div className="price">
                              <InputNumber
                                style={{ width: '92%' }}
                                placeholder="Price"
                                onChange={(value: any) => setPrice(value)}
                              />
                            </div>

                            <div className="date_picker">
                              <RangePicker
                                onChange={(val: any) => setValue(val)}
                              />
                            </div>

                            <div className="booking">
                              <button onClick={() => handleBooking(item?.id)}>
                                Confirm Booking
                              </button>
                            </div>
                          </div>
                        </Col>
                      )
                    );
                  })
                : advisors.map((item: any, index: number) => {
                    return (
                      item?.type === 'ADVISOR' && (
                        <Col span={6} key={item?.id}>
                          <div className="item">
                            <div className="item_infor">
                              <span className="name">
                                <TextColor
                                  text={`${item?.name}`}
                                  color={`${
                                    index % 2 === 0 ? 'yellow' : 'green'
                                  }`}
                                />
                              </span>

                              <p className="desc">{item?.bio}</p>
                            </div>

                            <div className="price">
                              <InputNumber
                                style={{ width: '92%' }}
                                placeholder="Price"
                                onChange={(value: any) => setPrice(value)}
                              />
                            </div>

                            <div className="date_picker">
                              <RangePicker
                                onChange={(val: any) => setValue(val)}
                              />
                            </div>

                            <div className="booking">
                              <button onClick={() => handleBooking(item?.id)}>
                                Booking
                              </button>
                            </div>
                          </div>
                        </Col>
                      )
                    );
                  })}
            </Row>
          </div>
        </div>
      </WrapBooking>
    </ErrorBound>
  );
}
export default memo(Booking);
