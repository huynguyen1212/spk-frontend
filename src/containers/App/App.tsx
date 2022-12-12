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
import { setWallet } from './store/actions';
import { requestInter } from 'api/axios';

function App({ wallet }: { wallet: Wallet }) {
  const { loading } = useSelector(selectAppStore);
  const dis = useDispatch();

  useEffect(() => {
    if (wallet) dis(setWallet(wallet));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wallet]);

  const login = async () => {
    const signin = await wallet.startUp();
    if (signin) {
      const walletAddress = wallet.accountId;
      console.log('walletAddress::', walletAddress);
      requestInter({
        method: 'GET',
        url: 'user/login',
        params: { walletAddress: walletAddress },
      }).then(res => {
        console.log('token::', res.data);
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
