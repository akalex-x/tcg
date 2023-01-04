import {getMetaData} from 'fetch/meta';

import {getPort} from 'fetch/portfolio'

import PortfolioArchive from 'components/portfolio/portfolio-archive'
import FeaturedPortfolio from 'components/portfolio/featured-portfolio'
import TitleBar from 'components/title-bar'

import CenteredContent from 'components/flexible/CenteredContent';

import {getPortArchiveACF} from 'fetch/portfolio';

import Layout from 'components/layout'

import { getGlobalSettings } from 'fetch/settings';


function PortfolioArhive({latestPort,acf,gSettings}){
  
    // console.log(acf)
    const centertedIntro = {
        content: acf.introContent,
        largeContent: true,
        largePadding: true,
    }

    return(
        <>
            <Layout showTerms={true} gSettings={gSettings}>
                <TitleBar title="Portfolio" />
                <FeaturedPortfolio data={acf.featuredPortfolo} />
                <CenteredContent data={centertedIntro} />
                <PortfolioArchive latestPort={latestPort} />
            </Layout>
        </>
    )

}

export default PortfolioArhive

export async function getStaticProps(){

    const gSettings = await getGlobalSettings();

    const getMeta = await getMetaData('portfolio');

    let latestPort = await getPort(100);

    let acf = await getPortArchiveACF();

    acf = acf.data.portfolioAcfcptOptions.portfolio_acf.arhiveOptions

    return {
        props:{
          meta: getMeta,
          gSettings: gSettings,
          latestPort:latestPort,
          acf:acf,
          revalidate: 30,
          bodyClass: 'port-archive',
        }
    };
  
  }