import 'styles/main.scss'
import NextNProgress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }) {
  return(
    <>
      <NextNProgress color="#10069F" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
