import 'styles/main.scss'
import NextNProgress from 'nextjs-progressbar';

import { Helmet } from 'react-helmet';


function MyApp({ Component, pageProps }) {

  const meta = pageProps.meta;

  let seo = {
    title: 'TCG Crypto',
  }

  if( meta ){
    meta ? seo = meta.data[Object.keys(meta.data)[0]] : null
    seo.seo ? seo = seo.seo : seo = seo.contentTypes[Object.keys(seo.contentTypes)[0]].archive
  }

  
  return(
    <>
      <Helmet>
        <title>{seo.title}</title>
        { seo.metaDesc &&
          <meta name="description" content={seo.metaDesc} />
        }
        <body className={ pageProps.bodyClass && pageProps.bodyClass } />
      </Helmet>
      <NextNProgress color="#10069F" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
