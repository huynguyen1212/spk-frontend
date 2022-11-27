/*
 *
 * Home
 *
 */

import React, { memo } from 'react';
import ErrorBound from 'components/ErrorBound';
import reducersHome from './store/reducers';
import useInjectReducer from 'redux/useInjectReducer';

interface Props {}

// eslint-disable-next-line
function Home({}: Props) {
  useInjectReducer('Home', reducersHome);

  return (
    <ErrorBound>
      <div className="middle-sidebar-bottom">
        <div className="middle-sidebar-left">
          <div className="row">
            <div className="col-lg-12 mb-3">
              <div
                className="card rounded-xxl p-lg--5 border-0 bg-no-repeat bg-image-contain banner-wrap"
                style={{ backgroundImage: 'url(images/fogg-clip.png)' }}
              >
                <div className="card-body p-4">
                  <h2 className="display3-size fw-400 display2-md-size sm-mt-7 sm-pt-10">
                    Find a perfect <b className="d-lg-block">Online Course</b>
                  </h2>
                  <h4 className="text-grey-500 font-xssss fw-500 ml-1 lh-24">
                    For only course you need to learn web development
                  </h4>
                  <div className="form-group mt-lg-4 p-3 border-light border p-2 bg-white rounded-lg ">
                    <div className="row">
                      <div className="col-md-5">
                        <div className="form-group icon-input mb-0">
                          <i className="ti-search font-xs text-grey-400"></i>
                          <input
                            type="text"
                            className="style1-input bg-transparent border-0 pl-5 font-xsss mb-0 text-grey-500 fw-500"
                            placeholder="Search online courses.."
                          />
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="form-group icon-input mb-0">
                          <i className="ti-package font-xs text-grey-400"></i>
                          <select className="style1-select bg-transparent border-0 pl-5">
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
                      <div className="col-md-3">
                        <a
                          href="default-search.html"
                          className="w-100 d-block btn bg-current text-white font-xssss fw-600 ls-3 style1-input p-0 border-0 text-uppercase "
                        >
                          Search
                        </a>
                      </div>
                    </div>
                  </div>
                  <h4 className="text-grey-500 font-xssss fw-500 ml-1 lh-24">
                    {' '}
                    <b className="text-grey-800 text-dark">
                      Popular Search :
                    </b>{' '}
                    Designer, Developer, PHP, HTML, CSS, SCSS{' '}
                  </h4>
                </div>
              </div>
            </div>
            
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
                        <img
                          src="images/v-1.png"
                          alt="image"
                          className="w-100"
                        />
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
                          <a
                            href="#"
                            className="fw-500 text-grey-500 font-xssss"
                          >
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
                        <img
                          src="images/v-2.png"
                          alt="image"
                          className="w-100"
                        />
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
                          <a
                            href="#"
                            className="fw-500 text-grey-500 font-xssss"
                          >
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
                        <img
                          src="images/v-3.png"
                          alt="image"
                          className="w-100"
                        />
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
                          <a
                            href="#"
                            className="fw-500 text-grey-500 font-xssss"
                          >
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
                        <img
                          src="images/v-5.jpg"
                          alt="image"
                          className="w-100"
                        />
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
                          <a
                            href="#"
                            className="fw-500 text-grey-500 font-xssss"
                          >
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
                        <img
                          src="images/v-9.jpg"
                          alt="image"
                          className="w-100"
                        />
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
                          <a
                            href="#"
                            className="fw-500 text-grey-500 font-xssss"
                          >
                            Student apply
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-12 pt-0 mb-3">
              <h2 className="fw-400 font-lg d-block">
                Latest <b> Classes</b>{' '}
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
                        <img
                          src="images/v-6.jpg"
                          alt="image"
                          className="w-100"
                        />
                      </a>
                    </div>
                    <div className="card-body pt-0">
                      <span className="font-xsssss fw-700 pl-3 pr-3 lh-32 text-uppercase rounded-lg ls-2 alert-danger d-inline-block text-danger mr-1">
                        Desinger
                      </span>
                      <span className="font-xss fw-700 pl-3 pr-3 ls-2 lh-32 d-inline-block text-success float-right">
                        <span className="font-xsssss">$</span> 450
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
                          <a
                            href="#"
                            className="fw-500 text-grey-500 font-xssss"
                          >
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
                        <img
                          src="images/v-4.jpg"
                          alt="image"
                          className="w-100"
                        />
                      </a>
                    </div>
                    <div className="card-body pt-0">
                      <span className="font-xsssss fw-700 pl-3 pr-3 lh-32 text-uppercase rounded-lg ls-2 alert-warning d-inline-block text-warning mr-1">
                        Python
                      </span>
                      <span className="font-xss fw-700 pl-3 pr-3 ls-2 lh-32 d-inline-block text-success float-right">
                        <span className="font-xsssss">$</span> 670
                      </span>
                      <h4 className="fw-700 font-xss mt-3 lh-28 mt-0">
                        <a
                          href="default-course-details.html"
                          className="text-dark text-grey-900"
                        >
                          Fundamentals for Scrum Master and Agile Projects{' '}
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
                          <a
                            href="#"
                            className="fw-500 text-grey-500 font-xssss"
                          >
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
                        <img
                          src="images/v-7.jpg"
                          alt="image"
                          className="w-100"
                        />
                      </a>
                    </div>
                    <div className="card-body pt-0">
                      <span className="font-xsssss fw-700 pl-3 pr-3 lh-32 text-uppercase rounded-lg ls-2 alert-primary d-inline-block text-primary mr-1">
                        Bootstrap
                      </span>
                      <span className="font-xss fw-700 pl-3 pr-3 ls-2 lh-32 d-inline-block text-success float-right">
                        <span className="font-xsssss">$</span> 760
                      </span>
                      <h4 className="fw-700 font-xss mt-3 lh-28 mt-0">
                        <a
                          href="default-course-details.html"
                          className="text-dark text-grey-900"
                        >
                          Automate the Boring Stuff with Python Programming
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
                          <a
                            href="#"
                            className="fw-500 text-grey-500 font-xssss"
                          >
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
                        <img
                          src="images/v-8.jpg"
                          alt="image"
                          className="w-100"
                        />
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
                          <a
                            href="#"
                            className="fw-500 text-grey-500 font-xssss"
                          >
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
                        <img
                          src="images/v-10.jpg"
                          alt="image"
                          className="w-100"
                        />
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
                          <a
                            href="#"
                            className="fw-500 text-grey-500 font-xssss"
                          >
                            Student apply
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-12 pt-0 mb-3">
              <h2 className="fw-400 font-lg d-block">
                Live <b> Classes</b>{' '}
                <a href="#" className="float-right">
                  <i className="feather-edit text-grey-500 font-xs"></i>
                </a>
              </h2>
            </div>

            <div className="col-lg-12 pt-2">
              <div className="owl-carousel category-card owl-theme overflow-hidden overflow-visible-xl nav-none">
                <div className="item">
                  <div className="card w200 d-block border-0 shadow-xss rounded-lg overflow-hidden mb-4">
                    <div
                      className="card-body position-relative h100 bg-gradiant-bottom bg-image-cover bg-image-center"
                      style={{ backgroundImage: 'url(images/c-3.png)' }}
                    ></div>
                    <div className="card-body d-block w-100 pl-4 pr-4 pb-4 text-center">
                      <figure className="avatar ml-auto mr-auto mb-0 mt--6 position-relative w75 z-index-1">
                        <img
                          src="images/user-11.png"
                          alt="image"
                          className="float-right p-1 bg-white rounded-circle w-100"
                        />
                      </figure>
                      <div className="clearfix"></div>
                      <h4 className="fw-700 font-xsss mt-3 mb-1">
                        Aliqa Macale{' '}
                      </h4>
                      <p className="fw-500 font-xsssss text-grey-500 mt-0 mb-2">
                        support@gmail.com
                      </p>
                      <span className="live-tag mt-2 mb-3 bg-danger p-2 z-index-1 rounded-lg text-white font-xsssss text-uppersace fw-700 ls-3">
                        LIVE
                      </span>
                    </div>
                  </div>
                </div>

                <div className="item">
                  <div className="card w200 d-block border-0 shadow-xss rounded-lg overflow-hidden mb-4">
                    <div
                      className="card-body position-relative h100 bg-gradiant-bottom bg-image-cover bg-image-center"
                      style={{ backgroundImage: 'url(images/c-6.png)' }}
                    ></div>
                    <div className="card-body d-block w-100 pl-4 pr-4 pb-4 text-center">
                      <figure className="avatar ml-auto mr-auto mb-0 mt--6 position-relative w75 z-index-1">
                        <img
                          src="images/user-2.png"
                          alt="image"
                          className="float-right p-1 bg-white rounded-circle w-100"
                        />
                      </figure>
                      <div className="clearfix"></div>
                      <h4 className="fw-700 font-xsss mt-3 mb-1">
                        Aliqa Macale{' '}
                      </h4>
                      <p className="fw-500 font-xsssss text-grey-500 mt-0 mb-2">
                        support@gmail.com
                      </p>
                      <span className="live-tag mt-2 mb-3 bg-danger p-2 z-index-1 rounded-lg text-white font-xsssss text-uppersace fw-700 ls-3">
                        LIVE
                      </span>
                    </div>
                  </div>
                </div>

                <div className="item">
                  <div className="card w200 d-block border-0 shadow-xss rounded-lg overflow-hidden mb-4">
                    <div
                      className="card-body position-relative h100 bg-gradiant-bottom bg-image-cover bg-image-center"
                      style={{ backgroundImage: 'url(images/bb-7.jpg)' }}
                    ></div>
                    <div className="card-body d-block w-100 pl-4 pr-4 pb-4 text-center">
                      <figure className="avatar ml-auto mr-auto mb-0 mt--6 position-relative w75 z-index-1">
                        <img
                          src="images/user-3.png"
                          alt="image"
                          className="float-right p-1 bg-white rounded-circle w-100"
                        />
                      </figure>
                      <div className="clearfix"></div>
                      <h4 className="fw-700 font-xsss mt-3 mb-1">
                        John Steere{' '}
                      </h4>
                      <p className="fw-500 font-xsssss text-grey-500 mt-0 mb-2">
                        support@gmail.com
                      </p>
                      <span className="live-tag mt-2 mb-3 bg-danger p-2 z-index-1 rounded-lg text-white font-xsssss text-uppersace fw-700 ls-3">
                        LIVE
                      </span>
                    </div>
                  </div>
                </div>

                <div className="item">
                  <div className="card w200 d-block border-0 shadow-xss rounded-lg overflow-hidden mb-4">
                    <div
                      className="card-body position-relative h100 bg-gradiant-bottom bg-image-cover bg-image-center"
                      style={{ backgroundImage: 'url(images/bb-16.png)' }}
                    ></div>
                    <div className="card-body d-block w-100 pl-4 pr-4 pb-4 text-center">
                      <figure className="avatar ml-auto mr-auto mb-0 mt--6 position-relative w75 z-index-1">
                        <img
                          src="images/user-4.png"
                          alt="image"
                          className="float-right p-1 bg-white rounded-circle w-100"
                        />
                      </figure>
                      <div className="clearfix"></div>
                      <h4 className="fw-700 font-xsss mt-3 mb-1">
                        Mohannad Zitoun{' '}
                      </h4>
                      <p className="fw-500 font-xsssss text-grey-500 mt-0 mb-2">
                        support@gmail.com
                      </p>
                      <span className="live-tag mt-2 mb-3 bg-danger p-2 z-index-1 rounded-lg text-white font-xsssss text-uppersace fw-700 ls-3">
                        LIVE
                      </span>
                    </div>
                  </div>
                </div>

                <div className="item">
                  <div className="card w200 d-block border-0 shadow-xss rounded-lg overflow-hidden mb-4">
                    <div
                      className="card-body position-relative h100 bg-gradiant-bottom bg-image-cover bg-image-center"
                      style={{ backgroundImage: 'url(images/bb-18.png)' }}
                    ></div>
                    <div className="card-body d-block w-100 pl-4 pr-4 pb-4 text-center">
                      <figure className="avatar ml-auto mr-auto mb-0 mt--6 position-relative w75 z-index-1">
                        <img
                          src="images/user-7.png"
                          alt="image"
                          className="float-right p-1 bg-white rounded-circle w-100"
                        />
                      </figure>
                      <div className="clearfix"></div>
                      <h4 className="fw-700 font-xsss mt-3 mb-1">
                        Aliqa Macale{' '}
                      </h4>
                      <p className="fw-500 font-xsssss text-grey-500 mt-0 mb-2">
                        support@gmail.com
                      </p>
                      <span className="live-tag mt-2 mb-3 bg-danger p-2 z-index-1 rounded-lg text-white font-xsssss text-uppersace fw-700 ls-3">
                        LIVE
                      </span>
                    </div>
                  </div>
                </div>

                <div className="item">
                  <div className="card w200 d-block border-0 shadow-xss rounded-lg overflow-hidden mb-4">
                    <div
                      className="card-body position-relative h100 bg-gradiant-bottom bg-image-cover bg-image-center"
                      style={{ backgroundImage: 'url(images/bg-57.jpg)' }}
                    ></div>
                    <div className="card-body d-block w-100 pl-4 pr-4 pb-4 text-center">
                      <figure className="avatar ml-auto mr-auto mb-0 mt--6 position-relative w75 z-index-1">
                        <img
                          src="images/user-5.png"
                          alt="image"
                          className="float-right p-1 bg-white rounded-circle w-100"
                        />
                      </figure>
                      <div className="clearfix"></div>
                      <h4 className="fw-700 font-xsss mt-3 mb-1">
                        Hendrix Stamp{' '}
                      </h4>
                      <p className="fw-500 font-xsssss text-grey-500 mt-0 mb-2">
                        support@gmail.com
                      </p>
                      <span className="live-tag mt-2 mb-3 bg-danger p-2 z-index-1 rounded-lg text-white font-xsssss text-uppersace fw-700 ls-3">
                        LIVE
                      </span>
                    </div>
                  </div>
                </div>

                <div className="item">
                  <div className="card w200 d-block border-0 shadow-xss rounded-lg overflow-hidden mb-4">
                    <div
                      className="card-body position-relative h100 bg-gradiant-bottom bg-image-cover bg-image-center"
                      style={{ backgroundImage: 'url(images/bb-9.jpg)' }}
                    ></div>
                    <div className="card-body d-block w-100 pl-4 pr-4 pb-4 text-center">
                      <figure className="avatar ml-auto mr-auto mb-0 mt--6 position-relative w75 z-index-1">
                        <img
                          src="images/user-6.png"
                          alt="image"
                          className="float-right p-1 bg-white rounded-circle w-100"
                        />
                      </figure>
                      <div className="clearfix"></div>
                      <h4 className="fw-700 font-xsss mt-3 mb-1">
                        Mohannad Zitoun{' '}
                      </h4>
                      <p className="fw-500 font-xsssss text-grey-500 mt-0 mb-2">
                        support@gmail.com
                      </p>
                      <span className="live-tag mt-2 mb-3 bg-danger p-2 z-index-1 rounded-lg text-white font-xsssss text-uppersace fw-700 ls-3">
                        LIVE
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ErrorBound>
  );
}

export default memo(Home);
