/*
 *
 * Layout
 * make by huynq
 */

import React, { memo, ReactChild, ReactChildren, useState } from 'react';
import ErrorBound from 'components/ErrorBound';
import useInjectReducer from 'redux/useInjectReducer';
import reducersLayout from './store/reducers';
import WrapLayout from './style';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu } from 'antd';

//img
import profile2 from 'assets/images/home/profile-2.png';
import profile3 from 'assets/images/home/profile-3.png';
import profile4 from 'assets/images/home/profile-4.png';
import download1 from 'assets/images/home/download1.png';
import download2 from 'assets/images/home/download2.png';
import download3 from 'assets/images/home/download3.png';
import download4 from 'assets/images/home/download4.png';
import femaleProfile from 'assets/images/home/female-profile.png';
import userPattern from 'assets/images/home/user-pattern.png';
import user4 from 'assets/images/home/user-4.png';
import user6 from 'assets/images/home/user-6.png';
import user7 from 'assets/images/home/user-7.png';
import user8 from 'assets/images/home/user-8.png';
import user12 from 'assets/images/home/user-12.png';
import user21 from 'assets/images/home/user-21.png';
import user22 from 'assets/images/home/user-22.png';
import user23 from 'assets/images/home/user-23.png';
import user24 from 'assets/images/home/user-24.png';
import user25 from 'assets/images/home/user-25.png';
import logo from 'assets/images/logo.png';
import { Link } from 'react-router-dom';

interface Props {
  children: ReactChild | ReactChildren;
}

const { Header, Content, Sider } = Layout;

// eslint-disable-next-line
function LayoutCommon({ children }: Props) {
  useInjectReducer('Layout', reducersLayout);
  const [collapsed, setCollapsed] = useState(false);

  return (
    <ErrorBound>
      <WrapLayout>
        <Layout hasSider>
          <Sider
            style={{
              overflow: 'auto',
              height: '100vh',
              position: 'fixed',
              left: 0,
              top: 0,
              bottom: 0,
              borderRight: '2px solid #eee',
              background: 'white',
            }}
            trigger={null}
            collapsible
            collapsed={collapsed}
          >
            <div className="wrap_logo">
              <div className="logo">
                <Link to="/">
                  <img src={logo} alt="logo" />
                </Link>
              </div>
              <span>SPK</span>
            </div>

            <Menu
              theme="light"
              mode="inline"
              defaultSelectedKeys={['1']}
              items={[
                {
                  key: '1',
                  icon: <UserOutlined />,
                  label: 'nav 1',
                },
                {
                  key: '2',
                  icon: <VideoCameraOutlined />,
                  label: 'nav 2',
                },
                {
                  key: '3',
                  icon: <UploadOutlined />,
                  label: 'nav 3',
                },
              ]}
            />
          </Sider>

          <Layout
            className="site-layout"
            style={{ marginLeft: collapsed ? 80 : 200 }}
          >
            <Header
              className="site-layout-background"
              style={{
                padding: 0,
                background: 'white',
                borderBottom: '2px solid #eee',
              }}
            >
              {React.createElement(
                collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                  className: 'trigger',
                  onClick: () => setCollapsed(!collapsed),
                },
              )}

              <div className="header"></div>
            </Header>
            <Content
              className="site-layout-background"
              style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: 280,
              }}
            >
              {children}
            </Content>
          </Layout>
        </Layout>

        {/* <div className="main-wrapper">
          <nav className="navigation scroll-bar">
            <div className="container pl-0 pr-0">
              <div className="nav-content">
                <div className="nav-top">
                  <a href="index.html">
                    <i className="feather-slack text-success display1-size mr-3 ml-3"></i>
                    <span className="d-inline-block fredoka-font ls-3 fw-600 text-current font-xl logo-text mb-0">
                      Elomoas.
                    </span>{' '}
                  </a>
                  <a href="#" className="close-nav d-inline-block d-lg-none">
                    <i className="ti-close bg-grey mb-4 btn-round-sm font-xssss fw-700 text-dark ml-auto mr-2 "></i>
                  </a>
                </div>
                <div className="nav-caption fw-600 font-xssss text-grey-500">
                  <span>New </span>Feeds
                </div>
                <ul className="mb-3">
                  <li className="logo d-none d-xl-block d-lg-block"></li>
                  <li>
                    <a
                      href="default.html"
                      className="nav-content-bttn open-font"
                      data-tab="chats"
                    >
                      <i className="feather-tv mr-3"></i>
                      <span>Course Feed</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="default-follower.html"
                      className="active nav-content-bttn open-font"
                      data-tab="friends"
                    >
                      <i className="feather-shopping-bag mr-3"></i>
                      <span>Followers</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="default-channel.html"
                      className="nav-content-bttn open-font"
                      data-tab="favorites"
                    >
                      <i className="feather-globe mr-3"></i>
                      <span>Explore Channel</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="default-live-stream.html"
                      className="nav-content-bttn open-font"
                      data-tab="favorites"
                    >
                      <i className="feather-play-circle mr-3"></i>
                      <span>Live Stream</span>
                    </a>
                  </li>
                  <li className="flex-lg-brackets">
                    <a
                      href="default-user-profile.html"
                      data-tab="archived"
                      className="nav-content-bttn open-font"
                    >
                      <i className="feather-video mr-3"></i>
                      <span>Saved Course</span>
                    </a>
                  </li>
                </ul>

                <div className="nav-caption fw-600 font-xssss text-grey-500">
                  <span>Following </span>Author
                </div>
                <ul className="mb-3">
                  <li>
                    <a
                      href="default-author-profile.html"
                      className="nav-content-bttn open-font pl-2 pb-2 pt-1 h-auto"
                      data-tab="chats"
                    >
                      <img src={profile4} alt="user" className="w40 mr-2" />
                      <span>Surfiya Zakir </span>
                      <span className="circle-icon bg-success mt-3"></span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="default-author-profile.html"
                      className="nav-content-bttn open-font pl-2 pb-2 pt-1 h-auto"
                      data-tab="chats"
                    >
                      <img src={profile2} alt="user" className="w40 mr-2" />
                      <span>Vincent Parks </span>
                      <span className="circle-icon bg-warning mt-3"></span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="default-author-profile.html"
                      className="nav-content-bttn open-font pl-2 pb-2 pt-1 h-auto"
                      data-tab="chats"
                    >
                      <img src={profile3} alt="user" className="w40 mr-2" />
                      <span>Richard Bowers </span>
                      <span className="circle-icon bg-success mt-3"></span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="default-author-profile.html"
                      className="nav-content-bttn open-font pl-2 pb-2 pt-1 h-auto"
                      data-tab="chats"
                    >
                      <img src={profile4} alt="user" className="w40 mr-2" />
                      <span>John Lambert </span>
                      <span className="circle-icon bg-success mt-3"></span>
                    </a>
                  </li>
                </ul>
                <div className="nav-caption fw-600 font-xssss text-grey-500">
                  <span></span> Account
                </div>
                <ul className="mb-3">
                  <li className="logo d-none d-xl-block d-lg-block"></li>
                  <li>
                    <a
                      href="default-settings.html"
                      className="nav-content-bttn open-font h-auto pt-2 pb-2"
                    >
                      <i className="font-sm feather-settings mr-3 text-grey-500"></i>
                      <span>Settings</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="default-analytics.html"
                      className="nav-content-bttn open-font h-auto pt-2 pb-2"
                    >
                      <i className="font-sm feather-pie-chart mr-3 text-grey-500"></i>
                      <span>Analytics</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="message.html"
                      className="nav-content-bttn open-font h-auto pt-2 pb-2"
                    >
                      <i className="font-sm feather-message-square mr-3 text-grey-500"></i>
                      <span>Chat</span>
                      <span className="circle-count bg-warning mt-0">23</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <div className="main-content">
            <div className="middle-sidebar-header bg-white">
              <button className="header-menu"></button>
              <form action="#" className="float-left header-search">
                <div className="form-group mb-0 icon-input">
                  <i className="feather-search font-lg text-grey-400"></i>
                  <input
                    type="text"
                    placeholder="Start typing to search.."
                    className="bg-transparent border-0 lh-32 pt-2 pb-2 pl-5 pr-3 font-xsss fw-500 rounded-xl w350"
                  />
                </div>
              </form>
              <ul className="d-flex ml-auto right-menu-icon">
                <li>
                  <a href="#">
                    <span className="dot-count bg-warning"></span>
                    <i className="feather-bell font-xl text-current"></i>
                    <div className="menu-dropdown">
                      <h4 className="fw-700 font-xs mb-4">Notification</h4>
                      <div className="card bg-transparent-card w-100 border-0 pl-5 mb-3">
                        <img
                          src="images/user-8.png"
                          alt="user"
                          className="w40 position-absolute left-0"
                        />
                        <h5 className="font-xsss text-grey-900 mb-1 mt-0 fw-700 d-block">
                          Hendrix Stamp{' '}
                          <span className="text-grey-400 font-xsssss fw-600 float-right mt-1">
                            {' '}
                            3 min
                          </span>
                        </h5>
                        <h6 className="text-grey-500 fw-500 font-xssss lh-4">
                          There are many variations of pass..
                        </h6>
                      </div>
                      <div className="card bg-transparent-card w-100 border-0 pl-5 mb-3">
                        <img
                          src="images/user-4.png"
                          alt="user"
                          className="w40 position-absolute left-0"
                        />
                        <h5 className="font-xsss text-grey-900 mb-1 mt-0 fw-700 d-block">
                          Goria Coast{' '}
                          <span className="text-grey-400 font-xsssss fw-600 float-right mt-1">
                            {' '}
                            2 min
                          </span>
                        </h5>
                        <h6 className="text-grey-500 fw-500 font-xssss lh-4">
                          Mobile Apps UI Designer is require..
                        </h6>
                      </div>

                      <div className="card bg-transparent-card w-100 border-0 pl-5 mb-3">
                        <img
                          src="images/user-7.png"
                          alt="user"
                          className="w40 position-absolute left-0"
                        />
                        <h5 className="font-xsss text-grey-900 mb-1 mt-0 fw-700 d-block">
                          Surfiya Zakir{' '}
                          <span className="text-grey-400 font-xsssss fw-600 float-right mt-1">
                            {' '}
                            1 min
                          </span>
                        </h5>
                        <h6 className="text-grey-500 fw-500 font-xssss lh-4">
                          Mobile Apps UI Designer is require..
                        </h6>
                      </div>
                      <div className="card bg-transparent-card w-100 border-0 pl-5">
                        <img
                          src="images/user-6.png"
                          alt="user"
                          className="w40 position-absolute left-0"
                        />
                        <h5 className="font-xsss text-grey-900 mb-1 mt-0 fw-700 d-block">
                          Victor Exrixon{' '}
                          <span className="text-grey-400 font-xsssss fw-600 float-right mt-1">
                            {' '}
                            30 sec
                          </span>
                        </h5>
                        <h6 className="text-grey-500 fw-500 font-xssss lh-4">
                          Mobile Apps UI Designer is require..
                        </h6>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="message.html">
                    <i className="feather-message-square font-xl text-current"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="feather-settings animation-spin d-inline-block font-xl text-current"></i>
                    <div className="menu-dropdown switchcolor-wrap">
                      <h4 className="fw-700 font-xs mb-4">Settings</h4>
                      <h6 className="font-xssss text-grey-500 fw-700 mb-3 d-block">
                        Choose Color Theme
                      </h6>
                      <ul>
                        <li className="ml-0">
                          <label className="item-radio item-content">
                            <input
                              type="radio"
                              name="color-radio"
                              value="red"
                              checked={false}
                            />
                            <i className="ti-check"></i>
                            <span
                              className="circle-color bg-red"
                              style={{ backgroundColor: '#ff3b30' }}
                            ></span>
                          </label>
                        </li>
                        <li className="ml-0">
                          <label className="item-radio item-content">
                            <input
                              type="radio"
                              name="color-radio"
                              value="green"
                            />
                            <i className="ti-check"></i>
                            <span
                              className="circle-color bg-green"
                              style={{ backgroundColor: '#4cd964' }}
                            ></span>
                          </label>
                        </li>
                        <li className="ml-0">
                          <label className="item-radio item-content">
                            <input
                              type="radio"
                              name="color-radio"
                              value="blue"
                              checked={false}
                            />
                            <i className="ti-check"></i>
                            <span
                              className="circle-color bg-blue"
                              style={{ backgroundColor: '#132977' }}
                            ></span>
                          </label>
                        </li>
                        <li className="ml-0">
                          <label className="item-radio item-content">
                            <input
                              type="radio"
                              name="color-radio"
                              value="pink"
                            />
                            <i className="ti-check"></i>
                            <span
                              className="circle-color bg-pink"
                              style={{ backgroundColor: '#ff2d55' }}
                            ></span>
                          </label>
                        </li>
                        <li className="ml-0">
                          <label className="item-radio item-content">
                            <input
                              type="radio"
                              name="color-radio"
                              value="yellow"
                            />
                            <i className="ti-check"></i>
                            <span
                              className="circle-color bg-yellow"
                              style={{ backgroundColor: '#ffcc00' }}
                            ></span>
                          </label>
                        </li>
                        <li className="ml-0">
                          <label className="item-radio item-content">
                            <input
                              type="radio"
                              name="color-radio"
                              value="orange"
                            />
                            <i className="ti-check"></i>
                            <span
                              className="circle-color bg-orange"
                              style={{ backgroundColor: '#ff9500' }}
                            ></span>
                          </label>
                        </li>
                        <li className="ml-0">
                          <label className="item-radio item-content">
                            <input
                              type="radio"
                              name="color-radio"
                              value="gray"
                            />
                            <i className="ti-check"></i>
                            <span
                              className="circle-color bg-gray"
                              style={{ backgroundColor: '#8e8e93' }}
                            ></span>
                          </label>
                        </li>

                        <li className="ml-0">
                          <label className="item-radio item-content">
                            <input
                              type="radio"
                              name="color-radio"
                              value="brown"
                            />
                            <i className="ti-check"></i>
                            <span
                              className="circle-color bg-brown"
                              style={{ backgroundColor: '#D2691E' }}
                            ></span>
                          </label>
                        </li>
                        <li className="ml-0">
                          <label className="item-radio item-content">
                            <input
                              type="radio"
                              name="color-radio"
                              value="darkgreen"
                            />
                            <i className="ti-check"></i>
                            <span
                              className="circle-color bg-darkgreen"
                              style={{ backgroundColor: '#228B22' }}
                            ></span>
                          </label>
                        </li>
                        <li className="ml-0">
                          <label className="item-radio item-content">
                            <input
                              type="radio"
                              name="color-radio"
                              value="deeppink"
                            />
                            <i className="ti-check"></i>
                            <span
                              className="circle-color bg-deeppink"
                              style={{ backgroundColor: '#FFC0CB' }}
                            ></span>
                          </label>
                        </li>
                        <li className="ml-0">
                          <label className="item-radio item-content">
                            <input
                              type="radio"
                              name="color-radio"
                              value="cadetblue"
                            />
                            <i className="ti-check"></i>
                            <span
                              className="circle-color bg-cadetblue"
                              style={{ backgroundColor: '#5f9ea0' }}
                            ></span>
                          </label>
                        </li>
                        <li className="ml-0 d-inline-block">
                          <label className="item-radio item-content">
                            <input
                              type="radio"
                              name="color-radio"
                              value="darkorchid"
                            />
                            <i className="ti-check"></i>
                            <span
                              className="circle-color bg-darkorchid"
                              style={{ backgroundColor: '#9932cc' }}
                            ></span>
                          </label>
                        </li>
                      </ul>
                      <div className="card bg-transparent-card border-0 d-block mt-3">
                        <h4 className="d-inline font-xssss mont-font fw-700">
                          Header Background
                        </h4>
                        <div className="d-inline float-right mt-1">
                          <label className="toggle toggle-menu-color">
                            <input type="checkbox" />
                            <span className="toggle-icon"></span>
                          </label>
                        </div>
                      </div>
                      <div className="card bg-transparent-card border-0 d-block mt-3">
                        <h4 className="d-inline font-xssss mont-font fw-700">
                          Sticky Header
                        </h4>
                        <div className="d-inline float-right mt-1">
                          <label className="toggle toggle-sticky">
                            <input type="checkbox" />
                            <span className="toggle-icon"></span>
                          </label>
                        </div>
                      </div>
                      <div className="card bg-transparent-card border-0 d-block mt-3">
                        <h4 className="d-inline font-xssss mont-font fw-700">
                          Full Screen
                        </h4>
                        <div className="d-inline float-right mt-1">
                          <label className="toggle toggle-screen">
                            <input type="checkbox" />
                            <span className="toggle-icon"></span>
                          </label>
                        </div>
                      </div>
                      <div className="card bg-transparent-card border-0 d-block mt-3">
                        <h4 className="d-inline font-xssss mont-font fw-700">
                          Menu Position
                        </h4>
                        <div className="d-inline float-right mt-1">
                          <label className="toggle toggle-menu">
                            <input type="checkbox" />
                            <span className="toggle-icon"></span>
                          </label>
                        </div>
                      </div>
                      <div className="card bg-transparent-card border-0 d-block mt-3">
                        <h4 className="d-inline font-xssss mont-font fw-700">
                          Dark Mode
                        </h4>
                        <div className="d-inline float-right mt-1">
                          <label className="toggle toggle-dark">
                            <input type="checkbox" />
                            <span className="toggle-icon"></span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="default-user-profile.html">
                    <img
                      src="images/female-profile.png"
                      alt="user"
                      className="w40 mt--1"
                    />
                  </a>
                </li>
                <li>
                  <a href="#" className="menu-search-icon">
                    <i className="feather-search text-grey-900 font-lg"></i>
                  </a>
                </li>
              </ul>
            </div>

            <div className="middle-sidebar-bottom">{children}</div>
          </div>
        </div> */}
      </WrapLayout>
    </ErrorBound>
  );
}
export default memo(LayoutCommon);
