import {getLatestPort} from 'fetch/portfolio'
import {getLatestPosts} from 'fetch/posts'

import PortfolioArchive from 'components/portfolio/portfolio-archive'
import FeaturedPortfolio from 'components/portfolio/featured-portfolio'
import TitleBar from 'components/title-bar'

import FlexibleContent from 'components/flexible';
import {getFlexibleContent} from 'fetch/flexible';
import {checkIfPostsAreNeeded} from 'lib/util';


function PortfolioArhive({latestPort}){
  
    return(
        <>
            <TitleBar title="Portfolio" />
            <FeaturedPortfolio port={latestPort[0]} />
            <PortfolioArchive latestPort={latestPort} />
        </>
    )

}

export default PortfolioArhive

export async function getStaticProps(){

    let latestPort = await getLatestPort(100);
  
    return {
        props:{
          latestPort:latestPort,
          revalidate: 30,
        }
    };
  
  }