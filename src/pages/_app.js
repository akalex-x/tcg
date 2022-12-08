import 'styles/main.scss'
import NextNProgress from 'nextjs-progressbar';

import { Helmet } from 'react-helmet';

function MyApp({ Component, pageProps }) {
  return(
    <>
      <Helmet>
        <body className={ pageProps.bodyClass && pageProps.bodyClass } />
      </Helmet>
      <NextNProgress color="#10069F" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
