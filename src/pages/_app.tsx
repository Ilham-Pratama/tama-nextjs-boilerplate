import React from 'react';
import '~styles/globals.css';

const MyApp = ({ Component, pageProps }): React.ReactElement => {
  return <Component {...pageProps} />;
};

export default MyApp;
