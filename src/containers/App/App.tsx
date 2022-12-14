import React, { useEffect } from 'react';
import { GlobalStyle } from 'styles/global-styles';
import { ThemeProvider } from 'styled-components';
// css style configs
import theme from 'styles/theme';
import 'styles/fonts.css'; // import config font define
import 'sweetalert2/dist/sweetalert2.min.css';
import 'antd/dist/antd.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// diff import
import Home from 'containers/Home';
import Loading from 'components/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFoundPage from 'components/NotFoundPage';
import { selectAppStore } from './store/selecters';
import LanguageProvider from './LanguageProvider';
import LayoutCommon from 'containers/Layout';
import Meeting from 'containers/Meeting';
import { Wallet } from 'near-wallet';
import { getMe, setWallet } from './store/actions';
import { requestInter, requestToken } from 'api/axios';
import API_URL from 'api/url';
import Booking from 'containers/Booking';

function App({ wallet }: { wallet: Wallet }) {
  const { loading } = useSelector(selectAppStore);
  const dispatch = useDispatch();

  useEffect(() => {
    if (wallet) dispatch(setWallet(wallet));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wallet]);

  useEffect(() => {
    if (wallet) {
      requestToken({
        method: 'GET',
        url: API_URL.USER.ME,
      }).then((res: any) => {
        dispatch(getMe(res?.data?.data));
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wallet]);

  const login = async () => {
    const signin = await wallet.startUp();
    localStorage.setItem('isSignedIn', JSON.stringify(signin));

    if (signin) {
      const walletAddress = wallet.accountId;
      requestInter({
        method: 'GET',
        url: API_URL.USER.LOGIN,
        params: { walletAddress: walletAddress },
      }).then(res => {
        localStorage.setItem('token', JSON.stringify(res?.data));
      });
    }
  };

  // call api login
  useEffect(() => {
    login();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wallet]);

  return (
    <LanguageProvider>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route>
              <LayoutCommon>
                <Switch>
                  <Route exact path="/">
                    <Home />
                  </Route>
                  <Route exact path="/booking">
                    <Booking />
                  </Route>
                  <Route exact path="/meeting">
                    <Meeting />
                  </Route>
                </Switch>
              </LayoutCommon>
            </Route>

            <Route path="*">
              <NotFoundPage />
            </Route>
          </Switch>
        </Router>
        {/* // extra config global */}
        <Loading active={loading} />
        <GlobalStyle />
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
