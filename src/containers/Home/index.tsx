/*
 *
 * Home
 *
 */

import { SearchOutlined } from '@ant-design/icons';
import { Col, Row } from 'antd';
import ErrorBound from 'components/ErrorBound';
import { memo, useEffect, useState } from 'react';
import useInjectReducer from 'redux/useInjectReducer';
import reducersHome, { selectHomeStore } from './store/reducers';
import { SHome } from './styles';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { settingsLanguage, settingsTopic } from './data';
import TextColor from 'components/TextColor';
import { request } from 'api/axios';
import API_URL from 'api/url';
import { getLanguages, getTopics } from './store/actions';
import { useDispatch, useSelector } from 'react-redux';

interface Props {}

// eslint-disable-next-line
function Home({}: Props) {
  useInjectReducer('Home', reducersHome);
  const { languages, topics } = useSelector(selectHomeStore);
  const dispatch = useDispatch();

  useEffect(() => {
    request({
      method: 'GET',
      url: API_URL.LANGUAGE.GET,
    }).then((res: any) => {
      dispatch(getLanguages(res?.data?.data));
    });

    request({
      method: 'GET',
      url: API_URL.TOPIC.GET,
    }).then((res: any) => {
      dispatch(getTopics(res?.data?.data));
    });
  }, [dispatch]);

  return (
    <ErrorBound>
      <SHome>
        <div className="banner">
          <h2 className="title">
            Find a perfect <br />
            <b>Online Course</b>
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

                  <div className="select_input">
                    <select>
                      <option value="Bootstrap">Bootstrap</option>
                      <option value="HTML">HTML</option>
                      <option value="Jquery">Jquery</option>
                      <option value="Sass">Sass</option>
                      <option value="React">React</option>
                      <option value="JAVA">JAVA</option>
                      <option value="Python">Python</option>
                      <option value="Mongodb">Mongodb</option>
                      <option value="Desinger">Desinger</option>
                    </select>
                    
                    <select>
                      <option value="Bootstrap">Bootstrap</option>
                      <option value="HTML">HTML</option>
                      <option value="Jquery">Jquery</option>
                      <option value="Sass">Sass</option>
                      <option value="React">React</option>
                      <option value="JAVA">JAVA</option>
                      <option value="Python">Python</option>
                      <option value="Mongodb">Mongodb</option>
                      <option value="Desinger">Desinger</option>
                    </select>
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

          <h4 className="popular">
            <b>Popular Search :</b> Designer, Developer, PHP, HTML, CSS, SCSS
          </h4>
        </div>

        <div className="topic">
          <h2 className="topic_title">
            Explore <b>Topic</b>
          </h2>

          <div className="topic_content">
            <Slider {...settingsTopic}>
              {topics.map((item: any, index: number) => {
                return (
                  <div
                    key={item?.id}
                    className={`item ${
                      index % 2 === 0 ? 'bg_dcf4f8' : 'bg_fcf1eb'
                    }`}
                  >
                    <Link to="/">
                      <div className="img_text">
                        <span className="img">
                          <img
                            src={`${process.env.REACT_APP_CDN}${item?.image?.path}`}
                            alt="icon"
                          />
                        </span>
                        <h4 className="text">
                          {item?.name.slice(0, 6)}{' '}
                          <span>{item?.desc.slice(0, 6)}</span>
                        </h4>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>

        <div className="language">
          <h2 className="language_title">
            Popular <b> Language</b>
          </h2>

          <div className="language_content">
            <Slider {...settingsLanguage}>
              {languages.map((item: any, index: number) => {
                return (
                  <div key={item?.id} className="item">
                    <div className="img">
                      <img
                        src={`${process.env.REACT_APP_CDN}${item?.image?.path}`}
                        alt="icon"
                      />
                    </div>

                    <div className="item_infor">
                      <span className="name">
                        <TextColor
                          text={`${item?.name}`}
                          color={`${index % 2 === 0 ? 'yellow' : 'green'}`}
                        />
                      </span>

                      <p className="desc">{item?.desc}</p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </SHome>
    </ErrorBound>
  );
}

export default memo(Home);
