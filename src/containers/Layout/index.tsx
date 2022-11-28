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
  AreaChartOutlined,
  VideoCameraOutlined,
  HomeOutlined,
  SearchOutlined,
  BellOutlined,
  AppstoreOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import logo from 'assets/images/logo.png';
import { Link, useHistory } from 'react-router-dom';

interface Props {
  children: ReactChild | ReactChildren;
}

const { Header, Content, Sider } = Layout;

// eslint-disable-next-line
function LayoutCommon({ children }: Props) {
  useInjectReducer('Layout', reducersLayout);
  const [collapsed, setCollapsed] = useState(false);
  const history = useHistory();

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
              onClick={({ key }: { key: any }) => {
                if (key === '1') {
                  history.push('/');
                } else if (key === '2') {
                  history.push('/meetting');
                } else if (key === '3') {
                  history.push('/statistic');
                }
              }}
              items={[
                {
                  key: '1',
                  icon: <HomeOutlined />,
                  label: 'Home',
                },
                {
                  key: '2',
                  icon: <VideoCameraOutlined />,
                  label: 'Meeting',
                },
                {
                  key: '3',
                  icon: <AreaChartOutlined />,
                  label: 'Statistic',
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
              <div className="wrap_header">
                {React.createElement(
                  collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                  {
                    className: 'trigger',
                    onClick: () => setCollapsed(!collapsed),
                  },
                )}

                <div className="header_handle">
                  <form className="search">
                    <SearchOutlined style={{ fontSize: '15px' }} />
                    <input type="text" placeholder="Start typing to search.." />
                  </form>

                  <div className="handle_right">
                    <div className="handle_right_item">
                      <div className="icon">
                        <BellOutlined
                          style={{ fontSize: '18px', color: '#1890ff' }}
                        />
                      </div>
                      <div className="icon_hover">Notification</div>
                    </div>
                    <div className="handle_right_item">
                      <div className="icon">
                        <AppstoreOutlined
                          style={{ fontSize: '18px', color: '#1890ff' }}
                        />
                      </div>
                      <div className="icon_hover"></div>
                    </div>
                    <div className="handle_right_item">
                      <div className="icon">
                        <UserOutlined
                          style={{ fontSize: '18px', color: '#1890ff' }}
                        />
                      </div>
                      <div className="icon_hover"></div>
                    </div>
                  </div>
                </div>
              </div>
            </Header>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                minHeight: 280,
                background: '#fbfcfe',
              }}
            >
              {children}
            </Content>
          </Layout>
        </Layout>
      </WrapLayout>
    </ErrorBound>
  );
}
export default memo(LayoutCommon);
