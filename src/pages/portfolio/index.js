import {getLatestPort} from 'fetch/portfolio'
import {getLatestPosts} from 'fetch/posts'

import PortfolioArchive from 'components/portfolio/portfolio-archive'
import FeaturedPortfolio from 'components/portfolio/featured-portfolio'
import TitleBar from 'components/title-bar'

import FlexibleContent from 'components/flexible';
import {getFlexibleContent} from 'fetch/flexible';
import {checkIfPostsAreNeeded} from 'lib/util';


function PortfolioArhive({latestPort,flexibleContent,latestPosts}){
  
    return(
        <>
            <TitleBar title="Portfolio" />
            <FeaturedPortfolio port={latestPort[0]} />
            <FlexibleContent flexibleContent={flexibleContent} latestPort={latestPort} latestPosts={latestPosts} />
            <PortfolioArchive latestPort={latestPort} />
        </>
    )

}

export default PortfolioArhive

export async function getStaticProps(){

    const getFlexible = await getFlexibleContent('PortfolioAcfcptOptions','');

    const {flexible_content} = getFlexible.data[Object.keys(getFlexible.data)[0]]
  
    let latestPort = await getLatestPort(100);

    let loadPosts = checkIfPostsAreNeeded(flexible_content,'_Flexiblecontent_LatestJournal');

    let latestPosts = null
  
    if( loadPosts ){
      latestPosts = await getLatestPosts();
    }
  
    return {
        props:{
          flexibleContent:flexible_content,
          latestPosts: latestPosts,
          latestPort:latestPort,
          revalidate: 30,
        }
    };
  
  }