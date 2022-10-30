import {getLatestPort} from 'fetch/portfolio'
import {getLatestPosts} from 'fetch/posts'

import PortfolioArchive from 'components/portfolio/portfolio-archive'
import FeaturedPortfolio from 'components/portfolio/featured-portfolio'
import TitleBar from 'components/title-bar'

import LargeCenteredContent from 'components/flexible/LargeCenteredContent';

import FlexibleContent from 'components/flexible';
import {getFlexibleContent} from 'fetch/flexible';
import {checkIfPostsAreNeeded} from 'lib/util';

import {getPortArchiveACF} from 'fetch/portfolio';

import Layout from 'components/layout'


function PortfolioArhive({latestPort,acf}){
  
    // console.log(acf)

    return(
        <>
            <Layout>
                <TitleBar title="Portfolio" />
                <FeaturedPortfolio port={latestPort[0]} />
                <LargeCenteredContent content={acf.introContent} />
                <PortfolioArchive latestPort={latestPort} />
            </Layout>
        </>
    )

}

export default PortfolioArhive

export async function getStaticProps(){

    let latestPort = await getLatestPort(100);

    let acf = await getPortArchiveACF();

    acf = acf.data.portfolioAcfcptOptions.portfolio_acf.arhiveOptions

    return {
        props:{
          latestPort:latestPort,
          acf:acf,
          revalidate: 30,
        }
    };
  
  }