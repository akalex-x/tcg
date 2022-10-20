import {getLatestPort} from 'fetch/portfolio'
import {getLatestPosts} from 'fetch/posts'

import PortfolioLoop from 'components/portfolio/portfolio-loop'
import FeaturedPortfolio from 'components/portfolio/featured-portfolio'

import FlexibleContent from 'components/flexible';
import {getFlexibleContent} from 'fetch/flexible';
import {checkIfPostsAreNeeded} from 'lib/util';


function PortfolioArhive({latestPort,flexibleContent,latestPosts}){
  
    return(
        <>
            <div className="container">
                <h1>Portfolio</h1>
            </div>
            <FeaturedPortfolio port={latestPort[0]} />
            <FlexibleContent flexibleContent={flexibleContent} latestPort={latestPort} latestPosts={latestPosts} />
            <PortfolioLoop latestPort={latestPort} skip={1} limit={16} />
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