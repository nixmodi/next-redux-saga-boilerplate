import React from 'react';
import store from 'src/store';
import withRedux from 'next-redux-wrapper';
import { Provider } from 'react-redux';

import AppLayout from 'src/layouts/AppLayout';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'src/assets/css/style.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </Provider>
    </>
  );
}

const makeStore = () => store;

export default withRedux(makeStore)(MyApp);
