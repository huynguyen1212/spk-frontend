/*
 *
 * Home
 *
 */

import { SearchOutlined } from '@ant-design/icons';
import { Col, Row } from 'antd';
import ErrorBound from 'components/ErrorBound';
import { memo } from 'react';
import useInjectReducer from 'redux/useInjectReducer';
import reducersHome from './store/reducers';
import { SHome } from './styles';
import Slider from 'react-slick';
import download1 from 'assets/images/home/download1.png';
import download2 from 'assets/images/home/download2.png';
import download3 from 'assets/images/home/download3.png';
import download4 from 'assets/images/home/download4.png';
import download5 from 'assets/images/home/download5.png';
import download6 from 'assets/images/home/download6.png';
import download7 from 'assets/images/home/download7.png';
import { Link } from 'react-router-dom';

interface Props {}

// eslint-disable-next-line
function Home({}: Props) {
  useInjectReducer('Home', reducersHome);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

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

        <div className="topic">
          <h2 className="topic_title">
            Explore <b>Topic</b>
          </h2>

          <div className="topic_content">
            <Slider {...settings}>
              <div className="item bg_fcf1eb">
                <Link to="/">
                  <div className="img_text">
                    <span className="img">
                      <img src={download1} alt="icon" />
                    </span>
                    <h4 className="text">
                      Bootstrap <span>32 Course</span>
                    </h4>
                  </div>
                </Link>
              </div>

              <div className="item bg_dcf4f8">
                <Link to="/">
                  <div className="img_text">
                    <span className="img">
                      <img src={download2} alt="icon" />
                    </span>
                    <h4 className="text">
                      Bootstrap
                      <br />
                      <span>32 Course</span>
                    </h4>
                  </div>
                </Link>
              </div>

              <div className="item bg_fcf1eb">
                <Link to="/">
                  <div className="img_text">
                    <span className="img">
                      <img src={download3} alt="icon" />
                    </span>
                    <h4 className="text">
                      Bootstrap <span>32 Course</span>
                    </h4>
                  </div>
                </Link>
              </div>

              <div className="item bg_dcf4f8">
                <Link to="/">
                  <div className="img_text">
                    <span className="img">
                      <img src={download4} alt="icon" />
                    </span>
                    <h4 className="text">
                      Bootstrap <span>32 Course</span>
                    </h4>
                  </div>
                </Link>
              </div>

              <div className="item bg_fcf1eb">
                <Link to="/">
                  <div className="img_text">
                    <span className="img">
                      <img src={download5} alt="icon" />
                    </span>
                    <h4 className="text">
                      Bootstrap <span>32 Course</span>
                    </h4>
                  </div>
                </Link>
              </div>

              <div className="item bg_dcf4f8">
                <Link to="/">
                  <div className="img_text">
                    <span className="img">
                      <img src={download6} alt="icon" />
                    </span>
                    <h4 className="text">
                      Bootstrap <span>32 Course</span>
                    </h4>
                  </div>
                </Link>
              </div>

              <div className="item bg_fcf1eb">
                <Link to="/">
                  <div className="img_text">
                    <span className="img">
                      <img src={download7} alt="icon" />
                    </span>
                    <h4 className="text">
                      Bootstrap <span>32 Course</span>
                    </h4>
                  </div>
                </Link>
              </div>

              <div className="item bg_dcf4f8">
                <Link to="/">
                  <div className="img_text">
                    <span className="img">
                      <img src={download7} alt="icon" />
                    </span>
                    <h4 className="text">
                      Bootstrap <span>32 Course</span>
                    </h4>
                  </div>
                </Link>
              </div>
            </Slider>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 mt-3"></div>

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
