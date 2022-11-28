/*
 *
 * Home
 *
 */

import React, { memo } from 'react';
import ErrorBound from 'components/ErrorBound';
import reducersHome from './store/reducers';
import useInjectReducer from 'redux/useInjectReducer';
import { SHome } from './styles';
import { Col, Row } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
interface Props {}

// eslint-disable-next-line
function Home({}: Props) {
  useInjectReducer('Home', reducersHome);

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

        <div className="row">
          <div className="col-lg-12 pt-2">
            <h2 className="fw-400 font-lg">
              Explore <b>Categories</b>{' '}
              <a href="#" className="float-right">
                <i className="feather-edit text-grey-500 font-xs"></i>
              </a>
            </h2>
          </div>

          <div className="col-lg-12 mt-3">
            <div className="owl-carousel category-card owl-theme overflow-hidden overflow-visible-xl nav-none">
              <div className="item">
                <div
                  className="card cat-card-hover mr-1 w140 border-0 p-4 rounded-lg text-center"
                  style={{ backgroundColor: '#fcf1eb' }}
                >
                  <a href="default-channel.html">
                    <div className="card-body p-2 ml-1 ">
                      <span className="btn-round-xl bg-white">
                        <img
                          src="images/download1.png"
                          alt="icon"
                          className="p-2"
                        />
                      </span>
                      <h4 className="fw-600 font-xsss mt-3 mb-0">
                        Bootstrap{' '}
                        <span className="d-block font-xsssss fw-500 text-grey-500 mt-2">
                          32 Course
                        </span>
                      </h4>
                    </div>
                  </a>
                </div>
              </div>

              <div className="item">
                <div
                  className="card cat-card-hover mr-1 w140 border-0 p-4 rounded-lg text-center"
                  style={{ backgroundColor: '#fff9eb' }}
                >
                  <a href="default-channel.html">
                    <div className="card-body p-2 ml-1 ">
                      <span className="btn-round-xl bg-white">
                        <img
                          src="images/download2.png"
                          alt="icon"
                          className="p-2"
                        />
                      </span>
                      <h4 className="fw-600 font-xsss mt-3 mb-0">
                        HTML{' '}
                        <span className="d-block font-xsssss fw-500 text-grey-500 mt-2">
                          32 Course
                        </span>
                      </h4>
                    </div>
                  </a>
                </div>
              </div>

              <div className="item">
                <div
                  className="card cat-card-hover mr-1 w140 border-0 p-4 rounded-lg text-center"
                  style={{ backgroundColor: '#e5f4fb' }}
                >
                  <a href="default-channel.html">
                    <div className="card-body p-2 ml-1 ">
                      <span className="btn-round-xl bg-white">
                        <img
                          src="images/download3.png"
                          alt="icon"
                          className="p-2"
                        />
                      </span>
                      <h4 className="fw-600 font-xsss mt-3 mb-0">
                        Jquery{' '}
                        <span className="d-block font-xsssss fw-500 text-grey-500 mt-2">
                          32 Course
                        </span>
                      </h4>
                    </div>
                  </a>
                </div>
              </div>

              <div className="item">
                <div
                  className="card cat-card-hover mr-1 w140 border-0 p-4 rounded-lg text-center"
                  style={{ backgroundColor: '#dcf4f8' }}
                >
                  <a href="default-channel.html">
                    <div className="card-body p-2 ml-1 ">
                      <span className="btn-round-xl bg-white">
                        <img
                          src="images/download4.png"
                          alt="icon"
                          className="p-2"
                        />
                      </span>
                      <h4 className="fw-600 font-xsss mt-3 mb-0">
                        Sass{' '}
                        <span className="d-block font-xsssss fw-500 text-grey-500 mt-2">
                          32 Course
                        </span>
                      </h4>
                    </div>
                  </a>
                </div>
              </div>

              <div className="item">
                <div
                  className="card cat-card-hover mr-1 w140 border-0 p-4 rounded-lg text-center"
                  style={{ backgroundColor: '#fcf1eb' }}
                >
                  <a href="default-channel.html">
                    <div className="card-body p-2 ml-1 ">
                      <span className="btn-round-xl bg-white">
                        <img
                          src="images/download5.png"
                          alt="icon"
                          className="p-2"
                        />
                      </span>
                      <h4 className="fw-600 font-xsss mt-3 mb-0">
                        React{' '}
                        <span className="d-block font-xsssss fw-500 text-grey-500 mt-2">
                          32 Course
                        </span>
                      </h4>
                    </div>
                  </a>
                </div>
              </div>

              <div className="item">
                <div
                  className="card cat-card-hover mr-1 w140 border-0 p-4 rounded-lg text-center"
                  style={{ backgroundColor: '#fff9eb' }}
                >
                  <a href="default-channel.html">
                    <div className="card-body p-2 ml-1 ">
                      <span className="btn-round-xl bg-white">
                        <img
                          src="images/download6.png"
                          alt="icon"
                          className="p-2"
                        />
                      </span>
                      <h4 className="fw-600 font-xsss mt-3 mb-0">
                        JAVA{' '}
                        <span className="d-block font-xsssss fw-500 text-grey-500 mt-2">
                          32 Course
                        </span>
                      </h4>
                    </div>
                  </a>
                </div>
              </div>

              <div className="item">
                <div
                  className="card cat-card-hover mr-1 w140 border-0 p-4 rounded-lg text-center"
                  style={{ backgroundColor: '#e5f4fb' }}
                >
                  <a href="default-channel.html">
                    <div className="card-body p-2 ml-1 ">
                      <span className="btn-round-xl bg-white">
                        <img
                          src="images/download7.png"
                          alt="icon"
                          className="p-2"
                        />
                      </span>
                      <h4 className="fw-600 font-xsss mt-3 mb-0">
                        Python
                        <span className="d-block font-xsssss fw-500 text-grey-500 mt-2">
                          32 Course
                        </span>
                      </h4>
                    </div>
                  </a>
                </div>
              </div>

              <div className="item">
                <div
                  className="card cat-card-hover mr-1 w140 border-0 p-4 rounded-lg text-center"
                  style={{ backgroundColor: '#fcf1eb' }}
                >
                  <a href="default-channel.html">
                    <div className="card-body p-2 ml-1 ">
                      <span className="btn-round-xl bg-white">
                        <img
                          src="images/mongodb.png"
                          alt="icon"
                          className="p-2"
                        />
                      </span>
                      <h4 className="fw-600 font-xsss mt-3 mb-0">
                        Mongodb{' '}
                        <span className="d-block font-xsssss fw-500 text-grey-500 mt-2">
                          32 Course
                        </span>
                      </h4>
                    </div>
                  </a>
                </div>
              </div>

              <div className="item">
                <div
                  className="card cat-card-hover mr-1 w140 border-0 p-4 rounded-lg text-center"
                  style={{ backgroundColor: '#fcf1eb' }}
                >
                  <a href="default-channel.html">
                    <div className="card-body p-2 ml-1 ">
                      <span className="btn-round-xl bg-white">
                        <img
                          src="images/download1.png"
                          alt="icon"
                          className="p-2"
                        />
                      </span>
                      <h4 className="fw-600 font-xsss mt-3 mb-0">
                        Desinger{' '}
                        <span className="d-block font-xsssss fw-500 text-grey-500 mt-2">
                          32 Course
                        </span>
                      </h4>
                    </div>
                  </a>
                </div>
              </div>

              <div className="item">
                <div
                  className="card cat-card-hover mr-1 w140 border-0 p-4 rounded-lg text-center"
                  style={{ backgroundColor: '#fff9eb' }}
                >
                  <a href="default-channel.html">
                    <div className="card-body p-2 ml-1 ">
                      <span className="btn-round-xl bg-white">
                        <img
                          src="images/download2.png"
                          alt="icon"
                          className="p-2"
                        />
                      </span>
                      <h4 className="fw-600 font-xsss mt-3 mb-0">
                        Desinger{' '}
                        <span className="d-block font-xsssss fw-500 text-grey-500 mt-2">
                          32 Course
                        </span>
                      </h4>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-12 pt-4 mb-3">
            <h2 className="fw-400 font-lg d-block">
              Popular <b> Classes</b>{' '}
              <a href="#" className="float-right">
                <i className="feather-edit text-grey-500 font-xs"></i>
              </a>
            </h2>
          </div>

          <div className="col-lg-12 pt-2">
            <div className="owl-carousel category-card owl-theme overflow-hidden overflow-visible-xl nav-none">
              <div className="item">
                <div className="card course-card w300 p-0 shadow-xss border-0 rounded-lg overflow-hidden mr-1 mb-4">
                  <div className="card-image w-100 mb-3">
                    <a
                      href="default-course-details.html"
                      className="video-bttn position-relative d-block"
                    >
                      <img src="images/v-1.png" alt="image" className="w-100" />
                    </a>
                  </div>
                  <div className="card-body pt-0">
                    <span className="font-xsssss fw-700 pl-3 pr-3 lh-32 text-uppercase rounded-lg ls-2 alert-warning d-inline-block text-warning mr-1">
                      Python
                    </span>
                    <span className="font-xss fw-700 pl-3 pr-3 ls-2 lh-32 d-inline-block text-success float-right">
                      <span className="font-xsssss">$</span> 240
                    </span>
                    <h4 className="fw-700 font-xss mt-3 lh-28 mt-0">
                      <a
                        href="default-course-details.html"
                        className="text-dark text-grey-900"
                      >
                        Complete Python Bootcamp From Zero to Hero in Python{' '}
                      </a>
                    </h4>
                    <h6 className="font-xssss text-grey-500 fw-600 ml-0 mt-2">
                      {' '}
                      32 Lesson{' '}
                    </h6>
                    <ul className="memberlist mt-3 mb-2 ml-0 d-block">
                      <li>
                        <a href="#">
                          <img
                            src="images/user-6.png"
                            alt="user"
                            className="w30 d-inline-block"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            src="images/user-7.png"
                            alt="user"
                            className="w30 d-inline-block"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            src="images/user-8.png"
                            alt="user"
                            className="w30 d-inline-block"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            src="images/user-3.png"
                            alt="user"
                            className="w30 d-inline-block"
                          />
                        </a>
                      </li>
                      <li className="last-member">
                        <a
                          href="#"
                          className="bg-greylight fw-600 text-grey-500 font-xssss ls-3 text-center"
                        >
                          +2
                        </a>
                      </li>
                      <li className="pl-4 w-auto">
                        <a href="#" className="fw-500 text-grey-500 font-xssss">
                          Student apply
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="item">
                <div className="card course-card w300 p-0 shadow-xss border-0 rounded-lg overflow-hidden mr-1 mb-4">
                  <div className="card-image w-100 mb-3">
                    <a
                      href="default-course-details.html"
                      className="video-bttn position-relative d-block"
                    >
                      <img src="images/v-2.png" alt="image" className="w-100" />
                    </a>
                  </div>
                  <div className="card-body pt-0">
                    <span className="font-xsssss fw-700 pl-3 pr-3 lh-32 text-uppercase rounded-lg ls-2 alert-danger d-inline-block text-danger mr-1">
                      Desinger
                    </span>
                    <span className="font-xss fw-700 pl-3 pr-3 ls-2 lh-32 d-inline-block text-success float-right">
                      <span className="font-xsssss">$</span> 40
                    </span>
                    <h4 className="fw-700 font-xss mt-3 lh-28 mt-0">
                      <a
                        href="default-course-details.html"
                        className="text-dark text-grey-900"
                      >
                        Complete Python Bootcamp From Zero to Hero in Python{' '}
                      </a>
                    </h4>
                    <h6 className="font-xssss text-grey-500 fw-600 ml-0 mt-2">
                      {' '}
                      24 Lesson{' '}
                    </h6>
                    <ul className="memberlist mt-3 mb-2 ml-0 d-block">
                      <li>
                        <a href="#">
                          <img
                            src="images/user-6.png"
                            alt="user"
                            className="w30 d-inline-block"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            src="images/user-7.png"
                            alt="user"
                            className="w30 d-inline-block"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            src="images/user-8.png"
                            alt="user"
                            className="w30 d-inline-block"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            src="images/user-3.png"
                            alt="user"
                            className="w30 d-inline-block"
                          />
                        </a>
                      </li>
                      <li className="last-member">
                        <a
                          href="#"
                          className="bg-greylight fw-600 text-grey-500 font-xssss ls-3 text-center"
                        >
                          +2
                        </a>
                      </li>
                      <li className="pl-4 w-auto">
                        <a href="#" className="fw-500 text-grey-500 font-xssss">
                          Student apply
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="item">
                <div className="card course-card w300 p-0 shadow-xss border-0 rounded-lg overflow-hidden mr-1 mb-4">
                  <div className="card-image w-100 mb-3">
                    <a
                      href="default-course-details.html"
                      className="video-bttn position-relative d-block"
                    >
                      <img src="images/v-3.png" alt="image" className="w-100" />
                    </a>
                  </div>
                  <div className="card-body pt-0">
                    <span className="font-xsssss fw-700 pl-3 pr-3 lh-32 text-uppercase rounded-lg ls-2 alert-success d-inline-block text-success mr-1">
                      Bootstrap
                    </span>
                    <span className="font-xss fw-700 pl-3 pr-3 ls-2 lh-32 d-inline-block text-success float-right">
                      <span className="font-xsssss">$</span> 60
                    </span>
                    <h4 className="fw-700 font-xss mt-3 lh-28 mt-0">
                      <a
                        href="default-course-details.html"
                        className="text-dark text-grey-900"
                      >
                        Java Programming Masterclass for Developers
                      </a>
                    </h4>
                    <h6 className="font-xssss text-grey-500 fw-600 ml-0 mt-2">
                      {' '}
                      14 Lesson{' '}
                    </h6>
                    <ul className="memberlist mt-3 mb-2 ml-0 d-block">
                      <li>
                        <a href="#">
                          <img
                            src="images/user-6.png"
                            alt="user"
                            className="w30 d-inline-block"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            src="images/user-7.png"
                            alt="user"
                            className="w30 d-inline-block"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            src="images/user-8.png"
                            alt="user"
                            className="w30 d-inline-block"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            src="images/user-3.png"
                            alt="user"
                            className="w30 d-inline-block"
                          />
                        </a>
                      </li>
                      <li className="last-member">
                        <a
                          href="#"
                          className="bg-greylight fw-600 text-grey-500 font-xssss ls-3 text-center"
                        >
                          +2
                        </a>
                      </li>
                      <li className="pl-4 w-auto">
                        <a href="#" className="fw-500 text-grey-500 font-xssss">
                          Student apply
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="item">
                <div className="card course-card w300 p-0 shadow-xss border-0 rounded-lg overflow-hidden mr-1 mb-4">
                  <div className="card-image w-100 mb-3">
                    <a
                      href="default-course-details.html"
                      className="video-bttn position-relative d-block"
                    >
                      <img src="images/v-5.jpg" alt="image" className="w-100" />
                    </a>
                  </div>
                  <div className="card-body pt-0">
                    <span className="font-xsssss fw-700 pl-3 pr-3 lh-32 text-uppercase rounded-lg ls-2 alert-danger d-inline-block text-danger mr-1">
                      Develop
                    </span>
                    <span className="font-xss fw-700 pl-3 pr-3 ls-2 lh-32 d-inline-block text-success float-right">
                      <span className="font-xsssss">$</span> 370
                    </span>
                    <h4 className="fw-700 font-xss mt-3 lh-28 mt-0">
                      <a
                        href="default-course-details.html"
                        className="text-dark text-grey-900"
                      >
                        The Data Science Course Complete Data Science{' '}
                      </a>
                    </h4>
                    <h6 className="font-xssss text-grey-500 fw-600 ml-0 mt-2">
                      {' '}
                      23 Lesson{' '}
                    </h6>
                    <ul className="memberlist mt-3 mb-2 ml-0 d-block">
                      <li>
                        <a href="#">
                          <img
                            src="images/user-6.png"
                            alt="user"
                            className="w30 d-inline-block"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            src="images/user-7.png"
                            alt="user"
                            className="w30 d-inline-block"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            src="images/user-8.png"
                            alt="user"
                            className="w30 d-inline-block"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            src="images/user-3.png"
                            alt="user"
                            className="w30 d-inline-block"
                          />
                        </a>
                      </li>
                      <li className="last-member">
                        <a
                          href="#"
                          className="bg-greylight fw-600 text-grey-500 font-xssss ls-3 text-center"
                        >
                          +2
                        </a>
                      </li>
                      <li className="pl-4 w-auto">
                        <a href="#" className="fw-500 text-grey-500 font-xssss">
                          Student apply
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="item">
                <div className="card course-card w300 p-0 shadow-xss border-0 rounded-lg overflow-hidden mr-1 mb-4">
                  <div className="card-image w-100 mb-3">
                    <a
                      href="default-course-details.html"
                      className="video-bttn position-relative d-block"
                    >
                      <img src="images/v-9.jpg" alt="image" className="w-100" />
                    </a>
                  </div>
                  <div className="card-body pt-0">
                    <span className="font-xsssss fw-700 pl-3 pr-3 lh-32 text-uppercase rounded-lg ls-2 alert-danger d-inline-block text-danger mr-1">
                      Develop
                    </span>
                    <span className="font-xss fw-700 pl-3 pr-3 ls-2 lh-32 d-inline-block text-success float-right">
                      <span className="font-xsssss">$</span> 370
                    </span>
                    <h4 className="fw-700 font-xss mt-3 lh-28 mt-0">
                      <a
                        href="default-course-details.html"
                        className="text-dark text-grey-900"
                      >
                        The Data Science Course Complete Data Science{' '}
                      </a>
                    </h4>
                    <h6 className="font-xssss text-grey-500 fw-600 ml-0 mt-2">
                      {' '}
                      23 Lesson{' '}
                    </h6>
                    <ul className="memberlist mt-3 mb-2 ml-0 d-block">
                      <li>
                        <a href="#">
                          <img
                            src="images/user-6.png"
                            alt="user"
                            className="w30 d-inline-block"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            src="images/user-7.png"
                            alt="user"
                            className="w30 d-inline-block"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            src="images/user-8.png"
                            alt="user"
                            className="w30 d-inline-block"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            src="images/user-3.png"
                            alt="user"
                            className="w30 d-inline-block"
                          />
                        </a>
                      </li>
                      <li className="last-member">
                        <a
                          href="#"
                          className="bg-greylight fw-600 text-grey-500 font-xssss ls-3 text-center"
                        >
                          +2
                        </a>
                      </li>
                      <li className="pl-4 w-auto">
                        <a href="#" className="fw-500 text-grey-500 font-xssss">
                          Student apply
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SHome>
    </ErrorBound>
  );
}

export default memo(Home);
