import React from 'react';
import ReactDOM from 'react-dom';
import App from 'containers/App/App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import store from './redux/store';

// NEAR
import { HelloNEAR } from './near-interface';
import { Wallet } from './near-wallet';

// When creating the wallet you can optionally ask to create an access key
// Having the key enables to call non-payable methods without interrupting the user to sign
const wallet = new Wallet({
  createAccessKeyFor: process?.env?.CONTRACT_NAME as any,
});

// Abstract the logic of interacting with the contract to simplify your flow
const helloNEAR = new HelloNEAR({
  contractId: process.env.CONTRACT_NAME,
  walletToUse: wallet,
});

// Setup on page load
window.onload = async () => {
  // const isSignedIn = await wallet.startUp();
  // console.log('isSignedIn::', isSignedIn);
  // ReactDOM.render(
  //   <App isSignedIn={isSignedIn} helloNEAR={helloNEAR} wallet={wallet} />,
  //   document.getElementById('root')
  // );

  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App wallet={wallet} />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
  );
};

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
